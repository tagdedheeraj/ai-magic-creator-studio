
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Clock, Star, Gift } from 'lucide-react';

interface EngagementSectionProps {
  onWatchVideo: () => void;
  onSignupClick: () => void;
}

const EngagementSection: React.FC<EngagementSectionProps> = ({ onWatchVideo, onSignupClick }) => {
  return (
    <div className="space-y-6 mb-8">
      {/* Video Introduction Card */}
      <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Video Tools Introduction</h3>
              <p className="text-purple-200 text-sm">देखें कैसे AI से professional content बनाएं</p>
            </div>
          </div>
          <Button 
            onClick={onWatchVideo}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            <Play className="w-4 h-4 mr-2" />
            Video देखें
          </Button>
        </CardContent>
      </Card>

      {/* Stats & Benefits */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gray-900/50 border-gray-700 text-center">
          <CardContent className="p-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-bold text-lg">10L+</h3>
            <p className="text-gray-400 text-xs">Students Learning</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-700 text-center">
          <CardContent className="p-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-bold text-lg">मिनटों में</h3>
            <p className="text-gray-400 text-xs">Quick Results</p>
          </CardContent>
        </Card>
      </div>

      {/* Main CTA */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0">
        <CardContent className="p-6 text-center">
          <Badge className="mb-3 bg-white/20 text-white border-0">
            <Gift className="w-4 h-4 mr-1" />
            LIMITED TIME OFFER
          </Badge>
          <h2 className="text-white font-bold text-xl mb-2">
            हमारे साथ लाखों के courses
            <span className="block text-yellow-300">बिल्कुल FREE में सीखें!</span>
          </h2>
          <p className="text-purple-100 text-sm mb-4">
            महीनों का time waste किए बिना professional skills सीखें
          </p>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm ml-2">50,000+ Happy Students</span>
          </div>
          <Button 
            size="lg" 
            className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-3"
            onClick={onSignupClick}
          >
            अभी FREE में Join करें 🚀
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EngagementSection;
