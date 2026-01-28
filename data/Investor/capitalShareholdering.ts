import { InvestorPageData } from './index'

const capitalShareholdering: InvestorPageData = {
  title: 'โครงสร้างเงินทุนและผู้ถือหุ้น',

  /* ================= SIDEBAR ================= */
  submenu: [
    {
      id: 'capital',
      label: 'โครงสร้างเงินทุนและผู้ถือหุ้น',
      items: [
        { id: 'capital-structure', label: 'โครงสร้างเงินทุน' },
        { id: 'major-shareholders', label: 'รายชื่อผู้ถือหุ้นรายใหญ่' },
        { id: 'shareholder-info', label: 'ข้อมูลผู้ถือหุ้นของบริษัท' },
      ],
    },
    {
      id: 'shareholder-meeting',
      label: 'ประชุมผู้ถือหุ้น',
      items: [
        { id: 'agm-report', label: 'รายงานการประชุมผู้ถือหุ้นย้อนหลัง' },
        { id: 'agm-invitation', label: 'หนังสือออกกล่าวเรียกประชุมผู้ถือหุ้น' },
        { id: 'agm-award', label: 'รางวัลดีเด่น ด้านการประชุมผู้ถือหุ้น' },
        {
          id: 'agm-agenda',
          label: 'การเสนอวาระการประชุมและเสนอชื่อบุคคลเป็นกรรมการบริษัท',
        },
        { id: 'agm-summary', label: 'ประมวลรูปภาพการประชุมผู้ถือหุ้น' },
      ],
    },
    {
      id: 'tnity-w2',
      label: 'TNITY-W2',
      items: [{ id: 'tnity-w2-right', label: 'กำหนดการใช้สิทธิ TNITY-W2' }],
    },
  ],

  /* ================= CONTENT ================= */
  content: {
    /* ===== โครงสร้างเงินทุน ===== */
    'capital-structure': {
      title: 'โครงสร้างเงินทุน',
      blocks: [
{
          type: 'text',
          content:
            'โครงสร้างองค์กร กลุ่มบริษัทหลักทรัพย์ ทรีนีตี้ รวมการถือหุ้นทั้งทางตรงและทางอ้อม (ตั้งแต่ 10% ขึ้นไป)',
        },
        
        {
          type: 'image',
          url: '/images/Investor/capitalShareholdering.jpg',
          caption:
            'โครงสร้างองค์กร กลุ่มบริษัทหลักทรัพย์ ทรีนีตี้ รวมการถือหุ้นทั้งทางตรงและทางอ้อม (ตั้งแต่ 10% ขึ้นไป)',
        },
        {
          type: 'text',
          content:
            'เนื่องจากบริษัท ทรีนีตี้ วัฒนา จำกัด (มหาชน) เป็นบริษัทที่จดทะเบียนในตลาดหลักทรัพย์และดำเนินธุรกิจในลักษณะ Holding Company การลงทุนหลักของบริษัทอยู่ในบริษัทในกลุ่ม โดยมีบริษัทหลักทรัพย์ ทรีนีตี้ จำกัด เป็นบริษัทแกน',
        },
      ],
    },

    /* ===== ผู้ถือหุ้นรายใหญ่ ===== */
    'major-shareholders': {
      title: 'รายชื่อผู้ถือหุ้นรายใหญ่',
      blocks: [
        {
          type: 'text',
          content: 'ข้อมูลรายชื่อผู้ถือหุ้นรายใหญ่ของบริษัท (อยู่ระหว่างจัดเตรียม)',
        },
      ],
    },

    /* ===== ข้อมูลผู้ถือหุ้น ===== */
    'shareholder-info': {
      title: 'ข้อมูลผู้ถือหุ้นของบริษัท',
      blocks: [
        {
          type: 'text',
          content: 'ข้อมูลสัดส่วนการถือหุ้นและรายละเอียดผู้ถือหุ้น (อยู่ระหว่างจัดเตรียม)',
        },
      ],
    },

    /* ===== ประชุมผู้ถือหุ้น ===== */
    'agm-report': { title: 'รายงานการประชุมผู้ถือหุ้นย้อนหลัง', blocks: [] },
    'agm-invitation': { title: 'หนังสือออกกล่าวเรียกประชุมผู้ถือหุ้น', blocks: [] },
    'agm-award': { title: 'รางวัลดีเด่น ด้านการประชุมผู้ถือหุ้น', blocks: [] },
    'agm-agenda': {
      title: 'การเสนอวาระการประชุมและเสนอชื่อบุคคลเป็นกรรมการบริษัท',
      blocks: [],
    },
    'agm-summary': { title: 'ประมวลรูปภาพการประชุมผู้ถือหุ้น', blocks: [] },

    /* ===== TNITY-W2 ===== */
    'tnity-w2-right': {
      title: 'กำหนดการใช้สิทธิ TNITY-W2',
      blocks: [],
    },
  },
}

export default capitalShareholdering
