'use client';

import { Building2, LineChart, ShieldCheck } from 'lucide-react';

const WhyIndiaForCma = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why India for CMA (US) Professionals</h2>
          <p className="mt-2 text-slate-600">India’s MNCs, GBS centres and high-growth industries value CMA (US) skills.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Global Capability Centres</div>
                <div className="mt-1 text-sm text-slate-700">Thousands of roles in GBS/Shared Services for FP&A, reporting and controllership.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md">
                <LineChart className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Cost Leadership & FP&A</div>
                <div className="mt-1 text-sm text-slate-700">CMA (US) maps directly to cost accounting, budgeting and performance management.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Governance & Controls</div>
                <div className="mt-1 text-sm text-slate-700">Strong demand for internal controls, SOX, audit readiness in India HQs and affiliates.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndiaForCma;