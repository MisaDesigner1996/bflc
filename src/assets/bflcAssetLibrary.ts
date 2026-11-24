/**
 * Centralized BFLC Authentic Visual Asset Library
 *
 * Single canonical source of verified, high-resolution enhanced BFLC visual assets
 * shared across Design Option 1, Design Option 2, Design Option 3, and Design Option 4.
 *
 * Organized by category:
 * - company: Official BFLC bilingual corporate mark & hospitality team photography
 * - restaurants: Enhanced original BFLC restaurant & bar interiors
 * - brands: Official confirmed brand photography, patterns, and logos
 * - awards: Official Awards & Accolades badges from bflc.com.bh footer
 */

export const BFLC_ASSET_LIBRARY = {
  company: {
    logo: '/assets/aistudio/Bahrain_Family_Leisure_Logo_41f962e6.png',
    logoAlt: 'Bahrain Family Leisure Company B.S.C. — Official Bilingual Logo',
    hospitalityTeam: '/assets/bflc/enhanced/bflc-hospitality-team.jpg',
    hospitalityTeamAlt:
      'Bahrain Family Leisure Company hospitality, culinary, and dining room service teams across Cucina Italiana and Bennigan’s',
  },
  restaurants: {
    cucinaDiningRoom: {
      url: '/assets/bflc/enhanced/cucina-dining-room.jpg',
      originalFilename: 'IMG_1106-399x300.jpg',
      alt: 'Warm casual dining room interior operated by Bahrain Family Leisure Company',
    },
    loungeBar: {
      url: '/assets/bflc/enhanced/cucina-wine-bar.jpg',
      originalFilename: 'Bar1-399x300.jpg',
      alt: 'Timber bar and casual dining table setting at Cucina Italiana venue',
    },
    bennigansBarWide: {
      url: '/assets/bflc/enhanced/bennigans-bar-wide.jpg',
      originalFilename: 'bennigans-4-555x275.jpg',
      alt: "Bennigan's neighborhood bar interior with timber seating, screens, and illuminated Bennigan's emblem",
    },
    bennigansDiningRoom: {
      url: '/assets/bflc/enhanced/bennigans-dining-room.jpg',
      originalFilename: 'new-bennigans-2-399x300.jpg',
      alt: "Bennigan's sunlit leather booth dining room and timber table settings in Bahrain",
    },
  },
  brands: {
    bennigans: {
      interior: '/assets/bflc/enhanced/bennigans-dining-room.jpg',
      wideInterior: '/assets/bflc/enhanced/bennigans-bar-wide.jpg',
      interiorAlt: "Bennigan's warm timber booth and restaurant dining interior in Bahrain",
      logo: '/assets/bflc/enhanced/bennigans-logo.png',
      logoAlt: "Bennigan's — American Fare, Irish Hospitality",
      panelColor: '#477626',
    },
    cucinaItaliana: {
      interior: '/assets/bflc/enhanced/cucina-wine-bar.jpg',
      diningHall: '/assets/bflc/enhanced/cucina-dining-room.jpg',
      interiorAlt: 'Cucina Italiana warm brick bar and candlelit bistro dining interior in Juffair',
      logo: '/assets/bflc/enhanced/cucina-logo.png',
      logoAlt: 'Cucina Italian Restaurant',
      panelColor: '#231F20',
    },
    kazbahCatering: {
      pattern: '/assets/bflc/enhanced/kazbah-pattern.png',
      patternAlt: 'Kazbah Catering signature geometric pattern backdrop',
      logo: '/assets/bflc/enhanced/kazbah-logo.png',
      logoAlt: 'Kazbah Catering',
      panelColor: '#47C8F2',
    },
  },
  awards: [
    {
      id: 'fact-2018-bennigans',
      image: '/assets/bflc/enhanced/award-fact-2018-bennigans.png',
      alt: "FACT Dining Awards Bahrain 2018 Winner — Best North American Restaurant in Bahrain 2018 — Bennigan's",
    },
    {
      id: 'fact-2018-cucina',
      image: '/assets/bflc/enhanced/award-fact-2018-cucina.png',
      alt: 'FACT Dining Awards Bahrain 2018 Winner — Best Casual-Dining Italian Restaurant in Bahrain 2018 — Cucina Italian Restaurant',
    },
    {
      id: 'timeout-2013-cucina',
      image: '/assets/bflc/enhanced/award-timeout-2013-cucina.png',
      alt: 'Time Out Bahrain Restaurant Awards 2013 Winner — Best Italian',
    },
    {
      id: 'citibank-fact-2013-bennigans',
      image: '/assets/bflc/enhanced/award-citibank-fact-2013-bennigans.png',
      alt: "Citibank FACT Awards Winner — Favourite North American Restaurant in Bahrain 2013 — Bennigan's",
    },
  ],
} as const;
