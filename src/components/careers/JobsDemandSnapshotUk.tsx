'use client';

import { Map, MapPin, Badge } from 'lucide-react';

const JobsDemandSnapshotUk = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Jobs & Demand Snapshot</h2>
          <p className="mt-2 text-slate-600">ACCA roles across UK hubs — strong demand in audit, financial accounting, tax, and FP&A.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Badge className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Listings</div>
                <div className="mt-1 text-sm text-slate-700">Hundreds of active postings for Audit Associate, Financial Accountant, Tax Associate, FP&A.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md">
                <Map className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Hubs</div>
                <div className="mt-1 text-sm text-slate-700">London, Manchester, Birmingham, Edinburgh, Leeds lead hiring.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Sectors</div>
                <div className="mt-1 text-sm text-slate-700">Financial services, consulting, technology, manufacturing, public sector, retail.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl ring-1 ring-slate-200 p-6 bg-gradient-to-br from-slate-50 to-white">
          <div className="text-sm text-slate-600">Note: This snapshot is indicative based on common hiring trends for ACCA across UK cities.</div>
        </div>
      </div>
    </section>
  );
};

export default JobsDemandSnapshotUk;