"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Timer, Percent, Globe, Wallet, Briefcase, Info } from "lucide-react";

type Criterion = {
  key: string;
  icon: React.ReactNode;
  label: string;
  cpa: string;
  ca: string;
  tip: string;
};

const items: Criterion[] = [
  {
    key: "regulating",
    icon: <Shield className="h-5 w-5 text-blue-600" />,
    label: "Regulating Body",
    cpa: "AICPA (USA)",
    ca: "ICAI (India)",
    tip: "CPA exam is held in India now.",
  },
  {
    key: "duration",
    icon: <Timer className="h-5 w-5 text-blue-600" />,
    label: "Duration",
    cpa: "12–18 months",
    ca: "4–5 years",
    tip: "CPA finishes in less than half the time.",
  },
  {
    key: "passing",
    icon: <Percent className="h-5 w-5 text-blue-600" />,
    label: "Passing Rate",
    cpa: "55–60%",
    ca: "10–12%",
    tip: "CA pass rate is significantly lower.",
  },
  {
    key: "recognition",
    icon: <Globe className="h-5 w-5 text-blue-600" />,
    label: "Recognition",
    cpa: "Global",
    ca: "India-centric",
    tip: "CPA recognized across 100+ countries.",
  },
  {
    key: "fees",
    icon: <Wallet className="h-5 w-5 text-blue-600" />,
    label: "Average Fees",
    cpa: "₹3.5–4.5L",
    ca: "₹2–3L",
    tip: "CPA fees higher; ROI strong from salaries.",
  },
  {
    key: "scope",
    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
    label: "Work Scope",
    cpa: "Audit, Tax, IFRS, Finance",
    ca: "Audit, Taxation, Compliance",
    tip: "CPA includes IFRS; CA emphasizes Indian compliance.",
  },
];

export default function CpaVsCaOverview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 mt-10 md:mt-14 pb-20">
      {/* Soft blue/violet background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0.9) 50%, rgba(124,58,237,0.08) 100%)",
        }}
      />

      <div className="rounded-3xl bg-white/90 p-4 md:p-8 ring-1 ring-slate-200 shadow-sm backdrop-blur">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 text-center">
          CPA (US) vs CA (India): The Core Comparison
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, idx) => (
            <FlipCell key={item.key} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCell({ item, idx }: { item: Criterion; idx: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut", delay: (idx % 2) * 0.05 }}
      className="group relative min-h-[160px] md:min-h-[180px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
              {item.icon}
            </div>
            <div className="text-sm font-semibold text-slate-900">{item.label}</div>
            <Info className="ml-auto h-4 w-4 text-slate-400" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
              <span className="block text-[10px] uppercase tracking-wide text-blue-600">CPA (US)</span>
              <span className="text-sm font-semibold">{item.cpa}</span>
            </div>
            <div className="rounded-lg bg-orange-50 px-3 py-2 text-xs font-medium text-orange-700 ring-1 ring-orange-100">
              <span className="block text-[10px] uppercase tracking-wide text-orange-600">CA (India)</span>
              <span className="text-sm font-semibold">{item.ca}</span>
            </div>
          </div>
        </div>

        {/* Back (tip) */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-center p-6"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <p className="text-sm font-medium text-slate-800">{item.tip}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}