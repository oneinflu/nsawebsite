import Link from "next/link";
import LeadFormButton from "../LeadFormButton";

export default function CfaTrainingPlacementCareers() {
  const items = [
    {
      title: "Exam Mentorship",
      note: "Level-wise study plans, mocks, and review sessions",
      color: "from-red-600 to-purple-600",
    },
    {
      title: "Career Coaching",
      note: "Resume, LinkedIn, case prep for research & IB",
      color: "from-amber-500 to-pink-500",
    },
    {
      title: "Job Support",
      note: "Referrals across asset management, banks, and boutiques",
      color: "from-green-600 to-teal-600",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-3xl bg-white p-4 md:p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center">
            ♞
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Training & Placement Support
            </h2>
            <p className="text-slate-600">
              From exam strategy to breaking into investment roles
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${i.color} text-white flex items-center justify-center`}
              >
                ★
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {i.title}
              </h3>
              <p className="text-slate-600 text-sm">{i.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700">
            &ldquo;The structured mentorship and mock reviews helped me move
            from a support analyst role to buy-side research. The CFA-aligned
            prep made a clear difference.&rdquo;
          </p>
          <p className="mt-2 text-sm text-slate-500">
            — Analyst, Asset Management (Singapore)
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <LeadFormButton
              courseId="CFA"
              formType="talk-to-an-expert"
              className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Talk to an advisor
            </LeadFormButton>
            <Link
              href="/cfa-us"
              className="rounded-xl text-center border border-slate-300 bg-white px-4 py-2 text-slate-900 hover:bg-slate-50"
            >
              Explore CFA (US)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
