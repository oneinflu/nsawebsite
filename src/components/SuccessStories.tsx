/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
 
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  PlayIcon, 
  XMarkIcon, 
  MapPinIcon, 
  TrophyIcon, 
  StarIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  
  BriefcaseIcon,
  
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface Ranker {
  id: string;
  name: string;
  image: string;
  certification: string;
  score: string;
  rank: string;
  currentCompany: string;
  story: string;
  videoUrl?: string;
}

interface AlumniSpotlight {
  id: string;
  name: string;
  image: string;
  fromDegree: string;
  toPosition: string;
  company: string;
  companyLogo: string;
  location: string;
  country: string;
  flag: string;
  quote: string;
  timeline: string;
}

interface ProofStat {
  number: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

const SuccessStories: React.FC = () => {
  const [selectedRanker, setSelectedRanker] = useState<Ranker | null>(null);
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>({});
  const statsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const rankers: Ranker[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face',
      certification: 'CMA Part 1',
      score: '430/500',
      rank: 'AIR 4',
      currentCompany: 'KPMG',
      story: 'NorthStar\'s personalized mentorship and simplified content helped me achieve AIR 4 in CMA Part 1. The doubt-solving sessions were game-changers.',
      videoUrl: '#'
    },
    {
      id: '2',
      name: 'Rahul Kumar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      certification: 'CPA FAR',
      score: '89/99',
      rank: 'AIR 12',
      currentCompany: 'Deloitte',
      story: 'The structured approach and Indian examples made complex US accounting concepts crystal clear. Cleared CPA in first attempt!',
      videoUrl: '#'
    },
    {
      id: '3',
      name: 'Anita Mehta',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=face',
      certification: 'ACCA F9',
      score: '92/100',
      rank: 'Global Rank 8',
      currentCompany: 'PwC',
      story: 'From commerce graduate to Big 4 professional - NorthStar made this transformation possible with their industry-focused training.',
      videoUrl: '#'
    },
    {
      id: '4',
      name: 'Vikash Patel',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      certification: 'CMA Part 2',
      score: '425/500',
      rank: 'AIR 7',
      currentCompany: 'EY',
      story: 'The one-mentor system ensured consistency in learning. Irfat Sir\'s guidance was instrumental in achieving top ranks.',
      videoUrl: '#'
    },
    {
      id: '5',
      name: 'Sneha Gupta',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&crop=face',
      certification: 'CPA BEC',
      score: '87/99',
      rank: 'AIR 15',
      currentCompany: 'Amazon',
      story: 'Working full-time and studying seemed impossible until I joined NorthStar. Their flexible approach helped me clear CPA while working.',
      videoUrl: '#'
    },
    {
      id: '6',
      name: 'Arjun Singh',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face',
      certification: 'ACCA SBR',
      score: '88/100',
      rank: 'Global Rank 22',
      currentCompany: 'Grant Thornton',
      story: 'The practical approach to ACCA preparation with real-world examples made all the difference in my success.',
      videoUrl: '#'
    }
  ];

  const alumniSpotlight: AlumniSpotlight[] = [
    {
      id: '1',
      name: 'Rajesh Krishnan',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&crop=face',
      fromDegree: 'B.Com Graduate',
      toPosition: 'Senior Analyst',
      company: 'EY',
      companyLogo: 'https://via.placeholder.com/60x30/FFD320/000000?text=EY',
      location: 'New York',
      country: 'USA',
      flag: '🇺🇸',
      quote: 'From B.Com student to EY Analyst within 8 months.',
      timeline: '8 months'
    },
    {
      id: '2',
      name: 'Meera Patel',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=400&fit=crop&crop=face',
      fromDegree: 'MBA Finance',
      toPosition: 'Finance Manager',
      company: 'Deloitte',
      companyLogo: 'https://via.placeholder.com/60x30/000000/FFFFFF?text=Deloitte',
      location: 'Dubai',
      country: 'UAE',
      flag: '🇦🇪',
      quote: 'CMA certification opened doors to Middle East opportunities.',
      timeline: '6 months'
    },
    {
      id: '3',
      name: 'Amit Sharma',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=400&fit=crop&crop=face',
      fromDegree: 'CA Inter',
      toPosition: 'Tax Associate',
      company: 'KPMG',
      companyLogo: 'https://via.placeholder.com/60x30/00338D/FFFFFF?text=KPMG',
      location: 'London',
      country: 'UK',
      flag: '🇬🇧',
      quote: 'ACCA + CA combination made me globally competitive.',
      timeline: '10 months'
    },
    {
      id: '4',
      name: 'Priyanka Joshi',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=face',
      fromDegree: 'B.Tech IT',
      toPosition: 'Financial Analyst',
      company: 'Amazon',
      companyLogo: 'https://via.placeholder.com/60x30/FF9900/000000?text=Amazon',
      location: 'Seattle',
      country: 'USA',
      flag: '🇺🇸',
      quote: 'Career switch from IT to Finance made seamless with CPA.',
      timeline: '12 months'
    },
    {
      id: '5',
      name: 'Rohit Agarwal',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      fromDegree: 'Commerce Graduate',
      toPosition: 'Audit Senior',
      company: 'PwC',
      companyLogo: 'https://via.placeholder.com/60x30/FF6600/FFFFFF?text=PwC',
      location: 'Mumbai',
      country: 'India',
      flag: '🇮🇳',
      quote: 'From local commerce to global Big 4 - dreams do come true.',
      timeline: '9 months'
    }
  ];

