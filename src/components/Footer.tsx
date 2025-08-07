
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="border-t border-gray-700 mt-8 pt-6 pb-20">
      <div className="text-center space-y-4">
        <div className="text-white font-semibold">AI Tools Hindi</div>
        <p className="text-gray-400 text-sm">
          AI education को हिंदी में accessible बनाना
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Button 
            variant="link" 
            className="text-gray-400 hover:text-white p-0 h-auto"
            onClick={() => navigate('/privacy-policy')}
          >
            Privacy Policy
          </Button>
          <Button 
            variant="link" 
            className="text-gray-400 hover:text-white p-0 h-auto"
            onClick={() => navigate('/terms-of-service')}
          >
            Terms of Service
          </Button>
          <Button 
            variant="link" 
            className="text-gray-400 hover:text-white p-0 h-auto"
            onClick={() => navigate('/about')}
          >
            About Us
          </Button>
        </div>
        
        <div className="text-xs text-gray-500 space-y-1">
          <p>Content Rating: Everyone (All Ages)</p>
          <p>Educational & Family-Friendly Content</p>
          <p>© 2024 AI Tools Hindi. Made with ❤️ in India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
