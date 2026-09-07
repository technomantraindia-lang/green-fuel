// Import Category Images
import catHairMask from '../assets/cat_hair_mask_jar.png'
import catFaceMask from '../assets/cat_face_mask_jar.png'
import catUbtan from '../assets/cat_ubtan_jar.png'
import catFaceSerum from '../assets/cat_face_serum_dropper.png'
import catScalpSerum from '../assets/cat_scalp_serum_pump.png'
import catFaceWash from '../assets/cat_face_wash_pump.png'
import catCream from '../assets/cat_cream_jar.png'
import catRollOn from '../assets/cat_roll_on_bottle.png'
import catInhaler from '../assets/cat_inhaler_spray.png'

// Import Concern Images
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

// Import Ingredient Images
import ingBhringraj from '../assets/ingredient_bhringraj_plant.png'
import ingBakuchiol from '../assets/ingredient_bakuchiol_purple.png'
import ingSaffron from '../assets/ingredient_saffron_strands.png'
import ingNeem from '../assets/ingredient_neem_leaves.png'
import ingTulsi from '../assets/ingredient_tulsi_basil.png'

// 1. EXACT 9 CONFIRMED CATEGORIES
export const SHOP_CATEGORIES = [
  { id: 'hair-mask', name: 'Hair Mask', image: catHairMask, slug: 'hair-mask' },
  { id: 'face-mask', name: 'Face Mask', image: catFaceMask, slug: 'face-mask' },
  { id: 'ubtan', name: 'Ubtan', image: catUbtan, slug: 'ubtan' },
  { id: 'face-serum', name: 'Face Serum', image: catFaceSerum, slug: 'face-serum' },
  { id: 'scalp-serum', name: 'Scalp Serum', image: catScalpSerum, slug: 'scalp-serum' },
  { id: 'face-wash', name: 'Face Wash', image: catFaceWash, slug: 'face-wash' },
  { id: 'moisturizing-cream', name: 'Moisturizing Cream', image: catCream, slug: 'moisturizing-cream' },
  { id: 'roll-on', name: 'Roll-On', image: catRollOn, slug: 'roll-on' },
  { id: 'inhaler', name: 'Inhaler', image: catInhaler, slug: 'inhaler' }
]

// 2. CONCERNS LIST
export const SHOP_CONCERNS = [
  { id: 'skin-brightening', name: 'Skin Brightening', image: concernBrightening },
  { id: 'hair-fall', name: 'Hair Fall', image: concernHairFall },
  { id: 'pigmentation', name: 'Pigmentation', image: concernPigmentation },
  { id: 'anti-ageing', name: 'Anti-Ageing', image: concernAntiAgeing },
  { id: 'hydration', name: 'Hydration', image: concernHydration },
  { id: 'dandruff', name: 'Dandruff', image: concernDandruff },
  { id: 'body-odour', name: 'Body Odour', image: concernBodyOdour },
  { id: 'dry-skin', name: 'Dry Skin', image: concernDrySkin },
  { id: 'sensitive-skin', name: 'Sensitive Skin', image: concernSensitiveSkin },
  { id: 'dark-circles', name: 'Dark Circles', image: concernDarkCircles }
]

// 3. BOTANICAL INGREDIENTS LIST
export const BOTANICAL_INGREDIENTS = [
  { id: 'bhringraj', name: 'Bhringraj', role: 'Hair Vitality & Root Strength', origin: 'Western Ghats Harvest', image: ingBhringraj },
  { id: 'bakuchiol', name: 'Bakuchiol', role: 'Phyto-Retinol Collagen Booster', origin: 'Himalayan Foothills', image: ingBakuchiol },
  { id: 'saffron', name: 'Kashmiri Saffron', role: 'Dermal Radiance & Cell Renewal', origin: 'Pampore Valleys', image: ingSaffron },
  { id: 'neem', name: 'Wild Neem', role: 'Anti-Bacterial Dermal Purifier', origin: 'Deccan Plateau', image: ingNeem },
  { id: 'tulsi', name: 'Holy Tulsi', role: 'Adaptogenic Stress Shield', origin: 'Sacred Grove Cultivation', image: ingTulsi }
]

