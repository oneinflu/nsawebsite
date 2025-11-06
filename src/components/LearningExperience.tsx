'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  MessageCircle, 
  Calendar, 
  BarChart3, 
  CheckCircle, 
  Target, 
  User, 
  Briefcase,
  
  Users,
  
  TrendingUp,
  Award,
 
} from 'lucide-react';

const LearningExperience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      color: "from-red-500 to-indigo-600"
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

  const trustBadges = [
    {
      icon: CheckCircle,
      title: "Structured to finish on time",
      description: "No procrastination traps"
    },
    {
      icon: Target,
      title: "Designed for first-attempt success",
      description: "Avoid repeat exam costs"
    },
    {
      icon: User,
      title: "Mentor-backed progress",
      description: "You're guided at every step"
    },
    {
      icon: Briefcase,
      title: "Career readiness baked-in",
      description: "Resume. Interviews. Offers."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      {/* Row 1: Visual Demo + Learning System Overview */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Demo */}
          <div className="relative">
            <div className="relative group">
              {/* 3D Device Stack */}
              <div className="relative transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-6" style={{ transformStyle: 'preserve-3d' }}>
                {/* iPad Mockup */}
                <div className="relative bg-slate-900 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
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
                          <div className="h-16 bg-indigo-100 rounded"></div>
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
                      <div className="bg-indigo-500 text-white rounded-lg p-2 text-xs ml-4">Let me explain that concept...</div>
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
              <h2 className="text-5xl font-light text-slate-900 leading-tight mb-6">
                A Learning System
                <span className="block text-indigo-600 font-medium">Engineered for Global Results</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-4">
                Smart structure + mentorship support + analytics insight.
                Everything you need to become a world-class finance professional.
              </p>
              <p className="text-sm text-slate-500 italic">
                Learning made easy. Doubts made simple. Success made predictable.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
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
      <div className="max-w-7xl mx-auto px-4 mb-20">
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

      {/* Row 3: Dashboard Showcase */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-light text-slate-900 mb-4">Dashboard Experience Showcase</h3>
          <p className="text-xl text-slate-600">Built like a fintech product, designed for learning success</p>
        </div>

        <div className="relative">
          {/* Main Display */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold">{dashboardSlides[currentSlide].title}</h4>
                  <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Online
                  </div>
                </div>
                <p className="text-indigo-100 mt-2">{dashboardSlides[currentSlide].description}</p>
              </div>

              {/* Content Area */}
              <div className="p-8 h-96 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                <img 
                  src={dashboardSlides[currentSlide].image}
                  alt={dashboardSlides[currentSlide].title}
                  className="w-full h-full object-cover rounded-xl transition-all duration-500"
                />
                
                {/* Feature Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4">
                      {dashboardSlides[currentSlide].features.map((feature, index) => (
                        <div key={index} className="text-center">
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-indigo-600" />
                          </div>
                          <div className="text-xs text-slate-600">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {dashboardSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-indigo-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {dashboardSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-sm font-medium text-slate-900 mb-1">{slide.title}</div>
                <div className="text-xs text-slate-500">{slide.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4: Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className={`text-center p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{badge.title}</h4>
                <p className="text-sm text-slate-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
          </div>
          
          <div className="relative">
            <h3 className="text-3xl font-light mb-4">Stop guessing. Start progressing.</h3>
            <p className="text-xl text-indigo-200 mb-8">Experience the difference of structured learning</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                Experience a Live Class → Free Demo Access
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Speak with a Program Advisor
              </button>
            </div>
            
            <div className="mt-8 text-sm text-indigo-300">
              <p>No charges · No pressure · 100% clarity</p>
            </div>
          </div>
        </div>
      </div>

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