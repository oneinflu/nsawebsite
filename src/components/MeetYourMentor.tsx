'use client';

import  { useState, useEffect } from 'react';
import { Play, CheckCircle, Users, TrendingUp, Award, Globe, ArrowRight, Star, Calendar, Phone } from 'lucide-react';

const MeetYourMentor = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
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

  const successStories = [
    "From Kochi to KPMG — CMA US Achieved",
    "B.Com to Deloitte Dubai — CPA Win!",
    "ACCA Affiliate in 9 months — EY Offer!",
    "Small Town to Big 4 — Personal Mentorship Success",
    "Zero Experience to Finance Manager — CPA Journey",
    "Student to Senior Analyst — ACCA Achievement"
  ];

  const mentorshipSteps = [
    { step: "Personal Evaluation", icon: Users, description: "Individual assessment of your goals and current level" },
    { step: "Custom Study Planner", icon: Calendar, description: "Tailored roadmap designed specifically for you" },
    { step: "Live Strategy Calls", icon: Phone, description: "Regular one-on-one sessions with Irfat Sir" },
    { step: "Weekly Progress Reviews", icon: TrendingUp, description: "Continuous monitoring and course corrections" },
    { step: "Doubt-Clinics", icon: CheckCircle, description: "Instant resolution of all your queries" },
    { step: "Mock Exams", icon: Award, description: "Practice tests with detailed feedback" },
    { step: "Career Readiness", icon: Star, description: "Interview prep and industry connections" },
    { step: "Global Career", icon: Globe, description: "Placement in top international firms" }
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
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-800 to-black p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-transparent to-amber-400/20 opacity-60"></div>
                <img 
                  src="/api/placeholder/400/500" 
                  alt="Irfat Sir - Global Finance Mentor"
                  className="w-full h-96 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1)',
                    boxShadow: '0 0 50px rgba(251, 191, 36, 0.3)'
                  }}
                />
                
                {/* Floating certification chips */}
                <div className="absolute -top-4 -right-4 space-y-3">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-200">
                    <span className="text-sm font-semibold text-slate-800">CMA (US) ✓</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-200">
                    <span className="text-sm font-semibold text-slate-800">CPA (US) ✓</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-200">
                    <span className="text-sm font-semibold text-slate-800">ACCA (UK) ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light text-slate-900 leading-tight mb-6">
                Mentorship that creates
                <span className="block text-indigo-600 font-medium">Global Finance Leaders</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                A personal coaching model that ensures every student succeeds
              </p>
            </div>

            {/* Proof points */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-700">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                25K+ Mentored
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                98% Success
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                Rank Holders
              </span>
            </div>

            {/* Mentor quote */}
            <blockquote className="border-l-4 border-amber-400 pl-6 py-4 bg-amber-50/50 rounded-r-lg">
              <p className="text-lg italic text-slate-700 font-light">
                &quot;Every student is unique. My role is to unlock their potential and guide them to global success.&quot;
              </p>
              <footer className="mt-3 text-sm text-slate-600">— Irfat Sir</footer>
            </blockquote>

            {/* CTAs */}
            <div className="space-y-4">
              <button className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                Learn from Irfat Sir
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="w-full lg:w-auto border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5" />
                Watch His Mentorship in Action
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Panorama Strip */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <path d="M0,200 Q300,100 600,200 T1200,200" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M0,250 Q400,150 800,250 T1200,250" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-light text-amber-400">{animatedStats.rankHolders}+</div>
              <div className="text-sm text-slate-300">Global Rank Holders Mentored</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-amber-400">{animatedStats.partners}+</div>
              <div className="text-sm text-slate-300">Hiring Partners Closely Working</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-amber-400">{animatedStats.students.toLocaleString()}+</div>
              <div className="text-sm text-slate-300">Students Across 12 Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-amber-400">{animatedStats.success}%</div>
              <div className="text-sm text-slate-300">Achieved Certification Success</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-light text-amber-400">{animatedStats.growth}%+</div>
              <div className="text-sm text-slate-300">Avg Career Growth Within 1 Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Ribbon */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white font-medium text-lg mx-8">
            {successStories.join(' • ')} • {successStories.join(' • ')}
          </span>
        </div>
      </div>

      {/* Video Success Stories Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-light text-slate-900 mb-4">Real Stories, Real Success</h3>
          <p className="text-xl text-slate-600">These are normal Indian students... just like you.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={videoTestimonials[currentVideoIndex].thumbnail}
                alt={videoTestimonials[currentVideoIndex].title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  {videoTestimonials[currentVideoIndex].course}
                </div>
                <h4 className="text-white text-xl font-medium mb-2">
                  {videoTestimonials[currentVideoIndex].title}
                </h4>
                <p className="text-white/90 text-sm">
                  {videoTestimonials[currentVideoIndex].quote}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-white/80 text-sm">{videoTestimonials[currentVideoIndex].student}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-amber-400 text-sm font-medium">{videoTestimonials[currentVideoIndex].company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="space-y-4">
            {videoTestimonials.map((video, index) => (
              <div 
                key={video.id}
                onClick={() => setCurrentVideoIndex(index)}
                className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentVideoIndex ? 'ring-2 ring-indigo-500 shadow-lg' : 'hover:shadow-md'
                }`}
              >
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <div className="bg-amber-400 text-slate-900 px-2 py-1 rounded text-xs font-medium self-start">
                    {video.course}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{video.student}</div>
                    <div className="text-amber-400 text-xs">{video.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Mentorship Model */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-slate-900 mb-4">Personal Mentorship Model</h3>
            <p className="text-xl text-slate-600">A repeatable success formula that removes all uncertainty</p>
          </div>

          <div className="relative">
            {/* Flow diagram */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentorshipSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                      <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h4 className="font-medium text-slate-900 mb-2">{step.step}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Arrow connector */}
                    {index < mentorshipSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-slate-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-light mb-6">
            Join the Mentorship Movement
          </h3>
          <p className="text-xl text-slate-300 mb-8 font-light">
            Become a Global Finance Professional under Irfat Sir
          </p>
          
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl mb-8">
            Book Free Counselling
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              EMI Available
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Verified WhatsApp Support
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Limited Seats per Batch
            </span>
          </div>

          <p className="text-sm text-amber-400">
            Mentorship slots fill fast for each CMA / CPA / ACCA batch
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h4 className="text-xl font-medium text-slate-900">Mentorship in Action</h4>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-slate-900 flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-slate-400">Video player would be embedded here</p>
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