export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
  turnaround: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Luxury Homes' | 'Apartments' | 'Modular Kitchens' | 'Furniture Showrooms' | 'Commercial Projects' | 'Office Interiors';
  categoryLabel: string;
  location: 'Mumbai' | 'Hyderabad';
  image: string;
  client: string;
  deliverables: string[];
  reelsCount: number;
  photosCount: number;
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: 'Mumbai' | 'Hyderabad';
  image: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface WhyContentMattersItem {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  iconName: string;
}

