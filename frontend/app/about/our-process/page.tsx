"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Settings, FlaskConical, Rocket, RefreshCw } from "lucide-react";

export default function OurProcessPage() {
  const processSteps = [
    {
      number: "01",
      title: "Understanding Your Needs",
      icon: Compass,
      description: "Every successful project begins with listening.",
      content:
        "We start by learning about your workflows, challenges, goals, and the impact you want to create. This helps us identify the right AI-driven opportunities — not just what is possible, but what is meaningful for your business.",
      tagline: "We don't assume. We understand.",
      color: "from-blue-200 to-blue-300",
      bgColor: "bg-blue-50/30",
    },
    {
      number: "02",
      title: "Designing a Human-Centered Solution",
      icon: Sparkles,
      description: "With clarity in hand, we design solutions that blend intelligence with usability.",
      content:
        "Our team focuses on clean interfaces, intuitive journeys, and smooth interactions so that the technology feels natural from Day One. Whether it's automation, analytics, or predictive workflows — we design for humans first, then layer the AI around it.",
      tagline: "",
      color: "from-purple-200 to-purple-300",
      bgColor: "bg-purple-50/30",
    },
    {
      number: "03",
      title: "Building With Precision & Innovation",
      icon: Settings,
      description: "This is where ideas come alive.",
      content:
        "Our engineers and AI specialists bring the solution to life using modern frameworks, scalable architecture, and best-in-class development practices. Every feature is crafted with intention: reliable, secure, and built to grow with your business.",
      tagline: "",
      color: "from-cyan-200 to-cyan-300",
      bgColor: "bg-cyan-50/30",
    },
    {
      number: "04",
      title: "Testing for Quality You Can Trust",
      icon: FlaskConical,
      description: "Before anything is deployed, we test it with real scenarios, edge cases, and performance checks.",
      content:
        "Our goal is simple — deliver a product that's smooth, accurate, and dependable from the moment you start using it.",
      tagline: "Quality is not a phase. It's our standard.",
      color: "from-indigo-200 to-indigo-300",
      bgColor: "bg-indigo-50/30",
    },
    {
      number: "05",
      title: "Seamless Deployment & Integration",
      icon: Rocket,
      description: "We ensure every solution integrates naturally into your existing systems.",
      content:
        "Whether you're using custom tools, CRM platforms, or cloud services, our deployment is quick, smooth, and disruption-free. You get the power of AI without the complexity behind it.",
      tagline: "",
      color: "from-violet-200 to-violet-300",
      bgColor: "bg-violet-50/30",
    },
    {
      number: "06",
      title: "Continuous Improvement & Long-Term Support",
      icon: RefreshCw,
      description: "Our partnership doesn't end at deployment.",
      content:
        "We monitor performance, gather feedback, and refine features to keep your systems up-to-date and future-ready. As your business grows, your CubeAI solution grows with you — smarter, faster, and more capable over time.",
      tagline: "",
      color: "from-pink-200 to-pink-300",
      bgColor: "bg-pink-50/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-blue-50/30 to-white">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our Process
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            How We Build Intelligence That Works for You
          </p>
          <div className="pt-4">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At CubeAI, we believe great technology is not built by chance — it is built through{" "}
              <span className="font-semibold text-gray-900">clarity, creativity, and a deeply human approach</span>. Our process is designed to turn complex challenges into simple, powerful automation solutions that help businesses thrive.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline Process Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-16">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 transform -translate-x-1/2 hidden md:block" />

        <motion.div
          className="max-w-6xl mx-auto space-y-16 md:space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={bubbleVariants}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content Bubble */}
                  <div className={`w-full md:w-5/12 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div
                      className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Pastel Highlight Bar */}
                      <div className={`h-1 bg-gradient-to-r ${step.color}`} />

                      {/* Content */}
                      <div className="p-8 space-y-4">
                        {/* Icon & Number */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 ${step.bgColor} rounded-xl`}>
                            <Icon size={28} className="text-gray-700 opacity-70" />
                          </div>
                          <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-gray-800 font-medium leading-relaxed">
                          {step.description}
                        </p>

                        {/* Main Content */}
                        <p className="text-sm text-gray-600 leading-relaxed" style={{ lineHeight: "1.7" }}>
                          {step.content}
                        </p>

                        {/* Tagline */}
                        {step.tagline && (
                          <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text pt-2 italic">
                            {step.tagline}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Dot (Timeline Marker) */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-md`} />
                      {/* Pulse Effect */}
                      <motion.div
                        className={`absolute inset-0 w-5 h-5 rounded-full bg-gradient-to-br ${step.color} opacity-50`}
                        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Summary Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-white via-blue-50/40 to-white rounded-3xl p-12 border border-blue-100/30 shadow-sm">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Process Is Simple
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl font-semibold text-gray-700">
                <span className="text-blue-600">Listen</span>
                <span className="text-gray-400">→</span>
                <span className="text-purple-600">Design</span>
                <span className="text-gray-400">→</span>
                <span className="text-cyan-600">Build</span>
                <span className="text-gray-400">→</span>
                <span className="text-indigo-600">Deliver</span>
                <span className="text-gray-400">→</span>
                <span className="text-violet-600">Support</span>
              </div>
              <div className="pt-4 space-y-3">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  A clear path. A transparent journey.
                </p>
                <p className="text-base md:text-lg text-gray-800 font-medium">
                  A promise to help your business operate smarter every day.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-blue-50/20">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let's build something intelligent, impactful, and made just for you.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
