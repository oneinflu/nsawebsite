'use client';

import { Briefcase, Building, BarChart3, FileSpreadsheet } from 'lucide-react';

const RolesSectorsUk = () => {
  const roles = [
    { title: 'Audit Associate / Senior', desc: 'External audit, client engagements, testing, and reporting under IFRS/UK GAAP.' },
    { title: 'Financial Accountant', desc: 'Statutory accounts, month-end close, reconciliations, reporting and compliance.' },
    { title: 'Management Accountant', desc: 'Budgeting, costing, performance management, decision support in corporates.' },
    { title: 'Tax Associate / Advisor', desc: 'Corporate tax, VAT, personal tax, compliance and advisory.' },
    { title: 'FP&A Analyst', desc: 'Forecasts, variance analysis, dashboards, and strategic financial planning.' },
    { title: 'Internal Audit / Risk', desc: 'Governance, controls testing, risk management, SOX exposure in multinationals.' },
    { title: 'Financial Controller', desc: 'Oversight of accounting function, reporting, and controls.' },
  ];
  const sectors = [
    'Financial Services', 'Consulting', 'Technology', 'Manufacturing', 'Public Sector', 'Retail', 'Healthcare', 'Energy'
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        <header className="mb-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Roles & Sectors You Can Target</h2>
          <p className="mt-2 text-slate-600">ACCA maps to core audit and finance roles across UK industries.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {roles.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{r.title}</div>
                    <div className="mt-1 text-sm text-slate-700">{r.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <div className="font-semibold text-slate-900">Sectors</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span key={s} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 ring-1 ring-slate-200">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 text-center">
                <BarChart3 className="w-5 h-5 mx-auto text-indigo-600" />
                <div className="mt-1 text-sm text-slate-600">Advisory & analytics</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 text-center">
                <FileSpreadsheet className="w-5 h-5 mx-auto text-emerald-600" />
                <div className="mt-1 text-sm text-slate-600">IFRS & reporting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSectorsUk;