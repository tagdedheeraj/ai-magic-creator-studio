
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Mail, Shield, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
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
          <h1 className="text-2xl font-bold text-white">About Us</h1>
        </div>

        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">AI Tools Hindi के बारे में</h2>
              <p className="text-gray-300 mb-4">
                AI Tools Hindi एक शैक्षणिक प्लेटफॉर्म है जो भारतीय उपयोगकर्ताओं को AI technology के बारे में 
                हिंदी में सिखाता है। हमारा मिशन है AI को सभी के लिए सुलभ बनाना।
              </p>
              <p className="text-gray-300">
                हम मुफ्त courses, tutorials, और practical tools प्रदान करते हैं जो आपको 
                बिना coding knowledge के professional content बनाने में मदद करते हैं।
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">हमारा उद्देश्य</h3>
                <p className="text-gray-300 text-sm">
                  AI education को हिंदी भाषा में accessible बनाना और digital literacy बढ़ाना
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">सुरक्षा</h3>
                <p className="text-gray-300 text-sm">
                  आपकी privacy और data security हमारी प्राथमिकता है
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Quality Content</h3>
                <p className="text-gray-300 text-sm">
                  Professional और practical learning materials जो real-world में काम आते हैं
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <p className="text-gray-300 text-sm">
                  24/7 customer support और community-driven learning environment
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Target Audience</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Age Group: 16+ (Teen and Adult users)</p>
                <p>• Language: Primary Hindi, Secondary English</p>
                <p>• Focus: Educational and skill development</p>
                <p>• Content Rating: Everyone - Family Friendly</p>
                <p>• Usage: Learning AI tools, creative content creation</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">संपर्क जानकारी</h3>
              <div className="space-y-2 text-gray-300">
                <p>• ईमेल: support@aitoolshindi.com</p>
                <p>• Developer: AI Tools Hindi Team</p>
                <p>• Category: Education & Learning</p>
                <p>• Content: AI Tools, Tutorials, Free Courses</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
