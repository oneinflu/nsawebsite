export default function RolesSectorsCfa() {
  const roles = [
    { title: "Equity Research Analyst", note: "Coverage, modeling, recommendations", color: "from-purple-600 to-red-600" },
    { title: "Portfolio/Investment Analyst", note: "Allocation, risk, performance", color: "from-amber-600 to-pink-600" },
    { title: "Risk Analyst", note: "Market/credit analytics", color: "from-sky-600 to-cyan-600" },
    { title: "Investment Banking Analyst", note: "Valuation, M&A, capital markets", color: "from-green-600 to-teal-600" },
    { title: "Wealth/Relationship Manager", note: "Client advisory, portfolio design", color: "from-indigo-600 to-violet-600" },
    { title: "Corporate Finance (FP&A/Treasury)", note: "Budgeting, IR, liquidity", color: "from-rose-600 to-orange-600" },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-3xl bg-white p-4 md:p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center">◎</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Roles & Sectors</h2>
            <p className="text-slate-600">Common career paths for CFA candidates and charterholders</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${r.color} text-white flex items-center justify-center`}>▣</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="text-slate-600 text-sm">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}