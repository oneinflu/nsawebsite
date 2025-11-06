/* eslint-disable @next/next/no-img-element */
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
      image: "/api/placeholder/80/80"
    },
    {
      name: "Arjun K.",
      course: "CPA Scholar 2023",
      company: "EY",
      quote: "From classroom to Big 4 — NorthStar transformed my career.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Meera S.",
      course: "CFA Scholar 2024",
      company: "KPMG",
      quote: "The mentorship here goes beyond textbooks.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Rohit M.",
      course: "CMA Scholar 2023",
      company: "Amazon",
      quote: "Super 300 opened doors I never imagined.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Ananya P.",
      course: "CPA Scholar 2024",
      company: "PwC",
      quote: "The best investment in my future.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Vikram T.",
      course: "CFA Scholar 2023",
      company: "Goldman Sachs",
      quote: "World-class mentorship, life-changing results.",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#FDFBF7]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative">
              Mentorship
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.42, 0, 0.2, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] origin-left"
              />
            </span>
            {' '}That Built Hundreds of Global Careers
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From classroom to corporate — meet the mentors and students behind India&apos;s most successful finance journeys.
          </motion.p>
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
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E4BC] p-1">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <img
                    src="/api/placeholder/180/180"
                    alt="Irfat Sir"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-xl" />
            </motion.div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Led by Irfat Sir & NorthStar&apos;s Global Faculty Team
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  15+ certified mentors
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  20+ years combined experience
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
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
            <div className="bg-gradient-to-br from-[#FDFBF7] to-white p-8 rounded-2xl border border-[#D4AF37]/20 shadow-lg">
              <blockquote className="text-xl text-gray-800 mb-4 leading-relaxed">
                &ldquo;Every Super 300 scholar is personally mentored to achieve global standards — this isn&apos;t coaching, it&apos;s transformation.&rdquo;
              </blockquote>
              <cite className="text-[#D4AF37] font-semibold">
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
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-[#D4AF37]">{story.course}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <img
                    src="/api/placeholder/120/40"
                    alt={story.company}
                    className="h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                
                <blockquote className="text-gray-600 italic">
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
          className="bg-white border border-gray-100 rounded-2xl p-8 mb-20 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl mb-2">🎓</div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">
                {counters.students.toLocaleString()}+
              </div>
              <div className="text-gray-600">Students Trained across India</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl mb-2">💼</div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">
                {counters.placement}%
              </div>
              <div className="text-gray-600">Placement Rate in top global firms</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-1">
                {counters.mentors}+
              </div>
              <div className="text-gray-600">Global Mentors certified industry experts</div>
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
                className="group relative bg-[#FDFBF7] rounded-2xl overflow-hidden aspect-video cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/api/placeholder/300/200"
                  alt={`${name} testimonial`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-gray-900">Meet {name}</span>
                    <div className="text-xs text-gray-600">Watch Story →</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#D4AF37] ml-1" fill="currentColor" viewBox="0 0 24 24">
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
          className="relative bg-gradient-to-b from-[#D4AF37]/10 to-white rounded-3xl p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
          
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(212, 175, 55, 0)',
                '0 0 0 20px rgba(212, 175, 55, 0.1)',
                '0 0 0 0 rgba(212, 175, 55, 0)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Be the Next Success Story in the Super 300.
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join India&apos;s most prestigious finance scholarship and start your global journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4E4BC] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now — Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
              >
                Check Eligibility →
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-500">
              300 scholars · ₹30 Crores · 1 career-defining chance
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorshipSuccess;