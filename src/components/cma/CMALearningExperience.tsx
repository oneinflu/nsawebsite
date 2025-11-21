/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon, 
  ChartBarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';


const CMALearningExperience = () => {
  const advantages = [
    {
      title: "Mentorship by Irfat Sir",
      description: "Personal guidance from India's #1 CMA mentor with 25+ years of experience",
      icon: AcademicCapIcon,
      feature: "portrait",
      quote: "Every student deserves personalized attention to unlock their CMA potential",
      image: "/mentors/irfat-sir.jpg",
      stats: "2,00,000+ Students Mentored"
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
      feature: "video",
      videoFeatures: [
        { label: "Live Classes", value: "Interactive Sessions" },
        { label: "Recordings", value: "Lifetime Access" },
        { label: "Quality", value: "HD 1080p" },
        { label: "Downloads", value: "Available" }
      ],
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
    },
    {
      title: "Placement Center",
      description: "Access top job openings and tailored career support through our dedicatd placement center.",
      icon: BriefcaseIcon,
      feature: "placement",
      companies: ["Deloitte", "EY", "KPMG", "PwC"],
      stats: "500+ Placement Partners"
    },
    {
      title: "Lifetime Access of CMA USA",
      description: "Study on your own terms with flexible access to videos and materials",
      icon: ClockIcon,
      feature: "lifetime",
      benefits: [
        "CMA USA course updates",
        "New content additions",
        "Community access",
        "Study materials"
      ],
      stats: "Forever Yours"
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

      case "video":
        return (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">LIVE</div>
              <div className="flex items-center justify-center h-24">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center"
                >
                  <VideoCameraIcon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {advantage.videoFeatures.map((feature: any, idx: number) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-500">{feature.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{feature.value}</p>
                </div>
              ))}
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
                    className="bg-red-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        );

      case "placement":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {advantage.companies.map((company: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-lg p-3 flex items-center justify-center border border-gray-200"
                >
                  <span className="font-semibold text-gray-700 text-sm">{company}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
              <p className="text-green-700 font-medium text-sm">100% Placement Support</p>
            </div>
          </div>
        );

      case "lifetime":
        return (
          <div className="space-y-3">
            {advantage.benefits.map((benefit: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 mt-4 text-center">
              <p className="text-red-700 font-bold">Pay Once, Learn Forever</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">NorthStar Advantage</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class CMA preparation with personalized mentorship, cutting-edge technology, and proven methodologies
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mb-20"
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
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">{advantage.title}</h3>
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