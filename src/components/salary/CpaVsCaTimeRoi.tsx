"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, BarChart3, GraduationCap, BriefcaseBusiness, Timer } from "lucide-react";

type Step = { icon: React.ReactNode; label: string };

const cpaSteps: Step[] = [
  { icon: <Book className="h-4 w-4 text-blue-700" />, label: "Enroll" },
  { icon: <BarChart3 className="h-4 w-4 text-blue-700" />, label: "Pass 4 exams" },
  { icon: <GraduationCap className="h-4 w-4 text-blue-700" />, label: "License" },
  { icon: <BriefcaseBusiness className="h-4 w-4 text-blue-700" />, label: "Job in 1.5 years" },
];

const caSteps: Step[] = [
  { icon: <Book className="h-4 w-4 text-orange-700" />, label: "CPT" },
  { icon: <BarChart3 className="h-4 w-4 text-orange-700" />, label: "IPCC" },
  { icon: <Timer className="h-4 w-4 text-orange-700" />, label: "Articleship" },
  { icon: <GraduationCap className="h-4 w-4 text-orange-700" />, label: "Final" },
  { icon: <BriefcaseBusiness className="h-4 w-4 text-orange-700" />, label: "Job in 5 years" },
];

export default function CpaVsCaTimeRoi() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Get There Faster — 5x ROI Advantage</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TimelineBlock
          title="CPA (US)"
          color="blue"
          durationLabel="~1.5 years"
          steps={cpaSteps}
          lineDuration={1.2}
        />
        <TimelineBlock
          title="CA (India)"
          color="orange"
          durationLabel="~5 years"
          steps={caSteps}
          lineDuration={2.8}
        />
      </div>

      <div className="mt-8 text-center text-sm font-semibold text-gray-800">
        CPA (US) saves ~3.5 years of time and lets you start earning ₹10–12 L sooner.
      </div>
    </section>
  );
}

function TimelineBlock({
  title,
  color,
  durationLabel,
  steps,
  lineDuration,
}: {
  title: string;
  color: "blue" | "orange";
  durationLabel: string;
  steps: Step[];
  lineDuration: number; // seconds
}) {
  const lineColor = color === "blue" ? "bg-blue-600" : "bg-orange-600";
  const dotBg = color === "blue" ? "bg-blue-50 ring-blue-100" : "bg-orange-50 ring-orange-100";
  const dotText = color === "blue" ? "text-blue-700" : "text-orange-700";
  const titleText = color === "blue" ? "text-blue-700" : "text-orange-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between">
        <div className={`text-base font-semibold ${titleText}`}>{title}</div>
        <div className="text-xs font-medium text-slate-600">{durationLabel}</div>
      </div>

      <div className="mt-5 grid grid-cols-[24px_1fr] gap-4">
        {/* Vertical animated progress line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-slate-200" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: lineDuration, ease: "easeOut" }}
            className={`absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full ${lineColor}`}
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <div className={`flex h-6 w-6 items-center justify-center rounded-full ${dotBg} ring-1`}>
                <span className={dotText}>{s.icon}</span>
              </div>
              <div className="text-sm font-medium text-slate-800">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}