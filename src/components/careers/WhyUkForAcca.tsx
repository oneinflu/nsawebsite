'use client';

import { Building2, Scale, ShieldCheck } from 'lucide-react';

const WhyUkForAcca = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why UK for ACCA Professionals</h2>
          <p className="mt-2 text-slate-600">UK is a global hub for audit, financial management, and advisory under IFRS and UK GAAP.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Big 4 & Mid-Tier Firms</div>
                <div className="mt-1 text-sm text-slate-700">Strong demand for audit associates, seniors, and managers across UK firms.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">IFRS & UK GAAP</div>
                <div className="mt-1 text-sm text-slate-700">ACCA aligns to global standards and UK reporting frameworks.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Regulatory Ecosystem</div>
                <div className="mt-1 text-sm text-slate-700">Exposure to FRC, HMRC, and governance requirements in the UK market.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUkForAcca;