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
  Rocket,
  Menu,
  Search,
  Bell,
  Download,
  Gift,
  X
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState<string>('');

  // If user is logged in, show dashboard
  if (user) {
    return <Dashboard />;
  }

  const courses = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "React Website Builder",
      description: "बिना coding के professional websites बनाना सीखें",
      duration: "45 मिनट",
      lessons: 12,
      color: "from-blue-500 to-cyan-500",
      difficulty: "Beginner",
      students: "2.5K+",
      type: "website",
      videos: [
        { title: "Introduction to No-Code", duration: "5:30" },
        { title: "Setting up your first website", duration: "8:45" },
        { title: "Adding components", duration: "7:20" },
        { title: "Styling and themes", duration: "6:15" }
      ]
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Hollywood Video Creation",
      description: "AI से cinematic quality videos बनाने की complete guide",
      duration: "1 घंटा 20 मिनट",
      lessons: 18,
      color: "from-purple-500 to-pink-500",
      difficulty: "Intermediate",
      students: "1.8K+",
      type: "video",
      videos: [
        { title: "AI Video Tools Introduction", duration: "4:20" },
        { title: "Creating cinematic shots", duration: "12:30" },
        { title: "Adding effects and transitions", duration: "9:45" },
        { title: "Professional editing tips", duration: "11:20" }
      ]
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "AI Audio Production",
      description: "Professional voice-overs और music generate करना सीखें",
      duration: "55 मिनट",
      lessons: 15,
      color: "from-green-500 to-emerald-500",
      difficulty: "Beginner",
      students: "3.2K+",
      type: "audio",
      videos: [
        { title: "AI Voice Generation", duration: "6:40" },
        { title: "Music creation with AI", duration: "8:20" },
        { title: "Audio editing basics", duration: "7:30" },
        { title: "Professional mixing", duration: "9:10" }
      ]
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "AI Influencer Models",
      description: "Virtual personalities और realistic avatars बनाएं",
      duration: "1 घंटा 10 मिनट",
      lessons: 20,
      color: "from-orange-500 to-red-500",
      difficulty: "Advanced",
      students: "950+",
      type: "model",
      videos: [
        { title: "Creating AI personas", duration: "10:15" },
        { title: "Avatar customization", duration: "8:50" },
        { title: "Personality training", duration: "12:30" },
        { title: "Social media integration", duration: "7:45" }
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Script Writing Mastery",
      description: "Engaging content scripts लिखने की AI techniques",
      duration: "40 मिनट",
      lessons: 10,
      color: "from-indigo-500 to-purple-500",
      difficulty: "Beginner",
      students: "4.1K+",
      type: "script",
      videos: [
        { title: "Script structure basics", duration: "5:20" },
        { title: "AI writing prompts", duration: "6:30" },
        { title: "Character development", duration: "7:15" },
        { title: "Dialogue writing", duration: "8:00" }
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Workflows",
      description: "AI automation से productivity 100x बढ़ाना सीखें",
      duration: "1 घंटा 5 मिनट",
      lessons: 16,
      color: "from-yellow-500 to-orange-500",
      difficulty: "Intermediate",
      students: "1.3K+",
      type: "automation",
      videos: [
        { title: "Workflow basics", duration: "4:45" },
        { title: "Setting up automation", duration: "9:20" },
        { title: "Advanced triggers", duration: "8:30" },
        { title: "Integration tools", duration: "7:50" }
      ]
    }
  ];

  const quickActions = [
    { icon: <Video className="w-5 h-5" />, title: "Video बनाएं", color: "bg-purple-500", type: "video" },
    { icon: <Code className="w-5 h-5" />, title: "Website बनाएं", color: "bg-blue-500", type: "website" },
    { icon: <Music className="w-5 h-5" />, title: "Audio बनाएं", color: "bg-green-500", type: "audio" },
    { icon: <User className="w-5 h-5" />, title: "AI Model", color: "bg-orange-500", type: "model" }
  ];

  const handleQuickActionClick = (type: string) => {
    setSelectedCourseType(type);
    setShowVideoLibrary(true);
  };

  const selectedCourse = courses.find(course => course.type === selectedCourseType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Mobile App-like Header */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Menu className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-white">AI Creative Studio</h1>
              <p className="text-xs text-gray-400">Learn & Create</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <div className="px-4 py-6">
        <div className="text-center mb-6">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-3 py-1 text-sm">
            <Gift className="w-4 h-4 mr-1" />
            सभी Courses FREE
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            AI से बनाएं
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              सब कुछ Professional
            </span>
          </h1>
          
          <p className="text-base text-gray-300 mb-6 leading-relaxed px-2">
            बिना coding के websites, Hollywood videos, AI audio बनाएं - सब कुछ मिनटों में!
          </p>
          
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-base font-semibold mb-4"
            onClick={() => {
              setAuthMode('signup');
              setShowAuth(true);
            }}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Free में शुरू करें
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer"
              onClick={() => handleQuickActionClick(action.type)}
            >
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <div className="text-white">
                    {action.icon}
                  </div>
                </div>
                <p className="text-white text-sm font-medium">{action.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Free Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Free Video Courses</h2>
            <Button variant="ghost" className="text-purple-400 text-sm">
              सभी देखें <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="space-y-4">
            {courses.map((course, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">
                        {course.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold text-sm leading-tight">{course.title}</h3>
                        <div className="flex items-center space-x-1 ml-2">
                          <Play className="w-4 h-4 text-green-400" />
                          <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs px-2 py-0">
                            FREE
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{course.lessons} videos • {course.duration}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-yellow-400">4.8</span>
                          <span>({course.students})</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid - Mobile Optimized */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">आपको क्यों चुनना चाहिए</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Brain className="w-6 h-6" />, title: "Smart AI", desc: "Latest AI technology" },
              { icon: <Zap className="w-6 h-6" />, title: "Super Fast", desc: "मिनटों में results" },
              { icon: <CheckCircle className="w-6 h-6" />, title: "Easy to Use", desc: "बिल्कुल आसान" },
              { icon: <Star className="w-6 h-6" />, title: "Professional", desc: "Hollywood quality" }
            ].map((item, index) => (
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

        {/* Success Stories - Mobile Optimized */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">Success Stories</h2>
          <div className="space-y-3">
            {[
              { name: "राहुल शर्मा", role: "Content Creator", content: "Daily 10 videos बनाता हूं जो पहले 1 week लगते थे!", rating: 5 },
              { name: "प्रिया गुप्ता", role: "Digital Marketer", content: "Bina technical knowledge के professional websites बना रही हूं!", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-2 text-sm italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-purple-400 text-xs">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
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

      {/* Video Library Modal */}
      {showVideoLibrary && selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${selectedCourse.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {selectedCourse.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-white font-semibold">{selectedCourse.title}</h2>
                  <p className="text-gray-400 text-sm">{selectedCourse.lessons} Free Videos</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowVideoLibrary(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              <div className="space-y-3">
                {selectedCourse.videos.map((video, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm">{video.title}</h3>
                          <p className="text-gray-400 text-xs">{video.duration}</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300 text-xs">
                          FREE
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuth(true);
                    setShowVideoLibrary(false);
                  }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && (
        <AuthModal 
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onSuccess={() => {
            setShowAuth(false);
          }}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}
    </div>
  );
};

export default Index;
