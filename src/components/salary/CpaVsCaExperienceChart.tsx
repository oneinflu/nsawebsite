"use client";

import React from "react";
import { motion } from "framer-motion";

const rows = [
  { exp: "0–2 years", cpa: "₹6–8 L", ca: "₹5–6 L" },
  { exp: "3–5 years", cpa: "₹10–14 L", ca: "₹8–10 L" },
  { exp: "6–10 years", cpa: "₹18–25 L", ca: "₹14–20 L" },
  { exp: "10+ years", cpa: "₹30–45 L+", ca: "₹25–35 L+" },
];

export default function CpaVsCaExperienceChart() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 md:py-12">
      <div className="mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Salary by Experience</h2>
        <div className="mt-3 flex items-center justify-center gap-3 text-xs font-medium text-gray-600 sm:text-sm">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-blue-600"></span>CPA (US)</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-orange-600"></span>CA (India)</span>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-2 text-slate-700 font-semibold">Experience</th>
                <th className="py-3 px-2 text-blue-700 font-semibold">CPA (US)</th>
                <th className="py-3 px-2 text-orange-700 font-semibold">CA (India)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <motion.tr
                  key={row.exp}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: (idx % 3) * 0.05 }}
                  className={idx % 2 === 0 ? "bg-slate-50/40" : "bg-white"}
                >
                  <td className="py-3 px-2 text-slate-800 font-medium">{row.exp}</td>
                  <td className="py-3 px-2">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-100">
                      {row.cpa}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="inline-flex items-center rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-100">
                      {row.ca}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center text-xs font-semibold text-blue-700">
          In the UAE and US markets, CPAs earn 20–40% more at every level.
        </div>
      </div>
    </section>
  );
}