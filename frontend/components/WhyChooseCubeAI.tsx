import { ReactNode } from "react";
"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🧠",
    title: "AI-First Expertise",
    desc: "We bring deep AI engineering experience to automate, optimize, and scale your business.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable Delivery",
    desc: "Agile execution, transparent timelines, and zero-noise collaboration.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "Your strategies are backed by analytics, not guesswork — ensuring measurable results.",
  },
  {
    icon: "🔐",
    title: "Enterprise-Grade Security",
    desc: "Every project follows strict data security and compliance standards.",
  },
  {
    icon: "🛠",
    title: "Custom-Built Solutions",
    desc: "No templates — every solution is engineered to fit your workflows and goals.",
  },
  {
    icon: "🤝",
    title: "Support Beyond Delivery",
    desc: "Long-term partnership with continuous optimization, not just 'project handover.'",
  },
];

export default function WhyChooseCubeAI() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  const gradients = [
    "from-blue-500/10 to-cyan-500/10",
    "from-purple-500/10 to-pink-500/10",
    "from-orange-500/10 to-red-500/10",
    "from-green-500/10 to-emerald-500/10",
    "from-indigo-500/10 to-blue-500/10",
    "from-rose-500/10 to-purple-500/10",
  ];

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          Why Choose CubeAI
        </motion.h2>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
            className={`group bg-gradient-to-br ${gradients[i]} bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center cursor-pointer overflow-hidden relative`}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-400/5 to-purple-400/5 blur-xl -z-10" />

            {/* Icon */}
            <motion.span
              className="text-5xl mb-4 inline-block"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              {f.icon}
            </motion.span>

            {/* Title */}
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>

            {/* Animated bottom line */}
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "80%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
