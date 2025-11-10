"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LeadFormButton from "@/components/LeadFormButton";

export default function Super30Hero() {
  // Confetti pulse once on mount
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShowConfetti(false), 1800);
    return () => clearTimeout(id);
  }, []);

  // Countdown: start at 7 days and tick down every second
  const [remaining, setRemaining] = useState(7 * 24 * 3600);
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => Math.max(0, r - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(remaining / 86400);
  const hours = Math.floor((remaining % 86400) / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((remaining % 3600) / 60).toString().padStart(2, "0");
  const seconds = Math.floor(remaining % 60).toString().padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/nsa.webp"
          alt="NorthStar Academy"
          fill
          className="object-cover"
          priority
        />
        </div>
      {/* Overlay: gradient to bottom-right (black → red-900 → black) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/80 via-red-900/50 to-black/80"
      />
      {/* Central radial vignette to boost legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/80 via-red-900/50 to-black/80"
        
      />

      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-60 w-60 rounded-full bg-gradient-to-br from-red-400 to-red-500 blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ filter: "blur(60px)" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-60 w-60 rounded-full bg-gradient-to-br from-red-500 to-red-400 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ filter: "blur(80px)" }}
      />

      {/* Confetti/Sparkles pulse once */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute inset-x-0 top-4 flex justify-center text-2xl"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 1.2 }}
            >
              ✨🎉
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center block */}
      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-40 text-center sm:pt-28 sm:pb-28">
        {/* Badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          <span>🎓</span>
          <span>Super 30 Scholarship Program 2025</span>
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-4xl font-extrabold sm:text-4xl md:text-4xl text-white">
          30 Students.
        </h2>
        <h1 className="mt-6 text-6xl font-extrabold sm:text-4xl md:text-6xl text-white">
          ₹100K Scholarship Each.
        </h1>
        <p className="mt-4 text-base text-white/85 sm:text-lg">
          Be among India’s brightest to earn a ₹1 L NorthStar Scholarship.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div whileHover={{ scale: 1.05, y: -2 }}>
            <LeadFormButton
              className=""
              variant="primary"
              formType="general"
              isSendOtp={true}
              courseId="CMA USA"
            >
              Apply Now →
            </LeadFormButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -2 }}>
            <Link
              href="#eligibility"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-bold text-white shadow-sm hover:bg-white/20"
            >
              Check Your Eligibility →
            </Link>
          </motion.div>
        </div>

        {/* Countdown */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-sm font-medium text-white/80">Deadline closes in</span>
          <div className="font-mono text-xl font-bold tracking-wider text-white">
            {days}d : {hours}h : {minutes}m : {seconds}s
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
          <span>Powered by Examly</span>
          <span>·</span>
          <span>Mentored by Irfat Sir</span>
          <span>·</span>
          <span>Recognised Globally</span>
        </div>
      </div>
    </section>
  );
}