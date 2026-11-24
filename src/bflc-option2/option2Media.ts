import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { BUSINESS_OPERATIONS, WHY_BFLC_PILLARS } from '../data/bflcData';

export const OPTION2_MEDIA = {
  heroHospitality: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url,
  culinaryCraft: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
  cateringBanquet: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
  hospitalityLeadership: BFLC_ASSET_LIBRARY.restaurants.loungeBar.url,
  manamaSkylineCta: BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.url,
  bflcLogo: BFLC_ASSET_LIBRARY.company.logo,
  diningRoom: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url,
  loungeBar: BFLC_ASSET_LIBRARY.restaurants.loungeBar.url,
  bennigansBarWide: BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior,
  bennigansCardTop: BFLC_ASSET_LIBRARY.brands.bennigans.interior,
  bennigansCardLogo: BFLC_ASSET_LIBRARY.brands.bennigans.logo,
  cucinaCardTop: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
  cucinaCardLogo: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logo,
  kazbahCardTop: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
  kazbahCardLogo: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo,
} as const;

export interface Option2BusinessDivision {
  id: string;
  index: string;
  title: string;
  shortLabel: string;
  summary: string;
  capabilities: readonly string[];
  image: string;
  imageAlt: string;
}

export const OPTION2_BUSINESS_DIVISIONS: Option2BusinessDivision[] = [
  {
    id: 'casual-dining',
    index: BUSINESS_OPERATIONS[0].index,
    title: BUSINESS_OPERATIONS[0].title,
    shortLabel: 'Casual Dining',
    summary: BUSINESS_OPERATIONS[0].summary,
    capabilities: BUSINESS_OPERATIONS[0].capabilities,
    image: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url,
    imageAlt: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt,
  },
  {
    id: 'concept-creation',
    index: BUSINESS_OPERATIONS[1].index,
    title: BUSINESS_OPERATIONS[1].title,
    shortLabel: 'Concept Creation',
    summary: BUSINESS_OPERATIONS[1].summary,
    capabilities: BUSINESS_OPERATIONS[1].capabilities,
    image: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
    imageAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt,
  },
  {
    id: 'catering-services',
    index: BUSINESS_OPERATIONS[2].index,
    title: BUSINESS_OPERATIONS[2].title,
    shortLabel: 'Kazbah Catering',
    summary: BUSINESS_OPERATIONS[2].summary,
    capabilities: BUSINESS_OPERATIONS[2].capabilities,
    image: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
    imageAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.patternAlt,
  },
  {
    id: 'central-kitchen',
    index: BUSINESS_OPERATIONS[3].index,
    title: BUSINESS_OPERATIONS[3].title,
    shortLabel: 'Operations & Supply',
    summary: BUSINESS_OPERATIONS[3].summary,
    capabilities: BUSINESS_OPERATIONS[3].capabilities,
    image: BFLC_ASSET_LIBRARY.restaurants.loungeBar.url,
    imageAlt: BFLC_ASSET_LIBRARY.restaurants.loungeBar.alt,
  },
];

export interface Option2BrandSpotlight {
  id: string;
  name: string;
  origin: string;
  category: string;
  locations: string;
  summary: string;
  description: string;
  highlights: string[];
  photo: string;
  photoAlt: string;
  logo: string;
  logoAlt: string;
  panelColor: string;
}

