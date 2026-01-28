import { InvestorPageData } from './index'

const financialStatement: InvestorPageData = {
  title: 'งบการเงิน',

  /* ================= SIDEBAR ================= */
  submenu: [
    { id: 'fs-2024', label: 'ณ 31 ธันวาคม 2567' },
    { id: 'fs-2023', label: 'ณ 31 ธันวาคม 2566' },
    { id: 'fs-2022', label: 'ณ 31 ธันวาคม 2565' },
    { id: 'fs-2021', label: 'ณ 31 ธันวาคม 2564' },
    { id: 'fs-2020', label: 'ณ 31 ธันวาคม 2563' },
    { id: 'fs-2019', label: 'ณ 31 ธันวาคม 2562' },
  ],

  /* ================= CONTENT ================= */
  content: {
    'fs-2024': {
      title: 'งบการเงิน ณ 31 ธันวาคม 2567',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานของผู้สอบบัญชีรับอนุญาต',
              url: '/files/financial/2024/auditor-report.pdf',
            },
            {
              label: 'งบแสดงฐานะทางการเงิน',
              url: '/files/financial/2024/statement-of-financial-position.pdf',
            },
            {
              label: 'งบกำไรขาดทุนเบ็ดเสร็จ',
              url: '/files/financial/2024/comprehensive-income.pdf',
            },
            {
              label: 'งบกระแสเงินสด',
              url: '/files/financial/2024/cash-flow.pdf',
            },
            {
              label: 'งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น',
              url: '/files/financial/2024/changes-in-equity.pdf',
            },
            {
              label: 'หมายเหตุประกอบงบการเงินรวม',
              url: '/files/financial/2024/notes.pdf',
            },
          ],
        },
      ],
    },

    'fs-2023': {
      title: 'งบการเงิน ณ 31 ธันวาคม 2566',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานของผู้สอบบัญชีรับอนุญาต',
              url: '/files/financial/2023/auditor-report.pdf',
            },
            {
              label: 'งบแสดงฐานะทางการเงิน',
              url: '/files/financial/2023/statement-of-financial-position.pdf',
            },
            {
              label: 'งบกำไรขาดทุนเบ็ดเสร็จ',
              url: '/files/financial/2023/comprehensive-income.pdf',
            },
            {
              label: 'งบกระแสเงินสด',
              url: '/files/financial/2023/cash-flow.pdf',
            },
            {
              label: 'งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น',
              url: '/files/financial/2023/changes-in-equity.pdf',
            },
            {
              label: 'หมายเหตุประกอบงบการเงินรวม',
              url: '/files/financial/2023/notes.pdf',
            },
          ],
        },
      ],
    },

    'fs-2022': {
      title: 'งบการเงิน ณ 31 ธันวาคม 2565',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานของผู้สอบบัญชีรับอนุญาต',
              url: '/files/financial/2022/auditor-report.pdf',
            },
            {
              label: 'งบแสดงฐานะทางการเงิน',
              url: '/files/financial/2022/statement-of-financial-position.pdf',
            },
            {
              label: 'งบกำไรขาดทุนเบ็ดเสร็จ',
              url: '/files/financial/2022/comprehensive-income.pdf',
            },
            {
              label: 'งบกระแสเงินสด',
              url: '/files/financial/2022/cash-flow.pdf',
            },
            {
              label: 'งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น',
              url: '/files/financial/2022/changes-in-equity.pdf',
            },
            {
              label: 'หมายเหตุประกอบงบการเงินรวม',
              url: '/files/financial/2022/notes.pdf',
            },
          ],
        },
      ],
    },

    'fs-2021': {
      title: 'งบการเงิน ณ 31 ธันวาคม 2564',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานของผู้สอบบัญชีรับอนุญาต',
              url: '/files/financial/2021/auditor-report.pdf',
            },
            {
              label: 'งบแสดงฐานะทางการเงิน',
              url: '/files/financial/2021/statement-of-financial-position.pdf',
            },
            {
              label: 'งบกำไรขาดทุนเบ็ดเสร็จ',
              url: '/files/financial/2021/comprehensive-income.pdf',
            },
            {
              label: 'งบกระแสเงินสด',
              url: '/files/financial/2021/cash-flow.pdf',
            },
            {
              label: 'งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น',
              url: '/files/financial/2021/changes-in-equity.pdf',
            },
            {
              label: 'หมายเหตุประกอบงบการเงินรวม',
              url: '/files/financial/2021/notes.pdf',
            },
          ],
        },
      ],
    },

    'fs-2020': {
      title: 'งบการเงิน ณ 31 ธันวาคม 2563',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานของผู้สอบบัญชีรับอนุญาต',
              url: '/files/financial/2020/auditor-report.pdf',
            },
            {
              label: 'งบแสดงฐานะทางการเงิน',
              url: '/files/financial/2020/statement-of-financial-position.pdf',
            },
            {
              label: 'งบกำไรขาดทุนเบ็ดเสร็จ',
              url: '/files/financial/2020/comprehensive-income.pdf',
            },
            {
              label: 'งบกระแสเงินสด',
              url: '/files/financial/2020/cash-flow.pdf',
            },
            {
              label: 'งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น',
              url: '/files/financial/2020/changes-in-equity.pdf',
            },
            {
              label: 'หมายเหตุประกอบงบการเงินรวม',
              url: '/files/financial/2020/notes.pdf',
            },
          ],
        },
      ],
    },

    'fs-2019': {
      title: 'งบการเงิน ณ 31 ธันวาคม 2562',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานของผู้สอบบัญชีรับอนุญาต',
              url: '/files/financial/2019/auditor-report.pdf',
            },
            {
              label: 'งบแสดงฐานะทางการเงิน',
              url: '/files/financial/2019/statement-of-financial-position.pdf',
            },
            {
              label: 'งบกำไรขาดทุนเบ็ดเสร็จ',
              url: '/files/financial/2019/comprehensive-income.pdf',
            },
            {
              label: 'งบกระแสเงินสด',
              url: '/files/financial/2019/cash-flow.pdf',
            },
            {
              label: 'งบแสดงการเปลี่ยนแปลงส่วนของผู้ถือหุ้น',
              url: '/files/financial/2019/changes-in-equity.pdf',
            },
            {
              label: 'หมายเหตุประกอบงบการเงินรวม',
              url: '/files/financial/2019/notes.pdf',
            },
          ],
        },
      ],
    },
  },
}

export default financialStatement
