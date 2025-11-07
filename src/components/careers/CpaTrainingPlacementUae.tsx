'use client';

import { CheckCircle2, Quote } from 'lucide-react';

const bullets = [
  'Globally recognised CPA (US) puts you in top tier of finance talent in UAE.',
  'Our course prepares you for US GAAP, IFRS, internal controls & auditing standards demanded by UAE firms.',
  'Placement guidance & UAE job market training — interview readiness for MNCs & Big 4 Abu Dhabi/Dubai offices.',
  'Live mentoring, exam strategy, and job-ready skills to step into UAE roles confidently.',
];

const CpaTrainingPlacementUae = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How Your CPA (US) Qualification Becomes a UAE Finance Career</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ul className="space-y-4">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-slate-800">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/cpa-us"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 px-5 py-3 text-white shadow hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Check Eligibility & Start Your Journey →
              </a>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white flex items-center justify-center shadow-md">
                  <Quote className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-slate-900">“I cleared my CPA and within 6 months landed an FP&A role in Dubai”</p>
                  <p className="mt-2 text-sm text-slate-600">– [Name], [Company]</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CpaTrainingPlacementUae;