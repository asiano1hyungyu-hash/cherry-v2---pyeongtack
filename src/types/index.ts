export interface BrandConfig {
  brand: string;
  phoneDisplay: string;
  phoneTel: string;
  smsNumber: string;
  kakaoUrl: string;
  operatingHours: string;
  paymentMethod: string;
  establishedTagline: string;
  qualityPromise: string;
}

export interface ProgramTimeOption {
  minutes: number;
  price: number;
  priceFormatted: string;
  popular?: boolean;
}

export interface ProgramItem {
  id: string;
  name: string;
  subname: string;
  tagline: string;
  badge?: string;
  recommended?: boolean;
  description: string;
  options: ProgramTimeOption[];
  highlights: string[];
  bestFor: string;
  iconType: 'dry' | 'oil' | 'premium';
}

export interface SituationRecommendation {
  id: string;
  situationTitle: string;
  situationSub: string;
  recommendedProgram: string;
  reason: string;
  programId: string;
  badge: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface StepGuide {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tip?: string;
}

export interface ServiceAreaGroup {
  regionName: string;
  areas: string[];
  description: string;
}

export interface TrustPoint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuickStat {
  code: string;
  title: string;
  desc: string;
}

export interface CityConfig {
  cityKo: string;
  cityEn: string;
  keyword: string;
  domain: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubhead: string;
  heroImage: string;
  ogImage: string;
  serviceDescription: string;
  quickStats: QuickStat[];
  serviceFeatures: ServiceFeature[];
  programs: ProgramItem[];
  recommendations: SituationRecommendation[];
  steps: StepGuide[];
  areas: string[];
  areaGroups?: ServiceAreaGroup[];
  trustPoints: TrustPoint[];
  faqs: FaqItem[];
  finalCtaTitle: string;
  finalCtaSubhead: string;
}
