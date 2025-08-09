
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Users, Eye, Play, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UserAnalytic {
  id: string;
  user_id: string;
  event_type: string;
  event_data: any;
  created_at: string;
}

interface AnalyticsStats {
  totalUsers: number;
  totalViews: number;
  totalWatches: number;
  totalCompletions: number;
}

const UserAnalytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<UserAnalytic[]>([]);
  const [stats, setStats] = useState<AnalyticsStats>({
    totalUsers: 0,
    totalViews: 0,
    totalWatches: 0,
    totalCompletions: 0,
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data, error } = await supabase
        .from('user_analytics')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setAnalytics(data || []);
      
      // Calculate stats
      const uniqueUsers = new Set(data?.map(record => record.user_id) || []).size;
      const views = data?.filter(record => record.event_type === 'course_view').length || 0;
      const watches = data?.filter(record => record.event_type === 'video_watch').length || 0;
      const completions = data?.filter(record => record.event_type === 'course_complete').length || 0;

      setStats({
        totalUsers: uniqueUsers,
        totalViews: views,
        totalWatches: watches,
        totalCompletions: completions,
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
      toast({
        title: "Error",
        description: "Failed to fetch analytics",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'course_view':
        return <Eye className="h-4 w-4" />;
      case 'video_watch':
        return <Play className="h-4 w-4" />;
      case 'course_complete':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  const getEventBadgeVariant = (eventType: string) => {
    switch (eventType) {
      case 'course_view':
        return 'secondary';
      case 'video_watch':
        return 'default';
      case 'course_complete':
        return 'default';
      default:
        return 'outline';
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">Unique users tracked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalViews}</div>
            <p className="text-xs text-muted-foreground">Total course views</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Video Watches</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalWatches}</div>
            <p className="text-xs text-muted-foreground">Total video watches</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completions</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCompletions}</div>
            <p className="text-xs text-muted-foreground">Course completions</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent User Activity</CardTitle>
          <CardDescription>Latest user interactions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analytics.slice(0, 20).map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getEventIcon(record.event_type)}
                      <Badge variant={getEventBadgeVariant(record.event_type) as any}>
                        {record.event_type.replace('_', ' ')}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {record.user_id.slice(0, 8)}...
                    </code>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {record.event_data?.title && (
                        <div><strong>Title:</strong> {record.event_data.title}</div>
                      )}
                      {record.event_data?.duration && (
                        <div><strong>Duration:</strong> {record.event_data.duration}s</div>
                      )}
                      {record.event_data?.completion_time && (
                        <div><strong>Completion Time:</strong> {Math.round(record.event_data.completion_time / 60)}m</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(record.created_at).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAnalytics;
