
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";
import Dashboard from "@/components/Dashboard";
import AppHeader from "@/components/AppHeader";
import HeroSection from "@/components/HeroSection";
import QuickActionsGrid from "@/components/QuickActionsGrid";
import CoursesList from "@/components/CoursesList";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import VideoLibraryModal from "@/components/VideoLibraryModal";
import { getCourseData } from "@/data/coursesData";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AppHeader />

      <div className="px-4 py-6">
        <HeroSection onSignupClick={handleSignupClick} />
        <QuickActionsGrid onActionClick={handleQuickActionClick} />
        <CoursesList />
        <FeaturesGrid />
        <TestimonialsSection />
        <CTASection onSignupClick={handleSignupClick} />
      </div>

      <VideoLibraryModal
        isOpen={showVideoLibrary}
        course={selectedCourse || null}
        onClose={() => setShowVideoLibrary(false)}
        onStartLearning={handleStartLearning}
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
