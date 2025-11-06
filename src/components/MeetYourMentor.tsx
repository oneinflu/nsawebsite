/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';

import  { useState, useEffect } from 'react';
import { Play,  } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import LeadFormButton from './LeadFormButton';

const MeetYourMentor = () => {
  const [, setCurrentVideoIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeMentorshipIndex, setActiveMentorshipIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    rankHolders: 0,
    partners: 0,
    students: 0,
    success: 0,
    growth: 0
  });

  // Stats animation
  useEffect(() => {
    const targets = {
      rankHolders: 150,
      partners: 200,
      students: 25000,
      success: 98,
      growth: 300
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        rankHolders: Math.floor(targets.rankHolders * progress),
        partners: Math.floor(targets.partners * progress),
        students: Math.floor(targets.students * progress),
        success: Math.floor(targets.success * progress),
        growth: Math.floor(targets.growth * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Auto-changing video testimonials
  const videoTestimonials = [
    {
      id: 1,
      title: "From Kochi to KPMG",
      student: "Priya Nair",
      course: "CMA US",
      company: "KPMG",
      thumbnail: "/api/placeholder/300/200",
      quote: "Irfat Sir's personal mentorship changed everything for me"
    },
    {
      id: 2,
      title: "B.Com to Deloitte Dubai",
      student: "Rahul Sharma",
      course: "CPA",
      company: "Deloitte",
      thumbnail: "/api/placeholder/300/200",
      quote: "The one-on-one guidance made all the difference"
    },
    {
      id: 3,
      title: "ACCA in 9 months",
      student: "Sneha Patel",
      course: "ACCA",
      company: "EY",
      thumbnail: "/api/placeholder/300/200",
      quote: "Personal attention to every doubt and query"
    },
    {
      id: 4,
      title: "Career Transformation",
      student: "Amit Kumar",
      course: "CMA US",
      company: "PwC",
      thumbnail: "/api/placeholder/300/200",
      quote: "From confusion to clarity with Irfat Sir's mentorship"
    }
  ];

  useEffect(() => {
    const videoTimer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoTestimonials.length);
    }, 4000);

    return () => clearInterval(videoTimer);
  }, []);

  
  // Mentorship demo videos (playlist)
  const mentorshipVideos = [
    {
      id: 1,
      title: 'Mentorship Demo: Strategy Call',
      url: 'https://northstaracademy.b-cdn.net/northstaracademy/demo1.mp4',
      thumbnail: '/nsa.webp'
    },
    {
      id: 2,
      title: 'Mentorship Demo: Study Planner',
      url: 'https://northstaracademy.b-cdn.net/northstaracademy/demo2.mp4',
      thumbnail: '/nsa.webp'
    },
    {
      id: 3,
      title: 'Mentorship Demo: Doubt Clinic',
      url: 'https://northstaracademy.b-cdn.net/northstaracademy/demo3.mp4',
      thumbnail: '/nsa.webp'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Mentor Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative group">
              {/* Main portrait with premium lighting */}
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-red-100">
                <img 
                  src="/Irfat-Sir.webp" 
                  alt="Irfat Sir - Global Finance Mentor"
                  className="w-full h-96 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 ring-1 ring-red-100"
                />
                
                {/* Floating certification chips */}
               
              </div>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light text-slate-900 leading-tight mb-6">
                Personal Mentorship that builds
                <span className="block text-red-600 font-medium">Global Finance Leaders</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                A proven coaching model with tailored planning, weekly reviews, and 
                accountability led by Irfat Sir — designed to turn ambition into outcomes.
              </p>
            </div>

            {/* Proof points */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-700">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                25K+ Students Coached
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                98% Pass Outcomes
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                500+ Rank Holders
              </span>
            </div>

            {/* Mentor quote */}
            <blockquote className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
              <p className="text-lg italic text-slate-700 font-light">
                &quot;Every student is unique. I help you build discipline, clarity, and momentum — so you reach global opportunities with confidence.&quot;
              </p>
              <footer className="mt-3 text-sm text-slate-600">— Irfat Sir, Global Finance Mentor</footer>
            </blockquote>

            {/* CTAs */}
            <div className="space-y-4">
              <LeadFormButton formType='book-webinar' variant='primary' isSendOtp={true}  >
                Start Mentorship With Irfat Sir
               
              </LeadFormButton>
            
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip - Themed */}
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-600">{animatedStats.rankHolders}+</div>
              <div className="text-sm text-slate-600 mt-1">Global Rank Holders Mentored</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-600">{animatedStats.partners}+</div>
              <div className="text-sm text-slate-600 mt-1">Hiring Partners Closely Working</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-600">{animatedStats.students.toLocaleString()}+</div>
              <div className="text-sm text-slate-600 mt-1">Students Across 12 Countries</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-600">{animatedStats.success}%</div>
              <div className="text-sm text-slate-600 mt-1">Achieved Certification Success</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100 text-center">
              <div className="text-3xl font-bold text-red-600">{animatedStats.growth}%+</div>
              <div className="text-sm text-slate-600 mt-1">Avg Career Growth Within 1 Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Ribbon */}
      

      {/* Video Success Stories Gallery */}
     

      {/* Personal Mentorship Model */}
     

      {/* CTA Footer */}
      

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h4 className="text-lg sm:text-xl font-medium text-slate-900">Mentorship In Action</h4>
                <p className="text-sm text-slate-600">{mentorshipVideos[activeMentorshipIndex].title}</p>
              </div>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close video modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Active Video */}
            <div className="bg-black">
              <VideoPlayer
                key={mentorshipVideos[activeMentorshipIndex].url}
                src={mentorshipVideos[activeMentorshipIndex].url}
                poster={mentorshipVideos[activeMentorshipIndex].thumbnail}
                className="aspect-video"
              />
            </div>

            {/* Playlist */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex gap-3 sm:gap-4 overflow-x-auto">
                {mentorshipVideos.map((vid, idx) => (
                  <button
                    key={vid.id}
                    onClick={() => setActiveMentorshipIndex(idx)}
                    className={`flex-shrink-0 rounded-xl border transition-all duration-200 text-left ${
                      idx === activeMentorshipIndex ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 hover:border-slate-300'
                    }`}
                    aria-pressed={idx === activeMentorshipIndex}
                  >
                    <div className="w-40 sm:w-48">
                      <div className="relative">
                        <img
                          src={vid.thumbnail || '/nsa.webp'}
                          alt={vid.title}
                          className="w-full h-24 sm:h-28 object-cover rounded-t-xl"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <Play className="absolute bottom-2 right-2 w-5 h-5 text-white opacity-80" />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium text-slate-900 line-clamp-2">{vid.title}</div>
                        <div className="text-xs text-slate-600 mt-1">Demo {idx + 1}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MeetYourMentor;