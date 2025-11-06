'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';

type Story = {
  id: number;
  type: 'testimonial' | 'video';
  text?: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  thumbnail?: string;
  videoSrc?: string;
};

const stories: Story[] = [
  {
    id: 1,
    type: 'testimonial',
    text:
      "Excited to announce my graduation from NorthStar's CMA Accelerator. The mentorship and real-world projects made all the difference!",
    name: 'Abhishika K.N',
    role: 'Engineer',
    company: 'Version 2',
    avatar: '/students/1.jpg',
  },
  {
    id: 2,
    type: 'video',
    name: 'Workshop Highlight',
    role: 'CMA Cohort',
    company: 'NorthStar',
    videoSrc: '/life/Office.mp4',
  },
  {
    id: 3,
    type: 'testimonial',
    text:
      'From CMA lessons to handling real accounts at global firms — this journey has been life-changing.',
    name: 'Vinyas',
    role: 'Associate',
    company: 'KPMG',
    avatar: '/students/2.jpg',
  },
  {
    id: 4,
    type: 'testimonial',
    text:
      'My first international client after NorthStar’s LinkedIn workshop. Optimized profile and Featured section did the magic.',
    name: 'Akash Pandey',
    role: 'Growth Coach',
    company: 'Instagram',
    avatar: '/students/3.jpg',
  },
  {
    id: 5,
    type: 'video',
    name: 'CMA Lab Tour',
    role: 'Learning Experience',
    company: 'NorthStar',
    videoSrc: '/life/Office.mp4',
  },
  {
    id: 6,
    type: 'testimonial',
    text:
      'Turned CMA knowledge into a corporate role. Getting placed at a global brand was my proudest moment.',
    name: 'Anas KP',
    role: 'Finance Analyst',
    company: 'HP',
    avatar: '/students/4.jpeg',
  },
];

const CARD_WIDTH = 'w-72 md:w-80';
const CARD_HEIGHT = 'h-[340px]';

const Card = ({ item }: { item: Story }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  // Video-only card: render only video, no text or icons
  if (item.type === 'video') {
    return (
      <div className={`${CARD_WIDTH} ${CARD_HEIGHT} flex-shrink-0`}>
        <div className="rounded-2xl overflow-hidden h-full bg-black relative group">
          <video
            ref={videoRef}
            src={item.videoSrc}
            className="w-full h-full object-cover"
            playsInline
            preload="none"
            controls={false}
          />
          <button
            type="button"
            onClick={togglePlay}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 text-black flex items-center justify-center shadow hover:bg-white transition"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    );
  }

  // Testimonial card
  return (
    <div className={`${CARD_WIDTH} ${CARD_HEIGHT} flex-shrink-0`}>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
        {/* Text area */}
        <div className="px-5 pt-5 flex-1">
          <p className="text-gray-800 leading-relaxed h-28 overflow-hidden">{item.text}</p>
        </div>
        {/* Author area */}
        <div className="px-5 pb-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              {item.avatar ? (
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">NS</div>
              )}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{item.name}</div>
              <div className="text-sm text-gray-600">{item.role}, {item.company}</div>
            </div>
          </div>
          <div className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center">in</div>
        </div>
      </div>
    </div>
  );
};

const AutoRow = ({ items, delay = 0, direction = 'ltr' }: { items: Story[]; delay?: number; direction?: 'ltr' | 'rtl' }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex space-x-6 ${direction === 'rtl' ? 'marquee-rtl' : 'marquee'}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {[...items, ...items].map((it, idx) => (
          <Card key={`${it.id}-${idx}`} item={it} />
        ))}
      </div>
    </div>
  );
};

const CMATestimonialVideo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-red-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hear It From Them</h2>
          <p className="text-gray-600">Ambitious People ❤️ NorthStar</p>
        </div>

        {/* Two-row wall of fame on all viewports */}
        <div className="space-y-8">
          <AutoRow items={stories.slice(0, Math.ceil(stories.length / 2))} direction="ltr" />
          <AutoRow items={stories.slice(Math.ceil(stories.length / 2))} delay={3} direction="rtl" />
        </div>
      </div>
    </section>
  );
};

export default CMATestimonialVideo;