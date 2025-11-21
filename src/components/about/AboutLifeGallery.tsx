'use client';

import Image from 'next/image';

export default function AboutLifeGallery() {
  const items = [
    { type: 'image', src: '/life/1.webp', alt: 'NSA community moments' },
    { type: 'image', src: '/life/4.webp', alt: 'Mentor sessions and workshops' },
    { type: 'image', src: '/life/12.webp', alt: 'Student activities and events' },
    { type: 'video', src: '/life/Office.mp4', alt: 'Life at NSA' },
    { type: 'image', src: '/life/nsa.webp', alt: 'NorthStar Academy' },
    { type: 'image', src: '/life/5.webp', alt: 'Learning spaces' },
  ];

  return (
    <section className="py-10 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Life at NorthStar</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-700">A glimpse of our community, learning spaces, and mentor-led sessions.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
              {item.type === 'image' ? (
                <Image src={item.src} alt={item.alt} width={600} height={400} className="w-full h-full object-cover" />
              ) : (
                <video src={item.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}