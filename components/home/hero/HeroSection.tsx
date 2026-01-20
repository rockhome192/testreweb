import HeroContent from './HeroContent'
import HeroMockup from './HeroMockup'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#0a0a0a] min-h-[600px] flex items-center">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                <div
                    className="w-full h-full bg-cover bg-center opacity-80"
                    style={{
                        backgroundImage: `url('/hero-bg.png')`
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <HeroContent />
                    {/* Placeholder for Mockup if HeroMockup component exists, otherwise we'll standardise it shortly */}
                    <div className="hidden lg:block">
                        <HeroMockup />
                    </div>
                </div>
            </div>
        </section>
    )
}