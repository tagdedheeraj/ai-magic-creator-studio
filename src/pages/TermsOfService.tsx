
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="text-white mr-3"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-gray-300 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">सेवा की शर्तें - AI Tools Hindi</h2>
            <p className="mb-4">
              AI Tools Hindi ऐप का उपयोग करके, आप इन सेवा शर्तों से सहमत होते हैं।
            </p>
            <p className="text-sm text-gray-400 mb-4">
              अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">1. सेवा का वर्णन</h3>
            <p>
              AI Tools Hindi एक शैक्षणिक प्लेटफॉर्म है जो AI tools के बारे में मुफ्त कोर्स और ट्यूटोरियल प्रदान करता है।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">2. उपयोगकर्ता जिम्मेदारियां</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>सटीक और वैध जानकारी प्रदान करना</li>
              <li>अपने खाते की सुरक्षा बनाए रखना</li>
              <li>कानून और नियमों का पालन करना</li>
              <li>अन्य उपयोगकर्ताओं का सम्मान करना</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">3. निषिद्ध गतिविधियां</h3>
            <p className="mb-2">निम्नलिखित गतिविधियां प्रतिबंधित हैं:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>अवैध या हानिकारक सामग्री साझा करना</li>
              <li>अन्य उपयोगकर्ताओं को परेशान करना</li>
              <li>सिस्टम की सुरक्षा में बाधा डालना</li>
              <li>बौद्धिक संपदा का उल्लंघन करना</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">4. बौद्धिक संपदा</h3>
            <p>
              ऐप में सभी सामग्री, लोगो, और ट्रेडमार्क AI Tools Hindi के स्वामित्व में हैं।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">5. सेवा की उपलब्धता</h3>
            <p>
              हम सेवा को यथासंभव उपलब्ध रखने का प्रयास करते हैं, लेकिन रखरखाव या तकनीकी कारणों से अस्थायी बाधा हो सकती है।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">6. जिम्मेदारी का अस्वीकरण</h3>
            <p>
              सेवा "जैसी है" के आधार पर प्रदान की जाती है। हम सेवा की पूर्णता या सटीकता की गारंटी नहीं देते।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">7. खाता समाप्ति</h3>
            <p>
              नियमों का उल्लंघन करने पर हम आपका खाता निलंबित या समाप्त कर सकते हैं।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">8. संपर्क जानकारी</h3>
            <p>
              प्रश्न या सहायता के लिए: <br />
              ईमेल: support@aitoolshindi.com
            </p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              ये शर्तें समय-समय पर अपडेट हो सकती हैं। महत्वपूर्ण परिवर्तनों की सूचना दी जाएगी।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
