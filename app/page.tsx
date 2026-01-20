import HeroSection from "@/components/home/hero/HeroSection"
import WhyTrinity from "@/components/home/sections/WhyTrinity"
import SecuritySection from "@/components/home/sections/SecuritySection"
import AppDownload from "@/components/home/sections/AppDownload"
import ServicesSection from "@/components/home/sections/ServicesSection"
import NewsSection from "@/components/home/sections/NewsSection"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyTrinity />
      <SecuritySection />
      <AppDownload />
      <ServicesSection />
      <NewsSection />
    </main>
  )
}