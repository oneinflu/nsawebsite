'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Super300HeaderProps {
  onApplyNowClick?: () => void;
}

export default function Super300Header({ onApplyNowClick }: Super300HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyNow = () => {
    if (onApplyNowClick) {
      onApplyNowClick();
    } else {
      // Fallback: Scroll to application section
      const applySection = document.getElementById('apply-section');
      if (applySection) {
        applySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCheckEligibility = () => {
    // Scroll to eligibility section
    const eligibilitySection = document.getElementById('eligibility-section');
    if (eligibilitySection) {
      eligibilitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  return (
    <header 
      className={` left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
      style={{ 
        height: '64px',
         // Position below the announcement bar (approximately 48px height)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left - NorthStar Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/nsa.png"
                alt="NorthStar Logo"
                width={140}
                height={45}
                className="w-[100px] h-[32px] sm:w-[120px] sm:h-[38px] md:w-[140px] md:h-[45px]"
              />
            </div>
          </div>

          {/* Right - Buttons and WhatsApp */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Check Eligibility Button - Only show on mobile, hide on larger screens */}
            <button
              onClick={handleCheckEligibility}
              className={`block sm:hidden px-3 py-2 rounded-lg border-2 font-medium text-xs transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  : 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Check Eligibility
            </button>

            {/* Check Eligibility Button - Show on tablet and desktop */}
            <button
              onClick={handleCheckEligibility}
              className={`hidden sm:block px-4 py-2 rounded-lg border-2 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  : 'border-gray-900 bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Check Eligibility
            </button>

            {/* Apply Now Button - Hide on mobile, show on larger screens */}
            <button
              onClick={handleApplyNow}
              className="hidden sm:block px-4 md:px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold text-sm rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now — Free
            </button>

           
          </div>
        </div>
      </div>
    </header>
  );
}