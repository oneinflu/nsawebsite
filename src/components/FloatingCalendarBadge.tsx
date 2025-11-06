/* eslint-disable react-hooks/purity */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, X } from 'lucide-react';

export default function FloatingCalendarBadge() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until next batch (Jan 15, 2025)
  useEffect(() => {
    const targetDate = new Date('2025-01-15T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          className={`relative bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-2xl cursor-pointer overflow-hidden ${
            isExpanded ? 'w-80' : 'w-64'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          layout
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute top-2 right-2 w-6 h-6 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/40 transition-colors z-10"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="relative p-4">
            {/* Main content */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Calendar className="w-6 h-6" />
              </motion.div>
              <div>
                <div className="font-bold text-lg">Next Batch</div>
                <div className="text-sm opacity-90">January 15, 2025</div>
              </div>
            </div>

            {/* Countdown timer */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-3"
                >
                  <div className="flex gap-2 text-center">
                    <div className="flex-1 bg-black/20 rounded-lg p-2">
                      <div className="text-xl font-bold">{timeLeft.days}</div>
                      <div className="text-xs opacity-80">Days</div>
                    </div>
                    <div className="flex-1 bg-black/20 rounded-lg p-2">
                      <div className="text-xl font-bold">{timeLeft.hours}</div>
                      <div className="text-xs opacity-80">Hours</div>
                    </div>
                    <div className="flex-1 bg-black/20 rounded-lg p-2">
                      <div className="text-xl font-bold">{timeLeft.minutes}</div>
                      <div className="text-xs opacity-80">Min</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <motion.button
              className="w-full bg-white text-orange-600 font-bold py-3 px-4 rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Users className="w-4 h-4" />
              Reserve Your Seat
            </motion.button>

            {/* Urgency indicators */}
            <div className="mt-2 flex items-center justify-between text-xs opacity-90">
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-2 h-2 bg-yellow-300 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span>Limited Seats</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Filling Fast</span>
              </div>
            </div>
          </div>

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/30"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,255,255,0.3)',
                '0 0 40px rgba(255,255,255,0.6)',
                '0 0 20px rgba(255,255,255,0.3)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 200,
                y: Math.random() * 100,
                opacity: 0 
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}