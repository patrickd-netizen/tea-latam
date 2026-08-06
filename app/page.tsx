import { Hero } from '@/components/hero'
import { PainPoints } from '@/components/pain-points'
import { Bridge } from '@/components/bridge'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <PainPoints />
      <Bridge />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
