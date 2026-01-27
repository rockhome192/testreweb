import { EducationData } from './educationTypes'

// Import sidebar categories
import { securitiesDerivatives } from './sidebar/securitiesDerivatives'
import { debenture } from './sidebar/debenture'
import { vocabulary } from './sidebar/vocabulary'

// Import card grid categories
import { vietnam } from './cardGrid/vietnam'
import { crypto } from './cardGrid/crypto'
import { gold } from './cardGrid/gold'
import { videoLibrarye } from './cardGrid/videolibrarye'

export const educationData: EducationData = {
    // =====================================================
    // SIDEBAR LAYOUT CATEGORIES
    // =====================================================
    'Securities-Derivatives': securitiesDerivatives,
    'debenture': debenture,
    'vocabulary': vocabulary,

    // =====================================================
    // CARD GRID LAYOUT CATEGORIES
    // =====================================================
    'vietnam': vietnam,
    'crypto': crypto,
    'gold': gold,
    'video-librarye': videoLibrarye
}

// Helper function to get layout type
export function getLayoutType(slug: string): 'sidebar' | 'card-grid' | null {
    const category = educationData[slug]
    return category ? category.layoutType : null
}

// Helper function to check if category uses sidebar
export function usesSidebarLayout(slug: string): boolean {
    return getLayoutType(slug) === 'sidebar'
}

// Helper function to check if category uses card grid
export function usesCardGridLayout(slug: string): boolean {
    return getLayoutType(slug) === 'card-grid'
}
