import { InvestorPageData } from './index'

const newDisclosure: InvestorPageData = {
  title: 'ข่าวสารแจ้งตลาดหลักทรัพย์',

  /* ================= SIDEBAR ================= */
  submenu: [
    { id: 'nd-2028', label: 'ปี 2568' },
    { id: 'nd-2027', label: 'ปี 2567' },
    { id: 'nd-2026', label: 'ปี 2566' },
    { id: 'nd-2025', label: 'ปี 2565' },
    { id: 'nd-2024', label: 'ปี 2564' },
    { id: 'nd-2023', label: 'ปี 2563' },
    { id: 'nd-2022', label: 'ปี 2562' },
    { id: 'nd-2021', label: 'ปี 2561' },
    { id: 'nd-2020', label: 'ปี 2560' },
  ],

  /* ================= CONTENT ================= */
  content: {
    'nd-2028': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2568',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งมติคณะกรรมการบริษัท ครั้งที่ 1/2568',
              url: '/files/disclosure/2568/board-meeting-1.pdf',
            },
            {
              label: 'แจ้งการจ่ายเงินปันผลประจำปี',
              url: '/files/disclosure/2568/dividend.pdf',
            },
          ],
        },
      ],
    },

    'nd-2027': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2567',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งผลการดำเนินงานประจำปี 2567',
              url: '/files/disclosure/2567/annual-result.pdf',
            },
            {
              label: 'แจ้งมติที่ประชุมสามัญผู้ถือหุ้น',
              url: '/files/disclosure/2567/shareholder-meeting.pdf',
            },
          ],
        },
      ],
    },

    'nd-2026': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2566',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งสารสนเทศเกี่ยวกับรายการที่เกี่ยวโยงกัน',
              url: '/files/disclosure/2566/connected-transaction.pdf',
            },
          ],
        },
      ],
    },

    'nd-2025': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2565',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งการแต่งตั้งกรรมการใหม่',
              url: '/files/disclosure/2565/new-director.pdf',
            },
          ],
        },
      ],
    },

    'nd-2024': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2564',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งการเปลี่ยนแปลงโครงสร้างผู้ถือหุ้น',
              url: '/files/disclosure/2564/shareholding-change.pdf',
            },
          ],
        },
      ],
    },

    'nd-2023': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2563',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งผลการประชุมคณะกรรมการ',
              url: '/files/disclosure/2563/board-meeting.pdf',
            },
          ],
        },
      ],
    },

    'nd-2022': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2562',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งการลงทุนในบริษัทย่อย',
              url: '/files/disclosure/2562/subsidiary-investment.pdf',
            },
          ],
        },
      ],
    },

    'nd-2021': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2561',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งการเพิ่มทุน',
              url: '/files/disclosure/2561/capital-increase.pdf',
            },
          ],
        },
      ],
    },

    'nd-2020': {
      title: 'ข่าวสารแจ้งตลาดหลักทรัพย์ ปี 2560',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'แจ้งการเปลี่ยนแปลงกรรมการ',
              url: '/files/disclosure/2560/director-change.pdf',
            },
          ],
        },
      ],
    },
  },
}

export default newDisclosure
