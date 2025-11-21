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

        {/* RIGHT - MENTOR CARD */}
        <div className="relative flex-1 flex flex-col items-center lg:items-end gap-4 pb-0">
          {/* info card */}
          <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg w-fit">
            <h2 className="text-xl font-bold text-[#FFD45D]">M. Irfat</h2>
            <p className="text-sm text-gray-200">World's Leading Expert</p>
            <p className="text-xs text-[#FFD45D]">
              CA • CMA USA • CPA • CIMA UK
            </p>
          </div>
          <Image
            src="/intro-image.png"
            alt="M. Irfat"
            width={430}
            height={430}
            className="object-contain self-end"
          />
        </div>
      </div>
    </section>
  );
}
