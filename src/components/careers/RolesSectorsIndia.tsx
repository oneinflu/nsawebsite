'use client';

import { Briefcase, Building, BarChart3, Calculator } from 'lucide-react';

const RolesSectorsIndia = () => {
  const roles = [
    { title: 'FP&A Analyst / Manager', desc: 'Budgeting, forecasting, performance dashboards, variance analysis.' },
    { title: 'Cost Accountant', desc: 'Product costing, standard costs, cost centre reporting, control.' },
    { title: 'Plant / Operations Controller', desc: 'Manufacturing finance, inventory control, capex, Opex governance.' },
    { title: 'Internal Audit / SOX', desc: 'Controls testing, risk management, compliance readiness.' },
  ];
  const sectors = [
    'Manufacturing', 'IT Services', 'E‑commerce', 'BFSI', 'Pharma & Healthcare', 'Automotive', 'Consumer Goods', 'Energy & Utilities'
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Roles & Sectors You Can Target</h2>
          <p className="mt-2 text-slate-600">CMA (US) maps to core finance roles and India’s high-growth sectors.</p>
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
                <div className="mt-1 text-sm text-slate-600">FP&A maturity</div>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 text-center">
                <Calculator className="w-5 h-5 mx-auto text-emerald-600" />
                <div className="mt-1 text-sm text-slate-600">Cost leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSectorsIndia;