/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon, 
  ChartBarIcon,
  AcademicCapIcon,
 
  CheckCircleIcon
} from '@heroicons/react/24/outline';


const CMALearningExperience = () => {
  const advantages = [
    {
      title: "Mentorship by Irfat Sir",
      description: "Personal guidance from India's #1 CMA mentor with 15+ years of experience",
      icon: AcademicCapIcon,
      feature: "portrait",
      quote: "Every student deserves personalized attention to unlock their CMA potential",
      image: "/mentors/irfat-sir.jpg",
      stats: "10,000+ Students Mentored"
    },
    {
      title: "Doubt Clearance Guaranteed",
      description: "24/7 doubt resolution with average response time under 2 hours",
      icon: ChatBubbleLeftRightIcon,
      feature: "chat",
      messages: [
        { sender: "student", text: "How to approach variance analysis?", time: "2:30 PM" },
        { sender: "mentor", text: "Great question! Let me break it down step by step...", time: "2:32 PM" },
        { sender: "mentor", text: "First, identify the standard vs actual costs", time: "2:33 PM" }
      ],
      stats: "98% Doubts Resolved in <2hrs"
    },
    {
      title: "Live + Recorded Classes",
      description: "Interactive live sessions with lifetime access to recordings",
      icon: VideoCameraIcon,
      feature: "devices",
      devices: ["laptop", "tablet", "mobile"],
      stats: "500+ Hours of Content"
    },
    {
      title: "Mock Tests & Analytics",
      description: "AI-powered performance tracking with detailed analytics",
      icon: ChartBarIcon,
      feature: "progress",
      progressData: [
        { subject: "Financial Planning", score: 85, trend: "up" },
        { subject: "Financial Decision Making", score: 78, trend: "up" },
        { subject: "Performance Management", score: 92, trend: "stable" },
        { subject: "Cost Management", score: 88, trend: "up" }
      ],
      stats: "50+ Mock Tests Available"
    }
  ];

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

 

  const renderFeature = (advantage: any) => {
    switch (advantage.feature) {
      case "portrait":
        return (
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-100 to-red100 flex items-center justify-center mb-4 mx-auto">
              <AcademicCapIcon className="w-10 h-10 text-red-600" />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-sm italic text-gray-600">&quot;{advantage.quote}&quot;</p>
              <p className="text-xs text-red-600 font-medium mt-2">- Irfat Sir</p>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            {advantage.messages.map((msg: any, idx: number) => (
              <div key={idx} className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg.sender === 'student' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white text-gray-800 border'
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'student' ? 'text-red-100' : 'text-gray-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center text-green-600 text-sm">
              <CheckCircleIcon className="w-4 h-4 mr-1" />
              Mentor is typing...
            </div>
          </div>
        );

      case "devices":
        return (
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-12 bg-gray-800 rounded-md flex items-center justify-center">
              <div className="w-12 h-8 bg-red-500 rounded-sm"></div>
            </div>
            <div className="w-12 h-16 bg-gray-800 rounded-md flex items-center justify-center">
              <div className="w-8 h-12 bg-red-500 rounded-sm"></div>
            </div>
            <div className="w-8 h-12 bg-gray-800 rounded-md flex items-center justify-center">
              <div className="w-6 h-8 bg-red-500 rounded-sm"></div>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="space-y-3">
            {advantage.progressData.map((item: any, idx: number) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.subject}</span>
                  <span className="font-medium">{item.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">NorthStar Advantage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class CMA preparation with personalized mentorship, cutting-edge technology, and proven methodologies
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
             
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                  <p className="text-red-600 font-medium text-sm">{advantage.stats}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{advantage.description}</p>
              
              {renderFeature(advantage)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CMALearningExperience;