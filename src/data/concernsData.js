import { SHOP_CONCERNS, CATALOGUE_PRODUCTS, BOTANICAL_INGREDIENTS } from './shopData'

// Import concern background images from assets
import concernBrightening from '../assets/concern_skin_brightening.png'
import concernHairFall from '../assets/concern_hair_fall.png'
import concernPigmentation from '../assets/concern_pigmentation.png'
import concernAntiAgeing from '../assets/concern_anti_ageing.png'
import concernHydration from '../assets/concern_hydration.png'
import concernDandruff from '../assets/concern_dandruff.png'
import concernBodyOdour from '../assets/concern_body_odour.png'
import concernDrySkin from '../assets/concern_dry_skin.png'
import concernSensitiveSkin from '../assets/concern_sensitive_skin.png'
import concernDarkCircles from '../assets/concern_dark_circles.png'

// EXACT 10 CONFIRMED CONCERNS DATA MODEL
export const CONCERNS_DATA = [
  {
    id: 'skin-brightening',
    slug: 'skin-brightening',
    name: 'Skin Brightening',
    group: 'skin',
    tagline: 'Luminous Glow & Dermal Clarity',
    shortDescription: 'Restore dermal luminosity and even out tone using Kashmiri Saffron and heritage sun-dried Ubtan.',
    longDescription: 'Environmental stress, UV exposure, and cellular oxidation can cause dullness and uneven tone. Greenfuel approaches skin brightening through gentle phyto-exfoliation and Kashmiri Saffron that supports cellular renewal without harsh chemical bleaching.',
    greenfuelApproach: 'Our brightening formulations utilize cold-processed Phyto-nutrients, Kashmiri Saffron, and heritage Ubtan to gently polish dead skin cells and reveal natural dermal radiance.',
    image: concernBrightening,
    ingredientIds: ['saffron', 'neem', 'bakuchiol'],
    ritualPhases: [
      { phase: 'Morning', step: 'Cleanse & Refresh', recommendation: 'Waterless Face Wash Spray' },
      { phase: 'Treatment', step: 'Polishing Ritual', recommendation: 'Aura Ubtan Face Mask Powder' },
      { phase: 'Evening', step: 'Barrier Hydration', recommendation: 'Sparsh Moisturizing Cream' }
    ]
  },
  {
    id: 'hair-fall',
    slug: 'hair-fall',
    name: 'Hair Fall',
    group: 'hair',
    tagline: 'Follicle Density & Root Anchorage',
    shortDescription: 'Strengthen hair roots and reduce follicle shedding with wild Bhringraj and adaptogenic Holy Tulsi.',
    longDescription: 'Scalp micro-circulation stress and environmental pollutants weaken hair roots over time. Greenfuel targets hair fall by nourishing the scalp ecosystem with cold-extracted Ayurvedic elixirs that fortify root density.',
    greenfuelApproach: 'We combine wild Bhringraj extractions with Holy Tulsi to soothe scalp inflammation, nourish hair shafts, and anchor roots for visibly denser, fuller hair.',
    image: concernHairFall,
    ingredientIds: ['bhringraj', 'tulsi', 'neem'],
    ritualPhases: [
      { phase: 'Daily AM/PM', step: 'Root Activation', recommendation: 'Scalp Revitalizing Herbal Serum' },
      { phase: 'Weekly Care', step: 'Deep Shaft Repair', recommendation: 'KeshVruddhi Herbal Hair Mask' }
    ]
  },
  {
    id: 'pigmentation',
    slug: 'pigmentation',
    name: 'Pigmentation',
    group: 'skin',
    tagline: 'Melanin Balance & Tone Uniformity',
    shortDescription: 'Target hyperpigmentation and sun spots with Bakuchiol phyto-retinol and bioactive botanical oils.',
    longDescription: 'Irregular melanin production caused by sun damage and skin stress creates persistent dark patches. Greenfuel relies on Phyto-retinol Bakuchiol and Kashmiri Saffron to harmonize dermal tone.',
    greenfuelApproach: 'By inhibiting oxidative stress and promoting gentle cell turnover, our botanical serums fade discoloration while preserving dermal moisture.',
    image: concernPigmentation,
    ingredientIds: ['bakuchiol', 'saffron', 'neem'],
    ritualPhases: [
      { phase: 'Night', step: 'Targeted Cellular Repair', recommendation: 'Eterna-AgeReset Advanced Serum' },
      { phase: 'Daily Care', step: 'Underarm Tone Care', recommendation: 'Under Arm Roll On' }
    ]
  },
  {
    id: 'anti-ageing',
    slug: 'anti-ageing',
    name: 'Anti-Ageing',
    group: 'skin',
    tagline: 'Collagen Elasticity & Phyto-Retinol Care',
    shortDescription: 'Firm fine lines and restore dermal elasticity using Himalayan Bakuchiol and rich ghee ceramides.',
    longDescription: 'As skin matures, natural collagen production slows down leading to fine lines and loss of firmness. Greenfuel provides a botanical alternative to synthetic retinol through Bakuchiol.',
    greenfuelApproach: 'Our anti-ageing rituals deliver natural collagen-boosting Phyto-retinoids combined with 100-times washed cow ghee (Shata Dhauta Ghrita) for deep structural nourishment.',
    image: concernAntiAgeing,
    ingredientIds: ['bakuchiol', 'saffron'],
    ritualPhases: [
      { phase: 'Evening', step: 'Phyto-Retinol Elixir', recommendation: 'Eterna-AgeReset Anti-Ageing Serum' },
      { phase: 'Moisture Lock', step: 'Deep Barrier Repair', recommendation: 'Sparsh Moisturizing Cream' }
    ]
  },
  {
    id: 'hydration',
    slug: 'hydration',
    name: 'Hydration',
    group: 'skin',
    tagline: 'Deep Moisture Reserve & Dermal Plumping',
    shortDescription: 'Replenish dehydrated skin layers with Holy Tulsi hydrosols and lipid-replenishing botanicals.',
    longDescription: 'Dehydration compromises the dermal moisture barrier, causing tightness and fine flaking. Greenfuel restores moisture reserves through pure plant hydrosols and cold-pressed botanical oils.',
    greenfuelApproach: 'We infuse hydro-lock botanicals and steam-distilled Holy Tulsi mist to saturate dermal layers without leaving a heavy or greasy residue.',
    image: concernHydration,
    ingredientIds: ['tulsi', 'saffron', 'neem'],
    ritualPhases: [
      { phase: 'On-The-Go', step: 'Instant Hydration Mist', recommendation: 'Waterless Face Wash Spray' },
      { phase: 'Daily Care', step: 'Nourishing Barrier Cream', recommendation: 'Sparsh Moisturizing Cream' }
    ]
  },
  {
    id: 'dandruff',
    slug: 'dandruff',
    name: 'Dandruff',
    group: 'hair',
    tagline: 'Microbiome Balance & Scalp Flake Relief',
    shortDescription: 'Eliminate stubborn scalp flaking and soothe itchiness using wild Neem and antimicrobial Bhringraj.',
    longDescription: 'Scalp microbiome imbalance leads to excess sebum accumulation, flaking, and discomfort. Greenfuel restores scalp harmony using natural anti-bacterial Neem and cooling Tulsi.',
    greenfuelApproach: 'Our anti-dandruff formulations clear scalp buildup gently, purifying hair follicles while preserving natural scalp lipid barriers.',
    image: concernDandruff,
    ingredientIds: ['neem', 'bhringraj', 'tulsi'],
    ritualPhases: [
      { phase: 'Weekly Ritual', step: 'Purifying Scalp Pack', recommendation: 'KeshVruddhi Herbal Hair Mask' },
      { phase: 'Daily Maintenance', step: 'Microbiome Serum', recommendation: 'Scalp Revitalizing Herbal Serum' }
    ]
  },
  {
    id: 'body-odour',
    slug: 'body-odour',
    name: 'Body Odour',
    group: 'body',
    tagline: 'Natural Odor Protection & Freshness',
    shortDescription: 'Neutralize odor-causing microbes with organic Alum, Sandalwood, and wild Neem extractions.',
    longDescription: 'Synthetic deodorants plug sweat glands with aluminum salts. Greenfuel neutralizes odor-causing bacteria naturally while allowing skin to breathe freely.',
    greenfuelApproach: 'Our roll-on formulations blend natural crystal alum and Sandalwood hydrosols to keep underarms fresh, calm, and naturally fragrant all day.',
    image: concernBodyOdour,
    ingredientIds: ['neem', 'tulsi'],
    ritualPhases: [
      { phase: 'Post-Shower', step: '24h Natural Protection', recommendation: 'Under Arm Roll On' }
    ]
  },
  {
    id: 'dry-skin',
    slug: 'dry-skin',
    name: 'Dry Skin',
    group: 'skin',
    tagline: 'Lipid Replenishment & 48h Moisture Lock',
    shortDescription: 'Nourish dry dermal layers with washed cow ghee, Bakuchiol, and heritage lipid repair herbs.',
    longDescription: 'Dry skin suffers from broken intercellular lipids that cause roughness and sensitivity. Greenfuel repairs the lipid matrix using classical washed ghee and botanical oils.',
    greenfuelApproach: 'By locking in moisture through traditional Shata Dhauta Ghrita, our dry skin formulations restore soft velvet elasticity.',
    image: concernDrySkin,
    ingredientIds: ['saffron', 'bakuchiol'],
    ritualPhases: [
      { phase: 'Daily AM/PM', step: 'Barrier Lipid Repair', recommendation: 'Sparsh Moisturizing Cream' }
    ]
  },
  {
    id: 'sensitive-skin',
    slug: 'sensitive-skin',
    name: 'Sensitive Skin',
    group: 'skin',
    tagline: 'Soothing Barrier Defense & Redness Calm',
    shortDescription: 'Calm reactive skin and redness with adaptogenic Holy Tulsi mist and pure botanical clays.',
    longDescription: 'Reactive skin requires minimalist formulations that calm inflammation without trigger chemicals. Greenfuel crafts ultra-pure, fragrance-free solutions.',
    greenfuelApproach: 'Using cooling steam-distilled Holy Tulsi hydrosol and gentle Fuller’s earth clay, we soothe active redness and shield skin against environmental irritants.',
    image: concernSensitiveSkin,
    ingredientIds: ['tulsi', 'neem'],
    ritualPhases: [
      { phase: 'Cleansing', step: 'No-Rinse Gentle Cleanser', recommendation: 'Waterless Face Wash Spray' },
      { phase: 'Calming Treatment', step: 'Dermal Detox Mask', recommendation: 'Shuddhi Pure Herbal Face Mask' }
    ]
  },
  {
    id: 'dark-circles',
    slug: 'dark-circles',
    name: 'Dark Circles',
    group: 'skin',
    tagline: 'Periorbital Radiance & Micro-Circulation',
    shortDescription: 'Revitalize delicate under-eye skin and fade dark circles with Bakuchiol and Kashmiri Saffron.',
    longDescription: 'Thin periorbital skin is prone to fatigue shadows and micro-circulation slowdown. Greenfuel uses micro-elixirs that strengthen thin skin around the eyes.',
    greenfuelApproach: 'Infused with antioxidant-rich Saffron and collagen-supporting Bakuchiol, our eye area rituals brighten discoloration and firm micro-lines.',
    image: concernDarkCircles,
    ingredientIds: ['bakuchiol', 'saffron'],
    ritualPhases: [
      { phase: 'Bedtime', step: 'Periorbital Renewal', recommendation: 'Eterna-AgeReset Advanced Anti-Ageing Serum' }
    ]
  }
]

// Helper functions for concern lookup & data binding
export function getConcernBySlug(slug) {
  if (!slug) return CONCERNS_DATA[0]
  return CONCERNS_DATA.find((c) => c.slug === slug || c.id === slug) || CONCERNS_DATA[0]
}

export function getProductsForConcern(concernId) {
  return CATALOGUE_PRODUCTS.filter((p) => p.concerns && p.concerns.includes(concernId))
}

export function getIngredientsForConcern(concernId) {
  const concern = getConcernBySlug(concernId)
  if (!concern) return []
  return BOTANICAL_INGREDIENTS.filter((ing) => concern.ingredientIds.includes(ing.id))
}
