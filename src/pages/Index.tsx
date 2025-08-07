import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";
import Dashboard from "@/components/Dashboard";
import HeroSection from "@/components/HeroSection";
import QuickActionsGrid from "@/components/QuickActionsGrid";
import CoursesList from "@/components/CoursesList";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import VideoLibraryModal from "@/components/VideoLibraryModal";
import YouTubeVideoPlayer from "@/components/YouTubeVideoPlayer";
import BottomNavBar from "@/components/BottomNavBar";
import { getCourseData } from "@/data/coursesData";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Star } from 'lucide-react';
import Footer from "@/components/Footer";

const Index = () => {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState<string>('');
  const [activeTab, setActiveTab] = useState('home');
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>('');

  // If user is logged in, show dashboard
  if (user) {
    return <Dashboard />;
  }

  const courses = getCourseData();
  const selectedCourse = courses.find(course => course.type === selectedCourseType);

  const handleQuickActionClick = (type: string) => {
    setSelectedCourseType(type);
    setShowVideoLibrary(true);
  };

  const handleCourseClick = (courseType: string) => {
    setSelectedCourseType(courseType);
    setShowVideoLibrary(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setShowAuth(true);
  };

  const handleStartLearning = () => {
    setAuthMode('signup');
    setShowAuth(true);
    setShowVideoLibrary(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'profile') {
      setAuthMode('login');
      setShowAuth(true);
    }
  };

  const handleVideoClick = (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setShowYouTubeVideo(true);
    setShowVideoLibrary(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection onSignupClick={handleSignupClick} />
            <QuickActionsGrid onActionClick={handleQuickActionClick} />
            <FeaturesGrid />
          </>
        );
      case 'courses':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Free Amazing Courses</h2>
              <p className="text-gray-400 mb-6">सभी courses बिल्कुल free हैं और professional skills सिखाते हैं</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {courses.map((course, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer"
                  onClick={() => handleCourseClick(course.type)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center mx-auto mb-2`}>
                      <div className="text-white">
                        {course.icon}
                      </div>
                    </div>
                    <h3 className="text-white text-sm font-medium mb-1">{course.title}</h3>
                    <p className="text-gray-400 text-xs mb-2">{course.lessons} videos • {course.duration}</p>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-yellow-400 text-xs">4.8</span>
                      <Badge className="bg-green-500/20 text-green-300 text-xs ml-1">
                        FREE
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      case 'search':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Explore Courses</h2>
            </div>
            <CoursesList />
          </div>
        );
      default:
        return (
          <>
            <HeroSection onSignupClick={handleSignupClick} />
            <QuickActionsGrid onActionClick={handleQuickActionClick} />
            <FeaturesGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-20">
      <div className="px-4 py-6">
        {renderContent()}
        {activeTab === 'home' && (
          <>
            <TestimonialsSection />
            <CTASection onSignupClick={handleSignupClick} />
          </>
        )}
        <Footer />
      </div>

      {/* Bottom Navigation for non-logged-in users */}
      <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />

      <VideoLibraryModal
        isOpen={showVideoLibrary}
        course={selectedCourse || null}
        onClose={() => setShowVideoLibrary(false)}
        onStartLearning={handleStartLearning}
        onVideoClick={handleVideoClick}
      />

      <YouTubeVideoPlayer
        isOpen={showYouTubeVideo}
        onClose={() => setShowYouTubeVideo(false)}
        videoId={currentVideoId}
        title={currentVideoTitle}
      />

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
