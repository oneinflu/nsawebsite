'use client';

import Image from 'next/image';

interface CMAStudentCardProps {
  name: string;
  imageSrc: string;
  content: string; // keep to two concise lines
  part1Score: number;
  part2Score: number;
}

export default function CMAStudentCard({ name, imageSrc, content, part1Score, part2Score }: CMAStudentCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 w-64">
      <div className="shrink-0">
        <Image
          src={imageSrc}
          alt={`${name} photo`}
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-white"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900 leading-tight">{name}</p>
        <p className="text-xs text-slate-600 mt-0.5">{content}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            {part1Score}
            <span className="ml-1 text-[10px] text-red-600">Part 1</span>
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            {part2Score}
            <span className="ml-1 text-[10px] text-red-600">Part 2</span>
          </span>
        </div>
      </div>
    </div>
  );
}