import { BFLC_ASSET_LIBRARY } from '../assets/bflcAssetLibrary';
import { PageRoute } from '../types/bflc';

export interface FooterNavItem {
  label: string;
  route?: PageRoute;
  action?: 'privacy';
}

export interface FooterBrandBadge {
  id: string;
  name: string;
  subtitle: string;
  logo: string;
  logoAlt: string;
  panelColor: string;
  websiteUrl: string;
  websiteLabel: string;
}

export interface FooterSocialIconItem {
  id: string;
  label: string;
  platform: 'facebook' | 'x' | 'youtube';
  url: string;
}

export const BFLC_FOOTER_BRANDS: FooterBrandBadge[] = [
  {
    id: 'bennigans',
    name: "Bennigan's",
    subtitle: 'Juffair & Amwaj Islands',
    logo: BFLC_ASSET_LIBRARY.brands.bennigans.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.bennigans.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.bennigans.panelColor,
    websiteUrl: 'https://www.bennigans.com.bh/',
    websiteLabel: 'bennigans.com.bh',
  },
  {
    id: 'cucina-italiana',
    name: 'Cucina Italiana',
    subtitle: 'Juffair, Bahrain',
    logo: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.cucinaItaliana.panelColor,
    websiteUrl: 'http://www.cucinaitaliana.com.bh/',
    websiteLabel: 'cucinaitaliana.com.bh',
  },
  {
    id: 'kazbah-catering',
    name: 'Kazbah Catering',
    subtitle: 'Corporate & Event Catering',
    logo: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logo,
    logoAlt: BFLC_ASSET_LIBRARY.brands.kazbahCatering.logoAlt,
    panelColor: BFLC_ASSET_LIBRARY.brands.kazbahCatering.panelColor,
    websiteUrl: 'http://www.kazbahcatering.com/',
    websiteLabel: 'kazbahcatering.com',
  },
];

// Exact 6-column navigation structure from www.bflc.com.bh footer
export const BFLC_FOOTER_ABOUT_LINKS: FooterNavItem[] = [
  { label: 'History', route: 'about' },
  { label: 'Vision & Strategies', route: 'about' },
  { label: "Chairman's Message", route: 'about' },
  { label: 'The Board of Directors', route: 'about' },
  { label: 'Executive Management', route: 'about' },
];

export const BFLC_FOOTER_BRAND_LINKS: FooterNavItem[] = [
  { label: "Bennigan's Juffair", route: 'brands' },
  { label: 'Cucina Italian', route: 'brands' },
  { label: 'Kazbah', route: 'brands' },
];

export const BFLC_FOOTER_EVENTS_LINKS: FooterNavItem[] = [
  { label: "Bennigan's", route: 'news' },
  { label: 'Cucina Italiana', route: 'news' },
  { label: 'Kazbah Events', route: 'news' },
];

export const BFLC_FOOTER_INVESTOR_LINKS: FooterNavItem[] = [
  { label: 'Financial Reports', route: 'investors' },
  { label: 'Annual Reports', route: 'investors' },
  { label: 'Corporate Governance', route: 'investors' },
  { label: 'Meeting Minutes', route: 'investors' },
  { label: 'BFLC Proxy & AGM Agenda', route: 'investors' },
  { label: 'Board Election Announcement', route: 'investors' },
  { label: 'Property / Real Estate', route: 'investors' },
  { label: 'Key Person Dealing Policy', route: 'investors' },
  { label: 'Corporate Governance Policy', route: 'investors' },
  { label: 'Rights of Shareholders', route: 'investors' },
  { label: 'For Annual General Meeting registration', route: 'investors' },
  { label: 'Disclosure of Material Information', route: 'investors' },
];

export const BFLC_FOOTER_CAREER_LINKS: FooterNavItem[] = [
  { label: 'Current Vacancies', route: 'careers' },
  { label: 'Recruitment Video', route: 'careers' },
];

export const BFLC_FOOTER_STANDALONE_LINKS: FooterNavItem[] = [
  { label: 'Franchise', route: 'business' },
  { label: 'Contact Us', route: 'contact' },
  { label: 'Find Us', route: 'contact' },
  { label: 'Privacy Policy', action: 'privacy' },
];

export const BFLC_FOOTER_FOLLOW_ICONS: FooterSocialIconItem[] = [
  {
    id: 'facebook',
    label: 'Follow BFLC Brands on Facebook',
    platform: 'facebook',
    url: 'https://www.facebook.com/bennigansbahrain/',
  },
  {
    id: 'x',
    label: 'Follow BFLC on X',
    platform: 'x',
    url: 'https://x.com/',
  },
  {
    id: 'youtube',
    label: 'Watch BFLC on YouTube',
    platform: 'youtube',
    url: 'https://www.youtube.com/',
  },
];

export const BFLC_FOOTER_AWARDS = BFLC_ASSET_LIBRARY.awards;

export const BFLC_PRIVACY_POLICY_SECTIONS = [
  {
    heading: 'Data Protection & Corporate Commitment',
    body: 'Bahrain Family Leisure Company B.S.C. (BFLC) respects the privacy of visitors, guests, shareholders, and partners interacting with our digital services and corporate portal.',
  },
  {
    heading: 'Information Collected Automatically',
    body: 'Standard technical log data—such as browser type, device characteristics, access timestamps, and visited pages—may be recorded to preserve platform security and reliability.',
  },
  {
    heading: 'Enquiries & Transaction Information',
    body: 'Contact details and enquiry messages submitted through our corporate desk, catering requests, or career forms are used solely to respond to your request or deliver requested hospitality services.',
  },
  {
    heading: 'Cookies & Minors Policy',
    body: 'Essential cookies may be used to maintain interface preferences and site functionality. BFLC does not knowingly collect personal information from individuals under 18 years of age without parental or guardian consent.',
  },
] as const;
