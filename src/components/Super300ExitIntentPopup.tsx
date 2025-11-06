'use client';

import { useState, useEffect } from 'react';
import { X, Download, ArrowRight } from 'lucide-react';

interface Super300ExitIntentPopupProps {
  onGetGuide: () => void;
  onApply: () => void;
}

export default function Super300ExitIntentPopup({ onGetGuide, onApply }: Super300ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('super300_exit_popup_shown') === 'true';
    }
    return false;
  });
  const [userHasApplied, ] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('super300_applied') === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Check if user is on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile || hasShown || userHasApplied) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if cursor is leaving from the top of the viewport
      if (e.clientY <= 0 && !hasShown && !userHasApplied) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('super300_exit_popup_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, userHasApplied]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGetGuide = () => {
    onGetGuide();
    setIsVisible(false);
  };

  const handleApply = () => {
    onApply();
    setIsVisible(false);
  };

  if (!isVisible || hasShown || userHasApplied) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Soft background - no blur overlay */}
      <div className="absolute inset-0 bg-white/80" />
      
      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-8 border border-gray-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-gray-900" />
          </div>

          {/* Headline */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Want the Super 300 Guide before you go?
          </h3>

          {/* Subtext */}
          <p className="text-gray-600 mb-6">
            Get the complete guide to India&apos;s most exclusive scholarship program + fast-track your application
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            {/* Primary CTA - Get Guide */}
            <button
              onClick={handleGetGuide}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
            >
              <Download size={18} />
              <span>Get Guide & Apply</span>
              <ArrowRight size={18} />
            </button>

            {/* Secondary CTA - Just Apply */}
            <button
              onClick={handleApply}
              className="w-full border-2 border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Skip Guide — Apply Directly
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 mt-4">
            ₹3,00,000 scholarship • 11 US CPA mentorship • Guaranteed placement support
          </p>
        </div>
      </div>
    </div>
  );
}