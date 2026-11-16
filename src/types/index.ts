export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: 'Discord Moderation' | 'Community Automation' | 'Security & Verification' | 'Analytics & Engagement';
  badge: string;
  featured: boolean;
  status: 'available' | 'coming-soon';
  description: string;
  priceFormatted?: string;
  features: string[];
  specs: {
    runtime: string;
    library: string;
    database: string;
    architecture: string;
    deployment: string[];
    license: string;
  };
  installationSteps: {
    step: number;
    title: string;
    command?: string;
    details: string;
  }[];
  commands: {
    name: string;
    category: string;
    description: string;
    usage: string;
    permission: string;
  }[];
  iconType: 'titan' | 'atlas' | 'sentinel' | 'pulse';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'licensing' | 'technical' | 'support';
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'shield' | 'zap' | 'headphones';
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  icon: 'search' | 'layers' | 'cart' | 'download' | 'rocket';
}