  const proofStats: ProofStat[] = [
    { number: '98', label: 'Pass Success Rate', icon: TrophyIcon, color: 'text-yellow-600' },
    { number: '25000', label: 'Students Empowered', icon: UserGroupIcon, color: 'text-blue-600' },
    { number: '200', label: 'Hiring Partnerships', icon: BriefcaseIcon, color: 'text-green-600' },
    { number: '150', label: 'National & Global Rankers', icon: StarIcon, color: 'text-purple-600' },
    { number: '300', label: 'Avg Career Growth Boost', icon: ChartBarIcon, color: 'text-red-600' }
  ];

  const microStories = [
    "From backbencher to ACCA Affiliate",
    "CMA US cleared while working full time",
    "CPA US and moved to Dubai within 6 months",
    "B.Com to Big 4 Manager in 2 years",
    "Career switch at 35 - now Finance Director",
    "First-generation graduate to global ranker"
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % alumniSpotlight.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [alumniSpotlight.length]);

  // Animate stats when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            proofStats.forEach((stat, index) => {
              setTimeout(() => {
                animateCounter(stat.number, index);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (target: string, index: number) => {
    const numericTarget = parseInt(target);
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      setAnimatedStats(prev => ({
        ...prev,
        [index]: Math.floor(current)
      }));
    }, duration / steps);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % alumniSpotlight.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + alumniSpotlight.length) % alumniSpotlight.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Where Dreams Become
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block">
              Global Careers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Global rankers, Big 4 professionals, and finance leaders — proudly trained at NorthStar.
          </p>
        </div>

