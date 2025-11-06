/* eslint-disable react-hooks/exhaustive-deps */
 
 
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Unlock, Phone, Gift, ArrowRight, CheckCircle } from 'lucide-react';

export default function SmartLeadMagnetBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeOnPricing, setTimeOnPricing] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const pricingObserverRef = useRef<IntersectionObserver | null>(null);
  const timeStartRef = useRef<number | null>(null);

  useEffect(() => {
    // Find pricing section by ID or class
    const pricingSection = document.querySelector('#pricing, .pricing-section, [data-section="pricing"]') || 
                          document.querySelector('section:has([class*="pricing" i])') ||
                          // Fallback: look for elements containing "pricing" text
                          Array.from(document.querySelectorAll('section, div')).find(el => 
                            el.textContent?.toLowerCase().includes('pricing') && 
                            el.textContent?.toLowerCase().includes('emi')
                          );

    if (!pricingSection) return;

    // Intersection Observer for pricing section visibility
    pricingObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User entered pricing section
            if (!timeStartRef.current) {
              timeStartRef.current = Date.now();
            }
          } else {
            // User left pricing section
            if (timeStartRef.current) {
              const timeSpent = Date.now() - timeStartRef.current;
              setTimeOnPricing(prev => prev + timeSpent);
              timeStartRef.current = null;
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of pricing section is visible
    );

    pricingObserverRef.current.observe(pricingSection);

    // Click listener for pricing elements
    const handlePricingClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[class*="pricing" i], [id*="pricing" i], [data-section="pricing"]')) {
        triggerBanner();
      }
    };

    document.addEventListener('click', handlePricingClick);

    return () => {
      if (pricingObserverRef.current) {
        pricingObserverRef.current.disconnect();
      }
      document.removeEventListener('click', handlePricingClick);
    };
  }, []);

  // Check time spent on pricing section
  useEffect(() => {
    if (timeOnPricing > 30000 && !hasTriggered) { // 30 seconds
      triggerBanner();
    }
  }, [timeOnPricing, hasTriggered]);

  const triggerBanner = () => {
    if (hasTriggered) return;
    setHasTriggered(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 800); // Small delay for better UX
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phoneNumber.length >= 10) {
      setIsSubmitted(true);
      
      // Auto-hide after success
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      // Simulate lead capture
      console.log('EMI Plan & Scholarship lead captured:', phoneNumber);
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-96 z-[80]"
      >
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl overflow-hidden relative"
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative p-5">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Unlock className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg">Unlock EMI Plan</h3>
                    <p className="text-sm opacity-90">+ Scholarship Eligibility</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4 space-y-2">
                  {[
                    'Zero-cost EMI options',
                    'Up to 70% scholarship',
                    'Instant eligibility check'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:bg-white/30 focus:border-white/50 outline-none transition-all"
                      required
                      minLength={10}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-purple-600 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Gift className="w-4 h-4" />
                    Get EMI Plan & Scholarship
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>

                <p className="text-xs text-white/80 text-center mt-3">
                  🔒 Secure & confidential. No spam guaranteed.
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="font-bold text-lg mb-2">Success! 🎉</h3>
                <p className="text-sm opacity-90 mb-3">
                  Your EMI plan & scholarship details are being prepared
                </p>
                
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs">
                    &quot;📱 You&apos;ll receive details via SMS within 5 minutes.&quot;
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                initial={{ 
                  x: Math.random() * 300,
                  y: Math.random() * 200,
                  scale: 0 
                }}
                animate={{
                  y: [0, -60, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
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

          {/* Urgency pulse */}
          <motion.div
            className="absolute inset-0 border-2 border-white/30 rounded-2xl"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255,255,255,0.4)',
                '0 0 0 10px rgba(255,255,255,0)',
                '0 0 0 0 rgba(255,255,255,0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}