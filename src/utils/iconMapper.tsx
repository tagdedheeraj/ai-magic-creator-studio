
import React from 'react';
import { 
  Code, 
  Video, 
  Music, 
  User, 
  FileText, 
  Zap, 
  Smartphone, 
  Gamepad2, 
  Bot, 
  Megaphone, 
  Youtube, 
  Facebook,
  BookOpen,
  Mic,
  Image,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Video,
  Music,
  User,
  FileText,
  Zap,
  Smartphone,
  Gamepad2,
  Bot,
  Megaphone,
  Youtube,
  Facebook,
  BookOpen,
  Mic,
  Image,
};

export const getIconComponent = (iconName: string | null): React.ReactNode => {
  if (!iconName) return <BookOpen className="w-6 h-6" />;
  
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return <BookOpen className="w-6 h-6" />;
  
  return <IconComponent className="w-6 h-6" />;
};
