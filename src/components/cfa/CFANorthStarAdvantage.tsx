'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  UserGroupIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  ChartBarIcon,
 
  PlayIcon,
  CheckCircleIcon,
  TrophyIcon,
  
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';
import LeadFormButton from '../LeadFormButton';

interface MentorProfile {
  id: string;
  name: string;
  title: string;
  credentials: string;
  experience: string;
  specialization: string;
  image: string;
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const mentorProfiles: MentorProfile[] = [
  {
    id: 'mentor-1',
    name: 'Irfat.M',
    title: 'CFA Charterholder',
    credentials: 'CFA, FRM, MBA',
    experience: '15+ Years',
    specialization: 'Equity Research & Portfolio Management',
    image: '/api/placeholder/120/120'
  }
];

const featureCards: FeatureCard[] = [
  {
    id: 'mentor-guidance',
    title: '1:1 Mentor Guidance',
    description: 'Personal mentorship from CFA Charterholders with industry experience',
    icon: UserGroupIcon,
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  },
  {
    id: 'live-classes',
    title: 'Live + Recorded Classes',
    description: 'Interactive live sessions with on-demand access to all recordings',
    icon: VideoCameraIcon,
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    id: 'mock-exams',
    title: 'Mock Exams + Question Banks',
    description: 'Comprehensive practice tests with detailed performance analytics',
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: 'peer-community',
    title: 'Peer Community of Analysts',
    description: 'Connect with fellow CFA candidates and working professionals',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'from-amber-50 to-amber-100'
  },
  {
    id: 'doubt-clearance',
    title: 'Doubt Clearance 24/7',
    description: 'Round-the-clock support for all your CFA preparation queries',
    icon: QuestionMarkCircleIcon,
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  }
];

export default function CFANorthStarAdvantage() {
  const [isClient, setIsClient] = useState(false);
  const [activeMentor] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 100);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NorthStar Advantage
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">6️⃣</span>
              <span>Training Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NorthStar <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Advantage</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              Training &amp; Mentorship Layer
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Learn like analysts. Train like professionals
            </p>
          </motion.div>

          {/* Split Background Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Mentor Spotlight */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Meet Your CFA Mentors
                  </h3>
                  
                  {/* Active Mentor Display */}
                  <div className="text-center mb-8">
                    <motion.div
                      key={activeMentor}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative inline-block"
                    >
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-purple-500 p-1">
                        <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-slate-600">
                          {mentorProfiles[activeMentor].name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircleIcon className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      key={`info-${activeMentor}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4 className="text-xl font-bold text-white mb-2">
                        {mentorProfiles[activeMentor].name}
                      </h4>
                      <p className="text-red-300 font-medium mb-2">
                        {mentorProfiles[activeMentor].title}
                      </p>
                      <p className="text-slate-300 text-sm mb-2">
                        {mentorProfiles[activeMentor].credentials}
                      </p>
                      <p className="text-slate-400 text-sm mb-2">
                        {mentorProfiles[activeMentor].experience} Experience
                      </p>
                      <p className="text-purple-300 text-sm">
                        {mentorProfiles[activeMentor].specialization}
                      </p>
                    </motion.div>
                  </div>


                </div>
              </div>

              {/* Right Side - LMS Mockup */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Advanced Learning Management System
                  </h3>
                  
                  {/* LMS Dashboard Mockup */}
                  <div className="bg-white rounded-2xl p-6 shadow-2xl">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <AcademicCapIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">CFA Level I</h4>
                          <p className="text-sm text-slate-600">Progress Dashboard</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">78%</p>
                        <p className="text-sm text-slate-600">Complete</p>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-700">Ethical &amp; Professional Standards</span>
                          <span className="text-green-600">95%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-700">Quantitative Methods</span>
                          <span className="text-red-600">82%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '82%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-700">Financial Reporting</span>
                          <span className="text-purple-600">67%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '67%'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-4 text-center">
                        <ChartBarIcon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-red-600">156</p>
                        <p className="text-sm text-slate-600">Hours Studied</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <TrophyIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-green-600">89%</p>
                        <p className="text-sm text-slate-600">Mock Score</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Complete Training Ecosystem
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {featureCards.map((feature, ) => {
                const IconComponent = feature.icon;
                
                return (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="font-bold text-white text-lg mb-3">{feature.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Experience the NorthStar Difference
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful CFA candidates who chose personalized mentorship over generic preparation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                
                <LeadFormButton formType='general' variant='outline' isSendOtp={true} >
                  Book Demo Class
                </LeadFormButton>
                
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}