import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useInterstitialAd } from "@/hooks/useInterstitialAd";
import { useCourses } from "@/hooks/useCourses";
import { useCourseVideos } from "@/hooks/useCourseVideos";
import { transformCourseData } from "@/data/dynamicCoursesData";
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
import BannerAd from "@/components/ads/BannerAd";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Star } from 'lucide-react';
import Footer from "@/components/Footer";
import { getIconComponent } from "@/utils/iconMapper";
import MobileHeader from "@/components/MobileHeader";

const Index = () => {
  const { user } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [activeTab, setActiveTab] = useState('home');
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>('');
  const { showInterstitial } = useInterstitialAd();

  // Fetch courses and videos
  const { courses, loading: coursesLoading } = useCourses();
  const { videos } = useCourseVideos(selectedCourseId);
  
  // Transform data for the modal
  const transformedCourses = transformCourseData(courses, videos);
  const selectedCourse = transformedCourses.find(course => course.id === selectedCourseId);

  // If user is logged in, show dashboard
  if (user) {
    return <Dashboard />;
  }

  const handleQuickActionClick = (type: string) => {
    const course = courses.find(c => c.type === type);
    if (course) {
      setSelectedCourseId(course.id);
      setShowVideoLibrary(true);
    }
  };

  const handleCourseClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setShowVideoLibrary(true);
  };

  const handleSignupClick = () => {
    setAuthMode('signup');
    setShowAuth(true);
  };

  const handleStartLearning = async () => {
    // Show interstitial ad before signup
    await showInterstitial();
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

  const handleVideoClick = async (videoId: string, title: string) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setShowYouTubeVideo(true);
    setShowVideoLibrary(false);
  };

  const handleVideoClose = async () => {
    setShowYouTubeVideo(false);
    // Show interstitial ad when closing video
    await showInterstitial();
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
            {coursesLoading ? (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <Skeleton className="w-12 h-12 rounded-lg mx-auto mb-2" />
                      <Skeleton className="h-4 w-3/4 mx-auto mb-1" />
                      <Skeleton className="h-3 w-full mb-2" />
                      <Skeleton className="h-4 w-16 mx-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {courses.map((course) => (
                  <Card 
                    key={course.id} 
                    className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center mx-auto mb-2`}>
                        <div className="text-white">
                          {getIconComponent(course.icon_name)}
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
            )}
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
      <MobileHeader />
      
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

      {/* Banner Ad for non-logged-in users */}
      <BannerAd show={true} />

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
        onClose={handleVideoClose}
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
