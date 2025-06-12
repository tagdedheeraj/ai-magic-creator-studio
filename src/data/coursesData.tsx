
import React from 'react';
import { Code, Video, Music, User, FileText, Zap } from 'lucide-react';

export const getCourseData = () => [
  {
    icon: <Code className="w-6 h-6" />,
    title: "React Website Builder",
    description: "बिना coding के professional websites बनाना सीखें",
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
    description: "AI से cinematic quality videos बनाने की complete guide",
    duration: "1 घंटा 20 मिनट",
    lessons: 18,
    color: "from-purple-500 to-pink-500",
    difficulty: "Intermediate",
    students: "1.8K+",
    type: "video",
    videos: [
      { title: "AI Video Tools Introduction", duration: "4:20" },
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
    icon: <User className="w-6 h-6" />,
    title: "AI Influencer Models",
    description: "Virtual personalities और realistic avatars बनाएं",
    duration: "1 घंटा 10 मिनट",
    lessons: 20,
    color: "from-orange-500 to-red-500",
    difficulty: "Advanced",
    students: "950+",
    type: "model",
    videos: [
      { title: "Creating AI personas", duration: "10:15" },
      { title: "Avatar customization", duration: "8:50" },
      { title: "Personality training", duration: "12:30" },
      { title: "Social media integration", duration: "7:45" }
    ]
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Script Writing Mastery",
    description: "Engaging content scripts लिखने की AI techniques",
    duration: "40 मिनट",
    lessons: 10,
    color: "from-indigo-500 to-purple-500",
    difficulty: "Beginner",
    students: "4.1K+",
    type: "script",
    videos: [
      { title: "Script structure basics", duration: "5:20" },
      { title: "AI writing prompts", duration: "6:30" },
      { title: "Character development", duration: "7:15" },
      { title: "Dialogue writing", duration: "8:00" }
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Automation Workflows",
    description: "AI automation से productivity 100x बढ़ाना सीखें",
    duration: "1 घंटा 5 मिनट",
    lessons: 16,
    color: "from-yellow-500 to-orange-500",
    difficulty: "Intermediate",
    students: "1.3K+",
    type: "automation",
    videos: [
      { title: "Workflow basics", duration: "4:45" },
      { title: "Setting up automation", duration: "9:20" },
      { title: "Advanced triggers", duration: "8:30" },
      { title: "Integration tools", duration: "7:50" }
    ]
  }
];
