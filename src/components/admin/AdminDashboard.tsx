
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { BookOpen, Users, Video, TrendingUp } from 'lucide-react';

interface DashboardStats {
  totalCourses: number;
  totalVideos: number;
  totalUsers: number;
  featuredCourses: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalCourses: 0,
    totalVideos: 0,
    totalUsers: 0,
    featuredCourses: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const [coursesRes, videosRes, usersRes, featuredRes] = await Promise.all([
        supabase.from('courses').select('*', { count: 'exact' }),
        supabase.from('course_videos').select('*', { count: 'exact' }),
        supabase.from('user_analytics').select('user_id').not('user_id', 'is', null),
        supabase.from('courses').select('*', { count: 'exact' }).eq('is_featured', true),
      ]);

      // Count unique users from analytics
      const uniqueUsers = new Set(usersRes.data?.map(record => record.user_id) || []).size;

      setStats({
        totalCourses: coursesRes.count || 0,
        totalVideos: videosRes.count || 0,
        totalUsers: uniqueUsers,
        featuredCourses: featuredRes.count || 0,
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Courses',
      value: stats.totalCourses,
      icon: BookOpen,
      description: 'Available courses',
      color: 'text-blue-600',
    },
    {
      title: 'Course Videos',
      value: stats.totalVideos,
      icon: Video,
      description: 'Total video lessons',
      color: 'text-purple-600',
    },
    {
      title: 'Active Users',
      value: stats.totalUsers,
      icon: Users,
      description: 'Registered users',
      color: 'text-green-600',
    },
    {
      title: 'Featured Courses',
      value: stats.featuredCourses,
      icon: TrendingUp,
      description: 'Highlighted courses',
      color: 'text-orange-600',
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">System is running smoothly</p>
                  <p className="text-xs text-muted-foreground">All services operational</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Database connected</p>
                  <p className="text-xs text-muted-foreground">Supabase connection active</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Admin panel ready</p>
                  <p className="text-xs text-muted-foreground">All features available</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm font-medium">Add Course</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                <Video className="h-6 w-6 text-purple-600 mb-2" />
                <p className="text-sm font-medium">Add Video</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                <Users className="h-6 w-6 text-green-600 mb-2" />
                <p className="text-sm font-medium">View Users</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                <TrendingUp className="h-6 w-6 text-orange-600 mb-2" />
                <p className="text-sm font-medium">Analytics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
