'use client'

import React, { useState } from 'react'
import { notFound, useRouter, useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, Download, X } from 'lucide-react'
import { servicesData } from '@/data/services/servicesData'
import VietnamStockChart from '@/components/services/VietnamStockChart'

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = servicesData[params.slug]
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    if (!service) {
        notFound()
    }

    const getFirstId = (items: typeof service.submenu): string => {
        if (!items || items.length === 0) return ''
        if (items[0].items && items[0].items.length > 0) {
            return items[0].items[0].id
        }
        return items[0].id
    }

    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const activeSubmenu = searchParams.get('tab') || getFirstId(service.submenu)

    const handleSubmenuClick = (id: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))
        current.set('tab', id)
        const search = current.toString()
        const query = search ? `?${search}` : ''
        router.push(`${pathname}${query}`, { scroll: false })
    }

    const currentContent = service.content[activeSubmenu]

    if (!currentContent) {
        return <div>Content not found</div>
    }

    // =====================================================
    // Check if current content has images
    // =====================================================
    const contentImages = currentContent.images || []

    // =====================================================
    // Smart Link Parser - ตรวจจับ URL อัตโนมัติ
    // =====================================================
    const renderTextWithLinks = (text: string) => {
        // Pattern: [text](url) - Markdown style
        const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

        let match
        const parts: Array<{ type: 'text' | 'link', content: string, url?: string }> = []
        let lastIndex = 0

        // Find all [text](url) patterns
        while ((match = markdownLinkPattern.exec(text)) !== null) {
            // Add text before link
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: text.substring(lastIndex, match.index)
                })
            }

            // Add link
            parts.push({
                type: 'link',
                content: match[1],  // Link text
                url: match[2]        // URL
            })

            lastIndex = match.index + match[0].length
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push({
                type: 'text',
                content: text.substring(lastIndex)
            })
        }

        // If no links found, return plain text
        if (parts.length === 0) {
            parts.push({ type: 'text', content: text })
        }

        // Determine link type based on URL
        const getLinkType = (url: string): 'download' | 'external' | 'internal' => {
            if (url.endsWith('.pdf') || url.endsWith('.doc') || url.endsWith('.docx') ||
                url.endsWith('.xls') || url.endsWith('.xlsx') || url.endsWith('.zip')) {
                return 'download'
            }
            if (url.startsWith('http://') || url.startsWith('https://')) {
                return 'external'
            }
            return 'internal'
        }

        // Render parts
        return (
            <span>
                {parts.map((part, index) => {
                    if (part.type === 'link' && part.url) {
                        const linkType = getLinkType(part.url)

                        return (
                            <a
                                key={index}
                                href={part.url}
                                onClick={(e) => {
                                    if (linkType === 'download') {
                                        e.preventDefault()
                                        const link = document.createElement('a')
                                        link.href = part.url!
                                        link.download = part.url!.split('/').pop() || 'download'
                                        document.body.appendChild(link)
                                        link.click()
                                        document.body.removeChild(link)
                                    } else if (linkType === 'external') {
                                        e.preventDefault()
                                        window.open(part.url, '_blank', 'noopener,noreferrer')
                                    }
                                    // internal links work normally
                                }}
                                className="text-gray-700 hover:text-red-600 underline inline-flex items-center gap-1 font-medium transition-colors"
                                target={linkType === 'external' ? '_blank' : undefined}
                                rel={linkType === 'external' ? 'noopener noreferrer' : undefined}
                            >
                                {part.content}

                            </a>
                        )
                    }

                    // Render text with bold support
                    return (
                        <React.Fragment key={index}>
                            {part.content.split(/(\*\*.*?\*\*)/).map((p, i) =>
                                p.startsWith('**') && p.endsWith('**') ? (
                                    <strong key={i} className="font-bold text-gray-900">
                                        {p.slice(2, -2)}
                                    </strong>
                                ) : (
                                    p
                                )
                            )}
                        </React.Fragment>
                    )
                })}
            </span>
        )
    }

    // =====================================================
    // Content Block Renderer
    // =====================================================
    const renderContentBlocks = (blocks: any[]) => {
        const isRightOffering = params.slug === 'sec-deriv-trading'

        return (
            <div className="space-y-8">
                {blocks.map((block, index) => {
                    switch (block.type) {
                        case 'text':
                            return (
                                <p key={index} className={`text-lg leading-relaxed ${isRightOffering ? 'text-center text-red-600 font-medium' : 'text-gray-700'}`}>
                                    {renderTextWithLinks(block.content)}
                                </p>
                            )
                        case 'list':
                            return (
                                <div key={index} className="space-y-4">
                                    {block.items.map((item: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <p className="text-gray-700 leading-relaxed">
                                                {renderTextWithLinks(item)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )
                        case 'image':
                            // Single large image
                            return (
                                <div
                                    key={index}
                                    className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                                    onClick={() => block.link ? window.open(block.link, '_blank') : setSelectedImage(block.url)}
                                >
                                    <img
                                        src={block.url}
                                        alt={block.caption || 'Image'}
                                        className="w-full h-auto object-cover"
                                    />
                                    {block.caption && (
                                        <div className="p-3 bg-gray-50 text-sm text-gray-600 border-t border-gray-100">
                                            {block.caption}
                                        </div>
                                    )}
                                </div>
                            )
                        case 'images_grid':
                            // Grid of images
                            return (
                                <div key={index} className={`grid gap-4 ${block.images.length === 1 ? 'grid-cols-1' :
                                    block.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                    }`}>
                                    {block.images.map((img: any, idx: number) => (
                                        <div
                                            key={idx}
                                            className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                                            style={img.maxWidth ? { maxWidth: img.maxWidth, margin: '0 auto' } : undefined}
                                            onClick={() => img.link ? window.open(img.link, '_blank') : setSelectedImage(img.url)}
                                        >
                                            <img
                                                src={img.url}
                                                alt={img.caption || `Image ${idx + 1}`}
                                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {img.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                    <p className="text-white text-sm font-medium">
                                                        {img.caption}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )
                        default:
                            return null
                    }
                })}
            </div>
        )
    }

    return (
        <section className="py-8">
            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-white/10 rounded-full"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}

            <div className="max-w-[1430px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[300px_1fr] lg:gap-8 gap-6">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-36">
                            <div className="p-4 border-b border-gray-100">
                                <h3 className="font-bold text-gray-900 text-lg">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="p-2 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
                                <div className="space-y-1">
                                    {service.submenu.map((item) => (
                                        <React.Fragment key={item.id}>
                                            {item.items ? (
                                                <div className="mb-4 last:mb-0">
                                                    <h4 className="px-4 py-2 text-sm font-bold text-gray-900 mb-1">
                                                        {item.label}
                                                    </h4>
                                                    <div className="space-y-1">
                                                        {item.items.map((subItem) => (
                                                            <button
                                                                key={subItem.id}
                                                                onClick={() => handleSubmenuClick(subItem.id)}
                                                                className={`
                                                                    w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm pl-6
                                                                    ${activeSubmenu === subItem.id
                                                                        ? 'bg-red-50 text-red-700 font-medium'
                                                                        : 'text-gray-600 hover:bg-gray-50'
                                                                    }
                                                                `}
                                                            >
                                                                • {subItem.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => handleSubmenuClick(item.id)}
                                                    className={`
                                                        w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm
                                                        ${activeSubmenu === item.id
                                                            ? 'bg-red-50 text-red-700 font-medium'
                                                            : 'text-gray-600 hover:bg-gray-50'
                                                        }
                                                    `}
                                                >
                                                    • {item.label}
                                                </button>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Button - Vietnam Fund Only */}
                            {params.slug === 'vietnam-fund' && (
                                <div className="p-4 border-t border-gray-100">
                                    <Link
                                        href="/services/vietnam-fund?tab=opening-eopen"
                                        className="block bg-[#A4252C] rounded-lg px-4 py-3 text-center hover:bg-[#8a1f24] transition-colors"
                                    >
                                        <div className="text-white font-bold text-base mb-2">
                                            ลงทุนกองทุนนี้
                                        </div>
                                        <div className="text-white text-sm">
                                            โทร <span className="underline">02-088-9350</span>
                                            {' , '}
                                            <span className="underline">02-088-9358</span>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="min-w-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">

                            <div className="flex justify-center mb-8">
                                <h2 className="text-xl md:text-3xl font-bold text-gray-900 px-6 py-4 md:px-12 md:py-5 rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm bg-white inline-block text-center leading-tight max-w-4xl">
                                    {currentContent.title}
                                </h2>
                            </div>

                            {params.slug === 'vietnam-fund' && activeSubmenu === 'info-basic' && (
                                <VietnamStockChart />
                            )}

                            {currentContent.blocks ? (
                                // New Layout System (Flexible)
                                renderContentBlocks(currentContent.blocks)
                            ) : (
                                // Backward Compatibility (Legacy Layout)
                                <>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                        {currentContent.description}
                                    </p>

                                    <div className="space-y-4">
                                        {currentContent.services.map((s, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {renderTextWithLinks(s)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Images Section - แสดงรูปถ้ามี */}
                                    {contentImages.length > 0 && (
                                        <div className="mt-8 mb-8">
                                            <div className={`grid gap-4 ${contentImages.length === 1 ? 'grid-cols-1' :
                                                contentImages.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                                                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                                }`}>
                                                {contentImages.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                                                        onClick={() => setSelectedImage(img.url)}
                                                    >
                                                        <img
                                                            src={img.url}
                                                            alt={img.caption || `Image ${idx + 1}`}
                                                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                            onError={(e) => {
                                                                e.currentTarget.src = '/placeholder-image.png'
                                                            }}
                                                        />
                                                        {img.caption && (
                                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                                                <p className="text-white text-sm font-medium">
                                                                    {img.caption}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}