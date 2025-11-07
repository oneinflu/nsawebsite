'use client';

const SalaryCareerGrowthUk = () => {
  const rows = [
    { level: 'Entry (0–2 yrs)', roles: 'Audit Associate, Assistant Accountant', range: '£28k – £40k' },
    { level: 'Mid (3–6 yrs)', roles: 'Audit Senior, Management Accountant', range: '£40k – £60k' },
    { level: 'Advanced (7–10 yrs)', roles: 'Finance Manager, Senior Auditor', range: '£60k – £85k' },
    { level: 'Leadership (10+ yrs)', roles: 'Financial Controller, Head of Finance', range: '£85k – £120k+' },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Salary & Career Growth in the UK</h2>
          <p className="mt-2 text-slate-600">Indicative annual gross salaries vary by city, firm tier, and sector.</p>
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

        <div className="mt-4 text-sm text-slate-600">Note: Ranges are indicative and differ across regions (e.g., London vs. regional cities) and company tiers.</div>
      </div>
    </section>
  );
};

export default SalaryCareerGrowthUk;