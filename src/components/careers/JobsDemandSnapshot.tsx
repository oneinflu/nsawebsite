'use client';

import { MapPin, Building2, BarChart2, BadgeCheck } from 'lucide-react';

const JobsDemandSnapshot = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What the Market Looks Like Right Now</h2>
          <p className="mt-2 text-slate-600">
            There are over <span className="font-semibold text-slate-900">390 CPA jobs</span> currently listed in UAE finance & accounting roles.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-800 border border-red-200">
              <Building2 className="w-3.5 h-3.5" /> Glassdoor <span className="font-semibold">+2</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
              <Building2 className="w-3.5 h-3.5" /> Naukri Gulf <span className="font-semibold">+2</span>
            </span>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Salary Insight */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-sm">
              <BarChart2 className="w-5 h-5 mr-2" /> Salary Snapshot
            </div>
            <p className="mt-4 text-slate-700">
              Average base salary for CPA-qualified accountants in UAE can reach
              <span className="font-semibold text-slate-900"> AED 180,000+ per year</span>
              (approx <span className="font-semibold text-slate-900">USD 49,000+</span>) — with senior roles
              exceeding <span className="font-semibold text-slate-900">AED 300,000</span>.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs">
              <BadgeCheck className="w-3.5 h-3.5" /> QuintEdge <span className="font-semibold">+1</span>
            </div>
          </div>

          {/* UAE Map Visual */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-sm">
              <MapPin className="w-5 h-5 mr-2" /> UAE Job Distribution
            </div>
            <div className="mt-4 relative h-64 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              {/* Decorative map silhouette effect */}
              <div className="absolute inset-0 opacity-60" style={{
                backgroundImage:
                  'radial-gradient(800px 300px at 40% 60%, #f3f4f6 0%, transparent 60%), radial-gradient(600px 240px at 70% 40%, #eef2ff 0%, transparent 60%)',
              }} />

              {/* City markers (approximate positions) */}
              <div className="absolute left-[18%] top-[50%]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white text-slate-800 border border-slate-200 shadow-sm text-xs">
                    <MapPin className="w-3.5 h-3.5 text-red-600" /> Dubai
                  </span>
                  <span className="text-xs font-semibold text-slate-900">180 jobs</span>
                </div>
              </div>
              <div className="absolute left-[55%] top-[38%]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white text-slate-800 border border-slate-200 shadow-sm text-xs">
                    <MapPin className="w-3.5 h-3.5 text-purple-600" /> Abu Dhabi
                  </span>
                  <span className="text-xs font-semibold text-slate-900">150 jobs</span>
                </div>
              </div>
              <div className="absolute left-[35%] top-[30%]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white text-slate-800 border border-slate-200 shadow-sm text-xs">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" /> Sharjah
                  </span>
                  <span className="text-xs font-semibold text-slate-900">60 jobs</span>
                </div>
              </div>

              {/* Total counter */}
              <div className="absolute right-4 bottom-4">
                <div className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-2 border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-600">Total CPA (US) jobs</div>
                  <div className="font-bold text-slate-900">390+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsDemandSnapshot;