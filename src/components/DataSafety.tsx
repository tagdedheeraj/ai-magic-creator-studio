
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const DataSafety = () => {
  const safetyFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Data Sharing",
      description: "आपका data third parties के साथ share नहीं किया जाता"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Encrypted Storage", 
      description: "सभी personal data encrypted format में store किया जाता है"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparent Policy",
      description: "Clear और समझने योग्य privacy policy"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "User Control",
      description: "आप अपना data control कर सकते हैं और delete कर सकते हैं"
    }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-white text-center">Data Safety & Privacy</h2>
      <div className="grid grid-cols-2 gap-3">
        {safetyFeatures.map((feature, index) => (
          <Card key={index} className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DataSafety;
