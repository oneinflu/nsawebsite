"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  { q: "Do you enjoy auditing and assurance?", a: ["Yes", "Neutral", "No"] },
  { q: "Are you interested in corporate finance and management accounting?", a: ["Yes", "Neutral", "No"] },
  { q: "Is global mobility a priority for you?", a: ["Yes", "Neutral", "No"] },
  { q: "Do you prefer tax and compliance work?", a: ["Yes", "Neutral", "No"] },
  { q: "Are you comfortable with intensive exam preparation?", a: ["Yes", "Neutral", "No"] },
];

const CareerFitQuizModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(1));

  const result = () => {
    const score = answers.reduce((s, v) => s + v, 0);
    if (score >= 10) return { title: "CPA US", href: "/cpa-course-details" };
    if (score >= 8) return { title: "CMA US", href: "/cma-usa-course-details" };
    if (score >= 6) return { title: "ACCA", href: "/acca-course-details-uk" };
    return { title: "Enrolled Agent", href: "/enrolled-agent" };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900">Career Fit Quiz</h3>
              <button onClick={onClose} aria-label="Close" className="rounded-md p-2 hover:bg-gray-100">✕</button>
            </div>
            <div className="space-y-6 p-6">
              <p className="text-sm text-gray-600">Answer a few quick questions to see which course fits you best.</p>
              <div className="space-y-4">
                {questions.map((item, idx) => (
                  <div key={idx} className="rounded-lg border p-4">
                    <p className="mb-3 font-medium text-gray-900">{item.q}</p>
                    <div className="flex gap-2">
                      {item.a.map((opt, oi) => (
                        <button
                          key={oi}
                          onClick={() => setAnswers(a => a.map((v, i) => i === idx ? oi + 1 : v))}
                          className={`rounded-md border px-3 py-1 text-sm ${answers[idx] === oi + 1 ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-100'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-700">Recommended:</p>
                <div className="mt-2">
                  <Link href={result().href} className="text-blue-700 hover:underline font-medium">{result().title}</Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <Link href="/cpa-course-details" className="text-blue-700 hover:underline">CPA US</Link>
                  <Link href="/cma-usa-course-details" className="text-orange-700 hover:underline">CMA US</Link>
                  <Link href="/acca-course-details-uk" className="text-blue-700 hover:underline">ACCA</Link>
                  <Link href="/cia" className="text-orange-700 hover:underline">CIA</Link>
                  <Link href="/cfa-us" className="text-blue-700 hover:underline">CFA</Link>
                  <Link href="/enrolled-agent" className="text-orange-700 hover:underline">Enrolled Agent</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CareerFitQuizModal;