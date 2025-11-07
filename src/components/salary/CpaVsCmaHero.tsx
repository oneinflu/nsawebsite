"use client";

import { motion } from "framer-motion";
import LeadFormButton from "@/components/LeadFormButton";
import { DollarSign, Globe, GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function CountUp({ end, prefix = '', suffix = '', durationMs = 1200 }: { end: number; prefix?: string; suffix?: string; durationMs?: number }) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setValue(Math.floor(end * progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs]);
  return <span>{prefix}{value}{suffix}</span>;
}

export default function CpaVsCmaHero() {
  return (
    <section className="relative bg-white">
      {/* Diagonal split gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0.9) 50%, rgba(245,158,11,0.12) 100%)",
        }}
      />
      {/* Center statement */}
      <div className="container mx-auto max-w-6xl px-4 pt-16">
        <div className="relative mb-10 flex items-center justify-center">
          {/* Faint gradient divider line */}
          <div className="absolute left-1/2 top-0 h-24 -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent w-[2px]" aria-hidden="true" />
          <h1 className="text-center text-2xl md:text-3xl font-semibold text-slate-900">
            <span className="bg-gradient-to-r from-blue-600 via-slate-900 to-orange-500 bg-clip-text text-transparent">CPA (US) earns up to 40% more in less than half the time.</span>
          </h1>
        </div>
      </div>

      {/* Two-column comparison */}
      <div className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: CPA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            variants={fadeUp}
            className="rounded-3xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">US</div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">CPA (US)</h2>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <div className="text-slate-600">Duration</div>
            </div>
            <div className="mt-1 text-lg font-medium text-slate-900">12–18 months</div>

            <div className="mt-6 flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <div className="text-slate-600">Avg Salary (India)</div>
            </div>
            <div className="mt-1 text-4xl md:text-5xl font-bold text-slate-900">
              <CountUp end={9} prefix="₹" suffix=" LPA" />
              <span className="mx-1">–</span>
              <CountUp end={12} prefix="₹" suffix=" LPA" />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Globe className="h-5 w-5 text-blue-600" />
              <div className="text-slate-600">Global Reach</div>
            </div>
            <div className="mt-1 text-lg font-medium text-slate-900">🌍 100+ countries</div>

            <div className="mt-6 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-slate-700" />
              <div className="text-slate-600">Certification</div>
            </div>
            <div className="mt-1 text-lg font-medium text-slate-900">Certified Public Accountant</div>

            <div className="mt-8">
              <Link
               href='/cpa-us'
                className="rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white"
              >
                Explore CPA (US) →
              </Link>
            </div>
          </motion.div>

          {/* Right: CA (India) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            variants={fadeUp}
            className="rounded-3xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-orange-50 p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">IN</div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">CA (India)</h2>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-orange-500" />
              <div className="text-slate-600">Duration</div>
            </div>
            <div className="mt-1 text-lg font-medium text-slate-900">4–5 years</div>

            <div className="mt-6 flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-orange-500" />
              <div className="text-slate-600">Avg Salary (India)</div>
            </div>
            <div className="mt-1 text-4xl md:text-5xl font-bold text-slate-900">
              <CountUp end={7} prefix="₹" suffix=" LPA" />
              <span className="mx-1">–</span>
              <CountUp end={9} prefix="₹" suffix=" LPA" />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Globe className="h-5 w-5 text-orange-500" />
              <div className="text-slate-600">Global Reach</div>
            </div>
            <div className="mt-1 text-lg font-medium text-slate-900">🇮🇳 India-centric qualification</div>

            <div className="mt-6 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-slate-700" />
              <div className="text-slate-600">Certification</div>
            </div>
            <div className="mt-1 text-lg font-medium text-slate-900">Chartered Accountant</div>

            <div className="mt-8">
              <LeadFormButton formType="general" isSendOtp={true} className="inline-flex rounded-xl border border-orange-500 px-5 py-3 text-orange-700 hover:bg-orange-50 font-semibold">
               Book Free Consultation
              </LeadFormButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft rising bar graph decoration */}
      <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 flex justify-center">
        <div className="flex w-full max-w-6xl items-end gap-2 px-6">
          {[24, 40, 18, 32, 26].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: h, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.05 }}
              className={`h-${h} w-1 rounded-sm bg-gradient-to-b from-slate-200 to-slate-100`}
            />
          ))}
        </div>
      </div>

      {/* Sticky bottom CTA on mobile */}
      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-6xl md:hidden">
        <div className="m-4 rounded-2xl bg-white/90 backdrop-blur ring-1 ring-slate-200 p-4 shadow-lg flex items-center justify-between">
          <div className="text-sm font-medium text-slate-800">Compare and plan your path</div>
          <LeadFormButton variant="secondary" className="px-4 py-2">Book Call</LeadFormButton>
        </div>
      </div>
    </section>
  );
}