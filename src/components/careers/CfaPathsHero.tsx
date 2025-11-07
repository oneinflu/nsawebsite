"use client";
import Link from "next/link";
import LeadFormButton from "../LeadFormButton";

export default function CfaPathsHero() {
  return (
    <section className="container mx-auto max-w-6xl px-4 pt-10 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-amber-50 p-8 ring-1 ring-slate-200">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
              Global Investment Careers
            </div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
              CFA Career Paths
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Explore roles across buy-side, sell-side, and corporate finance. Learn how the CFA credential maps to equity research, portfolio management, risk, investment banking, and wealth management.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
             <Link
                href="/cfa-us"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white shadow-sm hover:bg-red-700"
              >
                Learn about CFA (US)
              </Link>
              <LeadFormButton
                courseId="CFA"
                variant="outline"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900 hover:bg-slate-50"
              >
                Get career guidance
              </LeadFormButton>
            </div>
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-3 md:max-w-xl">
            {[
              { title: "Equity Research", note: "Sell-side & buy-side", color: "from-purple-500 to-red-500" },
              { title: "Portfolio Analysis", note: "Asset & wealth mgmt", color: "from-amber-500 to-pink-500" },
              { title: "Risk Management", note: "Market & credit risk", color: "from-sky-500 to-cyan-500" },
              { title: "Investment Banking", note: "Valuation & deals", color: "from-green-500 to-teal-500" },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white`}>★</div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}