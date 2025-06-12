
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { User, Settings, Trophy, Star, Calendar } from 'lucide-react';

const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const userStats = {
    coursesCompleted: 3,
    videosWatched: 25,
    skillsLearned: 8,
    achievementPoints: 1250
  };

  return (
    <div className="space-y-6 p-4">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">{user.name}</h1>
              <p className="text-purple-100">{user.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">Pro Creator</span>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {userStats.coursesCompleted}
            </div>
            <p className="text-gray-400 text-sm">Courses Completed</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {userStats.videosWatched}
            </div>
            <p className="text-gray-400 text-sm">Videos Watched</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {userStats.skillsLearned}
            </div>
            <p className="text-gray-400 text-sm">Skills Learned</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900/50 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {userStats.achievementPoints}
            </div>
            <p className="text-gray-400 text-sm">Points Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card className="bg-gray-900/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">First Video Created</p>
              <p className="text-gray-400 text-xs">Completed AI Video course</p>
            </div>
            <Badge className="bg-yellow-500/20 text-yellow-300">New</Badge>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Website Builder Pro</p>
              <p className="text-gray-400 text-xs">Built first professional website</p>
            </div>
            <Badge className="bg-purple-500/20 text-purple-300">2 days ago</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Learning Schedule
        </Button>
        
        <Button 
          variant="destructive" 
          className="w-full"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
