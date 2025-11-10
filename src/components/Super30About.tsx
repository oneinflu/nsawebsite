"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Super30About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" });

  // Count-up for badges
  const [countScholars, setCountScholars] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const target = 30;
    const step = 1;
    const interval = setInterval(() => {
      current += step;
      setCountScholars(current);
      if (current >= target) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [inView]);

  // Ripple on CTA click
  const [ripple, setRipple] = useState(false);
  useEffect(() => {
    if (!ripple) return;
    const id = setTimeout(() => setRipple(false), 600);
    return () => clearTimeout(id);
  }, [ripple]);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Parallax glow behind trophy */}
      <motion.div
        aria-hidden
        className="absolute right-4 top-12 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,97,255,0.6) 0%, rgba(76,215,168,0.45) 45%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Section label */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-emerald-300 uppercase tracking-widest text-sm font-semibold"
      >
        About the Program
      </motion.div>

      {/* Grid layout: Left text 55%, Right visual 45% */}
      <div className="mt-4 grid gap-10 md:grid-cols-12">
        {/* Left: Text Zone */}
        <div className="md:col-span-7">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-extrabold md:text-3xl"
          >
            India’s Brightest 30 Finance Scholars — Funded for Success
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-black/80"
          >
            The Super 30 Scholarship by NorthStar Academy identifies India’s most promising finance minds and fuels their global career ambitions. Chosen from thousands, each of the 30 winners receives a ₹ 1 L scholarship, personal mentorship, and access to our Examly-powered learning ecosystem for certifications like CMA US, CPA US, ACCA, and CFA. It isn’t just aid — it’s a launchpad to stand among the next generation of international finance leaders.
          </motion.p>

          {/* Data highlight bar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-2"
            >
              <span>🎓</span>
              <span className="font-semibold">{countScholars}</span>
              <span className="text-black/60">Scholars</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-2"
            >
              <span>💰</span>
              <span className="font-semibold">₹ 1 L</span>
              <span className="text-black/60">Each</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-2"
            >
              <span>🌍</span>
              <span className="font-semibold">Global Programs</span>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 relative inline-block"
          >
            <motion.a
              href="#eligibility"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-emerald-400 px-6 py-3 font-bold text-white shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(123,97,255,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setRipple(true)}
            >
              Know Your Eligibility →
            </motion.a>
            {ripple && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(76,215,168,0.6) 0%, rgba(76,215,168,0.0) 70%)",
                }}
              />
            )}
          </motion.div>
        </div>

        {/* Right: Visual Zone */}
        <div className="md:col-span-5 relative">
          {/* Trophy base shadow */}
          <div className="absolute -bottom-4 left-1/2 h-10 w-40 -translate-x-1/2 rounded-full bg-black/10 blur-md" />

          {/* Trophy SVG with metallic gradient */}
          <motion.div
            className="relative mx-auto h-[280px] w-[220px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ y: [0, -8, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <svg viewBox="0 0 200 300" className="h-full w-full">
              <defs>
                <linearGradient id="metal" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#7B61FF" />
                  <stop offset="50%" stopColor="#B69EFF" />
                  <stop offset="100%" stopColor="#7B61FF" />
                </linearGradient>
                <linearGradient id="shine" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
                </linearGradient>
              </defs>
              {/* Cup body */}
              <path d="M50 80 Q100 20 150 80 L140 160 Q100 190 60 160 Z" fill="url(#metal)" />
              {/* Handles */}
              <path d="M50 90 C20 100 20 140 50 150" stroke="url(#metal)" strokeWidth="8" fill="none" />
              <path d="M150 90 C180 100 180 140 150 150" stroke="url(#metal)" strokeWidth="8" fill="none" />
              {/* Stem */}
              <rect x="95" y="160" width="10" height="40" fill="url(#metal)" />
              {/* Base */}
              <rect x="70" y="200" width="60" height="18" rx="3" fill="url(#metal)" />
              {/* Shine sweep overlay */}
              <motion.rect
                x="0"
                y="0"
                width="200"
                height="300"
                fill="url(#shine)"
                animate={{ x: [-60, 60, -60] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>

            {/* ₹ 1 L floating ribbon tag */}
            <motion.div
              className="absolute -right-6 top-16 rounded-xl px-3 py-1 font-bold text-white shadow-md"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,215,0,0.75) 0%, rgba(76,215,168,0.7) 100%)",
                backdropFilter: "blur(6px)",
              }}
              animate={{ rotateZ: [-3, 3, -3] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ₹ 1 L Scholarship
            </motion.div>

            {/* Micro sparkle particles */}
            <motion.div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white"
                  style={{ left: `${20 + i * 30}px`, top: `${100 + (i % 3) * 30}px`, filter: "blur(1px)" }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Divider that slides in */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 h-px w-full origin-left bg-[#EEE]"
      />
    </section>
  );
}