export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  avatarUrl?: string;
  badge?: string;
}

export interface StructureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  featured?: boolean;
  features: string[];
  ctaText: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface Differentiator {
  id: string;
  title: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
}
