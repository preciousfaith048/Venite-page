export interface Faculty {
  id: string;
  name: string;
  description: string;
  iconName: string; // Refers to Lucide icon name
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  subtitle: string;
  details: string[];
  iconName: string;
}

export interface Programme {
  id: string;
  name: string;
  duration: string;
  faculty: string;
  description: string;
  degreeType: 'undergraduate' | 'postgraduate' | 'certification';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'exams' | 'admissions' | 'holidays';
  semester: 'fall' | 'spring' | 'summer';
  description: string;
}

