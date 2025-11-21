'use client';

export default function AboutOverview() {
  const highlights = [
    {
      title: 'Mentor-led Learning',
      desc: 'Guidance from experienced faculty with industry expertise and exam strategies.',
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Structured Curriculum',
      desc: 'Program blueprints, mock tests, and doubt-solving support for consistent progress.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Career Support',
      desc: 'Placement readiness, recruiter connects, and alumni network to unlock opportunities.',
      color: 'from-green-500 to-green-600',
    },
  ];

  const stats = [
    { label: 'Years Teaching', value: '10+' },
    { label: 'Global Programs', value: 'CPA • CMA • ACCA • EA' },
    { label: 'Alumni Network', value: 'Growing Across 34+ Countries' },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">About NorthStar Academy</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 max-w-3xl mx-auto">
            We specialize in globally recognized finance and accounting certifications—helping students and working professionals build career momentum through focused mentorship, practical learning, and consistent exam preparation.
          </p>
        </div>

        <div className="mt-6 sm:mt-10 grid md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-4 sm:p-6 shadow-sm bg-gradient-to-br from-white to-slate-50 text-center md:text-left">
              <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r ${h.color} text-white text-xs font-semibold mb-3`}>
                {h.title}
              </div>
              <p className="text-sm sm:text-base text-slate-700">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 grid md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="text-xl sm:text-2xl font-bold text-slate-900">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}