import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import {
  BoardMember,
  BrandItem,
  InvestorDocument,
  JobOpening,
  NewsArticle,
} from '../types/bflc';

export const BFLC_ASSETS = {
  logo: BFLC_ASSET_LIBRARY.company.logo,
  hospitalityTeam: BFLC_ASSET_LIBRARY.company.hospitalityTeam,
  diningRoom: BFLC_ASSET_LIBRARY.restaurants.cucinaDiningRoom.url,
  loungeBar: BFLC_ASSET_LIBRARY.restaurants.loungeBar.url,
  bennigansInterior: BFLC_ASSET_LIBRARY.brands.bennigans.interior,
  bennigansBarWide: BFLC_ASSET_LIBRARY.brands.bennigans.wideInterior,
  cucinaInterior: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.interior,
  kazbahPattern: BFLC_ASSET_LIBRARY.brands.kazbahCatering.pattern,
  kazbahLogo: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo,
} as const;

export const COMPANY_INFO = {
  legalName: 'Bahrain Family Leisure Company B.S.C.',
  shortName: 'BFLC',
  arabicName: 'شركة البحرين للعطلات العائلية ش.م.ب',
  establishedDate: 'July 13, 1994',
  establishedYear: '1994',
  bourseExchange: 'Bahrain Bourse',
  bourseSymbol: 'FAMILY',
  website: 'www.bflc.com.bh',
  generalEmail: 'info@bflc.com.bh',
  financeEmail: 'finance@bflc.com.bh',
  phone: '+973 1729 2973',
  fax: '+973 1729 4676',
  addressLine1: 'Office No. 15, Building No. 44 (Bahrain Tourism Tower)',
  addressLine2: 'Road 1701, Block 317, Diplomatic Area',
  poBox: 'P.O. Box 11612, Manama, Kingdom of Bahrain',
  workingHours: 'Sunday – Thursday, 8:00 AM – 5:00 PM (AST)',
} as const;

export const WHY_BFLC_PILLARS = [
  {
    index: '01',
    title: 'Hospitality expertise',
    description:
      'Decades of practical knowledge across full-service casual dining, restaurant management, and commercial food service operations in Bahrain.',
  },
  {
    index: '02',
    title: 'Guest experience',
    description:
      'An enduring focus on warm, attentive service, inviting dining rooms, and memorable gatherings for families and corporate guests alike.',
  },
  {
    index: '03',
    title: 'Operational commitment',
    description:
      'Disciplined kitchen workflows, ingredient sourcing standards, and consistent quality delivery across every dining table and catered event.',
  },
  {
    index: '04',
    title: 'Brand development',
    description:
      'Proven capability in stewarding established international franchises while cultivating homegrown concepts tailored to regional dining preferences.',
  },
] as const;

export const COMPANY_HIGHLIGHTS = [
  {
    metric: '1994',
    label: 'Year Established',
    detail: 'Founded in the Kingdom of Bahrain on July 13, 1994 as a public shareholding hospitality enterprise.',
  },
  {
    metric: 'FAMILY',
    label: 'Bahrain Bourse Ticker',
    detail: 'Publicly listed on the Bahrain Bourse with transparent governance and shareholder reporting.',
  },
  {
    metric: 'Core Portfolio',
    label: 'Restaurants & Catering',
    detail: 'Operating signature casual dining venues alongside dedicated corporate and private event catering.',
  },
  {
    metric: 'Manama HQ',
    label: 'Diplomatic Area Presence',
    detail: 'Headquartered at Bahrain Tourism Tower, supporting dining venues and hospitality teams across Bahrain.',
  },
] as const;

