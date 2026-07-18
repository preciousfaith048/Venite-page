import React from 'react';
import {
  HeartPulse,
  Cpu,
  Code,
  Briefcase,
  Scale,
  Palette,
  FileSearch,
  Map,
  Layers,
  Terminal,
  ShieldCheck,
  CloudLightning,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  GraduationCap,
  Users,
  BookOpen,
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Send,
  Award,
  ChevronLeft,
  ChevronRight,
  Building,
  School,
  Activity,
  Check
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse,
  Cpu,
  Code,
  Briefcase,
  Scale,
  Palette,
  FileSearch,
  Map,
  Layers,
  Terminal,
  ShieldCheck,
  CloudLightning,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  GraduationCap,
  Users,
  BookOpen,
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Send,
  Award,
  ChevronLeft,
  ChevronRight,
  Building,
  School,
  Activity,
  Check
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback to GraduationCap if icon not found
    return <GraduationCap className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
