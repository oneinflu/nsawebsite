import Link from "next/link";
import LeadFormButton from "../LeadFormButton";

export default function CtaNextStepCfa() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-sm ring-1 ring-slate-700/50">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to plan your CFA career path?</h3>
            <p className="mt-2 text-slate-300">Get role-mapped guidance and level-wise prep to target research, PM, risk, IB, or wealth.</p>
          </div>
          <div className="flex gap-3">
            <LeadFormButton
              courseId="CFA"
              variant="secondary"
              className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Book counselling
            </LeadFormButton>
            <Link
                href="/cfa-us"
              className="rounded-xl border border-white/30 px-4 py-2 text-white hover:bg-white/10"
            >
              Learn CFA (US)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}