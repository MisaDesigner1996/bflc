export type PageRoute =
  | 'home'
  | 'about'
  | 'business'
  | 'brands'
  | 'investors'
  | 'news'
  | 'careers'
  | 'contact';

export type BrandCategory = 'Casual Dining' | 'Catering' | 'Hospitality Ecosystem';

export interface BrandItem {
  id: string;
  name: string;
  category: BrandCategory;
  origin: string;
  summary: string;
  description: string;
  locations: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
}

export interface BoardMember {
  name: string;
  role: string;
  classification: string;
}

export type NewsCategory = 'Corporate' | 'Brands & Dining' | 'Investor Disclosures';

export interface NewsArticle {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  body: string[];
  image?: string;
  imageAlt?: string;
}

export type InvestorTab = 'reports' | 'agm' | 'governance';

export interface InvestorDocument {
  id: string;
  title: string;
  category: InvestorTab;
  period: string;
  publishedDate: string;
  referenceCode: string;
  summary: string;
  highlights: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  requirements: string[];
}
