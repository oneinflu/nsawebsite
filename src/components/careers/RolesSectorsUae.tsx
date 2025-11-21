'use client';

import { FileCheck, BarChart3, Percent, ShieldCheck, Building2, Banknote } from 'lucide-react';

type RoleItem = {
  title: string;
  desc: string;
  icon: React.ElementType;
  color: string;
};

const roles: RoleItem[] = [
  {
    title: 'Audit Senior / Manager (Big 4 / Mid-tier)',
    desc: 'Leads statutory audits, reporting, and audit team delivery in UAE.',
    icon: FileCheck,
    color: 'from-red-600 to-purple-600',
  },
  {
    title: 'FP&A Lead (Financial Planning & Analysis)',
    desc: 'Owns budgeting, forecasting, and performance analysis for business units.',
    icon: BarChart3,
    color: 'from-amber-500 to-red-600',
  },
  {
    title: 'Corporate Tax Associate / VAT Specialist',
    desc: 'Advises on VAT, corporate tax, and compliance across UAE entities.',
    icon: Percent,
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Internal Controls Specialist (US GAAP / SOX)',
    desc: 'Implements SOX controls and US GAAP compliance in MNCs.',
    icon: ShieldCheck,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Finance Manager – Multinational / Free-Zone',
    desc: 'Leads financial reporting in free-zone MNCs and regional HQs.',
    icon: Building2,
    color: 'from-red-600 to-pink-600',
  },
  {
    title: 'Treasury & Risk Analyst (Regional)',
    desc: 'Manages cash, liquidity, FX, and risk policies across GCC markets.',
    icon: Banknote,
    color: 'from-teal-600 to-emerald-600',
  },
];

const RolesSectorsUae = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Popular Roles You Can Step Into</h2>
          <p className="mt-2 text-slate-600">CPA (US) professionals are in demand across audit, FP&A, tax, controls, finance leadership, and treasury.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="rounded-2xl bg-white p-3 md:p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm md:text-md font-semibold text-slate-900">{title}</div>
                  <div className="mt-1 text-xs md:text-sm text-slate-700">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSectorsUae;