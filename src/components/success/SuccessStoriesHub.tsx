'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

type VideoItem = {
  id: string;
  src: string;
  title: string;
  author: string;
  views: string;
  date: string;
  thumb: string;
  quote?: string;
};

const initialVideos: VideoItem[] = [
  { id: 'story1', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story1.mp4', title: 'From Aspirant to Achiever', author: 'NSA Alumni', views: '12k views', date: '2 days ago', thumb: '/students/1.jpg', quote: 'From Aspirant to Achiever' },
  { id: 'story2', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story2.mp4', title: 'Consistency beats Complexity', author: 'NSA Alumni', views: '9.1k views', date: '1 week ago', thumb: '/students/2.jpg', quote: 'Consistency beats Complexity' },
  { id: 'story3', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story3.mp4', title: 'Focus. Practice. Succeed.', author: 'NSA Alumni', views: '14k views', date: '4 days ago', thumb: '/students/3.jpg', quote: 'Focus. Practice. Succeed.' },
  { id: 'story4', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story4.mp4', title: 'Smart Prep, Real Outcomes', author: 'NSA Alumni', views: '7.6k views', date: '3 weeks ago', thumb: '/students/4.jpg', quote: 'Smart Prep, Real Outcomes' },
  { id: 'story5', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story5.mp4', title: 'From Confusion to Clarity', author: 'NSA Alumni', views: '11k views', date: '5 days ago', thumb: '/placements/placement1.webp', quote: 'From Confusion to Clarity' },
  { id: 'story6', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story6.mp4', title: 'Results that Inspire', author: 'NSA Alumni', views: '8.8k views', date: '1 month ago', thumb: '/placements/placement2.webp', quote: 'Results that Inspire' },
  { id: 'story7', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story7.mp4', title: 'NorthStar Advantage', author: 'NSA Alumni', views: '10.2k views', date: '4 weeks ago', thumb: '/placements/placement3.webp', quote: 'NorthStar Advantage' },
  { id: 'story8', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story8.mp4', title: 'Community that Cares', author: 'NSA Alumni', views: '6.9k views', date: '2 months ago', thumb: '/placements/placement4.webp', quote: 'Community that Cares' },
  { id: 'story9', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story9.mp4', title: 'Your Story Starts Here', author: 'NSA Alumni', views: '5.3k views', date: '1 month ago', thumb: '/students/1.jpg', quote: 'Your Story Starts Here' },
  { id: 'story10', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story10.mp4', title: 'Mentor-led Success Journey', author: 'NSA Alumni', views: '18k views', date: '2 weeks ago', thumb: '/students/2.jpg', quote: 'Mentor-led Success Journey' },
  { id: 'story12', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story12.mp4', title: 'Big 4 Ready Confidence', author: 'NSA Alumni', views: '21k views', date: '1 week ago', thumb: '/students/3.jpg', quote: 'Big 4 Ready Confidence' },
  { id: 'story13', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story13.mp4', title: 'Roadmap to Global Career', author: 'NSA Alumni', views: '13k views', date: '5 days ago', thumb: '/students/4.jpeg', quote: 'Roadmap to Global Career' },
  { id: 'story14', src: 'https://northstaracademy.b-cdn.net/northstaracademy/story14.mp4', title: 'Exam Strategy Wins', author: 'NSA Alumni', views: '15k views', date: '3 days ago', thumb: '/students/2.jpg', quote: 'Exam Strategy Wins' },
];

export default function SuccessStoriesHub() {
  const [selected, setSelected] = useState<VideoItem>(initialVideos[0]);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialVideos;
    return initialVideos.filter(v => v.title.toLowerCase().includes(q) || (v.quote || '').toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories (e.g., Big 4, CMA, ROI)"
            className="w-full sm:w-1/2 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {['All', 'CMA', 'CPA', 'ACCA', 'EA'].map((tag) => (
              <button key={tag} className="px-3 py-1 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main player */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="aspect-video bg-black">
              <video key={selected.id} src={selected.src} controls className="w-full h-full" poster={selected.thumb} />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-slate-900">{selected.title}</h3>
              <div className="mt-2 text-sm text-slate-600">{selected.author} • {selected.views} • {selected.date}</div>
              {selected.quote && <p className="mt-3 text-slate-700">“{selected.quote}”</p>}
            </div>
          </div>

          {/* Recommendations list */}
          <div className="space-y-3">
            {filtered.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelected(v)}
                className={`w-full flex items-center gap-3 p-2 rounded-xl border ${selected.id === v.id ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'} hover:bg-slate-50 transition`}
              >
                <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={v.thumb} alt={v.title} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-900 line-clamp-2">{v.title}</div>
                  <div className="text-xs text-slate-600">{v.views} • {v.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grid gallery */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((v) => (
            <button
              key={`grid-${v.id}`}
              onClick={() => setSelected(v)}
              className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white text-left"
            >
              <div className="relative aspect-video">
                <Image src={v.thumb} alt={v.title} fill className="object-cover" />
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold text-slate-900 line-clamp-2">{v.title}</div>
                <div className="mt-1 text-xs text-slate-600">{v.views} • {v.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}