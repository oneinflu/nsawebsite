'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSuper300Program = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({
    scholarship: 0,
    students: 0,
    courses: 0,
    mentors: 0
  });

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Counter animation
  useEffect(() => {
    if (isInView) {
      const targets = { scholarship: 30, students: 300, courses: 5, mentors: 15 };
      const duration = 1200;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          scholarship: Math.floor(targets.scholarship * progress),
          students: Math.floor(targets.students * progress),
          courses: Math.floor(targets.courses * progress),
          mentors: Math.floor(targets.mentors * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Value breakdown data
  const valueFeatures = [
    {
      icon: "📘",
      title: "Complete Examly Learning Platform Access",
      description: "Full access to Examly's official course interface — adaptive video learning, analytics, and test engine."
    },
    {
      icon: "👨‍🏫",
      title: "Live Mentorship by NorthStar Faculty",
      description: "1-on-1 guidance and live sessions with Irfat Sir & global mentors."
    },
    {
      icon: "💼",
      title: "Placement & Resume Support",
      description: "Interview prep, LinkedIn branding, and internship guidance."
    },
    {
      icon: "🧠",
      title: "Official Study Materials + Practice Tests",
      description: "Examly-powered AI adaptive mock tests and question banks."
    },
    {
      icon: "🎓",
      title: "Certification & Counselling Credits",
      description: "Career counselling + digital certification upon course completion."
    },
    {
      icon: "🔒",
      title: "Lifetime LMS Access & Updates",
      description: "Access to future batch updates and replays anytime."
    }
  ];

  // Impact metrics data
  const impactMetrics = [
    { icon: "💰", value: counters.scholarship, label: "Crores Total Scholarship Value", suffix: " Crores" },
    { icon: "🎓", value: counters.students, label: "Students Selected Annually", suffix: "" },
    { icon: "🌍", value: counters.courses, label: "Global Courses Across 3 Continents", suffix: "" },
    { icon: "🧑‍🏫", value: counters.mentors, label: "Global Faculty Network", suffix: "+" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Background Icons */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-4xl opacity-10"
        >
          🎓
        </motion.div>
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 text-3xl opacity-10"
        >
          🌍
        </motion.div>
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-1/4 text-3xl opacity-10"
        >
          💼
        </motion.div>

        {/* Interactive Mouse Effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About the{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Super 300 Scholarship
              </span>
              {/* Gold underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full origin-left"
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A NorthStar Academy initiative in partnership with Examly, designed to provide{" "}
            <span className="font-semibold text-amber-600">₹30 Crores worth of scholarships</span>{" "}
            for global accounting and finance aspirants.
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Visual - Interactive Learning Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-3xl p-6 shadow-2xl overflow-hidden h-[500px]">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/50 to-orange-50/30" />
              
              {/* Scholarship Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20"
              >
                ₹90,000 Value
              </motion.div>

              {/* Interactive Learning Dashboard */}
              <div className="relative z-10 h-full">
                {/* Dashboard Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mb-4"
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Learning Dashboard</h4>
                  <p className="text-xs text-slate-600">Your Complete Study Environment</p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-2 gap-3 h-[380px]">
                  {/* Quiz Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-amber-200/50 shadow-lg cursor-pointer group"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-3xl mb-2"
                      >
                        🧠
                      </motion.div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Smart Quiz</h5>
                      <div className="text-xs text-slate-600 mb-2">AI-Powered MCQs</div>
                      
                      {/* Progress Bar */}
                      <div className="bg-gray-200 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "75%" } : {}}
                          transition={{ duration: 2, delay: 2 }}
                          className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                        />
                      </div>
                      <div className="text-xs text-green-600 font-semibold">75% Complete</div>
                    </div>
                  </motion.div>

                  {/* Simulation Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-200/50 shadow-lg cursor-pointer group"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-3xl mb-2"
                      >
                        🎮
                      </motion.div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Simulations</h5>
                      <div className="text-xs text-slate-600 mb-2">Task-Based Learning</div>
                      
                      {/* Active Indicator */}
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                        <span className="text-xs text-blue-600 font-semibold">Live Session</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Digital Classroom */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-200/50 shadow-lg cursor-pointer group"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="text-3xl mb-2"
                      >
                        🏫
                      </motion.div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Classroom</h5>
                      <div className="text-xs text-slate-600 mb-2">Live & Recorded</div>
                      
                      {/* Student Count */}
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xs">👥</span>
                        <span className="text-xs text-purple-600 font-semibold">24 Students</span>
                      </div>
                      <div className="text-xs text-slate-500">Next: 2:00 PM</div>
                    </div>
                  </motion.div>

                  {/* Study Materials */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 2 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-200/50 shadow-lg cursor-pointer group"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotateY: [0, 180, 360] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-3xl mb-2"
                      >
                        📚
                      </motion.div>
                      <h5 className="text-sm font-bold text-slate-800 mb-1">Study Hub</h5>
                      <div className="text-xs text-slate-600 mb-2">Books & Resources</div>
                      
                      {/* Resource Count */}
                      <div className="text-xs text-orange-600 font-semibold mb-1">500+ Resources</div>
                      <div className="text-xs text-slate-500">Updated Daily</div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50"
                >
                  <div className="flex justify-between items-center text-xs">
                    <div className="text-center">
                      <div className="font-bold text-slate-800">98%</div>
                      <div className="text-slate-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-slate-800">24/7</div>
                      <div className="text-slate-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-slate-800">AI</div>
                      <div className="text-slate-600">Powered</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Interactive Elements */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-2 text-lg opacity-40"
              >
                💡
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 right-2 text-lg opacity-40"
              >
                🎯
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-10 pointer-events-none"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Right Mission Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.h3 
              className="text-2xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              A National Movement for Global Finance Talent
            </motion.h3>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Super 300 is NorthStar Academy&apos;s flagship scholarship program — designed to make global finance qualifications accessible and affordable to talented students and professionals across India.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Each selected candidate receives{" "}
                <span className="font-semibold text-amber-600">₹90,000 worth of value</span>{" "}
                through comprehensive learning tools, mentorship, and placement training — powered by our official partnership with{" "}
                <span className="font-semibold text-slate-800">Examly</span>, one of India&apos;s leading EdTech learning platforms.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                This isn&apos;t a fee cut — it&apos;s an{" "}
                <span className="font-semibold text-slate-800">access pass to world-class training</span>, delivered through structured digital learning systems, mock exams, mentorship sessions, and real placement support.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* What You Get - Value Breakdown Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">What You Get</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive value breakdown of your ₹90,000 scholarship package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)"
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden cursor-pointer"
              >
                {/* Animated Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={hoveredCard === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 origin-left"
                />

                {/* Background Glow */}
                <motion.div
                  animate={hoveredCard === index ? {
                    opacity: [0, 0.1, 0],
                    scale: [0.8, 1.2, 1]
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-2xl"
                />

                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl mb-4 inline-block"
                    animate={hoveredCard === index ? {
                      scale: [1, 1.2, 1.1],
                      rotate: [0, 10, -5, 0]
                    } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Official Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="bg-gradient-to-r from-gray-50 to-amber-50/30 rounded-3xl p-8 mb-20 border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Logos Section */}
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.7 }}
                className="bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-slate-800">NorthStar</div>
              </motion.div>

              {/* Connector */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 2.9 }}
                className="flex items-center gap-2 origin-left"
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                <span className="text-amber-600 font-bold">×</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 3.1 }}
                className="bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-blue-600">Examly</div>
              </motion.div>
            </div>

            {/* Partnership Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 3.3 }}
              className="text-center lg:text-right"
            >
              <h4 className="text-xl font-bold text-slate-800 mb-2">
                Official Learning Partner of Examly
              </h4>
              <p className="text-slate-600 mb-2">
                Backed by Examly&apos;s adaptive learning system, powering 200+ global education brands.
              </p>
              <p className="text-xs text-slate-500">
                NorthStar Academy is an official partner of Examly (myexamly.com), India&apos;s leading EdTech engine for professional certifications.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Impact Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 3.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 4 }}
          className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-3xl p-8 text-center border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-left lg:text-left">
              <h4 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                🎯 Think you qualify for this opportunity?
              </h4>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition-all duration-300"
              >
                Check Eligibility
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)",
                  background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                Apply for Super 300
              </motion.button>
            </div>
          </div>

          <motion.p 
            className="text-sm text-slate-500 mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 4.2 }}
          >
            Powered by Examly | Transparent selection | 100% verified mentorship
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSuper300Program;