import { InvestorPageData } from './index'

const annualReport: InvestorPageData = {
  title: 'รายงานประจำปี',

  /* ================= SIDEBAR ================= */
  submenu: [
    {
      id: 'annual-report',
      label: 'รายงานประจำปี',
      items: [
        { id: 'ar-2567', label: 'รายงานประจำปี 2567' },
        { id: 'ar-2566', label: 'รายงานประจำปี 2566' },
        { id: 'ar-2565', label: 'รายงานประจำปี 2565' },
        { id: 'ar-2564', label: 'รายงานประจำปี 2564' },
        { id: 'ar-2563', label: 'รายงานประจำปี 2563' },
        { id: 'ar-2562', label: 'รายงานประจำปี 2562' },
      ],
    },
  ],

  /* ================= CONTENT ================= */
  content: {
    'ar-2567': {
      title: 'รายการเอกสาร',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานประจำปี 2567',
              url: '/files/annual-report/2567/annual-report-2567.pdf',
            },
          ],
        },
      ],
    },

    'ar-2566': {
      title: 'รายการเอกสาร',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานประจำปี 2566',
              url: '/files/annual-report/2566/annual-report-2566.pdf',
            },
          ],
        },
      ],
    },

    'ar-2565': {
      title: 'รายการเอกสาร',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานประจำปี 2565',
              url: '/files/annual-report/2565/annual-report-2565.pdf',
            },
          ],
        },
      ],
    },

    'ar-2564': {
      title: 'รายการเอกสาร',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานประจำปี 2564',
              url: '/files/annual-report/2564/annual-report-2564.pdf',
            },
          ],
        },
      ],
    },

    'ar-2563': {
      title: 'รายการเอกสาร',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานประจำปี 2563',
              url: '/files/annual-report/2563/annual-report-2563.pdf',
            },
          ],
        },
      ],
    },

    'ar-2562': {
      title: 'รายการเอกสาร',
      blocks: [
        {
          type: 'financial-list',
          items: [
            {
              label: 'รายงานประจำปี 2562',
              url: '/files/annual-report/2562/annual-report-2562.pdf',
            },
          ],
        },
      ],
    },
  },
}

export default annualReport
