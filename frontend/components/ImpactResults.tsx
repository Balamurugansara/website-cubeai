"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    icon: "🤖",
    title: "AI Automation for Support Teams",
    highlights: [
      "60% reduction in manual workload",
      "3× faster response time",
      "Automated ticket routing + voice agent",
    ],
    image: "/assets/case1.jpg",
  },
  {
    icon: "📈",
    title: "Custom CRM for Enterprise Client",
    highlights: [
      "Centralized customer data",
      "40% operational cost savings",
      "Automated reporting & workflows",
    ],
    image: "/assets/case2.jpg",
  },
  {
    icon: "🛒",
    title: "Predictive Analytics for Retail",
    highlights: [
      "22% increase in sales",
      "Real-time insights",
      "Better stock forecasting using ML",
    ],
    image: "/assets/case3.jpg",
  },
];

const clientLogos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
  "/assets/logo5.png",
];

const testimonial = {
  quote:
    "CubeAI helped us automate 70% of our processes, saving massive time and cost. Their team is fast, reliable, and truly understands AI.",
  author: "CTO, Global Retail Brand",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.25,
    rotate: 15,
    transition: { duration: 0.3 },
  },
};

const testimonialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const gradients = [
  "from-blue-500/10 to-cyan-500/10",
  "from-purple-500/10 to-pink-500/10",
  "from-green-500/10 to-emerald-500/10",
];

export default function ImpactResults() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/20 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
        >
          Impact & Results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          See how our AI solutions transform businesses
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
      >
        {caseStudies.map((cs, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
            }}
            className={`group bg-gradient-to-br ${gradients[idx % 3]} bg-white rounded-2xl shadow-md border border-blue-100/50 p-8 flex flex-col items-center text-center hover:border-blue-200 transition-all duration-300`}
          >
            <motion.span
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="text-5xl mb-4 block"
            >
              {cs.icon}
            </motion.span>

            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              {cs.title}
            </h3>

            <ul className="text-gray-600 text-sm space-y-2">
              {cs.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={highlightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500 font-bold mt-1 flex-shrink-0">✓</span>
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-0 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>
      {/* <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
        <span className="text-gray-500 text-sm mr-4">Trusted by forward-thinking businesses…</span>
        {clientLogos.map((logo, idx) => (
          <div key={idx} className="w-24 h-10 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
            <img src={logo} alt={`Client logo ${idx + 1}`} className="h-8 object-contain" />
          </div>
        ))}
      </div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={testimonialVariants}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-400 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex justify-center gap-1 mb-4 text-3xl text-yellow-400">★★★★★</div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-800 italic mb-4 font-light"
        >
          &ldquo;{testimonial.quote}&rdquo;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-blue-700 font-semibold text-lg"
        >
          {testimonial.author}
        </motion.div>
      </motion.div>
    </section>
  );
}
