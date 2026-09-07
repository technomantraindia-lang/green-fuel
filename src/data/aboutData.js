// Import Images for About Us page
import heroBgImg from '../assets/arch_studio_background.png'
import philosophyImg from '../assets/ayurvedic_ingredients_1786085356082.png'
import storyRootsImg from '../assets/split_ayurveda_herbs.png'
import scienceLabImg from '../assets/split_science_lab.png'
import visionImg from '../assets/hero_woman_product.png'
import mortarLabImg from '../assets/what_is_lab_flasks.jpg'

export const ABOUT_HERO_DATA = {
  eyebrow: 'ABOUT GREENFUEL',
  title: 'About Greenfuel',
  subtitle: 'Where Tradition Becomes Tomorrow',
  copy: "Greenfuel is a tribute to India's timeless wisdom - a place where ancient rituals meet modern science, authenticity meets innovation, and purity meets performance.",
  image: heroBgImg
}

export const ABOUT_PHILOSOPHY_DATA = {
  badge: 'OUR PHILOSOPHY',
  heading: 'Rooted in Tradition. Refined by Science. Inspired by Nature.',
  body: "Greenfuel brings together Ayurvedic wisdom, traditional Indian beauty rituals, and botanical ingredients trusted across generations, refining them through modern research, advanced manufacturing practices, and quality standards for today's world.",
  image: philosophyImg,
  pillars: [
    { title: 'Ayurvedic Wisdom', desc: 'Time-tested botanical intelligence from classical Samhita codices' },
    { title: 'Modern Science', desc: 'Dermatological bio-availability & bio-active extraction precision' },
    { title: 'Purposeful Formulation', desc: '100% full ingredient transparency with zero synthetic fillers' },
    { title: 'Holistic Approach', desc: 'Nourishing mind, body, and spirit through mindful daily beauty rituals' }
  ]
}

export const ABOUT_STORY_DATA = {
  badge: 'OUR STORY',
  title: 'A Journey Back to Our Roots',
  leadCopy: 'Long before beauty became a shelf of complex formulations, Indian homes relied on turmeric, sandalwood, hibiscus, coconut oil, aloe vera, and carefully prepared herbs.',
  bodyCopy: 'Generations changed. Fashion changed. Technology changed. But these traditions remained timeless. That realization became the birth of Greenfuel.',
  missionQuestion: 'Why choose between tradition and science?',
  missionAnswer: "Greenfuel was created with a larger purpose: to reconnect modern lifestyles with India's authentic heritage of natural wellness and beauty, while making those traditions relevant to contemporary life.",
  image: storyRootsImg
}

export const ABOUT_BALANCE_DATA = {
  badge: 'HARMONIOUS DUALITY',
  heading: 'Tradition x Science - The Perfect Balance',
  ayurvedaWisdom: {
    title: 'The Wisdom of Ayurveda',
    points: [
      '5,000-year-old time-tested herbs & rituals',
      'Holistic Dosha balancing philosophy',
      'Synergistic botanical combinations',
      'Traditional sun-dried & cold-infused extraction'
    ]
  },
  sciencePower: {
    title: 'The Power of Science',
    points: [
      'Rigorous research & molecular formulation',
      'Dermatological bio-availability standards',
      'Clean small-batch manufacturing discipline',
      'Contemporary relevance for modern families'
    ]
  },
  centerImage: scienceLabImg,
  mortarImage: mortarLabImg,
  closingQuote: 'Innovation should strengthen tradition, not replace it.'
}

export const ABOUT_BELIEFS = [
  {
    number: '01',
    title: 'Selected with Purpose',
    statement: 'Every ingredient is selected with purpose and verified for biological potency.'
  },
  {
    number: '02',
    title: 'Designed with Respect',
    statement: 'Every formulation is designed with respect for body harmony and nature.'
  },
  {
    number: '03',
    title: 'Rooted in Culture',
    statement: 'Every product carries a timeless story deeply rooted in Indian culture.'
  },
  {
    number: '04',
    title: 'Purity as Responsibility',
    statement: 'Purity is a sacred responsibility, never a marketing claim.'
  },
  {
    number: '05',
    title: 'Authenticity as Identity',
    statement: 'Authenticity is our true identity in every bottle we craft.'
  },
  {
    number: '06',
    title: 'Nature First Choice',
    statement: 'Nature is always our first choice for lasting dermal health.'
  }
]

export const ABOUT_VISION_DATA = {
  badge: 'OUR VISION',
  title: 'Reviving Traditions for Modern Living',
  lead: "Greenfuel's vision extends far beyond skincare.",
  copy: "We aspire to revive India's forgotten beauty traditions and transform them into premium, trustworthy formulations for modern families across the world. Each application should feel like reconnecting with something familiar, nurturing, and deeply rooted in culture.",
  image: visionImg
}

export const ABOUT_BELIEF_MANIFESTO = {
  badge: 'MORE THAN A COSMETIC',
  quote: 'When someone chooses Greenfuel, they are not simply buying a cosmetic. They are embracing a philosophy.',
  principles: [
    { title: 'Beauty Should Nourish', detail: 'Nourish the dermal barrier, not merely decorate the surface.' },
    { title: 'Skincare Should Respect', detail: 'Respect the body biology, not burden it with synthetic toxins.' },
    { title: 'Innovation Should Strengthen', detail: 'Strengthen timeless tradition rather than replace it.' }
  ]
}

export const ABOUT_CLOSING_MANIFESTO = {
  heading: 'Rooted in Tradition. Refined by Science. Inspired by Nature.',
  subheading: "Greenfuel is a tribute to India's timeless wisdom - where ancient rituals meet modern science.",
  tagline: 'Ancient rituals meet modern science. Authenticity meets innovation. Purity meets performance.'
}