export const BRANDS_PORTFOLIO: BrandItem[] = [
  {
    id: 'bennigans',
    name: "Bennigan's",
    category: 'Casual Dining',
    origin: 'International Franchise',
    summary:
      'Signature American-style casual dining restaurant and neighborhood grill renowned for hearty steaks, burgers, and welcoming hospitality.',
    description:
      "As a flagship franchise within BFLC's portfolio, Bennigan's delivers vibrant casual dining designed around generous portions, classic grill favorites, and spirited neighborhood hospitality. Venues feature both indoor dining rooms and outdoor seating accompanied by live evening entertainment.",
    locations: ['Al Safir Hotel, Juffair', 'Amwaj Islands'],
    highlights: [
      'Full-service casual dining & grill menu',
      'Family-friendly atmosphere with indoor & outdoor seating',
      'Live band performances and curated seasonal dining nights',
    ],
    image: BFLC_ASSETS.bennigansBarWide,
    imageAlt: BFLC_ASSET_LIBRARY.restaurants.bennigansBarWide.alt,
  },
  {
    id: 'cucina-italiana',
    name: 'Cucina Italiana',
    category: 'Casual Dining',
    origin: 'Homegrown Concept · Est. 2012',
    summary:
      'An award-winning homegrown Italian bistro celebrated for hand-tossed pizzas, fresh pasta, classic design, and live acoustic ambience.',
    description:
      'Developed in-house by BFLC in 2012, Cucina Italiana brings authentic Italian culinary warmth to Bahrain. Crafted around wood-fired hand-tossed pizzas, freshly prepared pastas, and classic bistro interiors, the concept pairs traditional recipes with live saxophone evenings.',
    locations: ['Juffair, Kingdom of Bahrain'],
    highlights: [
      'Homegrown culinary concept conceived and operated by BFLC',
      'Artisanal hand-tossed pizzas and fresh pasta dishes',
      'Warm classic bistro interior with live saxophone entertainment',
    ],
    image: BFLC_ASSETS.diningRoom,
    imageAlt: 'Inviting evening dining room with red leather seating and warm hospitality lighting',
  },
  {
    id: 'kazbah-catering',
    name: 'Kazbah Catering',
    category: 'Catering',
    origin: 'Homegrown Division · Est. 2012',
    summary:
      'Dedicated culinary and event catering division delivering bespoke food and beverage service for corporate, diplomatic, and private gatherings.',
    description:
      'Launched alongside BFLC’s homegrown expansion, Kazbah Catering extends the company’s kitchen discipline and hospitality standards beyond restaurant walls. From executive board luncheons and diplomatic receptions to private celebrations, every menu is tailored to the occasion.',
    locations: ['Kingdom-wide Corporate & Private Events'],
    highlights: [
      'Customized international, Arabic, and specialty menus',
      'Trained banquet service staff and on-site coordination',
      'Full logistical support for corporate and private functions',
    ],
  },
  {
    id: 'hospitality-ecosystem',
    name: 'Multi-Brand Hospitality Network',
    category: 'Hospitality Ecosystem',
    origin: 'Strategic Expansion · Truffle Hospitality Integration',
    summary:
      'Expanded culinary platform encompassing fast-casual dining, specialty cafés, and central kitchen infrastructure.',
    description:
      'Through BFLC’s strategic integration with Truffle Hospitality Holding, the company broadened its operational footprint across fast-casual dining, contemporary café concepts, and centralized kitchen production—strengthening procurement, culinary R&D, and multi-site scalability.',
    locations: ['Kingdom of Bahrain & Regional Operations'],
    highlights: [
      'Unified central kitchen and supply-chain discipline',
      'Diverse fast-casual and café dining formats',
      'Scalable infrastructure for regional concept growth',
    ],
  },
];

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'Mohamed Nedham Khonji',
    role: 'Chairman',
    classification: 'Board Leadership',
  },
  {
    name: 'Mahmood Mohammed Ali',
    role: 'Vice Chairman',
    classification: 'Board Leadership',
  },
  {
    name: 'Khaled Mohamed AlHammadi',
    role: 'Director',
    classification: 'Non-Executive Director',
  },
  {
    name: 'Wissam Hussein',
    role: 'Director',
    classification: 'Non-Executive Director',
  },
  {
    name: 'Faisal Hassan AlJalahma',
    role: 'Director',
    classification: 'Non-Executive Director',
  },
  {
    name: 'Farooq Mohamed AlKhaja',
    role: 'Director',
    classification: 'Independent Director',
  },
  {
    name: 'Ayman Moussa Abdelghany Gadallah',
    role: 'Director',
    classification: 'Independent Director',
  },
];