        {/* Rankers Wall */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              🏆 Hall of Fame
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block text-4xl">
                RANKERS WALL
              </span>
            </h3>
            <p className="text-slate-600">Meet our global toppers who conquered the world&apos;s toughest certifications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rankers.map((ranker, index) => (
              <div 
                key={ranker.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer transform hover:scale-105 hover:-rotate-2 border border-slate-200/50"
                style={{ 
                  animationDelay: `${index * 0.15}s`
                }}
                onClick={() => setSelectedRanker(ranker)}
              >
                {/* Animated Background Elements - Neutral Colors */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-slate-100/30 to-slate-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-gradient-to-br from-slate-100/30 to-slate-200/30 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Rank Badge - More Prominent */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl text-sm font-black shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                      <div className="flex items-center space-x-1">
                        <TrophyIcon className="w-4 h-4" />
                        <span>{ranker.rank}</span>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Image Section with Crazy Effects */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img 
                    src={ranker.image} 
                    alt={ranker.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                      <span className="text-xs font-bold text-slate-700 flex items-center">
                        <StarIcon className="w-3 h-3 text-yellow-500 mr-1" />
                        TOP SCORER
                      </span>
                    </div>
                  </div>

                  {/* Name Overlay with Neon Effect */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <div className="text-white">
                      <h4 className="font-black text-xl mb-2 drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                        {ranker.name}
                      </h4>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                          {ranker.certification}
                        </div>
                        <span className="text-yellow-300 font-bold text-sm">{ranker.score}</span>
                      </div>
                      <p className="text-xs opacity-90 font-medium">Now crushing it at {ranker.currentCompany}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section with Crazy Styling */}
                <div className="p-6 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <TrophyIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-black text-slate-800 text-sm block">{ranker.certification}</span>
                        <span className="text-xs text-slate-500">Certification</span>
                      </div>
                    </div>
                    
                    {ranker.videoUrl && (
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-lg cursor-pointer">
                          <PlayIcon className="w-5 h-5 text-white ml-0.5" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-20"></div>
                      </div>
                    )}
                  </div>

                  {/* Success Metrics */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200/50">
                      <div className="text-green-700 font-bold text-lg">{ranker.score.split('/')[0]}</div>
                      <div className="text-green-600 text-xs font-medium">Score Achieved</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-200/50">
                      <div className="text-blue-700 font-bold text-lg">{ranker.rank.replace('AIR ', '#')}</div>
                      <div className="text-blue-600 text-xs font-medium">Global Rank</div>
                    </div>
                  </div>

                  {/* Hover Reveal Quote */}
                  <div className="mt-4 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-out">
                    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                      <p className="text-sm text-slate-700 font-medium leading-relaxed">&quot;{ranker.story}&quot;</p>
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Glow Effect */}
                <div className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 blur-sm"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <span>🚀 Join the Rankers Club</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Alumni Spotlight Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Global Alumni Spotlight</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {alumniSpotlight.map((alumni) => (
                  <div key={alumni.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative">
                        <img 
                          src={alumni.image} 
                          alt={alumni.name}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-lg">
                          <span className="text-sm font-semibold text-slate-700">{alumni.timeline}</span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="mb-6">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{alumni.flag}</span>
                            <div className="flex items-center space-x-1 text-slate-600">
                              <MapPinIcon className="w-4 h-4" />
                              <span className="text-sm">{alumni.location}, {alumni.country}</span>
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold text-slate-900 mb-2">{alumni.name}</h4>
                          <div className="space-y-1">
                            <p className="text-slate-600">{alumni.fromDegree}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-slate-400">→</span>
                              <span className="font-semibold text-slate-900">{alumni.toPosition}</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <img src={alumni.companyLogo} alt={alumni.company} className="h-6" />
                              <span className="font-semibold text-slate-700">{alumni.company}</span>
                            </div>
                          </div>
                        </div>
                        <blockquote className="text-lg italic text-slate-700 border-l-4 border-indigo-500 pl-4">
                          &quot;{alumni.quote}&quot;
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
            >
              <ChevronLeftIcon className="w-6 h-6 text-slate-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
            >
              <ChevronRightIcon className="w-6 h-6 text-slate-600" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {alumniSpotlight.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-indigo-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Proof Stats Band */}
        <div ref={statsRef} className="mb-20">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {proofStats.map((stat, index) => {
                const IconComponent = stat.icon;
                const animatedValue = animatedStats[index] || 0;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 ${stat.color.replace('text-', 'text-white')}`} />
                      </div>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {animatedValue}{stat.number.includes('%') ? '%' : '+'}
                    </div>
                    <div className="text-slate-300 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Micro Stories Strip */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...microStories, ...microStories].map((story, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 rounded-full px-6 py-3">
                    <span className="text-slate-700 font-medium whitespace-nowrap">&quot;{story}&quot;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button 
            onClick={() => setShowTestimonialModal(true)}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
          >
            <span className="flex items-center space-x-2">
              <PlayIcon className="w-5 h-5" />
              <span>Watch How Our Students Made It →</span>
            </span>
          </button>
          <p className="text-slate-500 text-sm mb-8">Real students. Real careers. Real results.</p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Ready to Be Our Next Success Story?</h4>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 mb-3">
              Book Free Counselling
            </button>
            <p className="text-red-600 text-sm font-medium">⏰ Limited seats for the next batch</p>
          </div>
        </div>
      </div>

      {/* Ranker Detail Modal */}
      {selectedRanker && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img 
                src={selectedRanker.image} 
                alt={selectedRanker.name}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedRanker(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold">
                {selectedRanker.rank}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedRanker.name}</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 px-3 py-1 rounded-full">
                  <span className="text-indigo-700 font-semibold text-sm">{selectedRanker.certification}</span>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-semibold text-sm">{selectedRanker.score}</span>
                </div>
                <div className="bg-purple-100 px-3 py-1 rounded-full">
                  <span className="text-purple-700 font-semibold text-sm">Now at {selectedRanker.currentCompany}</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">How NorthStar Helped Me:</h4>
                <p className="text-slate-600 leading-relaxed">{selectedRanker.story}</p>
              </div>
              {selectedRanker.videoUrl && (
                <div className="bg-slate-100 rounded-lg p-4 text-center">
                  <PlayIcon className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500">Video testimonial available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Modal */}
      {showTestimonialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-slate-900">Success Stories Reel</h3>
              <button 
                onClick={() => setShowTestimonialModal(false)}
                className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <PlayIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 text-lg">Testimonial reel would be embedded here</p>
                  <p className="text-slate-400 text-sm">Real students sharing their transformation stories</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {rankers.slice(0, 3).map((ranker) => (
                  <div key={ranker.id} className="text-center">
                    <img 
                      src={ranker.image} 
                      alt={ranker.name}
                      className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="text-sm font-semibold text-slate-700">{ranker.name}</p>
                    <p className="text-xs text-slate-500">{ranker.currentCompany}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;