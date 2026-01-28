/* ================= TYPES ================= */

export type InvestorContentBlock =
  | {
      type: 'text'
      content: string
    }
  | {
      type: 'list'
      items: string[]
    }
  | {
      type: 'financial-list'
      items: {
        label: string
        url: string
      }[]
    }
  | {
      type: 'image'
      url: string
      caption?: string
      link?: string
    }
  | {
      type: 'images_grid'
      images: {
        url: string
        caption?: string
        link?: string
        maxWidth?: string
      }[]
    }

export type InvestorContent = {
  title: string
  blocks: InvestorContentBlock[]
}

export type InvestorSubmenuItem = {
  id: string
  label: string
}

export type InvestorSubmenuGroup =
  | InvestorSubmenuItem
  | {
      id: string
      label: string
      items: InvestorSubmenuItem[]
    }

export type InvestorPageData = {
  title: string
  submenu: InvestorSubmenuGroup[]
  content: Record<string, InvestorContent>
}

/* ================= DATA IMPORTS ================= */
/* แต่ละไฟล์ควร export default InvestorPageData */

import aboutTrinity from './aboutTrinity'
import annualReport from './annualReport'
import financialStatement from './financialStatement'
import capitalShareholding from './capitalShareholdering'
import dividendPayment from './dividendPayment'
import ESGreport from './ESGreport'
import newDisclosure from './newDisclosure'
import bondProduct from './newDisclosure'

/* ================= DATA MAP ================= */

export const investorDataMap: Record<string, InvestorPageData> = {
  'about-trinity': aboutTrinity,
  'annual-report': annualReport,
  'financial-statement': financialStatement,
  'capital-shareholding': capitalShareholding,
  'dividend-payment': dividendPayment,
  'esg-report': ESGreport,
  'new-disclosure': newDisclosure,
  'bond-product': bondProduct,
}
