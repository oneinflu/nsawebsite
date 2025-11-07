"use client";
import Image from "next/image";
import { VideoItem } from "./storiesData";

type Props = {
  videos: VideoItem[];
  selectedId?: string;
  onSelect: (id: string) => void;
};

export default function SuccessStoriesGrid({ videos, selectedId, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((v) => {
        const isActive = v.id === selectedId;
        return (
          <button
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={`text-left rounded-xl border p-3 shadow-sm transition ${isActive ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'}`}
            aria-current={isActive}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
              <Image src={v.thumb} alt={v.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="mt-2">
              <p className="line-clamp-2 text-sm font-medium text-gray-900">{v.title}</p>
              <p className="text-xs text-gray-600">{v.author} • {v.views}</p>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{v.tag ?? 'General'}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}