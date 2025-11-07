export default function JobsDemandSnapshotGlobal() {
  const hubs = [
    { city: "London", note: "Asset mgmt, hedge funds, IB" },
    { city: "New York", note: "Buy-side, sell-side, private markets" },
    { city: "Hong Kong", note: "Equities, wealth, regional HQs" },
    { city: "Singapore", note: "Wealth mgmt, ETFs, APAC HQs" },
    { city: "Toronto", note: "Pension funds, asset owners" },
    { city: "Dubai", note: "Sovereign wealth, family offices" },
  ];

  const sectors = [
    { name: "Asset & Wealth Mgmt", note: "Mutual funds, ETFs, private wealth" },
    { name: "Investment Banking", note: "M&A, ECM/DCM, coverage" },
    { name: "Research & Strategy", note: "Equity, credit, macro" },
    { name: "Risk & Analytics", note: "Market, credit, quant" },
    { name: "Corporate Finance", note: "FP&A, treasury, IR" },
    { name: "Alternatives", note: "PE, VC, hedge funds" },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 text-white flex items-center justify-center">★</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Jobs & Demand Snapshot</h2>
            <p className="text-slate-600">Global hubs and sectors where CFA talent is sought</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Top Global Hubs</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {hubs.map((h) => (
                <div key={h.city} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-slate-900 font-medium">{h.city}</div>
                  <div className="text-slate-600 text-sm">{h.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">High-demand Sectors</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {sectors.map((s) => (
                <div key={s.name} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="text-slate-900 font-medium">{s.name}</div>
                  <div className="text-slate-600 text-sm">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}