export const OPTION2_BRANDS: Option2BrandSpotlight[] = [
  {
    id: 'bennigans',
    name: "Bennigan's",
    origin: 'International Franchise · Bahrain Operations',
    category: 'Casual Dining',
    locations: 'Al Safir Hotel, Juffair · Amwaj Islands',
    summary:
      'Signature American-style casual dining restaurant and neighborhood grill renowned for hearty steaks, burgers, and welcoming hospitality.',
    description:
      "As a flagship franchise within BFLC's portfolio, Bennigan's delivers vibrant casual dining designed around generous portions, classic grill favorites, and spirited neighborhood hospitality across indoor and outdoor seating.",
    highlights: [
      'Full-service casual dining & grill menu',
      'Family-friendly atmosphere with indoor & outdoor seating',
      'Live band performances and curated seasonal dining nights',
    ],
    photo: BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior,
    photoAlt: BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.alt,
    logo: BFLC_ASSET_LIBRARY.brands.bennigans.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.bennigans.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.bennigans.panelColor,
  },
  {
    id: 'cucina-italiana',
    name: 'Cucina Italiana',
    origin: 'Homegrown Concept · Est. 2012',
    category: 'Casual Dining',
    locations: 'Juffair, Kingdom of Bahrain',
    summary:
      'An award-winning homegrown Italian bistro celebrated for hand-tossed pizzas, fresh pasta, classic design, and live acoustic ambience.',
    description:
      'Developed in-house by BFLC in 2012, Cucina Italiana brings authentic Italian culinary warmth to Bahrain—pairing artisanal pizzas and fresh pasta with warm classic bistro interiors and live saxophone evenings.',
    highlights: [
      'Homegrown culinary concept conceived and operated by BFLC',
      'Artisanal hand-tossed pizzas and fresh pasta dishes',
      'Warm classic bistro interior with live saxophone entertainment',
    ],
    photo: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
    photoAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt,
    logo: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.panelColor,
  },
  {
    id: 'kazbah-catering',
    name: 'Kazbah Catering',
    origin: 'Homegrown Division · Est. 2012',
    category: 'Catering',
    locations: 'Kingdom-wide Corporate & Private Events',
    summary:
      'Dedicated culinary and event catering division delivering bespoke food and beverage service for corporate, diplomatic, and private gatherings.',
    description:
      'Launched alongside BFLC’s homegrown expansion, Kazbah Catering extends the company’s kitchen discipline and hospitality standards beyond restaurant walls for executive luncheons, receptions, and private celebrations.',
    highlights: [
      'Customized international, Arabic, and specialty menus',
      'Trained banquet service staff and on-site coordination',
      'Full logistical support for corporate and private functions',
    ],
    photo: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
    photoAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.patternAlt,
    logo: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.kazbahCatering.panelColor,
  },
];

export interface Option2CapabilityCard {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export const OPTION2_CAPABILITIES: Option2CapabilityCard[] = [
  {
    id: 'hospitality-expertise',
    index: WHY_BFLC_PILLARS[0].index,
    title: WHY_BFLC_PILLARS[0].title,
    description: WHY_BFLC_PILLARS[0].description,
    image: BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior,
    imageAlt: BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.alt,
    points: [
      'Over three decades managing full-service dining operations in Bahrain',
      'Integrated front-of-house training and executive culinary leadership',
      'Balanced execution across international franchises and original venues',
    ],
  },
  {
    id: 'guest-experience',
    index: WHY_BFLC_PILLARS[1].index,
    title: WHY_BFLC_PILLARS[1].title,
    description: WHY_BFLC_PILLARS[1].description,
    image: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url,
    imageAlt: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.alt,
    points: [
      'Attentive, personal service tailored for families and business guests',
      'Atmosphere-driven interiors with live acoustic and band entertainment',
      'Consistent menu craftsmanship across dining and banquet occasions',
    ],
  },
  {
    id: 'operational-commitment',
    index: WHY_BFLC_PILLARS[2].index,
    title: WHY_BFLC_PILLARS[2].title,
    description: WHY_BFLC_PILLARS[2].description,
    image: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
    imageAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interiorAlt,
    points: [
      'Strict HACCP food safety governance and central kitchen oversight',
      'Reliable supplier auditing and ingredient freshness standards',
      'Cost-disciplined multi-outlet reporting and kitchen efficiency',
    ],
  },
  {
    id: 'brand-development',
    index: WHY_BFLC_PILLARS[3].index,
    title: WHY_BFLC_PILLARS[3].title,
    description: WHY_BFLC_PILLARS[3].description,
    image: BFLC_ASSET_LIBRARY.brands.bennigans.interior,
    imageAlt: BFLC_ASSET_LIBRARY.brands.bennigans.interiorAlt,
    points: [
      'Conceiving and launching original homegrown concepts since 2012',
      'Scaling private dining and Kingdom-wide catering divisions',
      'Disciplined stewardship under Bahrain Bourse governance (FAMILY)',
    ],
  },
];
