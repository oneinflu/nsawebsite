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
  // TEXT → TESTIMONIAL
  {
    id: 2,
    type: "testimonial",
    text:
      "Starting my journey with WNS is a proud moment. NSA gave me the clarity, confidence, and push I needed to reach here.",
    name: "Harini Sri Karthikeyan, CMA",
    role: "CMA Graduate",
    company: "WNS Associate",
    avatar: "/cma-testimonial/Harini.jpg",
  },

  // VIDEO (unchanged)
  {
    id: 1,
    type: "video",
    thumbnail: "/images/home/stories/simran.jpg",
    videoSrc: "/life/Office.mp4",
    name: "Simran Khatri, CMA",
    role: "CMA Graduate",
    company: "KPMG",
    avatar: "/images/home/stories/Simran.jpg",
  },

  // VIDEO (unchanged)
  {
    id: 4,
    type: "video",
    thumbnail: "/images/home/stories/rid.jpg",
    videoSrc: "/life/Office.mp4",
    name: "Ridwan P, CMA",
    role: "CMA Graduate",
    company: "Deloitte",
    avatar: "/images/home/stories/ajais.jpg",
  },

  // TEXT → TESTIMONIAL
  {
    id: 5,
    type: "testimonial",
    text:
      "NSA’s placement process was super smooth. I felt well-prepared and confident when the opportunity came. Their structure truly works.",
    name: "Ninad Waingankar, CMA",
    role: "Senior Analyst II",
    company: "—", // old data didn't mention company directly
    avatar: "/cma-testimonial/ninad.png",
  },

  // VIDEO (unchanged)
  {
    id: 7,
    type: "video",
    thumbnail: "/images/home/stories/sree.jpg",
    videoSrc: "/life/Office.mp4",
    name: "Sree Vardhan Birlangi",
    role: "CMA Graduate",
    company: "",
    avatar: "/images/home/stories/ajais.jpg",
  },

  // TEXT → TESTIMONIAL
  {
    id: 8,
    type: "testimonial",
    text:
      "Thanks to NorthStar Academy, I didn’t feel lost in the placement process. Everything was simple, sorted, and focused on results.",
    name: "S Anagha, CMA",
    role: "Tax Analyst",
    company: "E&Y",
    avatar: "/cma-testimonial/Anagha.jpg",
  },

  // VIDEO (unchanged)
  {
    id: 10,
    type: "video",
    thumbnail: "/images/home/stories/devika.jpg",
    videoSrc: "/life/Office.mp4",
    name: "Devika Satish",
    role: "CMA Graduate",
    company: "",
    avatar: "/images/home/stories/ajais.jpg",
  },

  // TEXT → TESTIMONIAL
  {
    id: 11,
    type: "testimonial",
    text:
      "I’m already placed! NSA helped me build job-ready skills early. That made all the difference.",
    name: "Elwin Sabu, CMA",
    role: "Accountant",
    company: "Paperchase Accountancy",
    avatar: "/cma-testimonial/sabu.jpg",
  },

  // VIDEO (unchanged)
  {
    id: 13,
    type: "video",
    thumbnail: "/images/home/stories/roshel.jpg",
    videoSrc: "/life/Office.mp4",
    name: "Roshel Vaz, CMA",
    role: "CMA Graduate",
    company: "",
    avatar: "/images/home/stories/roshel.jpg",
  },

  // TEXT → TESTIMONIAL
  {
    id: 14,
    type: "testimonial",
    text:
      "Thanks to NorthStar Academy, I didn’t feel lost in the placement process. Everything was simple, sorted, and focused on results.",
    name: "Anubhab Ranjan, CMA",
    role: "Analyst",
    company: "TCS",
    avatar: "/cma-testimonial/anubhab.png",
  },

  // VIDEO (unchanged)
  {
    id: 15,
    type: "video",
    thumbnail: "/images/home/stories/shaz.jpg",
    videoSrc: "/life/Office.mp4",
    name: "Muhammed Shaz, CMA",
    role: "CMA Graduate",
    company: "Sharp & Tonnan",
    avatar: "/images/home/stories/ajais.jpg",
  },

  // TEXT → TESTIMONIAL
  {
    id: 16,
    type: "testimonial",
    text:
      "Thank you Northstar Academy NSA and M Irfat Sir for the guidance and support. I feel so lucky to have been a part of this journey.",
    name: "Dr. Nikhil Mehta, CMA",
    role: "CMA USA",
    company: "",
    avatar: "/cma-testimonial/nikhil.png",
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