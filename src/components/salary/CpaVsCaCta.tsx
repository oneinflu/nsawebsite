"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CpaVsCaCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Earn Globally. Work Anywhere.
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Join 25,000+ students who accelerated their career with NorthStar’s
              CPA (US) program.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="/lp/cpa"
                className="inline-flex items-center rounded-lg px-5 py-3 text-white shadow-lg"
                style={{ backgroundColor: "#4C9AFF" }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
              >
                Book Free Counseling
                <span className="ml-2">→</span>
              </motion.a>

              <a
                href="/blogs/cpa-salary-breakdown-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg px-5 py-3 text-gray-900 border"
                style={{ borderColor: "#FF914D" }}
              >
                Download CPA vs CA Salary Report (PDF)
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-64 md:h-[320px] lg:h-[360px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 border" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <Image
                src="/students/1.avif"
                alt="Student with passport and books"
                width={600}
                height={400}
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}