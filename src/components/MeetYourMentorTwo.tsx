/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { 
  HeartIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BriefcaseIcon,
  PlayIcon,
  PhoneIcon,
 
  
  ClockIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface ValuePillar {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}



const MeetYourMentor: React.FC = () => {
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [, ] = useState<string | null>(null);
  const [, setSignatureAnimated] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    // Trigger signature animation after component mounts
    const timer = setTimeout(() => setSignatureAnimated(true), 1000);
    
    // Trigger quote animation
    const quoteTimer = setTimeout(() => setQuoteVisible(true), 1500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(quoteTimer);
    };
  }, []);

  const valuePillars: ValuePillar[] = [
    {
      title: 'Mentorship-Led Approach',
      description: 'Personal guidance beyond lecture hours with dedicated support',
      icon: HeartIcon,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Indian-Friendly Explanations',
      description: 'Makes tough US concepts simple and relatable for Indian students',
      icon: AcademicCapIcon,
      color: 'from-red-500 to-red-500'
    },
    {
      title: 'Exam Strategy Expertise',
      description: 'Study planners, mock tests, and detailed score analytics',
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Career Vision Guidance',
      description: 'Resume building, interview prep, and Big 4 placement support',
      icon: BriefcaseIcon,
      color: 'from-purple-500 to-violet-500'
    }
  ];


  const mentorshipFeatures = [
    { icon: PhoneIcon, text: 'Live strategy calls' },
    { icon: ChartBarIcon, text: 'Weekly progress reports' },
    { icon: ChatBubbleLeftRightIcon, text: '1-on-1 doubt sessions' },
    { icon: DocumentTextIcon, text: 'Personalized study planner' }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Mentor Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Left: Mentor Portrait */}
          <div className="relative">
            <div className="relative">
              {/* Main Portrait */}
              <div className="relative w-full h-80 sm:h-96 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/life/nsa.webp" 
                  alt="Mohammed Irfat - Global Accounting Mentor" 
                  className="w-full h-full object-cover"
                />
                
                {/* Trust Badges Overlay */}
              

                {/* Hover Message Button */}
                
              </div>

              {/* Animated Signature */}
             
            </div>
          </div>

          {/* Right: Headline & Authority */}
          <div className="text-center xl:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Learn from India&apos;s Most
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 block">
                Trusted Global Accounting Mentor
              </span>
            </h2>

            <div className="mb-3 sm:mb-4 lg:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">M Irfat</h3>
              <p className="text-base sm:text-lg text-red-600 font-semibold">
                God of Costing • 15+ Years Experience
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8">
              A mentor who has guided over <strong className="text-slate-900">55,000 students</strong> to 
              global certifications and careers — including rank holders, 
              Big 4 hires, and international professionals.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
              <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-red-600">55,000+</div>
                <div className="text-xs sm:text-sm text-slate-600">Students Guided</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-green-600">98%</div>
                <div className="text-xs sm:text-sm text-slate-600">Pass Rate</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">15+</div>
                <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
              </div>
            </div>

          
          </div>
        </div>

        {/* Value Pillars */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-6 sm:mb-8 lg:mb-10">
            Why Students Choose Irfat Sir&apos;s Mentorship
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valuePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{pillar.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emotional Quote Strip */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className={`text-center py-8 sm:py-12 lg:py-16 px-6 sm:px-8 bg-gradient-to-r from-slate-900 to-red-900 rounded-3xl relative overflow-hidden transition-all duration-1000 ${quoteVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <blockquote className="relative z-10">
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 sm:mb-6 leading-relaxed">
                &quot;You are not just preparing for an exam.<br />
                You are preparing for a global career that can 
                <span className={`relative inline-block ${quoteVisible ? 'after:scale-x-100' : 'after:scale-x-0'} after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-orange-400 after:transition-transform after:duration-1000 after:delay-500`}>
                  transform your life
                </span>.&quot;
              </p>
              <cite className="text-base sm:text-lg text-red-200 font-medium">— M Irfat</cite>
            </blockquote>
          </div>
        </div>

       

        {/* How Mentorship Works */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-3xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8">How Mentorship Works</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {mentorshipFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-700">{feature.text}</p>
                  </div>
                );
              })}
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              Real mentor support — not just course access.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-red-900 rounded-3xl p-7 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Learn Under Irfat Sir?</h3>
            <p className="text-base sm:text-lg lg:text-xl text-red-200 mb-6 sm:mb-8">Join thousands of successful students who transformed their careers</p>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 sm:px-10 px-2 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto mb-4">
              <CalendarDaysIcon className="w-5 h-5" />
              <span className='sm:text-md text-sm'>Book Free Counselling with Irfat Sir</span>
            </button>
            
            <p className="text-sm text-red-200">
              <span className="inline-flex items-center space-x-1">
                <ClockIcon className="w-4 h-4" />
                <span>Limited mentorship slots available per batch</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Intro Video Modal */}
      {showIntroVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Message from Irfat Sir</h3>
              <button 
                onClick={() => setShowIntroVideo(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="text-center">
                <PlayIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Video player would be embedded here</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-600 mb-4">
                &quot;Welcome to your journey towards a global accounting career. I&apos;m here to guide you every step of the way.&quot;
              </p>
              <button 
                onClick={() => setShowIntroVideo(false)}
                className="bg-red-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MeetYourMentor;