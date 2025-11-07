export default function WhyCfaForCareers() {
  const points = [
    {
      title: "Trusted by global finance",
      note: "Valued in asset management, investment banking, and consulting.",
      iconBg: "bg-gradient-to-br from-red-600 to-purple-600",
    },
    {
      title: "Buy-side and sell-side mobility",
      note: "Transition from research to portfolio roles with stronger credibility.",
      iconBg: "bg-gradient-to-br from-amber-500 to-pink-500",
    },
    {
      title: "Deeper analytical edge",
      note: "Advanced valuation, ethics, and portfolio construction skills.",
      iconBg: "bg-gradient-to-br from-sky-500 to-cyan-500",
    },
    {
      title: "Global network & recognition",
      note: "Large alumni community and cross-border mobility in major hubs.",
      iconBg: "bg-gradient-to-br from-green-600 to-teal-600",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 pb-8 pt-4">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-purple-600 text-white flex items-center justify-center">⚑</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why CFA for Careers</h2>
            <p className="text-slate-600">How the charter strengthens hiring prospects and progression</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
              <div className={`h-12 w-12 rounded-xl ${p.iconBg} text-white flex items-center justify-center`}>◆</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="text-slate-600 text-sm">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}