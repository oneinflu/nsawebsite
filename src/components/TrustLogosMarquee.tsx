'use client';

import React from 'react';
import Image from 'next/image';

// Always use local logos from public/logos folder
const logoPaths = Array.from({ length: 23 }, (_, i) => `/logos/logo${i + 1}.png`);

export default function TrustLogosMarquee(_props: { logos?: Array<{ src?: string; alt?: string }> }) {
  const items = [...logoPaths, ...logoPaths];
  return (
    <div className="relative">
      <div className="flex animate-scroll space-x-12">
        {items.map((src, index) => (
          <div key={index} className="flex-shrink-0 hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-slate-200 hover:shadow-lg transition-all duration-300">
              <Image
                src={src}
                alt={`Trusted brand ${index + 1}`}
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}