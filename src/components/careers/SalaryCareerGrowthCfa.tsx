export default function SalaryCareerGrowthCfa() {
  const rows = [
    { level: "Entry (Analyst)", roles: "Equity/Investment Analyst, Risk Analyst", salary: "USD 55k–85k", growth: "2–3 yrs to Senior Analyst" },
    { level: "Mid (Senior Analyst)", roles: "Senior Equity/Credit Analyst", salary: "USD 85k–140k", growth: "Path to Associate PM/AVP" },
    { level: "Advanced (Associate PM)", roles: "Associate Portfolio Manager, Strategy", salary: "USD 120k–200k", growth: "Path to PM/VP" },
    { level: "Lead (Portfolio Manager)", roles: "PM, Lead Analyst", salary: "USD 180k–350k+", growth: "Path to Director/CIO" },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-3xl bg-white p-4 md:p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-purple-600 text-white flex items-center justify-center">$</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Salary & Career Growth</h2>
            <p className="text-slate-600">Indicative global ranges vary by market, firm, and performance</p>
          </div>
        </div>

        <div className="mt-6 overflow-auto rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Level</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Typical Roles</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Salary (USD)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Career Trajectory</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {rows.map((r) => (
                <tr key={r.level}>
                  <td className="px-4 py-3 text-sm text-slate-900">{r.level}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{r.roles}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{r.salary}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{r.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Ranges are illustrative and depend on location (e.g., London, New York, Singapore), asset class, and firm type. Bonuses vary widely based on performance.
        </p>
      </div>
    </section>
  );
}