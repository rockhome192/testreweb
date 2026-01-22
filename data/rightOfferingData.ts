import { TrendingUp } from 'lucide-react';
import { ServiceCategory } from './serviceTypes';

export const rightOfferingData: ServiceCategory = {
    id: 'sec-deriv-trading',
    title: 'การจองซื้อหุ้นสามัญเพิ่มทุน',
    label: 'การจองซื้อหุ้นสามัญเพิ่มทุน',
    icon: TrendingUp,
    color: 'purple',
    submenu: [
        { id: 'qdc', label: 'การจองซื้อหุ้นเพิ่มทุน บริษัท ควอนตัม ดี ซี จำกัด (มหาชน) - QDC' },
        { id: 'xbio-1', label: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน) - XBIO' },
        { id: 'xbio-2', label: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน) - XBIO' },
        { id: 'dv8', label: 'Tender Offer - บริษัท ดีวี8 จำกัด (มหาชน) (DV8)' },
        { id: 'xbio-3', label: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน) XBIO' },
        { id: 'abm', label: 'Tender Offer - บริษัท เอเชีย ไบโอแมส จำกัด (มหาชน) (ABM)' },
        { id: 'rt', label: 'การจองซื้อหุ้นเพิ่มทุน บริษัท ไร้ท์ทันเน็ลลิ่ง จำกัด (มหาชน) (RT)' },
        { id: 'kccamc', label: 'การทำ Tender Offer - บริษัท บริหารสินทรัพย์ ไนท คลับ แคปปิตอล จำกัด (มหาชน) (KCCAMC)' },
        { id: 'kgen', label: 'การจองซื้อหุ้น บริษัท คิง เจน จำกัด (มหาชน) - KGEN' },
        { id: 'sky', label: 'การจองซื้อหุ้น บริษัท สกาย ไอซีที จำกัด (มหาชน) - SKY' },
        { id: 'proud', label: 'การจองซื้อหุ้น บริษัท พราว เรียล เอสเตท จำกัด (มหาชน) - PROUD' }
    ],
    content: {
        // Placeholders for new items
        'qdc': {
            title: 'การจองซื้อหุ้นเพิ่มทุน บริษัท ควอนตัม ดี ซี จำกัด (มหาชน) - QDC', description: '', services: [], blocks: [{
                type: 'text',
                content: 'การจองซื้อหุ้นเพิ่มทุน บริษัท ควอนตัม ดี ซี จำกัด (มหาชน)'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/qdc.jpg' }]
            },
            {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุนและแบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://qdc-th.listedcompany.com/warrant.html)',
                    '',
                    'ระบบ Electronic Rights offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?v=1&n_sec=QDC&type=ro)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/E-ROma_1761552337_20893.pdf)'
                ]
            }
            ]
        },
        'xbio-1': {
            title: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน) - XBIO', description: '', services: [], blocks: [{
                type: 'text',
                content: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน)'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/xbio.jpg' }]
            },
            {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุนและแบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.xbio.co.th/th/subscription-documents-for-newly-issued-ordinary-shares-of-x-bioscience-public-company-limited/)',
                    '',
                    'ระบบ Electronic Rights offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?v=5&n_sec=XBIO&type=RO)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/E-ROma_1761552337_20893.pdf)',
                    ''
                ]
            }
            ],
        },
        'xbio-2': {
            title: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน) - XBIO (เพิ่มเติม)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ ไบโอไซเอนซ์ จำกัด (มหาชน)'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/xbio2.png' }]
            },
            {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุนและแบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.xbio.co.th/th/subscription-documents-for-newly-issued-ordinary-shares-of-x-bioscience-public-company-limited/)',
                    '',
                    'ระบบ Electronic Rights offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?v=5&n_sec=XBIO&type=RO)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/E-ROma_1761552337_20893.pdf)'
                ]
            }],
        },
        'dv8': {
            title: 'การทำ Tender Offer - บริษัท ดีวี8 จำกัด (มหาชน) (DV8)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'การทำ Tender - Offer บริษัท ดีวี 8  จำกัด (มหาชน) - DV8'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/dv8.png' }]
            },
            {
                type: 'list',
                items: [
                    'วิธีการแสดงเจตนาขาย [คลิกที่นี้](https://www.trinitythai.com/Upload/Intent_1752481208_52952.pdf)',
                    '',
                    'เอกสารและแบบฟอร์ม [คลิกที่นี้](https://www.trinitythai.com//Upload/Attach_1752481312_58163.pdf)',
                    '',
                    'ระบบ E-Tender Offer (Online) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?n_sec=DV8&type=tender)',
                    '',
                    'คู่มือการทำ E-Tender Offer [คลิกที่นี้](https://www.trinitythai.com//Upload/E-Tend_1752481257_45596.pdf)'


                ]
            }],
        },
        'xbio-3': {
            title: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ไบโอไซเอนซ์ จำกัด (มหาชน) - XBIO (เพิ่มเติม)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'การจองซื้อหุ้นเพิ่มทุน บริษัท เอ็กซ์ ไบโอไซเอนซ์ จำกัด (มหาชน)'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/xbio3.jpg' }]
            },
            {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุนและแบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.xbio.co.th/th/subscription-documents-for-newly-issued-ordinary-shares-of-x-bioscience-public-company-limited/)',
                    '',
                    'ระบบ Electronic Rights offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?n_sec=XBIO&type=RO)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/manual_1736848072_26482.pdf)',
                ]
            }],
        },
        'abm': {
            title: 'Tender Offer - บริษัท เอเชีย ไบโอแมส จำกัด (มหาชน) (ABM)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'การทำ Tender - Offer บริษัท เอเชีย ไบโอแมส จำกัด (มหาชน) - ABM'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/abm.jpg' }]
            },
            {
                type: 'list',
                items: [
                    'วิธีการแสดงเจตนาขาย [คลิกที่นี้](https://www.trinitythai.com/Upload/Detail_1731402075_75332.pdf)',
                    '',
                    'เอกสารและแบบฟอร์ม [คลิกที่นี้](https://www.trinitythai.com/Upload/DocFor_1731401945_45124.pdf)',
                    '',
                    'ระบบ E-Tender Offer (Online) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?n_sec=ABM&type=tender)',
                    '',
                    'คู่มือการทำ E-Tender Offer [คลิกที่นี้](https://www.trinitythai.com/Upload/Manual_1731411699_9842.pdf)'

                ]
            }],
        },
        'rt': {
            title: 'การจองซื้อหุ้นเพิ่มทุน บริษัท ไร้ท์ทันเน็ลลิ่ง จำกัด (มหาชน) (RT)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'รายละเอียดการจองซื้อหุ้นเพิ่มทุน'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/rt.png' }]
            }, {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/RTInfo_1715074543_16067.pdf)',
                    '',
                    'แบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/RTSubs_1715074590_58649.pdf)',
                    '',
                    'แบบฟอร์ม Bill Payment [คลิกที่นี้](https://www.trinitythai.com/Upload/%E0%B9%83%E0%B8%9A%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_1715074629_12311.pdf)',
                    '',
                    'ระบบ Electronic Rights offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/ero.html?n_sec=RT&v=6)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD_1715074681_23383.pdf)'
                ]
            }],
        },
        'kccamc': {
            title: 'Tender Offer - บริษัท บริหารสินทรัพย์ ไนท คลับ แคปปิตอล จำกัด (มหาชน) (KCCAMC)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'รายละเอียด Tender Offer'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/kccamc.png' }]
            }, {
                type: 'list',
                items: [
                    'วิธีการแสดงเจตนาขาย [คลิกที่นี้](https://www.trinitythai.com//Upload/Howtos_1714043778_45557.pdf)',
                    '',
                    'เอกสารและแบบฟอร์ม [คลิกที่นี้](https://www.trinitythai.com/Upload/Form_1714043903_20437.pdf)',
                    '',
                    'ระบบ E-Tender Offer (online) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/verify.html?n_sec=KCCAMC&type=swap)',
                    '',
                    'คู่มือการทำ Tender Offer [คลิกที่นี้](https://www.trinitythai.com//Upload/E-Tend_1714043848_84617.pdf)',
                    '',
                    'ข่าวประกาศจากตลาดหลักทรัพย์ [คลิกที่นี้](https://www.set.or.th/th/market/product/stock/quote/KCCAMC/news)',
                    'Q&A [คลิกที่นี้](https://www.trinitythai.com/Upload/KCCTen_1714719619_73801.pdf)'
                ]
            }]
        },
        'kgen': {
            title: 'การจองซื้อหุ้น KGEN - บริษัท คิง เจน จำกัด (มหาชน)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'รายละเอียดการจองซื้อหุ้นสามัญเพิ่มทุน'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/kgen.png' }]
            }, {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/THKGEN_1685092056_97074.pdf)',
                    '',
                    'แบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/Subscr_1685092213_2359.pdf)',
                    '',
                    'แบบฟอร์ม Bill Payment [คลิกที่นี้](https://www.trinitythai.com/Upload/KGENBi_1685092292_49532.pdf)',
                    '',
                    'ระบบ Electronic Rights Offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/ero.html?n_sec=KGEN)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/E-ROKG_1685092415_10385.pdf)',
                ]
            }],
        },
        'sky': {
            title: 'การจองซื้อหุ้น SKY - บริษัท สกาย ไอซีที จำกัด (มหาชน)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'รายละเอียดการจองซื้อหุ้นเพิ่มทุน'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/sky.png' }]
            }, {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุน [คลิกที่นี้](https://investor.skyict.co.th/storage/document/rights-offering-package/2023/sky-ro-enc01-th.pdf)',
                    '',
                    'แบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/Subscr_1685092213_2359.pdf)',
                    '',
                    'แบบฟอร์ม Bill Payment [คลิกที่นี้](https://www.trinitythai.com/Upload/KGENBi_1685092292_49532.pdf)',
                    '',
                    'ระบบ Electronic Rights Offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/ero.html?v=2&n_sec=SKY)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/E-ROSKY_1685092415_10385.pdf)',
                ]
            }],
        },
        'proud': {
            title: 'การจองซื้อหุ้น PROUD - บริษัท พราว เรียล เอสเตท จำกัด (มหาชน)', description: '', services: [], blocks: [{
                type: 'text',
                content: 'รายละเอียดการจองซื้อหุ้นเพิ่มทุน'
            }, {
                type: 'images_grid',
                images: [{ url: '/images/sec-deriv-trading/proud.png' }]
            }, {
                type: 'list',
                items: [
                    'หนังสือแจ้งการจัดสรรหุ้นสามัญเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/Signed_1688973803_10498.pdf)',
                    '',
                    'แบบฟอร์มใบจองซื้อหุ้นเพิ่มทุน [คลิกที่นี้](https://www.trinitythai.com/Upload/Subscr_1688973884_38889.pdf)',
                    '',
                    'แบบฟอร์ม Bill Payment [คลิกที่นี้](https://www.trinitythai.com/Upload/BillPa_1688974499_69101.pdf)',
                    '',
                    'ระบบ Electronic Rights Offering (ระบบจองหุ้นออนไลน์) [คลิกที่นี้](https://www.trinitythai.com/QT/pages/ero.html?n_sec=proud)',
                    '',
                    'คู่มือการจองซื้อหุ้นเพิ่มทุนผ่านระบบ E-RO [คลิกที่นี้](https://www.trinitythai.com/Upload/PROUDE_1688973932_40052.pdf)',
                ]
            }],
        }
    }
};
