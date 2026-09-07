import HeroCinematic from '../components/HeroCinematic'
import BrandPhilosophy from '../components/BrandPhilosophy'
import CategoryGrid from '../components/CategoryGrid'
import IngredientJourney from '../components/IngredientJourney'
import ConcernGrid from '../components/ConcernGrid'
import SignatureProductStory from '../components/SignatureProductStory'
import BestSellersCarousel from '../components/BestSellersCarousel'
import TraditionScienceSplit from '../components/TraditionScienceSplit'
import SkinHairAdvisor from '../components/SkinHairAdvisor'
import DigitalHerbariumPreview from '../components/DigitalHerbariumPreview'
import KnowledgeCentre from '../components/KnowledgeCentre'
import PackagingExperience from '../components/PackagingExperience'
import GreenfuelCircle from '../components/GreenfuelCircle'

export default function Home() {
  return (
    <div className="greenfuel-homepage-root">
      {/* 01. Hero Cinematic */}
      <HeroCinematic />

      {/* 02. What is Greenfuel? (Brand Philosophy) */}
      <BrandPhilosophy />

      {/* 03. Shop by Categories */}
      <CategoryGrid />

      {/* 04. Ingredient Journey */}
      <IngredientJourney />

      {/* 05. Shop by Concern */}
      <ConcernGrid />

      {/* 06. Signature Ritual Product Story (Aura Ubtan) */}
      <SignatureProductStory />

      {/* 07. Best Sellers */}
      <BestSellersCarousel />

      {/* 08. Tradition x Modern Science */}
      <TraditionScienceSplit />

      {/* 09. AI Skin & Hair Advisor */}
      <SkinHairAdvisor />

      {/* 10. Digital Herbarium */}
      <DigitalHerbariumPreview />

      {/* 11. Greenfuel Knowledge Centre */}
      <KnowledgeCentre />

      {/* 12. Packaging Experience */}
      <PackagingExperience />

      {/* 13. Join the Greenfuel Circle */}
      <GreenfuelCircle />
    </div>
  )
}
