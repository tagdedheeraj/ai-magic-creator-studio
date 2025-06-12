import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Video, 
  Music, 
  User, 
  Home,
  BookOpen,
  TrendingUp,
  Settings,
  Menu,
  Search,
  Bell,
  Play,
  Plus
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import UserProfile from './UserProfile';
import CourseProgress from './CourseProgress';
import BottomNavBar from './BottomNavBar';

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

  const quickActions = [
    { icon: <Video className="w-5 h-5" />, title: "Create Video", color: "bg-purple-500" },
    { icon: <Code className="w-5 h-5" />, title: "Build Website", color: "bg-blue-500" },
    { icon: <Music className="w-5 h-5" />, title: "Generate Audio", color: "bg-green-500" },
    { icon: <User className="w-5 h-5" />, title: "AI Model", color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Menu className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-white">Welcome back, {user?.name}!</h1>
              <p className="text-xs text-gray-400">Continue your learning journey</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 border border-gray-700">
            <TabsTrigger value="home" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Courses</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Progress</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer">
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
            </div>

            {/* Continue Learning */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Continue Learning</h2>
              <div className="space-y-4">
                {myCoursesData.filter(course => course.completedVideos < course.totalVideos).map((course) => (
                  <CourseProgress key={course.courseId} {...course} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">My Courses</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Plus className="w-4 h-4 mr-2" />
                Browse More
              </Button>
            </div>
            
            <div className="space-y-4">
              {myCoursesData.map((course) => (
                <CourseProgress key={course.courseId} {...course} />
              ))}
            </div>
          </TabsContent>

          {/* Create Tab */}
          <TabsContent value="create" className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">Create Something Amazing</h2>
            
            <div className="grid grid-cols-1 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center`}>
                        <div className="text-white">
                          {action.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-semibold">{action.title}</h3>
                        <p className="text-gray-400 text-sm">Start creating now</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, tools, tutorials..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Website Builder', 'Video Editor', 'AI Tools', 'Music Creation', 'React Basics'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;
