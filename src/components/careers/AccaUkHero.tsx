'use client';

import { Building2, MapPin } from 'lucide-react';
import Link from 'next/link';

const AccaUkHero = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              ACCA in UK — Build a Chartered Finance Career
            </h1>
            <p className="mt-3 text-lg text-slate-700">
              Step into audit, financial accounting, FP&A, and advisory roles across the UK’s Big 4, mid-tier firms, and leading enterprises.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 px-4 py-2 text-white shadow">
                <Building2 className="h-4 w-4" />
                Strong demand in Big 4 and mid‑tier audit firms
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-2 text-white shadow">
                <MapPin className="h-4 w-4" />
                London • Manchester • Birmingham • Edinburgh • Leeds
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/acca-course-details"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 px-5 py-3 text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Explore ACCA Course & Eligibility →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {['London','Manchester','Birmingham','Edinburgh','Leeds'].map((c) => (
                  <span key={c} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 ring-1 ring-slate-200">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                  <div className="text-sm text-slate-600">Focus</div>
                  <div className="font-semibold text-slate-900">Audit & Financial</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                  <div className="text-sm text-slate-600">Path</div>
                  <div className="font-semibold text-slate-900">Associate → Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccaUkHero;