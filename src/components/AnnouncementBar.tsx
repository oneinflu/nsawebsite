/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [nextBatchDate, setNextBatchDate] = useState<string>('');

  // Compute "7 days from today" on the client to avoid hydration mismatch
  useEffect(() => {
    const next = new Date();
    next.setDate(next.getDate() + 7);
    const formatted = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(next);
    setNextBatchDate(formatted);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-red-600 text-white py-3 px-4 overflow-hidden">
      {/* Animated gradient shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center space-x-6 text-sm font-medium">
          {nextBatchDate && (
            <span className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>Next Batch Starts: {nextBatchDate}</span>
            </span>
          )}
          
          <span className="hidden sm:inline">•</span>
          
          <span className="hidden sm:inline-block">
            🎓 50% Scholarship Available - Limited Time!
          </span>
          
          <span className="hidden md:inline">•</span>
          
          <span className="hidden md:inline-block">
            📅 Free Webinar: Career Transition Strategies - Register Now
          </span>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Dismiss announcement"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;