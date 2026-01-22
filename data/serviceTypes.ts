import { LucideIcon } from 'lucide-react';

// =====================================================
// Types
// =====================================================
// เพิ่ม Type สำหรับรูปภาพ
// เพิ่ม Type สำหรับจัด Layout แบบยืดยุ่น (Content Blocks)
export type ContentBlock =
    | { type: 'text'; content: string }
    | { type: 'list'; items: string[] }
    | { type: 'image'; url: string; caption?: string; link?: string }
    | { type: 'images_grid'; images: { url: string; caption?: string; link?: string }[] };

export type ServiceContent = {
    title: string;
    description: string;
    services: string[];
    images?: Array<{
        url: string;
        caption?: string;
    }>;
    blocks?: ContentBlock[]; // ← New: รองรับการจัดเรียง Layout แบบอิสระ
}

export type SubMenuItem = {
    id: string;
    label: string;
    items?: SubMenuItem[]; // Support for nested menu items
}

export type ServiceCategory = {
    id: string; // Added ID field for convenience 
    title: string; // This matches the key in the original object
    label: string; // Display label for tabs
    icon: LucideIcon;
    color: string;
    submenu: SubMenuItem[];
    content: Record<string, ServiceContent>;
}

export type ServicesData = Record<string, ServiceCategory>;
