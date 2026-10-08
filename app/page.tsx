import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { EssenceSection } from '@/components/essence-section'
import { FeaturedSection } from '@/components/featured-section'
import { ProductsSection } from '@/components/products-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <HeroSection />
        <EssenceSection />
        <FeaturedSection />
        <ProductsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
