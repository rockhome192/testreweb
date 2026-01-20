export interface NewsItem {
    id: number
    title: string
    date: string
    imageUrl: string
    link: string
    description: string
}

export const MOCK_NEWS: NewsItem[] = [
    {
        id: 1,
        title: 'เสนอวาระการประชุม',
        date: '15 January 2026',
        imageUrl: '', // Placeholder business image
        link: 'https://www.trinitythai.com/Upload/Research/GOLD-U_1768793250_13869.pdf',
        description: 'การเปิดโอกาสให้ผู้ถือหุ้น เสนอวาระการประชุม รวมทั้งการเสนอชื่อบุคคล เพื่อเข้ารับการเลือกตั้งเป็นกรรมการบริษัท'
    },
    {
        id: 2,
        title: 'หุ้นกู้เสี่ยงสูงของบริษัท',
        date: '15 January 2026',
        imageUrl: '', // Stock market graph
        link: 'https://www.trinitythai.com/Upload/Research/GOLD-U_1768793250_13869.pdf',
        description: 'หุ้นกู้เสี่ยงสูงของบริษัท เสนาดีเวลลอปเม้นท์ จำกัด (มหาชน) ครั้งที่ 1/2569 ชุดที่ 1'
    },
    {
        id: 3,
        title: 'แจ้งการเปลี่ยนแปลงสำคัญ',
        date: '1 January 2026',
        imageUrl: '', // Trinity stock or generic finance
        link: 'https://www.trinitythai.com/Upload/Research/GOLD-U_1768793250_13869.pdf',
        description: 'แจ้งการเปลี่ยนแปลงสำคัญ เกี่ยวกับบัญชีผู้ใช้และการใช้งานระบบ Streaming-Equity'
    }
]
