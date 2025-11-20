'use client';

import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Playfair_Display } from 'next/font/google';
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false });

type VideoItem = {
  url: string;
  quote?: string;
};

type Props = {
  videos?: VideoItem[];
  title?: string;
  subtitle?: string;
};

const gradients = [
  'from-indigo-600 via-violet-500 to-fuchsia-500',
  'from-sky-500 via-cyan-500 to-teal-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-emerald-500 via-green-500 to-lime-500',
  'from-rose-600 via-pink-500 to-red-500',
  'from-blue-600 via-indigo-500 to-purple-500',
  'from-teal-600 via-emerald-500 to-lime-500',
  'from-purple-600 via-fuchsia-500 to-pink-500',
  'from-cyan-600 via-sky-500 to-blue-500',
  'from-yellow-500 via-amber-500 to-orange-500',
  'from-lime-600 via-green-500 to-emerald-500',
  'from-red-600 via-rose-500 to-orange-400',
  'from-slate-700 via-gray-600 to-zinc-500'
];

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/.test(url);
}

function toYouTubeEmbed(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace('/', '');
      return `https://www.youtube.com/embed/${id}`;
    }
    const id = u.searchParams.get('v');
    if (id) return `https://www.youtube.com/embed/${id}`;
    return url;
  } catch {
    return url;
  }
}

const PortraitVideoCarousel: React.FC<Props> = ({ videos, title = 'Student Stories', subtitle = 'Real transformations at NorthStar Academy' }) => {
  const defaultVideos: VideoItem[] = useMemo(() => {
    const sample = 'https://www.youtube.com/watch?v=Xh3V1oLbG8w';
    const quotes = [
      'From Aspirant to Achiever',
      'Mentor-led Success Journey',
      'Big 4 Ready Confidence',
      'Roadmap to Global Career',
      'Exam Strategy Wins',
      'Consistency beats Complexity',
      'Focus. Practice. Succeed.',
      'Smart Prep, Real Outcomes',
      'From Confusion to Clarity',
      'Results that Inspire',
      'NorthStar Advantage',
      'Community that Cares',
      'Your Story Starts Here'
    ];
    return quotes.map(q => ({ url: sample, quote: q }));
  }, []);

  const items = videos && videos.length > 0 ? videos : defaultVideos;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: 'left' | 'right') => {
    if (!listRef.current) return;
    const container = listRef.current;
    const child = container.querySelector('[data-card]') as HTMLElement | null;
    const cardWidth = child ? child.offsetWidth + 16 /* gap */ : 280;
    container.scrollBy({ left: dir === 'left' ? -cardWidth * 2 : cardWidth * 2, behavior: 'smooth' });
  };

  return (
    <section id="video-stories" className="relative py-8 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-600 mt-2">{subtitle}</p>
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={() => scrollByCards('left')}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-5 h-5 text-slate-700" />
          </button>
          <button
            onClick={() => scrollByCards('right')}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        {/* Horizontal list with drag/scroll */}
        <div
          ref={listRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 cursor-grab active:cursor-grabbing"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              data-card
              className="snap-start flex-shrink-0 w-44 sm:w-52 md:w-56"
              style={{ aspectRatio: '9 / 16' }}
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${gradients[idx % gradients.length]}`}>
                {/* Accent noise overlay */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0%, transparent 40%)' }} />

                {/* Quote / prompt */}
                {item.quote && (
                  <div className="absolute top-3 left-3 right-3 text-center">
                    <p className={`${playfair.className} text-white/95 text-[17px] sm:text-[19px] leading-tight drop-shadow-md line-clamp-2`}>{item.quote}</p>
                  </div>
                )}

                {/* Play button */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-red-600 flex items-center justify-center shadow-lg hover:scale-105 transition"
                  aria-label="Play video"
                >
                  <PlayIcon className="w-7 h-7 ml-1" />
                </button>

                {/* Brand footer strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm p-2 text-center">
                  <span className="text-white text-xs font-semibold">NorthStar Academy</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal viewer */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 grid place-items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            >
              <motion.div
                className="relative bg-white rounded-2xl p-4 w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] shadow-2xl max-h-[85vh] overflow-hidden"
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-slate-900 font-semibold">Now Playing</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                      aria-label="Previous"
                    >
                      <ChevronLeftIcon className="w-5 h-5 text-slate-700" />
                    </button>
                    <button
                      onClick={() => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length))}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                      aria-label="Next"
                    >
                      <ChevronRightIcon className="w-5 h-5 text-slate-700" />
                    </button>
                    <button
                      onClick={() => setActiveIndex(null)}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                      aria-label="Close"
                    >
                      <XMarkIcon className="w-5 h-5 text-slate-700" />
                    </button>
                  </div>
                </div>

                {/* Portrait viewer */}
                <div
                  className="relative bg-black rounded-xl overflow-hidden mx-auto w-full max-h-[70vh]"
                  style={{ aspectRatio: '9 / 16' }}
                >
                  {isYouTube(items[activeIndex!].url) ? (
                    <iframe
                      className="w-full h-full"
                      src={`${toYouTubeEmbed(items[activeIndex!].url)}?controls=1&modestbranding=1&rel=0&showinfo=0`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <VideoPlayer src={items[activeIndex!].url} className="w-full h-full" />
                  )}
                </div>

                {/* Footer info */}
                {items[activeIndex!].quote && (
                  <p className="mt-3 text-sm text-slate-600 text-center">{items[activeIndex!].quote}</p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortraitVideoCarousel;