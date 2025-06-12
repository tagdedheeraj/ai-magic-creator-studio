
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Video, 
  Music, 
  User, 
  FileText, 
  Zap, 
  Star, 
  Play,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Rocket
} from "lucide-react";
import AuthModal from "@/components/AuthModal";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  if (isLoggedIn) {
    return <Dashboard />;
  }

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "No-Code Website Builder",
      description: "React websites बनाएं बिना coding के - AI की मदद से professional websites मिनटों में!",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Hollywood-Level Videos",
      description: "AI के साथ cinematic quality videos बनाएं - professional editing, effects, और animations के साथ!",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "AI Audio Creation",
      description: "Voice-overs, music, sound effects - सब कुछ AI से generate करें highest quality में!",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Influencer Models",
      description: "AI influencers बनाएं अपने brand के लिए - realistic avatars और personalities के साथ!",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Script Writing",
      description: "Engaging scripts लिखें videos, ads, और content के लिए - AI powered creativity!",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "घंटों का काम मिनटों में - AI automation से productivity बढ़ाएं 100x!",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "राहुल शर्मा",
      role: "Content Creator",
      content: "इस app से मैं daily 10 videos बनाता हूं जो पहले 1 week लगते थे!",
      rating: 5
    },
    {
      name: "प्रिया गुप्ता", 
      role: "Digital Marketer",
      content: "Bina technical knowledge के professional websites बना रही हूं!",
      rating: 5
    },
    {
      name: "अमित कुमार",
      role: "Entrepreneur", 
      content: "AI influencer models से मेरा business 300% grow हुआ है!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Creative Suite
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
              AI से बनाएं
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                सब कुछ Professional
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              बिना coding के websites बनाएं, Hollywood-level videos create करें, 
              AI audio generate करें, और influencer models बनाएं - सब कुछ मिनटों में!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                onClick={() => {
                  setAuthMode('signup');
                  setShowAuth(true);
                }}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Free में शुरू करें
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Demo देखें
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI की शक्ति से करें सब कुछ
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional level का content बनाने के लिए आपको अब technical skills की जरूरत नहीं
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              क्यों चुनें हमारा Platform?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Brain className="w-8 h-8" />, title: "Smart AI", desc: "Latest AI technology" },
              { icon: <Zap className="w-8 h-8" />, title: "Super Fast", desc: "मिनटों में results" },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Easy to Use", desc: "बिल्कुल आसान interface" },
              { icon: <Star className="w-8 h-8" />, title: "Professional", desc: "Hollywood quality output" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Users क्या कह रहे हैं
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-purple-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            आज ही शुरू करें अपना Creative Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            लाखों creators join कर चुके हैं। आप भी बनें next success story!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => {
              setAuthMode('signup');
              setShowAuth(true);
            }}
          >
            Free Account बनाएं
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <AuthModal 
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onSuccess={() => {
            setIsLoggedIn(true);
            setShowAuth(false);
          }}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}
    </div>
  );
};

export default Index;
