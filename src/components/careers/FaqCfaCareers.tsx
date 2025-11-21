export default function FaqCfaCareers() {
  const faqs = [
    {
      q: "Is CFA essential for investment roles?",
      a: "Not always mandatory, but widely preferred—especially for research, portfolio, and risk roles. It signals advanced investment competence and ethics.",
    },
    {
      q: "Which roles are realistic after Level I/II?",
      a: "Level I/II helps for analyst internships, junior research, risk, and corporate finance support roles—progression improves as you advance levels and gain experience.",
    },
    {
      q: "Buy-side vs sell-side—where does CFA help more?",
      a: "Both. On the sell-side, it supports rigorous research; on the buy-side, it strengthens allocation, risk, and performance attribution capabilities.",
    },
    {
      q: "How competitive is the market?",
      a: "Highly competitive in hubs. Strong internships, modeling skills, and networking alongside CFA improve outcomes.",
    },
    {
      q: "Can I move from corporate finance into investments?",
      a: "Yes—many transition via research or risk roles, leveraging CFA’s valuation and markets coverage with targeted project portfolios.",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl bg-white p-4 md:p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-purple-600 text-white flex items-center justify-center">?</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Common Questions About CFA Career Paths</h2>
            <p className="text-slate-600">Concise insights for candidates and early-career professionals</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
              <div className="inline-flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">Q</div>
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700">
            Note: Roles, compensation, and progression depend on your location, prior experience, internships, and firm type (asset manager, bank, boutique, or alternative investments).
          </p>
        </div>
      </div>
    </section>
  );
}