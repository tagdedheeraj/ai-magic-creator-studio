
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, CheckCircle, Star } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    { icon: <Brain className="w-6 h-6" />, title: "Smart AI", desc: "Latest AI technology" },
    { icon: <Zap className="w-6 h-6" />, title: "Super Fast", desc: "मिनटों में results" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Easy to Use", desc: "बिल्कुल आसान" },
    { icon: <Star className="w-6 h-6" />, title: "Professional", desc: "Hollywood quality" }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">आपको क्यों चुनना चाहिए</h2>
      <div className="grid grid-cols-2 gap-4">
        {features.map((item, index) => (
          <Card key={index} className="bg-gray-900/50 border-gray-700 text-center">
            <CardContent className="p-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
