/* eslint-disable @next/next/no-img-element */
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import LeadFormButton from './LeadFormButton';
import { CheckCircleIcon, ShieldCheckIcon, AcademicCapIcon, BuildingOfficeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const MentorshipSuccess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Counter animation state
  const [counters, setCounters] = useState({
    students: 0,
    placement: 0,
    mentors: 0
  });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  // Animate counters when stats come into view
  useEffect(() => {
    if (statsInView) {
      const duration = 1200;
      const targets = { students: 25000, placement: 92, mentors: 15 };
      
      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets];
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);
      });
    }
  }, [statsInView]);

  // Success stories data
  const successStories = [
    {
      name: "Priya R.",
      course: "CMA (US) Scholar 2024",
      company: "Deloitte",
      quote: "This scholarship made global certification possible.",
      image: "/students/1.jpg",
      logo: "/logos/logo1.png"
    },
    {
      name: "Arjun K.",
      course: "CPA Scholar 2023",
      company: "EY",
      quote: "From classroom to Big 4 — NorthStar transformed my career.",
      image: "/students/2.jpg",
      logo: "/logos/logo3.png"
    },
    {
      name: "Meera S.",
      course: "CFA Scholar 2024",
      company: "KPMG",
      quote: "The mentorship here goes beyond textbooks.",
      image: "/students/3.jpg",
      logo: "/logos/logo5.png"
    },
    {
      name: "Rohit M.",
      course: "CMA Scholar 2023",
      company: "Amazon",
      quote: "Super 300 opened doors I never imagined.",
      image: "/students/4.jpg",
      logo: "/logos/logo7.png"
    },
    {
      name: "Ananya P.",
      course: "CPA Scholar 2024",
      company: "PwC",
      quote: "The best investment in my future.",
      image: "/students/2.jpg",
      logo: "/logos/logo9.png"
    },
    {
      name: "Vikram T.",
      course: "CFA Scholar 2023",
      company: "Goldman Sachs",
      quote: "World-class mentorship, life-changing results.",
      image: "/students/3.jpg",
      logo: "/logos/logo11.png"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-slate-200/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
            Mentorship that puts you first
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto"
          >
            Thoughtfully designed live sessions, clear guidance, and calm momentum — so every step feels simpler than the last.
          </motion.p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur border border-slate-200 rounded-full text-slate-800 text-sm font-medium">
              <ShieldCheckIcon className="w-4 h-4 mr-2 text-slate-700" /> Examly Official Partner
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur border border-slate-200 rounded-full text-slate-800 text-sm font-medium">
              <CheckCircleIcon className="w-4 h-4 mr-2 text-slate-700" /> Mentor-Led Live Sessions
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur border border-slate-200 rounded-full text-slate-800 text-sm font-medium">
              <BuildingOfficeIcon className="w-4 h-4 mr-2 text-slate-700" /> Big 4 & MNC Pathways
            </span>
          </div>
        </motion.div>

        {/* Mentor Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left: Mentor Portrait */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mb-6"
            >
              <div className="w-52 h-52 rounded-full bg-white/70 backdrop-blur p-2 ring-1 ring-slate-200 shadow-sm">
                <img
                  src="/Irfat-Sir.webp"
                  alt="Irfat Sir"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-slate-300/20 to-transparent blur-2xl" />
            </motion.div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Led by Irfat Sir & NorthStar&apos;s Global Faculty Team
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  15+ certified mentors
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  20+ years combined experience
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  95% pass rate
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center"
          >
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl border border-slate-200 shadow-sm">
              <blockquote className="text-xl text-gray-800 mb-4 leading-relaxed">
                &ldquo;Every Super 300 scholar is personally mentored to achieve global standards — this isn&apos;t coaching, it&apos;s transformation.&rdquo;
              </blockquote>
              <cite className="text-slate-700 font-medium">
                — Irfat Sir, Mentor-in-Chief
              </cite>
            </div>
          </motion.div>
        </motion.div>

        {/* Success Stories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories That Inspire
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className="group bg-white/80 backdrop-blur p-6 rounded-2xl ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:ring-slate-300 transition-all duration-300 motion-safe:hover:-translate-y-1"
                role="article"
                aria-labelledby={`story-title-${index}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-slate-200"
                  />
                  <div>
                    <h4 id={`story-title-${index}`} className="font-semibold text-slate-900 tracking-tight">{story.name}</h4>
                    <p className="text-sm text-slate-700">{story.course}</p>
                  </div>
                </div>
                <div className="h-px bg-slate-200/60 my-4" />
                
                <div className="mb-4">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="h-8 object-contain opacity-70 grayscale group-hover:opacity-100 transition-opacity"
                  />
                </div>
                
                <blockquote className="text-slate-600 italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur rounded-3xl ring-1 ring-slate-200 p-10 mb-24 shadow-sm"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <AcademicCapIcon className="w-10 h-10 mx-auto text-slate-700 mb-2" />
              <div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
                {counters.students.toLocaleString()}+
              </div>
              <div className="text-slate-600">Students trained across India</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BuildingOfficeIcon className="w-10 h-10 mx-auto text-slate-700 mb-2" />
              <div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
                {counters.placement}%
              </div>
              <div className="text-slate-600">Placement rate in top global firms</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlobeAltIcon className="w-10 h-10 mx-auto text-slate-700 mb-2" />
              <div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">
                {counters.mentors}+
              </div>
              <div className="text-slate-600">Certified global mentors</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mini Video Wall */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hear From Our Scholars
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Priya', 'Arjun', 'Meera'].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                className="group relative bg-white/80 backdrop-blur rounded-2xl overflow-hidden aspect-video cursor-pointer motion-safe:hover:scale-[1.02] transition-transform duration-300 ring-1 ring-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                role="button"
                aria-label={`Watch ${name}'s story`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    // Intentionally no-op: keeps keyboard interaction semantics without side effects
                    e.preventDefault();
                  }
                }}
              >
                <img
                  src={index === 0 ? '/life/1.webp' : index === 1 ? '/life/5.webp' : '/life/12.webp'}
                  alt={`${name} testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/80 backdrop-blur rounded-lg px-3 py-2 ring-1 ring-slate-200 shadow-sm">
                    <span className="text-sm font-medium text-slate-900">Meet {name}</span>
                    <div className="text-xs text-slate-600">Watch Story →</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/80 backdrop-blur rounded-full flex items-center justify-center motion-safe:group-hover:scale-105 transition-transform ring-1 ring-slate-200 shadow-sm" aria-label="Play video">
                    <svg className="w-5 h-5 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24" role="img">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emotional CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative rounded-3xl p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0" />
          
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(15, 23, 42, 0)',
                '0 0 0 16px rgba(15, 23, 42, 0.06)',
                '0 0 0 0 rgba(15, 23, 42, 0)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="mx-auto max-w-3xl bg-white/70 backdrop-blur-lg rounded-2xl ring-1 ring-slate-200 shadow-sm p-8">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">
                Be the next success story in the Super 300
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Join India&apos;s most prestigious finance scholarship and start your global journey.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur border border-slate-200 rounded-full text-slate-800 text-xs">Personal mentor</span>
                <span className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur border border-slate-200 rounded-full text-slate-800 text-xs">Placement support</span>
                <span className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur border border-slate-200 rounded-full text-slate-800 text-xs">Live doubt clinics</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LeadFormButton
                  className="bg-slate-900 hover:bg-black text-white px-7 py-3 rounded-full font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/30"
                  formType="general"
                  variant="primary"
                  isSendOtp={true}
                >
                  Apply Now — Free
                </LeadFormButton>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/placements/placement-report.pdf"
                  className="px-7 py-3 rounded-full font-semibold text-base ring-1 ring-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/30"
                >
                  Download Placement Report
                </motion.a>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                300 scholars · ₹30 Crores · 1 career-defining chance
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipSuccess;