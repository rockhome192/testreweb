// =====================================================
// Types for Education Data
// =====================================================

// Content Block Types (for card grid layout)
export type EducationCardItem = {
    id: string              // Used as slug/articleId
    title: string
    description: string     // Short summary for card
    image?: string          // Featured image URL
    category: string
    date: string
    file?: string           // Keep for backward compatibility (PDF download)
    content?: EducationSidebarContent  // Full article content
}

// Sidebar Content Types
export type EducationSidebarContent = {
    title?: string  // Optional - can be omitted
    blocks: ContentBlock[]
}

export type ContentBlock =
    | { type: 'text'; content: string }
    | { type: 'list'; items: string[] }
    | { type: 'image'; url: string; caption?: string; width?: string }
    | { type: 'images_grid'; images: { url: string; caption?: string; maxWidth?: string }[] }
    | { type: 'table'; headers: string[]; rows: string[][] }
    | { type: 'tradingview_grid'; symbols: { symbol: string; name: string; exchange?: string }[] }

export type SidebarMenuItem = {
    id: string
    label: string
    items?: SidebarMenuItem[]
}

// Main Education Category Type
export type EducationCategory = {
    id: string
    title: string
    layoutType: 'sidebar' | 'card-grid'
    // For sidebar layout
    submenu?: SidebarMenuItem[]
    sidebarContent?: Record<string, EducationSidebarContent>
    // For card grid layout
    cardItems?: EducationCardItem[]
}

export type EducationData = Record<string, EducationCategory>
