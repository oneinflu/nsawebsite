'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {
  minShowMs?: number;
  transitionShowMs?: number;
  tagline?: string;
};

export default function GlobalPreloader({
  minShowMs = 1500,
  transitionShowMs = 500,
  tagline = 'Launch Your Global Finance Career',
}: Props) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const lastPathRef = useRef(pathname);

  useEffect(() => {
    // Initial mount: show briefly
    const t = setTimeout(() => setIsLoading(false), minShowMs);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // On route change: defer state updates via timers to avoid synchronous setState in effect
    if (pathname === lastPathRef.current) return;

    let startTimer: ReturnType<typeof setTimeout> | null = null;
    let endTimer: ReturnType<typeof setTimeout> | null = null;

    startTimer = setTimeout(() => {
      setIsLoading(true);
      endTimer = setTimeout(() => {
        setIsLoading(false);
        // Update the last seen pathname after transition completes
        lastPathRef.current = pathname;
      }, transitionShowMs);
    }, 0);

    return () => {
      if (startTimer) clearTimeout(startTimer);
      if (endTimer) clearTimeout(endTimer);
    };
  }, [pathname, transitionShowMs]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-preloader"
          className="fixed inset-0 z-[1000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background image behind gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/nsa.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-900/50 to-black/80" />

          {/* Centered content */}
          <div className="relative h-full w-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center px-6"
            >
              <motion.img
                src="/logo.svg"
                alt="NorthStar Academy"
                className="mx-auto h-16 sm:h-20 md:h-24 drop-shadow-xl"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              />
              <motion.p
                className="mt-4 sm:mt-5 text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                {tagline}
              </motion.p>

              {/* Subtle progress indicator */}
              <motion.div
                className="mx-auto mt-6 h-1 w-40 sm:w-48 md:w-56 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}