// 4. EXACT 9 CATALOGUE PRODUCTS
export const CATALOGUE_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'KeshVruddhi Herbal Hair Mask',
    category: 'Hair Mask',
    categorySlug: 'hair-mask',
    price: 1099,
    formattedPrice: '₹1,099',
    descriptor: 'Deep conditioning Ayurvedic scalp and hair shaft repair mask',
    image: catHairMask,
    badge: 'Top Rated',
    concerns: ['hair-fall', 'dandruff'],
    ingredients: ['bhringraj', 'neem'],
    dateAdded: '2026-02-01'
  },
  {
    id: 'prod-2',
    name: 'Shuddhi Pure Herbal Face Mask',
    category: 'Face Mask',
    categorySlug: 'face-mask',
    price: 849,
    formattedPrice: '₹849',
    descriptor: 'Purifying clay & botanical mask for deep dermal detox',
    image: catFaceMask,
    badge: 'New',
    concerns: ['skin-brightening', 'sensitive-skin'],
    ingredients: ['neem', 'tulsi'],
    dateAdded: '2026-02-10'
  },
  {
    id: 'prod-3',
    name: 'Aura Ubtan Face Mask Powder',
    category: 'Ubtan',
    categorySlug: 'ubtan',
    price: 899,
    formattedPrice: '₹899',
    descriptor: 'Traditional sun-dried bridal Ubtan for luminous glow',
    image: catUbtan,
    badge: 'Flagship',
    concerns: ['skin-brightening', 'pigmentation'],
    ingredients: ['saffron', 'turmeric'],
    dateAdded: '2026-01-15'
  },
  {
    id: 'prod-4',
    name: 'Eterna-AgeReset Advanced Anti-Ageing Serum',
    category: 'Face Serum',
    categorySlug: 'face-serum',
    price: 1499,
    formattedPrice: '₹1,499',
    descriptor: 'Phyto-retinol Bakuchiol serum for collagen elasticity',
    image: catFaceSerum,
    badge: 'Bestseller',
    concerns: ['anti-ageing', 'dark-circles', 'pigmentation'],
    ingredients: ['bakuchiol', 'saffron'],
    dateAdded: '2026-01-20'
  },
  {
    id: 'prod-5',
    name: 'Scalp Revitalizing Herbal Serum',
    category: 'Scalp Serum',
    categorySlug: 'scalp-serum',
    price: 1199,
    formattedPrice: '₹1,199',
    descriptor: 'Follicle stimulating botanical elixir for root density',
    image: catScalpSerum,
    badge: 'Formulator Choice',
    concerns: ['hair-fall', 'dandruff'],
    ingredients: ['bhringraj', 'tulsi'],
    dateAdded: '2026-02-05'
  },
  {
    id: 'prod-6',
    name: 'Waterless Face Wash Spray',
    category: 'Face Wash',
    categorySlug: 'face-wash',
    price: 699,
    formattedPrice: '₹699',
    descriptor: 'No-rinse herbal cleanser mist for instant freshness',
    image: catFaceWash,
    badge: 'Innovative',
    concerns: ['hydration', 'sensitive-skin'],
    ingredients: ['tulsi', 'neem'],
    dateAdded: '2026-01-28'
  },
  {
    id: 'prod-7',
    name: 'Sparsh Moisturizing Cream',
    category: 'Moisturizing Cream',
    categorySlug: 'moisturizing-cream',
    price: 1249,
    formattedPrice: '₹1,249',
    descriptor: 'Rich Ayurvedic barrier repair cream with pure ghee & herbs',
    image: catCream,
    badge: 'Bestseller',
    concerns: ['dry-skin', 'hydration'],
    ingredients: ['saffron', 'bakuchiol'],
    dateAdded: '2026-01-10'
  },
  {
    id: 'prod-8',
    name: 'Under Arm Roll On',
    category: 'Roll-On',
    categorySlug: 'roll-on',
    price: 499,
    formattedPrice: '₹499',
    descriptor: 'Natural alum & sandalwood roll-on for odor control',
    image: catRollOn,
    badge: 'Essential',
    concerns: ['body-odour', 'pigmentation'],
    ingredients: ['neem', 'sandalwood'],
    dateAdded: '2026-02-12'
  },
  {
    id: 'prod-9',
    name: 'Herbal Natural Inhaler',
    category: 'Inhaler',
    categorySlug: 'inhaler',
    price: 349,
    formattedPrice: '₹349',
    descriptor: 'Aromatic Dosha-balancing therapeutic inhaler stick',
    image: catInhaler,
    badge: 'Wellness',
    concerns: ['hydration', 'sensitive-skin'],
    ingredients: ['tulsi'],
    dateAdded: '2026-02-08'
  }
]
