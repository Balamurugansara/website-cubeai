"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "🧩",
    title: "Discovery & Strategy",
    desc: "We understand your goals, challenges, and workflows to create a clear AI-driven roadmap.",
  },
  {
    icon: "🎨",
    title: "Design & Prototyping",
    desc: "We build clean UI/UX flows and proof-of-concepts so you visualize the solution early.",
  },
  {
    icon: "💻",
    title: "Development & Deployment",
    desc: "Our team engineers scalable, secure, and efficient systems tailored to your needs.",
  },
  {
    icon: "🔄",
    title: "Support & Optimization",
    desc: "We provide ongoing improvements, monitoring, and training for long-term success.",
  },
];

export default function OurProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconCircleVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 0px rgba(59, 130, 246, 0.4)" },
    hover: {
      scale: 1.15,
      boxShadow: "0 0 0 15px rgba(59, 130, 246, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg"
        >
          A structured approach to delivering intelligent solutions
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-stretch gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center relative">
            {/* Step Card */}
            <motion.div
              variants={stepVariants}
              whileHover={{ y: -15 }}
              className="w-full h-full flex flex-col items-center relative"
            >
              {/* Icon Circle with Glow */}
              <motion.div
                variants={iconCircleVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-4xl mb-6 shadow-lg border-4 border-white relative"
              >
                {/* Step number background */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {idx + 1}
                </div>
                {step.icon}
              </motion.div>

              {/* Content Card */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center w-full flex flex-col flex-grow relative">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-center flex-grow">
                  {step.desc}
                </p>

                {/* Decorative line on top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>

            {/* Arrow between steps */}
            {idx < steps.length - 1 && (
              <motion.div
                className="hidden md:flex absolute -right-4 top-12 z-10"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl text-blue-400">→</div>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
