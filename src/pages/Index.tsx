
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
            <CoursesList />
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
