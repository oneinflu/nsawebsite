'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AboutSuper300 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pre-calculated random values for particles
  const [particles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }))
  );

  const statCards = [
    {
      icon: "💰",
      label: "₹30 Crores",
      subtext: "Total Scholarships Offered",
      gradient: "from-amber-400 to-orange-500",
      glow: "shadow-amber-500/25"
    },
    {
      icon: "🎯", 
      label: "300 Students Only",
      subtext: "Pan-India Selection",
      gradient: "from-red-400 to-red-500",
      glow: "shadow-red-500/25"
    },
    {
      icon: "🌍",
      label: "5 Global Courses", 
      subtext: "CPA, CMA, ACCA, CFA, CIA",
      gradient: "from-purple-400 to-pink-500",
      glow: "shadow-purple-500/25"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
      
      {/* Spectacular Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        {/* Dynamic Gradient Overlay */}
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 30%, rgba(251,191,36,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(245,158,11,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 20%, rgba(217,119,6,0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(251,191,36,0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0
            }}
            animate={{ 
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-amber-400 rounded-full blur-sm"
            style={{ width: particle.size, height: particle.size }}
          />
        ))}

        {/* Animated Light Rays */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
        >
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"
              style={{
                left: '50%',
                transform: `rotate(${i * 60}deg)`,
                transformOrigin: 'bottom center'
              }}
            />
          ))}
        </motion.div>

        {/* Interactive Mouse Follower */}
        <motion.div
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute w-96 h-96 bg-gradient-radial from-amber-400/20 via-orange-400/10 to-transparent rounded-full pointer-events-none"
        />
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Tagline */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-sm border border-amber-300 rounded-full"
          >
            <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">
              🏆 Flagship Initiative
            </span>
          </motion.div>

          {/* Main Title with Spectacular Effects */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-slate-800"
            >
              What is the
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
              className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent relative"
            >
              Super 300
              {/* Glowing Effect */}
              <motion.div
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent blur-sm"
              >
                Super 300
              </motion.div>
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="block text-slate-800"
            >
              Scholarship?
            </motion.span>
          </motion.h2>

          {/* Enhanced Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed mb-6">
              A flagship NorthStar Academy initiative to empower{' '}
              <motion.span
                animate={{ 
                  color: ['#d97706', '#ea580c', '#dc2626', '#d97706']
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="font-bold"
              >
                300 high-potential students
              </motion.span>
              {' '}with ₹30 Crores in total scholarships for global finance qualifications.
            </p>
            
            {/* Animated Stats Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-full mx-auto max-w-md"
            />
          </motion.div>
        </motion.div>

        {/* Revolutionary Asymmetric Layout */}
        <div className="relative min-h-screen mb-20">
          {/* Floating Hero Card - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
            className="absolute top-0 left-0 w-80 z-20"
          >
            <div className="bg-gradient-to-br from-white/90 via-amber-50/80 to-orange-50/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 20px 60px rgba(245, 158, 11, 0.2)",
                    "0 30px 80px rgba(249, 115, 22, 0.3)",
                    "0 20px 60px rgba(245, 158, 11, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl"
              />
              
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl"
                >
                  🎓
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-2">Super 300</h3>
                <p className="text-slate-600 text-center text-sm">Transforming Dreams into Reality</p>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 2, delay: 1 }}
                  className="mt-4 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Interactive Data Visualization - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 z-10"
          >
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-200/50 shadow-2xl">
              {/* Morphing Background */}
              <motion.div
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl"
              />

              {/* Central Hub with Morphing Shape */}
              <div className="relative text-center mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    borderRadius: [
                      "50%",
                      "30% 70% 70% 30% / 30% 30% 70% 70%",
                      "70% 30% 30% 70% / 70% 70% 30% 30%",
                      "50%"
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-200/80 via-orange-200/60 to-amber-300/80 backdrop-blur-xl border border-white/50 shadow-2xl relative"
                >
                  {/* Pulsing Core */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg"
                  />
                  
                  {/* Central Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-3xl mb-1"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      🎯
                    </motion.span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 2 }}
                      className="text-lg font-bold text-slate-800"
                    >
                      300
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Orbital Data Points */}
              {[
                { icon: "📊", label: "₹30 Cr", sublabel: "Total Value", angle: 0, color: "from-red-400 to-cyan-400" },
                { icon: "🚀", label: "95%", sublabel: "Success Rate", angle: 90, color: "from-green-400 to-emerald-400" },
                { icon: "💡", label: "50+", sublabel: "Countries", angle: 180, color: "from-yellow-400 to-amber-400" },
                { icon: "⚡", label: "1000+", sublabel: "Alumni", angle: 270, color: "from-purple-400 to-pink-400" }
              ].map((point, index) => {
                const x = 50 + 40 * Math.cos((point.angle * Math.PI) / 180);
                const y = 50 + 40 * Math.sin((point.angle * Math.PI) / 180);
                
                return (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 1, 
                      delay: 1.5 + index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      z: 20,
                      rotateX: 15,
                      rotateY: 15
                    }}
                    className="absolute cursor-pointer"
                    style={{
                      top: `${y}%`,
                      left: `${x}%`,
                      transform: 'translate(-50%, -50%)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Orbital Ring */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 15 + index * 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                      }}
                      className="absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-amber-300/50"
                    />
                    
                    {/* Data Point */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${point.color} rounded-2xl backdrop-blur-xl border border-white/40 shadow-xl flex flex-col items-center justify-center overflow-hidden`}>
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={{
                          x: [-100, 100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          repeatDelay: 3
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                      />
                      
                      <motion.span
                        animate={{ 
                          rotateZ: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className="text-lg relative z-10"
                      >
                        {point.icon}
                      </motion.span>
                      <span className="text-xs font-bold text-white/90 relative z-10">{point.label}</span>
                      <span className="text-xs text-white/70 relative z-10">{point.sublabel}</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting Energy Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[0, 1, 2, 3].map((index) => {
                  const nextIndex = (index + 1) % 4;
                  const angle1 = index * 90;
                  const angle2 = nextIndex * 90;
                  const x1 = 50 + 40 * Math.cos((angle1 * Math.PI) / 180);
                  const y1 = 50 + 40 * Math.sin((angle1 * Math.PI) / 180);
                  const x2 = 50 + 40 * Math.cos((angle2 * Math.PI) / 180);
                  const y2 = 50 + 40 * Math.sin((angle2 * Math.PI) / 180);
                  
                  return (
                    <motion.line
                      key={`connection-${index}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#energyGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                      transition={{ 
                        duration: 2, 
                        delay: 3 + index * 0.2
                      }}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.8)" />
                    <stop offset="50%" stopColor="rgba(249, 115, 22, 1)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.8)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Morphing Story Cards - Right Side */}
          <div className="absolute top-20 right-0 w-80 space-y-6 z-15">
            {[
              {
                title: "The Vision",
                content: "In 2019, we launched the Super 300 Scholarship Program with a bold vision: to democratize access to world-class education for India's brightest minds.",
                icon: "🎯",
                color: "from-red-400 to-purple-500"
              },
              {
                title: "The Reality",
                content: "What started as an ambitious dream has now become a ₹30 crore reality, transforming the lives of 300 exceptional students across the nation.",
                icon: "💎",
                color: "from-amber-400 to-orange-500"
              },
              {
                title: "The Impact",
                content: "Each scholarship recipient gains access to premium courses, personalized mentorship, and a global network of opportunities.",
                icon: "🌟",
                color: "from-green-400 to-teal-500"
              }
            ].map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, x: 100, rotateY: -30 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 + index * 0.3, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  z: 30
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl overflow-hidden">
                  {/* Morphing Background */}
                  <motion.div
                    animate={{
                      background: [
                        `linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.1))`,
                        `linear-gradient(135deg, transparent, rgba(249, 115, 22, 0.1))`,
                        `linear-gradient(225deg, transparent, rgba(245, 158, 11, 0.1))`,
                        `linear-gradient(315deg, transparent, rgba(249, 115, 22, 0.1))`,
                        `linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.1))`
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${story.color} flex items-center justify-center text-xl mr-4`}
                      >
                        {story.icon}
                      </motion.div>
                      <h3 className="text-lg font-bold text-slate-800">{story.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{story.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Stat Clusters - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="absolute bottom-20 left-20 z-20"
          >
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((card, index) => (
                <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 50 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                   whileHover={{ 
                     scale: 1.15, 
                     rotateZ: hoveredCard === index ? 10 : 5,
                     y: -15,
                     rotateX: 15,
                     rotateY: 10
                   }}
                   onHoverStart={() => setHoveredCard(index)}
                   onHoverEnd={() => setHoveredCard(null)}
                   className="group relative w-32 h-32"
                   style={{ transformStyle: 'preserve-3d' }}
                 >
                   {/* Glassmorphism Card with Enhanced Effects */}
                   <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-4 border border-white/40 shadow-2xl h-full flex flex-col items-center justify-center overflow-hidden">
                     {/* Dynamic Gradient Background */}
                     <motion.div
                       animate={hoveredCard === index ? {
                         background: [
                           "radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)",
                           "radial-gradient(circle at 100% 0%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
                           "radial-gradient(circle at 100% 100%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)",
                           "radial-gradient(circle at 0% 100%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
                           "radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)"
                         ]
                       } : {}}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="absolute inset-0 rounded-3xl"
                     />

                     {/* Holographic Shimmer Effect */}
                     <motion.div
                       animate={hoveredCard === index ? {
                         background: [
                           "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)",
                           "linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)",
                           "linear-gradient(225deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)",
                           "linear-gradient(315deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)"
                         ],
                         opacity: [0, 1, 0]
                       } : {}}
                       transition={{ duration: 1.5, repeat: Infinity }}
                       className="absolute inset-0 rounded-3xl"
                     />

                     {/* Floating Border Glow */}
                     <motion.div
                       animate={hoveredCard === index ? {
                         boxShadow: [
                           "0 0 20px rgba(245, 158, 11, 0.5), inset 0 0 20px rgba(245, 158, 11, 0.1)",
                           "0 0 40px rgba(249, 115, 22, 0.7), inset 0 0 30px rgba(249, 115, 22, 0.2)",
                           "0 0 20px rgba(245, 158, 11, 0.5), inset 0 0 20px rgba(245, 158, 11, 0.1)"
                         ]
                       } : {}}
                       transition={{ duration: 1.5, repeat: Infinity }}
                       className="absolute inset-0 rounded-3xl border border-amber-300/50"
                     />

                     <div className="relative z-10 text-center">
                       {/* 3D Floating Icon */}
                       <motion.div
                         animate={hoveredCard === index ? { 
                           rotateY: [0, 360],
                           rotateX: [0, 180, 0],
                           scale: [1, 1.4, 1.2],
                           z: [0, 30, 20]
                         } : {
                           y: [0, -3, 0],
                           rotateZ: [0, 5, -5, 0]
                         }}
                         transition={hoveredCard === index ? 
                           { duration: 2, ease: "easeInOut" } :
                           { duration: 3, repeat: Infinity, ease: "easeInOut" }
                         }
                         className="text-2xl mb-2 inline-block"
                         style={{ transformStyle: 'preserve-3d' }}
                       >
                         {card.icon}
                       </motion.div>

                       {/* Morphing Text */}
                       <motion.h4 
                         animate={hoveredCard === index ? {
                           scale: [1, 1.1, 1.05],
                           textShadow: [
                             "0 0 0px rgba(245, 158, 11, 0)",
                             "0 0 10px rgba(245, 158, 11, 0.8)",
                             "0 0 5px rgba(245, 158, 11, 0.6)"
                           ]
                         } : {}}
                         className="text-xs font-bold text-slate-800 mb-1 bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text"
                       >
                         {card.label}
                       </motion.h4>

                       <motion.p 
                         animate={hoveredCard === index ? {
                           opacity: [0.7, 1, 0.9],
                           y: [0, -2, -1]
                         } : {}}
                         className="text-xs text-slate-600 leading-tight"
                       >
                         {card.subtext.slice(0, 30)}...
                       </motion.p>
                     </div>

                     {/* Particle Burst Effect */}
                     {hoveredCard === index && particles.slice(index * 4, (index + 1) * 4).map((particle, pIndex) => (
                       <motion.div
                         key={`burst-particle-${index}-${pIndex}`}
                         className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
                         style={{
                           left: '50%',
                           top: '50%',
                         }}
                         initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                         animate={{ 
                           scale: [0, 1.5, 0],
                           x: [0, (pIndex % 2 === 0 ? 30 : -30)],
                           y: [0, (pIndex < 2 ? -30 : 30)],
                           opacity: [0, 1, 0]
                         }}
                         transition={{
                           duration: 1.5,
                           delay: pIndex * 0.1,
                           repeat: Infinity,
                           repeatDelay: 2
                         }}
                       />
                     ))}

                     {/* Liquid Morphing Effect */}
                     <motion.div
                       animate={hoveredCard === index ? {
                         borderRadius: [
                           "24px",
                           "24px 24px 40px 24px",
                           "40px 24px 24px 40px",
                           "24px 40px 40px 24px",
                           "24px"
                         ]
                       } : {}}
                       transition={{ duration: 3, repeat: Infinity }}
                       className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-amber-400/20 via-transparent to-orange-400/20"
                     />
                   </div>
                 </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Magnetic Interaction Particles */}
           {particles.slice(0, 15).map((particle, index) => (
             <motion.div
               key={`magnetic-particle-${index}`}
               className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-40"
               style={{
                 left: `${particle.x}%`,
                 top: `${particle.y}%`,
               }}
               animate={{
                 x: [0, Math.sin(index) * 20, 0],
                 y: [0, Math.cos(index) * 20, 0],
                 opacity: [0.4, 0.8, 0.4],
                 scale: [1, 1.5, 1]
               }}
               transition={{
                 duration: particle.duration + index * 0.5,
                 delay: particle.delay,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             />
           ))}
        </div>

      

        {/* Enhanced CTA Strip with Spectacular Effects */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2, type: "spring", stiffness: 100 }}
          className="relative bg-gradient-to-r from-white/90 via-amber-50/90 to-white/90 backdrop-blur-xl rounded-3xl p-12 border border-amber-300/50 shadow-2xl overflow-hidden"
        >
          {/* Animated Background Effects */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-conic from-amber-200/20 via-orange-200/20 to-amber-200/20 blur-3xl"
          />

          {/* Floating Orbs */}
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.sin(i) * 50, 0],
                y: [0, Math.cos(i) * 30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-sm"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 4) * 20}%`
              }}
            />
          ))}

          <div className="relative z-10 text-center">
            {/* Spectacular Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-6"
            >
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Ready to Transform Your Future?
                </span>
              </h3>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Join the next cohort of Super 300 scholars and unlock your potential with world-class education and mentorship.
              </p>
            </motion.div>

            {/* Spectacular CTA Button */}
            <motion.div
              id="apply-section"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 200 }}
              className="relative inline-block"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl border border-amber-400/50 overflow-hidden group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Button Background Animation */}
                <motion.div
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                {/* Button Text */}
                <span className="relative z-10 flex items-center gap-3">
                  Apply for Super 300 Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>

                {/* Particle Burst on Hover */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {Array.from({ length: 8 }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 30],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 30]
                      }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                    />
                  ))}
                </motion.div>
              </motion.button>

              {/* Pulsing Ring Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 border-2 border-amber-400 rounded-2xl"
              />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>300+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>₹30Cr+ Scholarships</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Global Recognition</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSuper300;