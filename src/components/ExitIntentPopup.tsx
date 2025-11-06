/* eslint-disable react-hooks/purity */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Download, Phone, User, ArrowRight, CheckCircle } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if device is desktop
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Exit intent detection
  useEffect(() => {
    if (!isDesktop) return;

    let exitIntentTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to top of screen (tab/close area)
      if (e.clientY <= 0 && !exitIntentTriggered && !isVisible) {
        exitIntentTriggered = true;
        setIsVisible(true);
      }
    };

    const handleBeforeUnload = () => {
      if (!exitIntentTriggered && !isVisible) {
        exitIntentTriggered = true;
        setIsVisible(true);
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDesktop, isVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.phone) {
      // Simulate form submission
      setIsSubmitted(true);
      
      // Auto-close after success
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Simulate WhatsApp follow-up automation
      console.log('WhatsApp follow-up triggered for:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isDesktop || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={() => setIsVisible(false)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mb-3"
                  >
                    <Gift className="w-12 h-12 mx-auto mb-2" />
                  </motion.div>
                  
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-2"
                  >
                    Wait! Before you leave…
                  </motion.h2>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg opacity-95"
                  >
                    🎁 Download the Free Career Guide
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    CMA vs CPA vs ACCA Career Guide
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                    <span className="line-through text-gray-400">₹999</span>
                    <span className="text-lg">FREE</span>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold"
                    >
                      LIMITED TIME
                    </motion.div>
                  </div>
                </div>

                {/* Benefits list */}
                <div className="mb-6 space-y-2">
                  {[
                    'Complete salary comparison charts',
                    'Career progression roadmaps',
                    'Top hiring companies list',
                    'Exam difficulty analysis'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Free Guide Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Your information is secure. We&apos;ll send you the guide via WhatsApp.
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Success! 🎉
              </h3>
              
              <p className="text-gray-600 mb-4">
                Your Career Guide is being prepared!
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-800">
                  📱 You&apos;ll receive the guide on WhatsApp within 2 minutes
                </p>
              </div>
              
              <p className="text-xs text-gray-500">
                Our career counselor will also reach out to help you choose the best certification path.
              </p>
            </div>
          )}

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-30"
                initial={{ 
                  x: Math.random() * 400,
                  y: Math.random() * 600,
                  scale: 0 
                }}
                animate={{
                  y: [0, -100, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}