import { FileText } from 'lucide-react'
import { ServiceCategory, ServiceContent } from './serviceTypes'

// =====================================================
// Helper Functions - เขียนข้อมูลแบบง่ายๆ
// =====================================================

/**
 * สร้าง Content แบบข้อความธรรมดา
 */
const textContent = (title: string, text?: string): ServiceContent => ({
    title,
    description: text || `รายละเอียดสำหรับ ${title}`,
    services: [],
    blocks: [
        { type: 'text', content: text || `รายละเอียดสำหรับ ${title}` }
    ]
})

/**
 * สร้าง Content แบบรูปภาพเดียว
 */
const imageContent = (title: string, imageUrl: string, caption?: string): ServiceContent => ({
    title,
    description: '',
    services: [],
    blocks: [
        {
            type: 'images_grid',
            images: [{ url: imageUrl, caption }]
        }
    ]
})

/**
 * สร้าง Content แบบหลายรูป
 */
const imagesContent = (title: string, images: Array<{ url: string; caption?: string }>): ServiceContent => ({
    title,
    description: '',
    services: [],
    blocks: [
        {
            type: 'images_grid',
            images
        }
    ]
})

/**
 * สร้าง Content แบบมี Text + รูป
 */
const mixedContent = (title: string, description: string, imageUrl: string): ServiceContent => ({
    title,
    description,
    services: [],
    blocks: [
        { type: 'text', content: description },
        {
            type: 'images_grid',
            images: [{ url: imageUrl }]
        }
    ]
})

// =====================================================
// ข้อมูล Bonds - เขียนแบบง่ายๆ
// =====================================================

const bondData = [
    // ปี 2569
    { id: 'bond-2569-tpipp-1', title: 'หุ้นกู้ TPIPP ครั้งที่ 1', image: '/images/bond/tpipp-1.jpg' },
    { id: 'bond-2569-sena-1-1', title: 'หุ้นกู้ SENA ครั้งที่ 1 ชุดที่ 1' },
    { id: 'bond-2569-sena-1-2', title: 'หุ้นกู้ SENA ครั้งที่ 1/2569 ชุดที่ 2' },

    // ปี 2568
    { id: 'bond-2568-sena-2', title: 'หุ้นกู้ SENA ครั้งที่ 2/2568' },
    { id: 'bond-2568-kcc-2', title: 'หุ้นกู้ KCC ครั้งที่ 2/2568', image: '/images/bond/kcc-2.jpg' },
    { id: 'bond-2568-bwg-1', title: 'หุ้นกู้ BWG ครั้งที่ 1/2568' },
    // ... อื่นๆ
]

// =====================================================
// Auto-generate Content จาก bondData
// =====================================================
const bondContent = Object.fromEntries(
    bondData.map(bond => [
        bond.id,
        bond.image
            ? imageContent(bond.title, bond.image)
            : textContent(bond.title)
    ])
)

// =====================================================
// Export Bond Service Category
// =====================================================
export const bondProduct: ServiceCategory = {
    id: 'bond-product',
    title: 'ผู้แทนผู้ถือหุ้นกู้',
    label: 'ผู้แทนผู้ถือหุ้นกู้',
    icon: FileText,
    color: 'blue',
    submenu: [
        {
            id: 'bond-2569',
            label: 'หุ้นกู้ปี 2569',
            items: [
                { id: 'bond-2569-tpipp-1', label: 'หุ้นกู้ TPIPP ครั้งที่ 1' },
                { id: 'bond-2569-sena-1-1', label: 'หุ้นกู้ SENA ครั้งที่ 1 ชุดที่ 1' },
                { id: 'bond-2569-sena-1-2', label: 'หุ้นกู้ SENA ครั้งที่ 1/2569 ชุดที่ 2' }
            ]
        },
        {
            id: 'bond-2568',
            label: 'หุ้นกู้ปี 2568',
            items: [
                { id: 'bond-2568-sena-2', label: 'หุ้นกู้ SENA ครั้งที่ 2/2568' },
                { id: 'bond-2568-kcc-2', label: 'หุ้นกู้ KCC ครั้งที่ 2/2568' },
                { id: 'bond-2568-bwg-1', label: 'หุ้นกู้ BWG ครั้งที่ 1/2568' }
                // ... อื่นๆ
            ]
        }
        // ... ปีอื่นๆ
    ],
    content: bondContent
}