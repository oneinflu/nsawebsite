/* eslint-disable react-hooks/purity */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Clock, CheckCircle } from 'lucide-react';

export default function ScrollLeadCapture() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    const updateTimeOnPage = () => {
      setTimeOnPage(Math.floor((Date.now() - startTime) / 1000));
    };

    const interval = setInterval(updateTimeOnPage, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollDepth(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger modal based on conditions
  useEffect(() => {
    if (hasTriggered) return;

    const shouldTrigger = 
      (scrollDepth >= 50 && window.innerWidth >= 1024) || // 50% scroll on desktop
      timeOnPage >= 60; // 60 seconds time on page

    if (shouldTrigger) {
      setHasTriggered(true);
      // Small delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, [scrollDepth, timeOnPage, hasTriggered]);

  const handleWhatsApp = () => {
    // WhatsApp link with pre-filled message
    const message = encodeURIComponent("Hi! I'm interested in learning more about NorthStar's finance certification programs. Can you help me choose the right path?");
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsVisible(false);
  };

  const handleCounselling = () => {
    // Trigger counselling booking modal or redirect
    console.log('Free counselling booking triggered');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] flex items-center justify-center p-4"
        onClick={() => setIsVisible(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-6 text-center relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-3"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-6 h-6" />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-bold mb-2"
              >
                📩 Want personal guidance?
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm opacity-90"
              >
                Speak to our advisor — fast reply guaranteed
              </motion.p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Trust indicators */}
            <div className="mb-6 space-y-3">
              {[
                { icon: CheckCircle, text: "Expert career guidance", color: "text-green-500" },
                { icon: Clock, text: "Quick 2-minute response", color: "text-red-500" },
                { icon: Phone, text: "Free consultation call", color: "text-purple-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0`} />
                  <span className="text-sm text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Talk on WhatsApp
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-300 rounded-full"
                />
              </motion.button>

              <motion.button
                onClick={handleCounselling}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Free Counselling
              </motion.button>
            </div>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs text-gray-500 text-center mt-4"
            >
              💡 No spam, just personalized career advice
            </motion.p>
          </div>

          {/* Subtle animation elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-300 rounded-full opacity-40"
                initial={{ 
                  x: Math.random() * 300,
                  y: Math.random() * 400,
                  scale: 0 
                }}
                animate={{
                  y: [0, -80, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Progress indicator (subtle) */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}