'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 13,
    minutes: 25,
    seconds: 42
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const urgencyStats = [
    { number: '300', label: 'Scholarships Available', icon: '🎯' },
    { number: '₹27Cr', label: 'Total Scholarship Value', icon: '💰' },
    { number: '7', label: 'Days Left to Apply', icon: '⏰' },
    { number: '5', label: 'Global Programs', icon: '🌍' }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 overflow-hidden"
    >
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/30 rounded-full blur-2xl animate-bounce" />
        <div className="absolute top-20 right-20 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/30 rounded-full blur-2xl animate-bounce delay-500" />
        
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-red-900/10 to-slate-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Urgency Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {urgencyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs lg:text-sm text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Prestige Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-400/30 mb-8"
          >
            <span className="text-3xl">👑</span>
            <span className="text-amber-300 font-semibold text-lg">Elite Opportunity</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Become One of the
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Super 300
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Join India&apos;s most prestigious scholarship program. 
            <span className="text-red-400 font-semibold"> ₹90,000 scholarship</span> awaits the 
            <span className="text-purple-400 font-semibold"> ambitious few</span> who dare to dream global.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Applications Close In:</h3>
              <div className="flex justify-center gap-4 lg:gap-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <motion.div
                    key={unit}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-xl p-4 lg:p-6 min-w-[80px] lg:min-w-[100px]">
                      <div className="text-2xl lg:text-4xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                    </div>
                    <div className="text-sm lg:text-base text-slate-400 mt-2 capitalize">{unit}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-12 py-6 bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold text-xl rounded-2xl overflow-hidden"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              
              <span className="relative z-10 flex items-center gap-3">
                <span>🚀</span>
                Apply for Super 300 Now
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800/80 backdrop-blur-xl text-white font-semibold text-lg rounded-xl border border-slate-600 hover:border-slate-500 transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </motion.div>

          {/* Final Urgency Message */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl p-6 border border-red-400/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl animate-pulse">⚠️</span>
                <h4 className="text-xl font-bold text-red-400">Limited Time Opportunity</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Only <span className="text-red-400 font-bold">300 scholarships</span> available across India. 
                Once applications close, there are <span className="text-red-400 font-bold">no reopens</span>. 
                Don&apos;t let this life-changing opportunity slip away.
              </p>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-slate-400 mb-4">Trusted by students who now work at:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['EY', 'Deloitte', 'PwC', 'KPMG', 'Amazon', 'Google'].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-slate-500 font-semibold text-lg"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;