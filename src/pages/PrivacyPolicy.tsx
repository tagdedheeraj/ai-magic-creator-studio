
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-gray-300 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">गोपनीयता नीति - AI Tools Hindi</h2>
            <p className="mb-4">
              यह गोपनीयता नीति बताती है कि AI Tools Hindi आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करता है।
            </p>
            <p className="text-sm text-gray-400 mb-4">
              अंतिम अपडेट: {new Date().toLocaleDateString('hi-IN')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">1. जानकारी का संग्रह</h3>
            <p className="mb-2">हम निम्नलिखित जानकारी एकत्र करते हैं:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>खाता पंजीकरण की जानकारी (ईमेल, नाम)</li>
              <li>ऐप उपयोग की गतिविधि</li>
              <li>तकनीकी जानकारी (डिवाइस प्रकार, OS version)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">2. जानकारी का उपयोग</h3>
            <p className="mb-2">आपकी जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए किया जाता है:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>सेवा प्रदान करना और बेहतर बनाना</li>
              <li>ग्राहक सहायता प्रदान करना</li>
              <li>सुरक्षा और धोखाधड़ी की रोकथाम</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">3. डेटा सुरक्षा</h3>
            <p>
              हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय अपनाते हैं।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">4. तृतीय पक्ष साझाकरण</h3>
            <p>
              हम आपकी व्यक्तिगत जानकारी को तृतीय पक्षों के साथ साझा नहीं करते हैं, सिवाय कानूनी आवश्यकताओं के।
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">5. आपके अधिकार</h3>
            <p className="mb-2">आपको निम्नलिखित अधिकार प्राप्त हैं:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>अपनी जानकारी तक पहुंच का अधिकार</li>
              <li>जानकारी को सुधारने का अधिकार</li>
              <li>डेटा को मिटाने का अधिकार</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">6. संपर्क जानकारी</h3>
            <p>
              यदि आपके कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें: <br />
              ईमेल: support@aitoolshindi.com
            </p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              यह नीति समय-समय पर अपडेट की जा सकती है। महत्वपूर्ण बदलावों की सूचना ऐप के माध्यम से दी जाएगी।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
