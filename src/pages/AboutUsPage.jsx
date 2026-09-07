import AboutHero from '../components/about/AboutHero'
import BrandPhilosophy from '../components/about/BrandPhilosophy'
import OurStoryRoots from '../components/about/OurStoryRoots'
import TraditionScienceBalance from '../components/about/TraditionScienceBalance'
import BrandBeliefs from '../components/about/BrandBeliefs'
import BrandVision from '../components/about/BrandVision'
import MoreThanCosmetic from '../components/about/MoreThanCosmetic'
import ClosingManifesto from '../components/about/ClosingManifesto'

export default function AboutUsPage() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Cinematic About Hero */}
      <AboutHero />

      {/* 2. Our Philosophy */}
      <BrandPhilosophy />

      {/* 3. Our Story: A Journey Back to Our Roots */}
      <OurStoryRoots />

      {/* 4. Tradition x Science: The Perfect Balance */}
      <TraditionScienceBalance />

      {/* 5. What We Believe */}
      <BrandBeliefs />

      {/* 6. Our Vision */}
      <BrandVision />

      {/* 7. More Than a Cosmetic */}
      <MoreThanCosmetic />

      {/* 8. Closing Brand Manifesto */}
      <ClosingManifesto />
    </div>
  )
}
