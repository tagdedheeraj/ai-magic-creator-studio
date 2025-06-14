
import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from './UserProfile';
import BottomNavBar from './BottomNavBar';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import CourseSection from './CourseSection';
import SearchTab from './SearchTab';
import CoursesList from './CoursesList';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  const myCoursesData = [
    {
      courseId: '1',
      title: 'React Website Builder',
      description: 'Learn to build professional websites without coding',
      totalVideos: 12,
      completedVideos: 8,
      totalDuration: '45 minutes',
      lastWatched: '2 hours ago',
      rating: 4.8,
      difficulty: 'Beginner'
    },
    {
      courseId: '2',
      title: 'Hollywood Video Creation',
      description: 'Create cinematic quality videos with AI',
      totalVideos: 18,
      completedVideos: 18,
      totalDuration: '1 hour 20 minutes',
      rating: 4.9,
      difficulty: 'Intermediate'
    },
    {
      courseId: '3',
      title: 'AI Audio Production',
      description: 'Generate professional voice-overs and music',
      totalVideos: 15,
      completedVideos: 5,
      totalDuration: '55 minutes',
      lastWatched: '1 day ago',
      rating: 4.7,
      difficulty: 'Beginner'
    }
  ];

  const incompleteCourses = myCoursesData.filter(course => course.completedVideos < course.totalVideos);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-20">
      <DashboardHeader userName={user?.name || 'User'} />

      <div className="px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsContent value="home" className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <QuickActions variant="grid" />
            </div>

            <CourseSection 
              title="Continue Learning"
              courses={incompleteCourses}
            />
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <CoursesList />
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <SearchTab />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;
