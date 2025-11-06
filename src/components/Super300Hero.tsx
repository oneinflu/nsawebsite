'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Super300Hero = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 13,
    minutes: 42
  });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'CPA'
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  // Initialize geometric shapes with useState
  const [geometricShapes] = useState(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: (i % 4) * 300 + 100,
      y: Math.floor(i / 4) * 400 + 200,
      size: 20 + (i % 3) * 15,
      duration: 15 + (i % 5) * 5,
      delay: i * 2
    }))
  );

  // Background effects data
  const [backgroundEffects] = useState(() => ({
    circles: Array.from({ length: 12 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 800,
      initialY: Math.random() * 600,
      positions: [
        Math.random() * 800,
        Math.random() * 800,
        Math.random() * 800
      ],
      yPositions: [
        Math.random() * 600,
        Math.random() * 600,
        Math.random() * 600
      ],
      size: 100 + (i % 4) * 50,
      duration: 15 + i * 2,
      delay: i * 1.5,
      color: i % 3 === 0 ? 'bg-blue-200/20' : i % 3 === 1 ? 'bg-amber-200/20' : 'bg-purple-200/20'
    })),
    particles: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 800,
      positions: [
        Math.random() * 800,
        Math.random() * 800,
        Math.random() * 800
      ],
      duration: 8 + i * 0.5,
      delay: i * 0.3
    })),
    orbs: Array.from({ length: 6 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 800,
      initialY: Math.random() * 600,
      positions: [
        Math.random() * 800,
        Math.random() * 800,
        Math.random() * 800
      ],
      yPositions: [
        Math.random() * 600,
        Math.random() * 600,
        Math.random() * 600
      ],
      duration: 25 + i * 5,
      delay: i * 3,
      color: i % 2 === 0 ? 'bg-blue-400/40' : 'bg-amber-400/40',
      glowColor: i % 2 === 0 ? 'bg-blue-400/10' : 'bg-amber-400/10'
    })),
    sparkles: Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5
    }))
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => ({
        ...prev,
        minutes: prev.minutes > 0 ? prev.minutes - 1 : 59,
        hours: prev.minutes === 0 && prev.hours > 0 ? prev.hours - 1 : prev.hours,
        days: prev.hours === 0 && prev.minutes === 0 && prev.days > 0 ? prev.days - 1 : prev.days
      }));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setShowLeadForm(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', course: 'CPA' });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Amazing Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Spectacular Entrance Light Burst */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 2, 1.5, 1],
            opacity: [0, 0.3, 0.1, 0.05]
          }}
          transition={{ 
            duration: 3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0 bg-gradient-radial from-amber-200/20 via-blue-200/10 to-transparent"
        />

        {/* Pulsing Light Rays */}
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
          className="absolute inset-0 opacity-[0.03]"
        >
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`ray-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-amber-300/30 to-transparent origin-bottom"
              style={{
                left: '50%',
                transform: `rotate(${i * 45}deg)`,
                transformOrigin: 'bottom center'
              }}
            />
          ))}
        </motion.div>

        {/* Morphing Background Shapes */}
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(245,158,11,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 20%, rgba(168,85,247,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Sparkle/Star Effects */}
        {backgroundEffects.sparkles.map((sparkle) => (
          <motion.div
            key={`sparkle-${sparkle.id}`}
            initial={{ 
              scale: 0,
              opacity: 0,
              x: sparkle.x + '%',
              y: sparkle.y + '%'
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1"
          >
            <div className="relative">
              <div className="absolute w-1 h-1 bg-amber-400 rounded-full blur-sm" />
              <div className="absolute w-px h-3 bg-amber-300/60 -translate-x-0.5 -translate-y-1" />
              <div className="absolute w-3 h-px bg-amber-300/60 -translate-x-1 -translate-y-0.5" />
            </div>
          </motion.div>
        ))}

        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.08]"
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating 3D-Style Elements */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`floating-3d-${i}`}
            initial={{ 
              y: 100,
              opacity: 0,
              rotateX: -90,
              scale: 0.5
            }}
            animate={{ 
              y: [100, -20, 100],
              opacity: [0, 0.8, 0],
              rotateX: [-90, 0, -90],
              rotateY: [0, 360, 720],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              perspective: '1000px'
            }}
          >
            <div 
              className={`
                w-12 h-12 rounded-lg shadow-2xl
                ${i % 3 === 0 ? 'bg-gradient-to-br from-blue-400/20 to-blue-600/30' : 
                  i % 3 === 1 ? 'bg-gradient-to-br from-amber-400/20 to-amber-600/30' : 
                  'bg-gradient-to-br from-purple-400/20 to-purple-600/30'}
                backdrop-blur-sm border border-white/10
              `}
              style={{
                transform: 'translateZ(20px)',
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.25),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `
              }}
            />
          </motion.div>
        ))}

        {/* Floating Blurred Circles */}
        {backgroundEffects.circles.map((circle) => (
          <motion.div
            key={`circle-${circle.id}`}
            initial={{ 
              x: circle.initialX,
              y: circle.initialY,
              scale: 0
            }}
            animate={{ 
              x: circle.positions,
              y: circle.yPositions,
              scale: [0, 1, 0.5, 1, 0]
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: circle.delay
            }}
            className={`absolute rounded-full blur-xl ${circle.color}`}
            style={{
              width: circle.size,
              height: circle.size,
            }}
          />
        ))}

        {/* Particle System */}
        {backgroundEffects.particles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            initial={{ 
              x: particle.initialX,
              y: 600,
              opacity: 0
            }}
            animate={{ 
              x: particle.positions,
              y: [600, 300, -50],
              opacity: [0, 0.6, 0.3, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeOut",
              delay: particle.delay
            }}
            className="absolute w-1 h-1 bg-gradient-to-t from-blue-400 to-amber-400 rounded-full"
          />
        ))}

        {/* Diagonal Moving Lines */}
        <motion.div
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59,130,246,0.2) 2px, transparent 2px),
              linear-gradient(-45deg, rgba(245,158,11,0.2) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Pulsing Geometric Shapes */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`geo-${i}`}
            initial={{ 
              x: (i % 4) * 300 + 100,
              y: Math.floor(i / 4) * 400 + 200,
              rotate: 0,
              scale: 0
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [0, 1, 0.5, 1, 0],
              opacity: [0, 0.1, 0.05, 0.1, 0]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className={`absolute border-2 ${
              i % 3 === 0 ? 'rounded-full border-blue-300/30' : 
              i % 3 === 1 ? 'rounded-lg border-amber-300/30' : 
              'rounded-none rotate-45 border-purple-300/30'
            }`}
            style={{
              width: 40 + (i % 3) * 20,
              height: 40 + (i % 3) * 20,
            }}
          />
        ))}

        {/* Floating Orbs with Glow */}
        {backgroundEffects.orbs.map((orb) => (
          <motion.div
            key={`orb-${orb.id}`}
            initial={{ 
              x: orb.initialX,
              y: orb.initialY,
            }}
            animate={{ 
              x: orb.positions,
              y: orb.yPositions,
              scale: [1, 1.5, 1, 0.8, 1]
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay
            }}
            className="absolute"
          >
            <div className={`w-3 h-3 rounded-full ${orb.color} blur-sm`} />
            <div className={`absolute inset-0 w-6 h-6 -m-1.5 rounded-full ${orb.glowColor} blur-md`} />
          </motion.div>
        ))}

        {/* Floating geometric shapes */}
        {geometricShapes.map((shape) => (
          <motion.div
            key={shape.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0.05, 0.1, 0],
              scale: [0, 1, 0.8, 1, 0],
              rotate: [0, 360],
              x: [shape.x, shape.x + 50, shape.x - 30, shape.x],
              y: [shape.y, shape.y - 40, shape.y + 20, shape.y]
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay
            }}
            className="absolute w-4 h-4 border-2 border-blue-300/20 rounded-sm"
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size,
              height: shape.size
            }}
          />
        ))}

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-blue-200 to-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center space-y-8">
            {/* Badge Row - Mobile */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-wrap justify-center gap-2"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="px-3 py-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-full text-sm font-medium text-amber-800 flex items-center space-x-1"
              >
                <span>💰</span>
                <span>₹90,000 / Student</span>
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 flex items-center space-x-1"
              >
                <span>🔒</span>
                <span>300 Seats Only</span>
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 flex items-center space-x-1"
              >
                <span>🎓</span>
                <span>Mentor-Led</span>
              </motion.div>
            </motion.div>

            {/* Headline - Mobile */}
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
              >
                ₹30 Crores
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                in Scholarships for 300 Future Global Finance Leaders
              </motion.span>
            </motion.h1>

            {/* Subheadline - Mobile */}
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 1.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Get ₹90,000 each for CMA, CPA, ACCA, CFA & CIA with live mentorship and guaranteed placement support.
            </motion.p>

            {/* Mobile Interactive Calculator - Static */}
            <div className="flex justify-center py-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-80 h-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 cursor-pointer"
                onClick={() => setShowLeadForm(true)}
              >
                <div className="text-center mb-4">
                  <div className="text-xs text-amber-600 mb-2 tracking-wider font-semibold">SCHOLARSHIP CALCULATOR</div>
                  <div className="text-lg font-bold text-gray-900">Check Your Eligibility</div>
                  <div className="text-sm text-gray-600">Tap to start</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-xs text-gray-600">Course Interest</span>
                    <span className="text-xs font-semibold text-gray-900">CPA/CMA/ACCA</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <span className="text-xs text-amber-700">Scholarship Amount</span>
                    <span className="text-sm font-bold text-amber-600">₹90,000</span>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Eligibility Check</span>
                      <span>85% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg font-semibold text-sm shadow-lg mt-3"
                  >
                    Tap to Complete Check →
                  </motion.button>
                </div>

                {/* Mobile Click Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full"
                />
              </motion.div>
            </div>

            {/* CTA Group - Mobile */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 2.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex flex-col space-y-3"
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now — Free
              </motion.button>
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.6, duration: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.02, borderColor: "#f59e0b" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-amber-300 hover:bg-amber-50 transition-all duration-300"
              >
                Check Eligibility (30 sec)
              </motion.button>
            </motion.div>

            {/* Countdown Progress - Mobile */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 2.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="space-y-3"
            >
              <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, ease: 'easeOut', delay: 3 }}
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                />
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 0.6 }}
                className="text-sm text-gray-600"
              >
                Applications Close in{' '}
                <span className="font-semibold text-gray-900">
                  {timeLeft.days} Days · {timeLeft.hours} Hrs · {timeLeft.minutes} Mins
                </span>
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full">
                <span className="text-lg">💰</span>
                <span className="font-semibold text-amber-800">₹90,000 / Student</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
                <span className="text-lg">🔒</span>
                <span className="font-semibold text-gray-700">300 Seats Only</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <span className="text-lg">🎓</span>
                <span className="font-semibold text-blue-700">Mentor-Led</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
                style={{ letterSpacing: '0.5px', lineHeight: '1.1' }}
              >
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  ₹30 Crores
                </span>{' '}
                in Scholarships for{' '}
                <span className="text-gray-900">300 Future Global Finance Leaders</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Get ₹90,000 each for CMA, CPA, ACCA, CFA & CIA with live mentorship and guaranteed placement support.
              </motion.p>
            </div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply Now — Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#f59e0b" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-amber-300 hover:bg-amber-50 transition-all duration-300"
              >
                Check Eligibility (30 sec)
              </motion.button>
            </motion.div>

            {/* Countdown Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-3"
            >
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, ease: 'easeOut', delay: 1.2 }}
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                />
              </div>
              <p className="text-gray-600">
                Applications Close in{' '}
                <span className="font-semibold text-gray-900">
                  {timeLeft.days} Days · {timeLeft.hours} Hrs · {timeLeft.minutes} Mins
                </span>
              </p>
              <p className="text-sm text-gray-500">Limited to 300 Students Only</p>
            </motion.div>

            {/* Mentor/Proof Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  IS
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Mentorship by Irfat Sir</p>
                  <p className="text-xs text-gray-500">CPA, CMA Expert</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-600">4.9/5 (2,400+ reviews)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Interactive Scholarship Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
            onMouseMove={handleMouseMove}
          >
            {/* Interactive Calculator Card */}
            <motion.div
              style={{ rotateX, rotateY }}
              whileHover={{ scale: 1.02 }}
              className="relative w-96 h-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 cursor-pointer overflow-hidden"
              onClick={() => setShowLeadForm(true)}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-xs text-amber-600 mb-2 tracking-wider font-semibold">SCHOLARSHIP CALCULATOR</div>
                <div className="text-xl font-bold text-gray-900">Check Your Eligibility</div>
                <div className="text-sm text-gray-600">Instant qualification check</div>
              </div>

              {/* Mock Calculator Interface */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Course Interest</span>
                  <span className="text-sm font-semibold text-gray-900">CPA/CMA/ACCA</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Education Level</span>
                  <span className="text-sm font-semibold text-gray-900">Graduate+</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="text-sm text-amber-700">Scholarship Amount</span>
                  <span className="text-lg font-bold text-amber-600">₹90,000</span>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Eligibility Check</span>
                    <span>85% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-amber-400 to-amber-500 h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                >
                  Complete Eligibility Check →
                </motion.button>
              </div>

              {/* Subtle Glow Effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5 pointer-events-none"
              />

              {/* Click Indicator */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-lg"
              />
            </motion.div>

            {/* Floating Interactive Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              onClick={() => setShowLeadForm(true)}
            >
              <span className="text-lg">🎯</span>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 12, 0],
                x: [0, 8, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-6 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              onClick={() => setShowLeadForm(true)}
            >
              <span className="text-sm">💡</span>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -8, 0],
                x: [0, -6, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 -right-10 w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              onClick={() => setShowLeadForm(true)}
            >
              <span className="text-xs">📊</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Lead Capture Form Modal */}
      {showLeadForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowLeadForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>

            {/* Form Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Your Eligibility Check</h3>
              <p className="text-sm text-gray-600">Get instant results for your ₹90,000 scholarship</p>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Interest</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="CPA">CPA (US)</option>
                  <option value="CMA">CMA (US)</option>
                  <option value="ACCA">ACCA (UK)</option>
                  <option value="CFA">CFA</option>
                  <option value="CIA">CIA</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
              >
                Check My Eligibility Now
              </motion.button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>🔒</span>
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>⚡</span>
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>✅</span>
                  <span>Free Check</span>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Super300Hero;