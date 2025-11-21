/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  MessageCircle, 
  Calendar, 
  BarChart3, 

  

  
  TrendingUp,
  Award,
 
} from 'lucide-react';

const LearningExperience = () => {
  const [, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Dashboard slides data
  const dashboardSlides = [
    {
      id: 1,
      title: "Today's Study Plan",
      description: "Built around your life.",
      image: "/api/placeholder/600/400",
      features: ["Personalized schedule", "Progress tracking", "Smart reminders"]
    },
    {
      id: 2,
      title: "Class Playback + Notes",
      description: "Track, improve, achieve.",
      image: "/api/placeholder/600/400",
      features: ["HD recordings", "Synchronized notes", "Bookmark key moments"]
    },
    {
      id: 3,
      title: "Doubt Chat Thread",
      description: "Your mentor is one tap away.",
      image: "/api/placeholder/600/400",
      features: ["Instant responses", "Voice messages", "Screen sharing"]
    },
    {
      id: 4,
      title: "Analytics & Score Prediction",
      description: "One platform. Total clarity.",
      image: "/api/placeholder/600/400",
      features: ["Performance insights", "Weakness analysis", "Success prediction"]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Play,
      title: "Live Classes + Recorded Access",
      description: "Never miss a concept — learn on your schedule.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: MessageCircle,
      title: "1-on-1 Doubt Clearing",
      description: "No student left confused. Real help, real time.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Calendar,
      title: "Smart Study Planner",
      description: "Personalised roadmap that tells you what to study today.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Mock Tests & Analytics",
      description: "Know your strengths. Fix your weaknesses. Before the exam.",
      color: "from-orange-500 to-red-600"
    }
  ];

 

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-slate-50 to-white py-10 sm:py-20 overflow-hidden">
      {/* Row 1: Visual Demo + Learning System Overview */}
      <div className="max-w-7xl mx-auto lg:px-4 px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Demo */}
          <div className="relative">
            <div className="relative group">
              {/* 3D Device Stack */}
              <div className="relative transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-6" style={{ transformStyle: 'preserve-3d' }}>
                {/* iPad Mockup */}
                <div className="relative bg-slate-900 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-purple-600 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Live CMA Class</h4>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          <span className="text-sm">LIVE</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 h-64 bg-gradient-to-br from-slate-50 to-slate-100">
                      <div className="space-y-4">
                        <div className="h-4 bg-slate-300 rounded animate-pulse"></div>
                        <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                        <div className="h-4 bg-slate-300 rounded animate-pulse w-1/2"></div>
                        <div className="grid grid-cols-3 gap-2 mt-6">
                          <div className="h-16 bg-red-100 rounded"></div>
                          <div className="h-16 bg-purple-100 rounded"></div>
                          <div className="h-16 bg-red-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Mockup */}
                <div className="absolute -bottom-8 -right-8 bg-slate-900 rounded-3xl p-3 shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                  <div className="bg-white rounded-2xl overflow-hidden w-48">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 text-white">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Doubt Chat</span>
                      </div>
                    </div>
                    <div className="p-4 h-32 space-y-2">
                      <div className="bg-slate-100 rounded-lg p-2 text-xs">Quick question about ratios...</div>
                      <div className="bg-red-500 text-white rounded-lg p-2 text-xs ml-4">Let me explain that concept...</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="absolute top-1/2 -right-6 bg-white rounded-full p-3 shadow-lg animate-pulse">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-5xl font-bold lg:text-left text-center text-slate-900 leading-tight mb-6">
                A Learning System
                <span className="block text-3xl text-red-600 font-medium">Engineered for Global Results</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-4 lg:text-left text-center">
                Smart structure + mentorship support + analytics insight.
                Everything you need to become a world-class finance professional.
              </p>
              <p className="text-sm text-slate-500 italic lg:text-left text-center">
                Learning made easy. Doubts made simple. Success made predictable.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-slate-600">Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">1:1</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">AI</div>
                <div className="text-sm text-slate-600">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Feature Blocks */}
      <div className="max-w-7xl mx-auto px-4 lg:mb-20 mb-5">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>

      

     

      {/* CTA Section */}
      

      {/* Custom Styles */}
      <style jsx>{`
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .rotate-x-6 {
          transform: rotateX(6deg);
        }
      `}</style>
    </section>
  );
};

export default LearningExperience;