"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LeadFormButton from "@/components/LeadFormButton";

// Simple countdown to a fixed date/time
const useCountdown = (target: Date) => {
  const [diff, setDiff] = useState<number>(() => target.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export default function CareerClarityPage() {
  // Target session time (adjust as needed)
  const targetDate = useMemo(() => {
    // Example: next upcoming date at 5 PM IST; for now hardcode Nov 10, 17:00 IST
    // If past, countdown will hit 00:00:00
    return new Date("2025-11-10T17:00:00+05:30");
  }, []);
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-900 via-black to-indigo-900 text-white">
      {/* Animated spotlight / gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-red-700/30 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-96 w-96 rounded-full bg-indigo-700/30 blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-red-800/50 px-4 py-2 text-sm">
            <span className="font-semibold">🔥 Why Wait 5+ Years?</span>
            <span className="opacity-80">Only 5 Seats Left!</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Get a ₹12 LPA Finance Career in less than 2 Years
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            With CMA USA, EA & ACCA. 12th Pass, Graduates & Career Changers —
            Your Finance Breakthrough Starts Here.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm opacity-90">
            <span>🗓️ Date: 10th Nov</span>
            <span>🕔 5 PM IST</span>
            <span>⏱️ 60 mins</span>
            <span>💬 English</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <LeadFormButton
              className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105"
              variant="primary"
              formType="book-webinar"
              isSendOtp={true}
              courseId="CMA USA"
            >
              REGISTER NOW FREE
            </LeadFormButton>

            <div className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
              <span className="opacity-80">Countdown ⏳</span>
              <span className="font-mono font-semibold">{timeLeft}</span>
              <span className="opacity-80">left to register</span>
            </div>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-52 w-52 rounded-full bg-white/5 blur-2xl" />

          <Image
            src="/Irfat-Sir.webp"
            alt="Instructor"
            width={520}
            height={520}
            priority
            className="rounded-2xl border border-white/10 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Subtle floating finance icons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-10 top-24 text-3xl opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ₹
        </motion.div>
        <motion.div
          className="absolute right-16 top-40 text-3xl opacity-20"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          📈
        </motion.div>
        <motion.div
          className="absolute left-1/2 bottom-24 text-3xl opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🎓
        </motion.div>
      </div>
      {/* Learn Section */}
      <LearnSection />

      {/* Meet Your Mentor */}
      <MentorSection />

      {/* Who Should Attend? */}
      <WhoShouldAttendSection />

      {/* Why Choose NorthStar Academy? */}
      <WhyChooseSection />

      {/* Limited Seats Urgency */}
      <UrgencySection targetDate={targetDate} />
    </div>
  );
}

// Animated flip card used in the "What You’ll Learn" section
function FlipCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative h-44 sm:h-52 rounded-xl bg-white/5 border border-white/10 shadow-lg overflow-hidden"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
   >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 600ms",
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 p-5 flex items-center gap-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-3xl sm:text-4xl">{icon}</div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
            <p className="mt-1 text-sm opacity-80">Hover to reveal the key benefit</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 p-5 flex items-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-sm sm:text-base leading-relaxed opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Section: What You’ll Learn in 60 Minutes
function LearnSection() {
  const items = [
    {
      icon: "🎯",
      title: "Find your best finance career path",
      description: "Stop guessing — discover your ideal path after 12th or B.Com.",
    },
    {
      icon: "💼",
      title: "Learn how to earn ₹8–12 LPA faster",
      description: "Proven roadmap that helped 50,000+ students.",
    },
    {
      icon: "🧠",
      title: "Know which global certification suits you",
      description: "Understand CMA USA, EA, ACCA — what’s best for YOU.",
    },
    {
      icon: "🚀",
      title: "Job & placement insights",
      description: "How to land MNC & Big 4 jobs with expert mentorship.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold"
        >
          What You’ll Learn in 60 Minutes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-2 opacity-85"
        >
          Tangible outcomes that make this session worth your time.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((it, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <FlipCard icon={it.icon} title={it.title} description={it.description} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Section: Meet Your Mentor
function MentorSection() {
  const testimonials = [
    { quote: "Got CMA USA in 12 months — landed MNC role!", name: "Aarav" },
    { quote: "Clear roadmap and mentorship — 10 LPA offer.", name: "Ananya" },
    { quote: "From confusion to clarity — ACCA + placement.", name: "Rohit" },
    { quote: "Interview-ready in weeks — Big 4 shortlist.", name: "Simran" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold"
        >
          Meet Your Mentor
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-2 opacity-85"
        >
          Guidance from the mentor behind thousands of finance careers.
        </motion.p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Blurred testimonials carousel behind */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 overflow-hidden">
          <motion.div
            className="flex gap-4 opacity-20 blur-md"
            animate={{ x: [0, -600, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] rounded-xl bg-white/10 border border-white/10 p-4"
              >
                <p className="text-sm">“{t.quote}”</p>
                <p className="mt-2 text-xs opacity-70">— {t.name}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Glowing circular frame with halo */}
        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-red-500/10 blur-3xl" />
          <div className="absolute -inset-6 rounded-full bg-indigo-500/10 blur-2xl" />

          <div className="p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Image
              src="/Irfat-Sir.webp"
              alt="Mr. M. Irfat"
              width={220}
              height={220}
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Mentor details */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-lg md:text-xl font-bold">👋 Meet Mr. M. Irfat</p>
          <p className="opacity-90">
            NorthStar Founder | 22+ Years of Experience | Award-Winning Mentor
          </p>
          <p className="opacity-90">
            📊 90%+ Pass Rate | 50,000+ Careers Transformed | Global Speaker on Finance Careers
          </p>
        </div>

        {/* Subtle floating icons */}
        <div className="pointer-events-none relative w-full h-28 mt-6">
          <motion.div
            className="absolute left-1/3 text-2xl opacity-30"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🏅
          </motion.div>
          <motion.div
            className="absolute left-1/2 text-2xl opacity-30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            📜
          </motion.div>
          <motion.div
            className="absolute left-2/3 text-2xl opacity-30"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            🎓
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Section: Who Should Attend?
function WhoShouldAttendSection() {
  const items = [
    "12th-pass commerce students confused about career paths.",
    "B.Com or MBA aspirants exploring high-return alternatives.",
    "Working professionals stuck in low-growth roles.",
    "Anyone dreaming of ₹8–12 LPA finance jobs globally.",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28">
      <div className="mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold"
        >
          Who Should Attend?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-2 opacity-85"
        >
          Self-identify quickly — this session is for you if…
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {items.map((text, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
          >
            {/* Green check with pop animation */}
            <motion.span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-black text-base shadow"
              initial={{ scale: 0.85 }}
              whileInView={{ scale: [0.85, 1.15, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              ✅
            </motion.span>
            <p className="flex-1 text-sm sm:text-base opacity-90">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Section: Why Choose NorthStar Academy?
function WhyChooseSection() {
  const points = [
    {
      title: "90% Pass Rate — Proven with 50,000+ students",
      emoji: "📈",
    },
    {
      title: "Partnerships with IMA, Becker, Kaplan, ACCA, BPP",
      emoji: "🤝",
    },
    {
      title: "360° Learning Support (Live + Recorded + Mentorship)",
      emoji: "🎥",
    },
    {
      title: "Placement Assistance with Big 4 & MNCs",
      emoji: "🏢",
    },
  ];

  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-28">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-8">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-extrabold"
          >
            Why Choose NorthStar Academy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-2 opacity-85"
          >
            Build trust and see why thousands choose NorthStar.
          </motion.p>
        </div>

        {/* Grid points with glowing checks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-green-400/20 blur-sm" />
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-black text-base">
                  ✅
                </span>
              </div>
              <p className="flex-1 text-sm sm:text-base opacity-90">
                <span className="mr-2">{p.emoji}</span>
                {p.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner logos marquee */}
        <div className="relative mt-8 overflow-hidden">
          <motion.div
            className="flex gap-8 items-center opacity-80"
            animate={{ x: [0, -800, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((src, i) => (
              <div key={i} className="flex items-center justify-center min-w-[120px]">
                <Image src={src} alt={`Partner ${i}`} width={120} height={60} className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Group image fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <Image
            src="/life/nsa.webp"
            alt="NorthStar community"
            width={900}
            height={500}
            className="rounded-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}

// Section: Limited Seats. Free Registration Ends Soon!
function UrgencySection({ targetDate }: { targetDate: Date }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetDate.getTime() - now);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");

  // Live seat counter with random decrement
  const [seats, setSeats] = useState(7);
  useEffect(() => {
    const id = setInterval(() => {
      setSeats((s) => {
        if (s <= 1) return s;
        return Math.random() < 0.6 ? s - 1 : s;
      });
    }, 8000);
    return () => clearInterval(id);
  }, []);

  // Button glow intensifies as time reduces
  const fourHours = 4 * 3600;
  const urgency = Math.min(1, Math.max(0, (fourHours - totalSeconds) / fourHours));
  const glowAlpha = 0.2 + 0.35 * urgency; // 0.2 → 0.55
  const amplitude = 1.02 + 0.03 * urgency; // 1.02 → 1.05
  const glowShadow = `0 0 30px rgba(255, 75, 75, ${glowAlpha}), 0 0 60px rgba(255, 75, 75, ${glowAlpha * 0.6})`;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 text-center"
      >
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-red-500/10 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />

        <h2 className="text-2xl md:text-3xl font-extrabold">
          Limited Seats. Free Registration Ends Soon!
        </h2>

        <div className="mt-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-lg md:text-xl">
            <span>⏳ Hurry! Only</span>
            <motion.span
              key={seats}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.35 }}
              className="font-bold text-green-400"
            >
              {seats}
            </motion.span>
            <span>Free Seats Left!</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="opacity-85 text-base md:text-lg">🕒 Registration closes in:</span>
            <div className="font-mono text-2xl md:text-4xl font-bold tracking-widest">
              [ {hours} : {minutes} : {seconds} ]
            </div>
          </div>
        </div>

        <motion.div
          className="mt-8 inline-block"
          animate={{ scale: [1, amplitude, 1], boxShadow: glowShadow }}
          transition={{ duration: 1.4, repeat: Infinity }}
          style={{ borderRadius: 9999 }}
        >
          <LeadFormButton
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold shadow-lg"
            variant="primary"
            formType="book-webinar"
            isSendOtp={true}
            courseId="CMA USA"
          >
            REGISTER NOW FOR FREE
          </LeadFormButton>
        </motion.div>
      </motion.div>
    </section>
  );
}