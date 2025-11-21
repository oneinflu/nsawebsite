"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const points = [
  "25 Years of Global Mentorship Excellence",
  "Guided 2 Lakh+ Students into Big 4 & MNCs",
  "Revered Worldwide as the “God of Costing”",
  "India’s #1 CMA USA Mentorship Ecosystem",
];

export default function CMALearningJourney() {
  return (
    <section className="container mx-auto px-6 md:px-40 mt-14 mb-20">
      <div className="bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl px-6 text-white flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="flex-1 mt-4 md:mt-0 text-center lg:text-left">
          <h1 className="text-xl md:text-4xl font-extrabold text-[#FFD45D] mb-4">
            The NorthStar Promise
          </h1>

          <p className="text-gray-200 text-sm md:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
            With me and my NorthStar team by your side, you won’t just pass CMA
            USA — you’ll own it in your very first attempt and step into a world
            of limitless opportunities.
          </p>

          <div className="space-y-3">
            {points.map((title, i) => (
              <div
                key={i}
                className="flex items-start gap-2 justify-center lg:justify-start"
              >
                <Star
                  size={18}
                  fill="#FFD45D"
                  className="text-[#FFD45D] mt-1"
                />
                <p className="text-sm md:text-base font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - MENTOR SECTION */}
        <div className="relative flex-1 flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6 pb-0 w-full">
          {/* MENTOR CARD - Left of Image */}
          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl shadow-2xl border border-white/20 w-full max-w-xs lg:max-w-[280px] lg:mb-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD45D] to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-blue-900">MI</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#FFD45D] mb-1">M. Irfat</h2>
                <p className="text-sm text-gray-200 font-medium">World's Leading Expert</p>
              </div>
              <div className="w-full h-px bg-white/20"></div>
              <div className="space-y-2 w-full">
                <p className="text-xs text-[#FFD45D] font-semibold">
                  CA • CMA USA • CPA • CIMA UK
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFD45D" className="text-[#FFD45D]" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 italic">
                  "Transforming careers through excellence"
                </p>
              </div>
            </div>
          </div>

          {/* MENTOR IMAGE */}
          <div className="flex-shrink-0">
            <Image
              src="/intro-image.png"
              alt="M. Irfat"
              width={430}
              height={430}
              className="object-contain w-full max-w-[300px] lg:max-w-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
