'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Super300AnnouncementBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 13,
    minutes: 42,
    seconds: 30
  });

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

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b border-gradient-to-r from-transparent via-amber-200 to-transparent"
    >
      {/* Translucent gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2 text-sm font-medium text-amber-900"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-lg"
            >
              🎉
            </motion.span>
            
            <span className="hidden sm:inline">Applications Open</span>
            <span className="text-amber-600">|</span>
            
            <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              ₹30 Crores Scholarships
            </span>
            <span className="text-amber-600">|</span>
            
            <span className="text-red-600 font-semibold">
              Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom translucent gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40"></div>
    </motion.div>
  );
};

export default Super300AnnouncementBar;