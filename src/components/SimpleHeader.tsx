'use client';

import  { useState, useEffect } from 'react';
import Image from 'next/image';

import LeadFormButton from './LeadFormButton';

const SimpleHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
          <Image 
            src="/nsa.png" 
            alt="NorthStar Academy" 
            width={180} 
            height={40} 
            className="h-10 w-auto" 
          />
        </div>

        {/* CTA Button */}
        <div>
          <LeadFormButton isSendOtp={true}>Book Free Counseling</LeadFormButton>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;