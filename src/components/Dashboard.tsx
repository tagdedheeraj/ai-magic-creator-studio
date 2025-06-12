import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Video, 
  Music, 
  User, 
  FileText, 
  Settings,
  LogOut,
  Sparkles,
  Zap,
  Camera,
  Mic,
  Palette,
  Wand2,
  Play,
  Download,
  Share,
  Clock,
  Star
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tools = [
    {
      id: "website",
      title: "Website Builder",
      description: "Professional React websites बनाएं AI के साथ",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      projects: 12,
      status: "Ready to use"
    },
    {
      id: "video",
      title: "Video Creator",
      description: "Hollywood-level videos बनाएं AI से",
      icon: <Video className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      projects: 8,
      status: "Processing 2 videos"
    },
    {
      id: "audio",
      title: "Audio Studio",
      description: "Voice-overs और music generate करें",
      icon: <Music className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      projects: 15,
      status: "Ready to use"
    },
    {
      id: "influencer",
      title: "AI Models",
      description: "Virtual influencers और avatars बनाएं",
      icon: <User className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      projects: 5,
      status: "Training 1 model"
    },
    {
      id: "script",
      title: "Script Writer",
      description: "Engaging scripts लिखें AI की मदद से",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      projects: 23,
      status: "Ready to use"
    }
  ];

  const recentProjects = [
    { name: "E-commerce Website", type: "Website", status: "Completed", date: "Today" },
    { name: "Product Launch Video", type: "Video", status: "Processing", date: "2 hours ago" },
    { name: "Podcast Intro", type: "Audio", status: "Completed", date: "Yesterday" },
    { name: "Fashion Model", type: "AI Model", status: "Training", date: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center">
                <Sparkles className="w-7 h-7 mr-2 text-purple-400" />
                AI Creative Studio
              </h1>
              <p className="text-gray-400">Welcome back! आइए कुछ amazing बनाते हैं</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                Pro Plan
              </Badge>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6 bg-gray-900/50 border border-gray-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">Overview</TabsTrigger>
            <TabsTrigger value="website" className="data-[state=active]:bg-blue-600">Website</TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-purple-600">Video</TabsTrigger>
            <TabsTrigger value="audio" className="data-[state=active]:bg-green-600">Audio</TabsTrigger>
            <TabsTrigger value="influencer" className="data-[state=active]:bg-orange-600">AI Models</TabsTrigger>
            <TabsTrigger value="script" className="data-[state=active]:bg-indigo-600">Scripts</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Total Projects</p>
                      <p className="text-3xl font-bold">63</p>
                    </div>
                    <Zap className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400">Time Saved</p>
                      <p className="text-3xl font-bold text-white">240h</p>
                    </div>
                    <Clock className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400">AI Credits</p>
                      <p className="text-3xl font-bold text-white">850</p>
                    </div>
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400">Quality Score</p>
                      <p className="text-3xl font-bold text-white">98%</p>
                    </div>
                    <Star className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Tools Grid */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Your AI Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.id} className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {tool.icon}
                        </div>
                      </div>
                      <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                        {tool.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">{tool.projects} projects</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                          {tool.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Recent Projects</h2>
              <Card className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-700">
                    {recentProjects.map((project, index) => (
                      <div key={index} className="p-6 hover:bg-gray-800/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-white">{project.name}</h3>
                            <p className="text-gray-400">{project.type} • {project.date}</p>
                          </div>
                          <Badge 
                            variant={project.status === 'Completed' ? 'default' : 'secondary'}
                            className={project.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs content */}
          <TabsContent value="website" className="space-y-6">
            <div className="text-center py-12">
              <Code className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Website Builder</h2>
              <p className="text-gray-400 mb-8">Professional websites बनाएं बिना coding के</p>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Wand2 className="w-4 h-4 mr-2" />
                New Website बनाएं
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-6">
            <div className="text-center py-12">
              <Video className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Video Creator</h2>
              <p className="text-gray-400 mb-8">Hollywood-level videos बनाएं AI के साथ</p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Camera className="w-4 h-4 mr-2" />
                New Video Project
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6">
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Audio Studio</h2>
              <p className="text-gray-400 mb-8">Professional audio content generate करें</p>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Mic className="w-4 h-4 mr-2" />
                Create Audio
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="influencer" className="space-y-6">
            <div className="text-center py-12">
              <User className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">AI Influencer Models</h2>
              <p className="text-gray-400 mb-8">Virtual personalities और avatars बनाएं</p>
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                <Palette className="w-4 h-4 mr-2" />
                Create AI Model
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="script" className="space-y-6">
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Script Writer</h2>
              <p className="text-gray-400 mb-8">Engaging scripts लिखें AI की मदद से</p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Wand2 className="w-4 h-4 mr-2" />
                Write New Script
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
