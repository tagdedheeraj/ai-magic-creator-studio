
import React from 'react';
import { Code, Video, Music, User, FileText, Zap, Smartphone, Gamepad2, Bot, Megaphone, Youtube, Facebook } from 'lucide-react';

export const getCourseData = () => [
  {
    icon: <Code className="w-6 h-6" />,
    title: "React Website Builder",
    description: "बिना coding के professional websites सीखें",
    duration: "45 मिनट",
    lessons: 12,
    color: "from-blue-500 to-cyan-500",
    difficulty: "Beginner",
    students: "2.5K+",
    type: "website",
    videos: [
      { title: "Introduction to No-Code", duration: "5:30" },
      { title: "Setting up your first website", duration: "8:45" },
      { title: "Adding components", duration: "7:20" },
      { title: "Styling and themes", duration: "6:15" }
    ]
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Hollywood Video Creation",
    description: "AI से cinematic quality videos की complete guide",
    duration: "1 घंटा 20 मिनट",
    lessons: 18,
    color: "from-purple-500 to-pink-500",
    difficulty: "Intermediate",
    students: "1.8K+",
    type: "video",
    videos: [
      { 
        title: "AI Video Tools Introduction", 
        duration: "4:20",
        youtubeId: "1hNMTeZGcJQ"
      },
      { title: "Creating cinematic shots", duration: "12:30" },
      { title: "Adding effects and transitions", duration: "9:45" },
      { title: "Professional editing tips", duration: "11:20" }
    ]
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "AI Audio Production",
    description: "Professional voice-overs और music generate करना सीखें",
    duration: "55 मिनट",
    lessons: 15,
    color: "from-green-500 to-emerald-500",
    difficulty: "Beginner",
    students: "3.2K+",
    type: "audio",
    videos: [
      { title: "AI Voice Generation", duration: "6:40" },
      { title: "Music creation with AI", duration: "8:20" },
      { title: "Audio editing basics", duration: "7:30" },
      { title: "Professional mixing", duration: "9:10" }
    ]
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    description: "No-code से professional mobile apps",
    duration: "2 घंटे",
    lessons: 25,
    color: "from-indigo-500 to-purple-500",
    difficulty: "Intermediate",
    students: "1.2K+",
    type: "app",
    videos: [
      { title: "App design basics", duration: "8:15" },
      { title: "Building your first app", duration: "12:30" },
      { title: "Adding features", duration: "10:45" },
      { title: "Publishing to app stores", duration: "9:20" }
    ]
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Game Development",
    description: "Simple games बनाना सीखें बिना coding के",
    duration: "1 घंटा 45 मिनट",
    lessons: 20,
    color: "from-orange-500 to-red-500",
    difficulty: "Beginner",
    students: "800+",
    type: "game",
    videos: [
      { title: "Game design principles", duration: "7:30" },
      { title: "Creating your first game", duration: "15:20" },
      { title: "Adding game mechanics", duration: "12:15" },
      { title: "Game testing and optimization", duration: "8:45" }
    ]
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "ChatGPT Mastery",
    description: "AI chatbots और automation के साथ काम करना सीखें",
    duration: "1 घंटा 30 मिनट",
    lessons: 16,
    color: "from-teal-500 to-cyan-500",
    difficulty: "Beginner",
    students: "3.5K+",
    type: "chatgpt",
    videos: [
      { title: "ChatGPT basics", duration: "6:40" },
      { title: "Advanced prompting techniques", duration: "10:20" },
      { title: "Building AI workflows", duration: "8:30" },
      { title: "Business automation", duration: "12:15" }
    ]
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Meta Ads Marketing",
    description: "Facebook और Instagram ads से business grow करें",
    duration: "1 घंटा 15 मिनट",
    lessons: 14,
    color: "from-blue-600 to-indigo-600",
    difficulty: "Intermediate",
    students: "2.1K+",
    type: "meta",
    videos: [
      { title: "Meta Ads Manager setup", duration: "8:15" },
      { title: "Creating effective ad campaigns", duration: "12:30" },
      { title: "Targeting and optimization", duration: "10:20" },
      { title: "Analytics and ROI tracking", duration: "9:45" }
    ]
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Google Ads Mastery",
    description: "Google Ads से targeted traffic और sales बढ़ाएं",
    duration: "1 घंटा 40 मिनट",
    lessons: 18,
    color: "from-red-500 to-yellow-500",
    difficulty: "Intermediate",
    students: "1.9K+",
    type: "google",
    videos: [
      { title: "Google Ads fundamentals", duration: "9:20" },
      { title: "Keyword research strategies", duration: "11:15" },
      { title: "Campaign optimization", duration: "10:30" },
      { title: "Conversion tracking", duration: "8:50" }
    ]
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    title: "YouTube Growth Strategy",
    description: "YouTube channel को grow करने की complete strategy",
    duration: "2 घंटे 10 मिनट",
    lessons: 22,
    color: "from-red-600 to-pink-600",
    difficulty: "Beginner",
    students: "4.2K+",
    type: "youtube",
    videos: [
      { title: "Channel setup and branding", duration: "10:15" },
      { title: "Content strategy and planning", duration: "12:30" },
      { title: "SEO optimization for YouTube", duration: "9:45" },
      { title: "Monetization strategies", duration: "11:20" }
    ]
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    title: "Facebook Marketing",
    description: "Facebook से organic और paid दोनों growth strategies",
    duration: "1 घंटा 25 मिनट",
    lessons: 15,
    color: "from-blue-700 to-purple-600",
    difficulty: "Beginner",
    students: "2.8K+",
    type: "facebook",
    videos: [
      { title: "Facebook page optimization", duration: "8:30" },
      { title: "Content creation strategies", duration: "11:20" },
      { title: "Community building", duration: "9:15" },
      { title: "Facebook groups marketing", duration: "10:40" }
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "SEO Optimization",
    description: "Search engine optimization से website traffic बढ़ाएं",
    duration: "1 घंटा 50 मिनट",
    lessons: 19,
    color: "from-emerald-500 to-teal-500",
    difficulty: "Intermediate",
    students: "3.1K+",
    type: "seo",
    videos: [
      { title: "SEO fundamentals", duration: "9:45" },
      { title: "Keyword research and analysis", duration: "12:20" },
      { title: "On-page optimization", duration: "10:15" },
      { title: "Link building strategies", duration: "8:30" }
    ]
  }
];