export const BUSINESS_OPERATIONS = [
  {
    index: '01',
    title: 'Casual Dining Restaurant Operations',
    summary:
      'End-to-end management of full-service dining venues combining culinary consistency, trained front-of-house teams, and welcoming environments.',
    capabilities: [
      'Daily kitchen & floor operations management',
      'Menu engineering and seasonal culinary programming',
      'Guest satisfaction tracking and service hospitality standards',
    ],
  },
  {
    index: '02',
    title: 'Homegrown Concept Creation',
    summary:
      'Designing and launching original dining brands tailored to Bahrain’s evolving culinary tastes and family dining culture.',
    capabilities: [
      'Brand positioning, interior atmosphere, and menu identity',
      'Recipe standardization and culinary talent development',
      'Sustained brand stewardship from launch to maturity',
    ],
  },
  {
    index: '03',
    title: 'Corporate & Private Catering',
    summary:
      'Full-service off-premise catering through Kazbah Catering, built for reliability, presentation, and punctual hospitality execution.',
    capabilities: [
      'Bespoke menus for institutional, diplomatic, and social events',
      'Hygienic food transport and on-site service teams',
      'Flexible service formats from executive buffets to plated dining',
    ],
  },
  {
    index: '04',
    title: 'Central Kitchen & Supply Chain',
    summary:
      'Centralized preparation, food safety governance, and strategic vendor partnerships supporting multi-outlet consistency.',
    capabilities: [
      'Strict food safety and hygiene compliance protocols',
      'Centralized sourcing and quality assurance inspections',
      'Scalable operational backbone for brand expansion',
    ],
  },
] as const;

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-strategic-hospitality-growth',
    date: 'Corporate Update',
    category: 'Corporate',
    title: 'Strengthening BFLC’s Multi-Brand Hospitality Platform in Bahrain',
    excerpt:
      'Continuing our commitment to disciplined restaurant operations, central kitchen efficiency, and welcoming guest experiences across the Kingdom.',
    body: [
      'Bahrain Family Leisure Company B.S.C. (BFLC) continues to advance its position as a dedicated hospitality operator in the Kingdom of Bahrain, combining three decades of local market experience with modern operational governance.',
      'Across our casual dining restaurants, homegrown concepts, and catering operations, our leadership and culinary teams remain focused on menu quality, attentive service, and sustainable value creation for guests and shareholders.',
      'As BFLC confirms upcoming brand activations and seasonal dining calendars, official announcements and portfolio milestones will continue to be published here and through the Bahrain Bourse.',
    ],
    image: BFLC_ASSETS.diningRoom,
    imageAlt: 'BFLC casual dining room interior prepared for evening service',
  },
  {
    id: 'news-dining-atmosphere',
    date: 'Brands & Dining',
    category: 'Brands & Dining',
    title: 'Evening Hospitality & Live Entertainment Across Signature Venues',
    excerpt:
      'From artisanal Italian fare at Cucina Italiana to classic grill favorites at Bennigan’s, our dining rooms bring families and friends together.',
    body: [
      'Creating memorable guest moments sits at the heart of BFLC’s operating philosophy. At Bennigan’s Juffair and Amwaj Islands, guests enjoy classic American-style casual dining paired with indoor-outdoor seating and live band evenings.',
      'Meanwhile, our homegrown bistro Cucina Italiana continues to welcome diners with hand-tossed pizzas, fresh pasta, and live saxophone performances in a warm, classic Italian setting.',
      'For private gatherings and corporate functions, Kazbah Catering brings the same culinary craftsmanship directly to venues across the Kingdom.',
    ],
    image: BFLC_ASSETS.loungeBar,
    imageAlt: 'Ambient bar and casual dining table setting',
  },
  {
    id: 'news-shareholder-transparency',
    date: 'Investor Relations',
    category: 'Investor Disclosures',
    title: 'Commitment to Transparent Shareholder Reporting & Governance',
    excerpt:
      'Access BFLC’s audited financial statements, corporate governance frameworks, and Bahrain Bourse regulatory filings in our Investor Relations hub.',
    body: [
      'Listed on the Bahrain Bourse under the ticker FAMILY, Bahrain Family Leisure Company B.S.C. upholds clear statutory reporting and corporate governance standards.',
      'Shareholders, analysts, and institutional partners can review annual and quarterly financial disclosures, Annual General Meeting notices, ESG updates, and board governance policies via our dedicated Investor Relations portal.',
      'For direct shareholder enquiries, our finance team remains available at finance@bflc.com.bh.',
    ],
    image: BFLC_ASSETS.bennigansInterior,
    imageAlt: "Bennigan's casual dining restaurant interior operated by BFLC in Bahrain",
  },
];

