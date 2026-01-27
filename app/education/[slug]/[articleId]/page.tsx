'use client'

import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, X, Share2 } from 'lucide-react'
import { educationData } from '@/data/education'

type ArticlePageProps = {
    params: {
        slug: string
        articleId: string
    }
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const category = educationData[params.slug]
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    if (!category || category.layoutType !== 'card-grid') {
        notFound()
    }

    const article = category.cardItems?.find(item => item.id === params.articleId)

    if (!article || !article.content) {
        notFound()
    }

    // Render text with links and bold support
    const renderTextWithLinks = (text: string) => {
        const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

        let match
        const parts: Array<{ type: 'text' | 'link', content: string, url?: string }> = []
        let lastIndex = 0

        while ((match = markdownLinkPattern.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: text.substring(lastIndex, match.index)
                })
            }

            parts.push({
                type: 'link',
                content: match[1],
                url: match[2]
            })

            lastIndex = match.index + match[0].length
        }

        if (lastIndex < text.length) {
            parts.push({
                type: 'text',
                content: text.substring(lastIndex)
            })
        }

        if (parts.length === 0) {
            parts.push({ type: 'text', content: text })
        }

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
                                }}
                                className="text-red-600 hover:text-red-700 underline inline-flex items-center gap-1 font-medium transition-colors"
                                target={linkType === 'external' ? '_blank' : undefined}
                                rel={linkType === 'external' ? 'noopener noreferrer' : undefined}
                            >
                                {part.content}
                            </a>
                        )
                    }

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

    // Render content blocks
    const renderContentBlocks = (blocks: any[]) => {
        return (
            <div className="space-y-8">
                {blocks.map((block, index) => {
                    switch (block.type) {
                        case 'text':
                            return (
                                <p key={index} className="text-lg leading-relaxed text-gray-700">
                                    {renderTextWithLinks(block.content)}
                                </p>
                            )
                        case 'list':
                            return (
                                <div key={index} className="space-y-3">
                                    {block.items.map((item: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <p className="text-gray-700 leading-relaxed flex-1">
                                                {renderTextWithLinks(item)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )
                        case 'image':
                            return (
                                <div
                                    key={index}
                                    className={`cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group ${block.width ? 'mx-auto' : ''}`}
                                    style={block.width ? { maxWidth: block.width } : undefined}
                                    onClick={() => block.link ? window.open(block.link, '_blank') : setSelectedImage(block.url)}
                                >
                                    <img
                                        src={block.url}
                                        alt={block.caption || 'Image'}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {block.caption && (
                                        <div className="p-3 bg-gray-50 text-sm text-gray-600 border-t border-gray-100">
                                            {block.caption}
                                        </div>
                                    )}
                                </div>
                            )
                        case 'images_grid':
                            return (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {block.images.map((img: any, i: number) => (
                                        <div
                                            key={i}
                                            className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                                            style={img.maxWidth ? { maxWidth: img.maxWidth } : undefined}
                                            onClick={() => setSelectedImage(img.url)}
                                        >
                                            <img
                                                src={img.url}
                                                alt={img.caption || `Image ${i + 1}`}
                                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {img.caption && (
                                                <div className="p-2 bg-gray-50 text-xs text-gray-600 border-t border-gray-100 text-center">
                                                    {img.caption}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )
                        case 'table':
                            return (
                                <div key={index} className="overflow-x-auto mb-8">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-[#A4252C] to-[#8a1f24]">
                                                        {block.headers?.map((header: string, i: number) => (
                                                            <th
                                                                key={i}
                                                                className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider"
                                                            >
                                                                {header}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-100">
                                                    {block.rows?.map((row: any, i: number) => (
                                                        <tr
                                                            key={i}
                                                            className="hover:bg-red-50/50 transition-colors duration-200 group"
                                                        >
                                                            {row.map((cell: string, j: number) => (
                                                                <td
                                                                    key={j}
                                                                    className={`px-6 py-5 align-top ${j === 0
                                                                        ? 'bg-gray-50/50 font-semibold text-gray-900 w-1/4'
                                                                        : 'text-gray-700 w-3/4'
                                                                        }`}
                                                                >
                                                                    <div className="space-y-2.5">
                                                                        {cell.split('\n').map((line: string, k: number) => (
                                                                            <div
                                                                                key={k}
                                                                                className="leading-relaxed text-base flex items-start gap-2"
                                                                            >
                                                                                {line.startsWith('•') && (
                                                                                    <span className="text-red-600 font-bold mt-0.5">•</span>
                                                                                )}
                                                                                <span className="flex-1">
                                                                                    {renderTextWithLinks(line.replace(/^•\s*/, ''))}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )
                        case 'tradingview_grid':
                            return (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {block.symbols?.map((item: { symbol: string; name: string; exchange?: string }, i: number) => {
                                        const exchange = item.exchange || 'BITKUB'
                                        const fullSymbol = `${exchange}:${item.symbol}`
                                        const tradingViewUrl = `https://www.tradingview.com/symbols/${item.symbol}/`

                                        return (
                                            <a
                                                key={i}
                                                href={tradingViewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:border-blue-300 group"
                                            >
                                                <div className="relative bg-white h-[180px]">
                                                    <iframe
                                                        src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=th_TH&symbol=${fullSymbol}&dateRange=1M&colorTheme=light&isTransparent=false&autosize=true&largeChartUrl=`}
                                                        className="w-full h-full pointer-events-none border-0"
                                                        style={{ overflow: 'hidden' }}
                                                    />
                                                    <div className="absolute inset-0 bg-transparent group-hover:bg-blue-500/5 transition-colors cursor-pointer" />
                                                </div>
                                            </a>
                                        )
                                    })}
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
                    <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-white/10 rounded-full">
                        <X className="w-6 h-6" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Date and Share - Outside Image */}
                <div className="flex justify-between items-center mb-4">
                    {/* Date - Left */}
                    <span className="text-gray-600 text-sm">
                        {article.date}
                    </span>

                    {/* Share - Right */}
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: article.title,
                                    url: window.location.href
                                })
                            } else {
                                navigator.clipboard.writeText(window.location.href)
                                alert('คัดลอกลิงก์แล้ว!')
                            }
                        }}
                        className="text-gray-600 hover:text-red-600 text-sm transition-colors flex items-center gap-2"
                    >
                        <Share2 className="w-4 h-4" />
                        Share this article
                    </button>
                </div>

                {/* Featured Image - Hide for Crypto category */}
                {article.image && params.slug !== 'crypto' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                )}

                {/* Article Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                    {renderContentBlocks(article.content.blocks)}
                </div>

                {/* Back Button (Bottom) */}
                <div className="mt-8 text-center">
                    <Link
                        href={`/education/${params.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        กลับไปหน้า{category.title}
                    </Link>
                </div>
            </div>
        </section>
    )
}
