"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SalaryCalculatorModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
            className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900">Salary Calculator</h3>
              <button onClick={onClose} aria-label="Close" className="rounded-md p-2 hover:bg-gray-100">✕</button>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-sm text-gray-600">Estimate your post-certification salary uplift based on role, experience, and country.</p>
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex flex-col text-sm">
                  <span className="mb-1 text-gray-700">Country</span>
                  <select className="rounded-md border px-3 py-2">
                    <option>United States</option>
                    <option>India</option>
                    <option>Middle East</option>
                    <option>Canada</option>
                  </select>
                </label>
                <label className="flex flex-col text-sm">
                  <span className="mb-1 text-gray-700">Experience</span>
                  <select className="rounded-md border px-3 py-2">
                    <option>0-1 years</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5-7 years</option>
                    <option>7+ years</option>
                  </select>
                </label>
                <label className="flex flex-col text-sm md:col-span-2">
                  <span className="mb-1 text-gray-700">Certification</span>
                  <select className="rounded-md border px-3 py-2">
                    <option>CPA US</option>
                    <option>CMA US</option>
                    <option>ACCA</option>
                    <option>CIA</option>
                    <option>CFA</option>
                    <option>Enrolled Agent</option>
                  </select>
                </label>
                <button type="button" className="col-span-1 rounded-lg bg-blue-600 px-4 py-2 text-white md:col-span-2">Calculate</button>
              </form>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-700">Popular Certifications:</p>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
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

export default SalaryCalculatorModal;