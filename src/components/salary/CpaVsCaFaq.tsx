"use client";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is CPA US better than CA India for global jobs?",
    a: "Yes. CPA US offers international mobility, especially in UAE, US, and MNCs in India.",
  },
  {
    q: "Can I do CPA after CA?",
    a: "Absolutely, many CAs add CPA to work abroad or in global accounting.",
  },
  {
    q: "Is CPA valid in India?",
    a: "Yes — MNCs, Big 4s, and US-based companies in India hire CPAs regularly.",
  },
  {
    q: "Can I work in UAE/US after CPA?",
    a: "Yes — CPA is recognized by the US and accepted across the Middle East.",
  },
];

export default function CpaVsCaFaq() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">CPA (US) vs CA (India) — global careers and recognition</p>
        </div>

        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.25 + (idx % 2) * 0.1 }}
              className="rounded-xl p-5 md:p-6 border bg-white"
            >
              <div className="flex items-start">
                <div
                  className="mt-1 mr-3 h-2 w-2 rounded-full"
                  style={{ backgroundColor: idx % 2 === 0 ? "#4C9AFF" : "#FF914D" }}
                />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-gray-700">{item.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}