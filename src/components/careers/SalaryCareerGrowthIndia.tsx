'use client';

const SalaryCareerGrowthIndia = () => {
  const rows = [
    { level: 'Entry (0–2 yrs)', roles: 'Analyst, Cost Accountant', range: '₹4L – ₹8L' },
    { level: 'Mid (3–6 yrs)', roles: 'Senior Analyst, FP&A, Plant Finance', range: '₹8L – ₹16L' },
    { level: 'Advanced (7–10 yrs)', roles: 'Finance Manager, Controller', range: '₹16L – ₹28L' },
    { level: 'Leadership (10+ yrs)', roles: 'Senior Manager, Head of Finance', range: '₹28L – ₹45L+' },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Salary & Career Growth in India</h2>
          <p className="mt-2 text-slate-600">Indicative ranges vary by city, sector, and company size.</p>
        </header>

        <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Career Level</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Typical Roles</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Indicative Salary</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {rows.map((r) => (
                <tr key={r.level} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-900">{r.level}</td>
                  <td className="px-6 py-4 text-sm text-slate-700">{r.roles}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{r.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-slate-600">Note: Salary ranges are indicative and differ by city (e.g., Mumbai vs. Tier‑2) and company tier.</div>
      </div>
    </section>
  );
};

export default SalaryCareerGrowthIndia;