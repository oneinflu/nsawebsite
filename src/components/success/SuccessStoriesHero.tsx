"use client";

import LeadFormButton from '@/components/LeadFormButton';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import { useEffect, useState } from 'react';
import { successVideos, type VideoItem } from './storiesData';

export default function SuccessStoriesHero() {
  const [randomVideo, setRandomVideo] = useState<VideoItem | null>(null);

  // Pick a random video client-side to avoid hydration mismatch
  useEffect(() => {
    const idx = Math.floor(Math.random() * successVideos.length);
    const chosen = successVideos[idx] ?? null;
    const t = setTimeout(() => {
      setRandomVideo(chosen);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Decorative radial accent */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-pink-200 to-indigo-200 blur-3xl opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Copy side */}
          <div>
            <p className="font-semibold tracking-wide text-pink-600">Alumni Spotlight</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-slate-900">Real stories that </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600">spark ambition</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-700">
              Discover how mentor-led learning at NorthStar turns focused preparation into global careers across CMA, CPA, ACCA, and EA.
            </p>

            {/* Avatar group */}
            <div className="mt-6 flex items-center gap-2">
              {["/students/1.jpg","/students/2.jpg","/students/3.jpg","/students/4.jpeg"].map((src, i) => (
                <div key={src} className="relative h-10 w-10 -ml-1 first:ml-0">
                  <Image src={src} alt={`Alumni ${i+1}`} fill className="rounded-full ring-2 ring-white object-cover" />
                </div>
              ))}
              <span className="ml-2 text-sm text-slate-600">Trusted by 55,000+ learners</span>
            </div>

            {/* CTAs arranged uniquely */}
            <div className="mt-8 flex flex-wrap gap-4">
              <LeadFormButton formType="general" variant="primary" isSendOtp={true}>
                Book Free Counseling
              </LeadFormButton>
              <LeadFormButton formType="book-webinar" variant="secondary" isSendOtp={true}>
                Join Free Webinar
              </LeadFormButton>
             
            </div>
          </div>

          {/* Spotlight player: portrait, clean, using shared VideoPlayer */}
          <div className="relative mx-auto max-w-sm">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-xl">
              <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                {randomVideo ? (
                  <VideoPlayer
                    src={randomVideo.src}
                    poster="/stars.jpg"
                    className="portrait-plyr h-full w-full"
                  />
                ) : (
                  <Image src="/stars.jpeg" alt="NorthStar poster" fill className="object-cover" />
                )}
              </div>
            </div>

            {/* Minimal stat chips for a tidy composition */}
            <div className="pointer-events-none absolute -left-3 -bottom-3 rounded-xl bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700 shadow-sm">83% avg pass rate</div>
            <div className="pointer-events-none absolute -right-3 -top-3 rounded-xl bg-purple-50 px-2.5 py-1.5 text-xs font-medium text-purple-700 shadow-sm">34+ countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}