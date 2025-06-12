
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onSignupClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onSignupClick }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-center">
      <h2 className="text-xl font-bold mb-2 text-white">
        आज ही शुरू करें
      </h2>
      <p className="text-purple-100 mb-4 text-sm">
        लाखों creators join कर चुके हैं। आप भी बनें next success story!
      </p>
      <Button 
        size="lg" 
        className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 text-base font-semibold"
        onClick={onSignupClick}
      >
        Free Account बनाएं
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

export default CTASection;
