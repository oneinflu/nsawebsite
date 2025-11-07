"use client";
import { useMemo } from "react";

type Props = {
  query: string;
  onQueryChange: (q: string) => void;
  activeTag: string;
  onTagChange: (tag: string) => void;
  sort: string;
  onSortChange: (sort: string) => void;
};

const TAGS = ["All", "CMA", "CPA", "ACCA", "EA", "General"];
const SORTS = [
  { key: "recent", label: "Most Recent" },
  { key: "popular", label: "Most Popular" },
  { key: "alpha", label: "A–Z" },
];

export default function SuccessFilterBar({ query, onQueryChange, activeTag, onTagChange, sort, onSortChange }: Props) {
  const normalizedQuery = useMemo(() => query.trim(), [query]);

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search success stories…"
          className="w-full md:max-w-md rounded-lg border border-gray-300 bg-white/80 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <div className="flex items-center gap-2">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-sm shadow-sm focus:border-blue-500"
            aria-label="Sort success stories"
          >
            {SORTS.map(({ key, label }) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {TAGS.map((tag) => {
          const active = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={`rounded-full border px-3 py-1 text-sm transition ${active ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'}`}
              aria-pressed={active}
            >
              {tag}
            </button>
          );
        })}
        {normalizedQuery && (
          <span className="ml-2 text-xs text-gray-500">Filtering by “{normalizedQuery}”</span>
        )}
      </div>
    </div>
  );
}