export const INVESTOR_DOCUMENTS: InvestorDocument[] = [
  {
    id: 'doc-annual-report',
    title: 'Annual Audited Financial Statements & Board Report',
    category: 'reports',
    period: 'Full Year Statutory Filing',
    publishedDate: 'Annual Cycle · Bahrain Bourse',
    referenceCode: 'BHB-FAMILY-AR',
    summary:
      'Comprehensive audited financial statements prepared in accordance with IFRS, accompanied by the Chairman’s Statement and Independent Auditor’s Report.',
    highlights: [
      'Statement of financial position, comprehensive income, and cash flows',
      'Board of Directors commentary on hospitality operations and performance',
      'Independent external auditor opinion and notes to the accounts',
    ],
  },
  {
    id: 'doc-interim-financials',
    title: 'Quarterly Reviewed Interim Financial Results',
    category: 'reports',
    period: 'Q1 / Q2 / Q3 Interim Reviews',
    publishedDate: 'Quarterly Regulatory Disclosure',
    referenceCode: 'BHB-FAMILY-INT',
    summary:
      'Condensed interim financial information reviewed in compliance with Central Bank of Bahrain and Bahrain Bourse disclosure timelines.',
    highlights: [
      'Quarterly operating revenue and cost discipline metrics',
      'Working capital and liquidity overview',
      'Material operational updates during the reporting quarter',
    ],
  },
  {
    id: 'doc-esg-sustainability',
    title: 'Environmental, Social & Governance (ESG) Report',
    category: 'reports',
    period: 'Annual Sustainability Disclosure',
    publishedDate: 'Bahrain Bourse ESG Framework',
    referenceCode: 'BHB-FAMILY-ESG',
    summary:
      'Overview of BFLC’s workplace standards, food safety governance, community initiatives, and environmental responsibility across dining operations.',
    highlights: [
      'Hospitality workforce training, health, and safety standards',
      'Food quality assurance and responsible sourcing practices',
      'Board oversight and ethical business conduct',
    ],
  },
  {
    id: 'doc-agm-notice',
    title: 'Annual General Meeting (AGM) Notice & Agenda',
    category: 'agm',
    period: 'Shareholder Assembly',
    publishedDate: 'Annual Statutory Notice',
    referenceCode: 'BFLC-AGM-AGENDA',
    summary:
      'Official notice convening shareholders for the Annual General Meeting, including agenda items, proxy procedures, and voting guidelines.',
    highlights: [
      'Review and approval of the Board of Directors’ annual report',
      'Ratification of audited financial statements and external auditors',
      'Shareholder Q&A and statutory governance resolutions',
    ],
  },
  {
    id: 'doc-egm-resolutions',
    title: 'Extraordinary General Meeting (EGM) Circulars & Resolutions',
    category: 'agm',
    period: 'Strategic Corporate Actions',
    publishedDate: 'Event-Driven Disclosure',
    referenceCode: 'BFLC-EGM-CIRC',
    summary:
      'Shareholder circulars and resolutions covering strategic expansions, capital structure matters, and Memorandum & Articles updates.',
    highlights: [
      'Full resolution texts and regulatory approvals summary',
      'Strategic rationale for hospitality portfolio integrations',
      'Official Bahrain Bourse market release confirmation',
    ],
  },
  {
    id: 'doc-corp-governance',
    title: 'Corporate Governance Charter & Board Framework',
    category: 'governance',
    period: 'Standing Policy',
    publishedDate: 'Governance Repository',
    referenceCode: 'BFLC-CG-01',
    summary:
      'Defines Board composition, committee mandates (Audit, Nomination & Remuneration), and compliance with the Bahrain Corporate Governance Code.',
    highlights: [
      'Independent and Non-Executive Director oversight structure',
      'Internal control, risk management, and compliance accountability',
      'Annual corporate governance compliance reporting',
    ],
  },
  {
    id: 'doc-key-person-dealing',
    title: 'Key Person Dealing & Material Information Policy',
    category: 'governance',
    period: 'Standing Policy',
    publishedDate: 'Bahrain Bourse Compliance',
    referenceCode: 'BFLC-KP-02',
    summary:
      'Governs blackout periods, insider trading safeguards, and timely public disclosure of material corporate developments.',
    highlights: [
      'Mandatory closed trading windows around financial results',
      'Registry of insiders and key persons reporting obligations',
      'Equal and timely access to material market information',
    ],
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-restaurant-manager',
    title: 'Restaurant General Manager',
    department: 'Restaurant Operations',
    location: 'Juffair / Amwaj Islands, Bahrain',
    employmentType: 'Full-Time',
    summary:
      'Lead daily dining room and kitchen coordination, coach hospitality teams, and maintain welcoming guest service standards across peak periods.',
    requirements: [
      'Proven leadership experience in full-service casual dining operations',
      'Strong grasp of P&L, labor scheduling, and inventory control',
      'Commitment to guest satisfaction and team development',
    ],
  },
  {
    id: 'job-sous-chef',
    title: 'Senior Sous Chef',
    department: 'Culinary & Kitchens',
    location: 'Manama, Bahrain',
    employmentType: 'Full-Time',
    summary:
      'Oversee line execution, prep consistency, and food safety compliance while mentoring junior culinary staff in high-volume kitchens.',
    requirements: [
      'Experience in international casual dining or Italian bistro kitchens',
      'Certified knowledge of HACCP and hygiene standards',
      'Ability to maintain plating consistency and kitchen discipline',
    ],
  },
  {
    id: 'job-catering-coordinator',
    title: 'Events & Catering Coordinator',
    department: 'Kazbah Catering',
    location: 'Manama, Bahrain',
    employmentType: 'Full-Time',
    summary:
      'Manage corporate and private catering enquiries from menu proposal through on-site banquet delivery across the Kingdom.',
    requirements: [
      'Background in hospitality event planning or banquet coordination',
      'Clear client communication in English and Arabic',
      'Strong attention to timelines and service presentation',
    ],
  },
  {
    id: 'job-finance-analyst',
    title: 'Corporate Accountant / Financial Analyst',
    department: 'Finance & Investor Relations',
    location: 'Diplomatic Area HQ, Manama',
    employmentType: 'Full-Time',
    summary:
      'Support outlet financial reporting, statutory audit preparation, and Bahrain Bourse disclosure documentation at corporate headquarters.',
    requirements: [
      'Bachelor’s degree in Accounting or Finance (CPA/ACCA/CMA an advantage)',
      'Experience with hospitality cost accounting or multi-unit reporting',
      'High proficiency in financial modeling and IFRS compliance',
    ],
  },
];
