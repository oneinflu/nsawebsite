'use client';

import { BadgeCheck } from 'lucide-react';

type Row = {
  stage: string;
  salary: string;
  role: string;
};

const rows: Row[] = [
  {
    stage: 'Entry (1–3 yrs)',
    salary: 'AED 12,000–55,000',
    role: 'Audit Associate / Junior FP&A',
  },
  {
    stage: 'Mid (4–7 yrs)',
    salary: 'AED 18,000–55,000',
    role: 'Senior Accountant / FP&A Specialist',
  },
  {
    stage: 'Experienced (8–10 yrs)',
    salary: 'AED 55,000–35,000+',
    role: 'Finance Manager / Internal Controls Lead',
  },
  {
    stage: 'Top (10+ yrs / Manager)',
    salary: 'AED 35,000–45,000+ (or more)',
    role: 'Corporate Controller / Regional Head',
  },
];

const SalaryCareerGrowthUae = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How Your Salary & Career Can Progress</h2>
        </header>

        <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Experience</th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Salary Range (AED/month)</th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Role Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.stage} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-slate-900 font-medium">{r.stage}</td>
                  <td className="px-6 py-4 text-slate-800">{r.salary}</td>
                  <td className="px-6 py-4 text-slate-700">{r.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl p-5 ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <p className="text-slate-800">
              In many cases, CPA (US) professionals in UAE earn multi-year tax-free packages,
              housing allowances and bonus components — making it one of the most rewarding finance careers globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryCareerGrowthUae;