"use client";

import React, { useState } from "react";
import { notFound, useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import { educationData } from "@/data/education";

type PageProps = {
    params: {
        slug: string;
    };
};

export default function EducationSlugPage({ params }: PageProps) {
    const { slug } = params;
    const category = educationData[slug];
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (!category) {
        notFound();
    }

    // Determine which layout to use
    if (category.layoutType === 'sidebar') {
        return <SidebarLayout category={category} params={params} />;
    } else {
        return <CardGridLayout category={category} />;
    }
}

// =====================================================
// SIDEBAR LAYOUT COMPONENT
// =====================================================
function SidebarLayout({ category, params }: any) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const getFirstId = (items: any[]): string => {
        if (!items || items.length === 0) return '';
        if (items[0].items && items[0].items.length > 0) {
            return items[0].items[0].id;
        }
        return items[0].id;
    };

    const activeSubmenu = searchParams.get('tab') || getFirstId(category.submenu || []);

    const handleSubmenuClick = (id: string) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set('tab', id);
        const search = current.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
    };

    const currentContent = category.sidebarContent?.[activeSubmenu];

    if (!currentContent) {
        return <div>Content not found</div>;
    }

    // Render text with links and bold support
    const renderTextWithLinks = (text: string) => {
        // Pattern: [text](url) - Markdown style
        const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

        let match;
        const parts: Array<{ type: 'text' | 'link', content: string, url?: string }> = [];
        let lastIndex = 0;

        // Find all [text](url) patterns
        while ((match = markdownLinkPattern.exec(text)) !== null) {
            // Add text before link
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: text.substring(lastIndex, match.index)
                });
            }

            // Add link
            parts.push({
                type: 'link',
                content: match[1],  // Link text
                url: match[2]        // URL
            });

            lastIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push({
                type: 'text',
                content: text.substring(lastIndex)
            });
        }

        // If no links found, return plain text
        if (parts.length === 0) {
            parts.push({ type: 'text', content: text });
        }

        // Determine link type based on URL
        const getLinkType = (url: string): 'download' | 'external' | 'internal' => {
            if (url.endsWith('.pdf') || url.endsWith('.doc') || url.endsWith('.docx') ||
                url.endsWith('.xls') || url.endsWith('.xlsx') || url.endsWith('.zip')) {
                return 'download';
            }
            if (url.startsWith('http://') || url.startsWith('https://')) {
                return 'external';
            }
            return 'internal';
        };

        // Render parts
        return (
            <span>
                {parts.map((part, index) => {
                    if (part.type === 'link' && part.url) {
                        const linkType = getLinkType(part.url);

                        return (
                            <a
                                key={index}
                                href={part.url}
                                onClick={(e) => {
                                    if (linkType === 'download') {
                                        e.preventDefault();
                                        const link = document.createElement('a');
                                        link.href = part.url!;
                                        link.download = part.url!.split('/').pop() || 'download';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    } else if (linkType === 'external') {
                                        e.preventDefault();
                                        window.open(part.url, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                className="text-gray-700 hover:text-red-600 underline inline-flex items-center gap-1 font-medium transition-colors"
                                target={linkType === 'external' ? '_blank' : undefined}
                                rel={linkType === 'external' ? 'noopener noreferrer' : undefined}
                            >
                                {part.content}
                            </a>
                        );
                    }

                    // Render text with bold, red, and green/larger support
                    return (
                        <React.Fragment key={index}>
                            {part.content.split(/(\*\*.*?\*\*|!!.*?!!|@@.*?@@)/).map((p, i) => {
                                if (p.startsWith('**') && p.endsWith('**')) {
                                    return (
                                        <strong key={i} className="font-bold text-gray-900">
                                            {p.slice(2, -2)}
                                        </strong>
                                    )
                                }
                                if (p.startsWith('!!') && p.endsWith('!!')) {
                                    return (
                                        <span key={i} className="text-red-600 font-bold">
                                            {p.slice(2, -2)}
                                        </span>
                                    )
                                }
                                if (p.startsWith('@@') && p.endsWith('@@')) {
                                    return (
                                        <span key={i} className="text-blue-600 font-bold text-xl inline-block mt-4 mb-2">
                                            {p.slice(2, -2)}
                                        </span>
                                    )
                                }
                                return p
                            })}
                        </React.Fragment>
                    );
                })}
            </span>
        );
    };

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
                            );
                        case 'list':
                            return (
                                <div key={index} className="space-y-4">
                                    {block.items.map((item: string, i: number) => (
                                        item === '---' ? (
                                            <hr key={i} className="border-gray-100 my-6" />
                                        ) : (
                                            <div key={i} className="flex items-start gap-3">
                                                <p className="text-gray-700 leading-relaxed flex-1">
                                                    {renderTextWithLinks(item)}
                                                </p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            );
                        case 'image':
                            return (
                                <div
                                    key={index}
                                    className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
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
                            );
                        case 'images_grid':
                            return (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {block.images?.map((image: any, i: number) => (
                                        <div
                                            key={i}
                                            className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                                            onClick={() => image.link ? window.open(image.link, '_blank') : setSelectedImage(image.url)}
                                        >
                                            <img
                                                src={image.url}
                                                alt={image.caption || `Image ${i + 1}`}
                                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {image.caption && (
                                                <div className="p-3 bg-gray-50 text-sm text-gray-600 border-t border-gray-100">
                                                    {image.caption}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        case 'table':
                            return (
                                <div key={index} className="overflow-x-auto mb-8">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-[#A4252C] to-[#8a1f24] divide-x divide-white/50 ">
                                                        {block.headers?.map((header: string, i: number) => (
                                                            <th
                                                                key={i}
                                                                className="px-6 py-4 text-center text-base font-bold text-white uppercase tracking-wider divide-x divide-white/50"
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
                            );
                        case 'divider':
                            return <hr key={index} className="border-gray-200 my-8" />
                        default:
                            return null;
                    }
                })}
            </div>
        );
    };

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
                                    {category.title}
                                </h3>
                            </div>

                            <div className="p-2 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
                                <div className="space-y-1">
                                    {category.submenu?.map((item: any) => (
                                        <React.Fragment key={item.id}>
                                            {item.items ? (
                                                <div className="mb-4 last:mb-0">
                                                    <h4 className="px-4 py-2 text-sm font-bold text-gray-900 mb-1">
                                                        {item.label}
                                                    </h4>
                                                    <div className="space-y-1">
                                                        {item.items.map((subItem: any) => (
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

                            {currentContent.blocks && renderContentBlocks(currentContent.blocks)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
        </section>
    );
}

// =====================================================
// CARD GRID LAYOUT COMPONENT
// =====================================================
function CardGridLayout({ category }: any) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    const filteredItems = category.cardItems?.filter((item: any) =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
    ) || [];

    // Pagination calculations
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = filteredItems.slice(startIndex, endIndex);

    // Reset to page 1 when search changes
    const handleSearch = (value: string) => {
        setSearchKeyword(value);
        setCurrentPage(1);
    };

    return (
        <section className="py-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-[56px] font-semibold tracking-[0.02em] text-center my-8">
                    {category.title}
                </h2>

                {/* Search Bar */}
                <div className="mb-8 max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="ค้นหาบทความ..."
                        value={searchKeyword}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full h-14 rounded-xl border border-gray-300 px-6 text-lg
                       focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((item: any, idx: number) => (
                        <Link
                            key={`${item.id}-${idx}`}
                            href={item.content ? `/education/${category.id}/${item.id}` : item.file || '#'}
                            target={!item.content && item.file ? '_blank' : undefined}
                            rel={!item.content && item.file ? 'noopener noreferrer' : undefined}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group block"
                        >
                            {/* Card Image - Full Size */}
                            {item.image ? (
                                <div className="aspect-[16/9] bg-gray-50 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-[16/9] bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                                    <div className="text-red-300 text-6xl">📄</div>
                                </div>
                            )}

                            {/* Card Content - Only Title and Date */}
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                                    {item.title}
                                </h3>

                                <span className="text-sm text-gray-500">{item.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                        {/* Previous Button */}
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            ก่อนหน้า
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                    ? 'bg-[#E14045] text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            ถัดไป
                        </button>
                    </div>
                )}

                {/* Page Info */}
                {totalPages > 1 && (
                    <p className="text-center text-gray-500 mt-4">
                        หน้า {currentPage} จาก {totalPages} ({filteredItems.length} รายการ)
                    </p>
                )}

                {/* No Results */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">ไม่พบบทความที่ค้นหา</p>
                    </div>
                )}
            </div>
        </section>
    );
}
