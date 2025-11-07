"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type FormatType =
  | "usd"
  | "inr_lakh"
  | "aed_k"
  | "cad_k"
  | "gbp_k";

type Row = {
  country: string;
  cpa: { value: number; type: FormatType };
  cma: { value: number; type: FormatType };
};

// CPA (US) vs CA (India): Salaries Around the World
const rows: Row[] = [
  { country: "India", cpa: { value: 1_100_000, type: "inr_lakh" }, cma: { value: 800_000, type: "inr_lakh" } },
  { country: "UAE", cpa: { value: 180_000, type: "aed_k" }, cma: { value: 150_000, type: "aed_k" } },
  { country: "USA", cpa: { value: 75_000, type: "usd" }, cma: { value: 60_000, type: "usd" } },
  { country: "Canada", cpa: { value: 82_000, type: "cad_k" }, cma: { value: 68_000, type: "cad_k" } },
  { country: "UK", cpa: { value: 55_000, type: "gbp_k" }, cma: { value: 45_000, type: "gbp_k" } },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(value: number, type: FormatType) {
  switch (type) {
    case "usd": {
      const s = value.toLocaleString("en-US");
      return `$${s}`;
    }
    case "inr_lakh": {
      const inLakhs = value / 100_000;
      const rounded = Math.round(inLakhs * 10) / 10; // one decimal
      return `₹${rounded} L`;
    }
    case "aed_k": {
      const k = Math.round(value / 1000);
      return `AED ${k} K`;
    }
    case "cad_k": {
      const k = Math.round(value / 1000);
      return `CA$ ${k} K`;
    }
    case "gbp_k": {
      const k = Math.round(value / 1000);
      return `£${k} K`;
    }
    default:
      return String(value);
  }
}

function useCountUp(target: number, durationMs = 1200, startOn = true) {
  const [current, setCurrent] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!startOn || startedRef.current) return;
    startedRef.current = true;
    let raf: number;
    const start = performance.now();
    const loop = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = easeOutCubic(t);
      setCurrent(target * eased);
      if (t < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, startOn]);

  return current;
}

function ValueBubble({ value, type, color }: { value: number; type: FormatType; color: "blue" | "orange" }) {
  const formatted = useMemo(() => formatValue(Math.round(value), type), [value, type]);
  const textColor = color === "blue" ? "text-blue-700" : "text-orange-700";
  return (
    <span className={`ml-2 inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow-sm ${textColor}`}>{formatted}</span>
  );
}

function BarRow({ country, cpa, cma }: Row) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-10% 0% -10% 0%", once: true });

  const rowMax = Math.max(cpa.value, cma.value);
  const cpaPercent = (cpa.value / rowMax) * 100;
  const cmaPercent = (cma.value / rowMax) * 100;

  const cpaCount = useCountUp(cpa.value, 1200, inView);
  const cmaCount = useCountUp(cma.value, 1200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-[120px_1fr] items-start gap-4 sm:grid-cols-[160px_1fr]"
    >
      <div className="text-sm sm:text-base font-semibold text-gray-800">{country}</div>
      <div className="flex w-full flex-col gap-2">
        <div className="relative w-full overflow-visible">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${cpaPercent}%` }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex h-8 items-center justify-end rounded-md bg-blue-600 pr-2 shadow-sm"
          >
            <ValueBubble value={cpaCount} type={cpa.type} color="blue" />
          </motion.div>
        </div>
        <div className="relative w-full overflow-visible">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${cmaPercent}%` }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
            className="flex h-8 items-center justify-end rounded-md bg-orange-600 pr-2 shadow-sm"
          >
            <ValueBubble value={cmaCount} type={cma.type} color="orange" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CpaVsCmaSalaryChart() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-6 text-center sm:mb-8">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">CPA (US) vs CA (India): Salaries Around the World</h2>
        <div className="mt-3 flex items-center justify-center gap-3 text-xs font-medium text-gray-600 sm:text-sm">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-blue-600"></span>CPA (US)</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-orange-600"></span>CA (India)</span>
        </div>
        <div className="mt-2 text-xs font-semibold text-blue-700">CPA (US) +20–30% premium globally</div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:gap-5">
          {rows.map((row) => (
            <BarRow key={row.country} {...row} />
          ))}
        </div>
      </div>
    </section>
  );
}