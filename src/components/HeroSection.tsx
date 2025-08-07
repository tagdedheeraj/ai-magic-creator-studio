import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Rocket } from 'lucide-react';

interface HeroSectionProps {
  onSignupClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSignupClick }) => {
  return (
    <div className="text-center mb-6">
      <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-3 py-1 text-sm">
        <Gift className="w-4 h-4 mr-1" />
        सभी Courses FREE
      </Badge>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
        AI Tools Hindi
        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Professional Content बनाएं
        </span>
      </h1>
      
      <p className="text-base text-gray-300 mb-6 leading-relaxed px-2">
        बिना coding के websites, Hollywood videos, AI audio बनाएं - सब कुछ मिनटों में!
      </p>
      
      <Button 
        size="lg" 
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-base font-semibold mb-4"
        onClick={onSignupClick}
      >
        <Rocket className="w-5 h-5 mr-2" />
        Free में शुरू करें
      </Button>
    </div>
  );
};

export default HeroSection;
