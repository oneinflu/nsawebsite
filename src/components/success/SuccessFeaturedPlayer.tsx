"use client";
import { VideoItem } from "./storiesData";

type Props = {
  current: VideoItem;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function SuccessFeaturedPlayer({ current, index, total, onPrev, onNext }: Props) {
  return (
    <section className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        <video
          src={current.src}
          controls
          preload="metadata"
          className="h-full w-full"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{current.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{current.author} • {current.views} • {current.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
            aria-label="Previous story"
          >
            ◀ Prev
          </button>
          <button
            onClick={onNext}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm hover:bg-gray-50"
            aria-label="Next story"
          >
            Next ▶
          </button>
        </div>
      </div>

      {current.quote && (
        <blockquote className="mt-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
          “{current.quote}”
        </blockquote>
      )}

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-blue-50 px-3 py-2 text-center text-sm text-blue-700">Playlist {index + 1} / {total}</div>
        <div className="rounded-lg bg-green-50 px-3 py-2 text-center text-sm text-green-700">Mentor-led guidance</div>
        <div className="rounded-lg bg-purple-50 px-3 py-2 text-center text-sm text-purple-700">Career-ready outcomes</div>
      </div>
    </section>
  );
}