"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, TrendingUp, Zap, Heart, Shield, Rocket } from "lucide-react";

export default function VisionMissionPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Purposeful design solving real challenges",
    },
    {
      icon: Heart,
      title: "Simplicity",
      description: "Technology that feels natural and accessible",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Reliability built on transparency and excellence",
    },
    {
      icon: Rocket,
      title: "Impact",
      description: "Scalable solutions that grow with your needs",
    },
  ];

  return (
    <motion.div
      className="min-h-screen w-full bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full pt-20 pb-32 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Heading & Intro */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Our Vision & Mission
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Guiding everything we build — from ideas to innovation.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side: Illustration - AI Brain */}
          <motion.div variants={floatingVariants} animate="animate" className="relative h-80 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Gradient Background Cube */}
              <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-mint-200/30 rounded-3xl transform rotate-45 blur-2xl opacity-60" />

              {/* Brain Icon Container */}
              <motion.div
                className="relative z-10 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <Brain
                    size={120}
                    className="text-blue-500/60 relative z-10"
                    strokeWidth={0.8}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SPLIT SECTION 1: VISION ===== */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Vision Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 relative pl-6 border-l-4 border-gradient-to-b from-blue-300 to-purple-300 bg-white/50 rounded-xl p-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
              borderImage: "linear-gradient(180deg, #7BCBFF 0%, #A88BFF 100%) 1",
            }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Our Vision
              </motion.h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At CubeAI, our vision is to create a world where technology works effortlessly alongside people. We believe in an ecosystem where{" "}
                <span className="font-semibold text-gray-900">AI enhances human potential</span>, eliminates complexity, and empowers businesses to move faster, smarter, and with greater confidence.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <p className="text-base text-gray-600">
                Our aim is to become a global leader in intelligent automation — crafting solutions that are simple to use, deeply intelligent, and capable of transforming everyday workflows into seamless, meaningful experiences.
              </p>

              <p className="text-base font-semibold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text py-3 text-lg">
                We envision a future where AI empowers human potential.
              </p>
            </div>

            <motion.div
              className="pt-4 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">We envision a future where:</p>
              <ul className="space-y-2">
                {[
                  "Businesses operate with clarity, precision, and speed",
                  "AI supports people, not replaces them",
                  "Innovation feels natural and accessible to all",
                  "Technology drives growth without creating overwhelm",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                  >
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <p className="text-base text-gray-600 pt-4 italic">
              CubeAI exists to bring this future closer, one intelligent solution at a time.
            </p>
          </motion.div>

          {/* Right: Vision Visual */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative h-96 flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Gradient Orb */}
              <motion.div
                className="absolute w-56 h-56 bg-gradient-to-br from-blue-300/40 to-purple-300/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Circuit Flow */}
              <svg className="relative z-10 w-80 h-80" viewBox="0 0 200 200" fill="none">
                {/* Center node */}
                <circle cx="100" cy="100" r="8" fill="#7BCBFF" opacity="0.8" />

                {/* Branching lines with soft animation */}
                <g stroke="#A88BFF" strokeWidth="1.5" opacity="0.6">
                  <line x1="100" y1="100" x2="140" y2="60" />
                  <line x1="100" y1="100" x2="150" y2="100" />
                  <line x1="100" y1="100" x2="140" y2="140" />
                  <line x1="100" y1="100" x2="60" y2="150" />
                  <line x1="100" y1="100" x2="50" y2="80" />
                  <line x1="100" y1="100" x2="70" y2="40" />
                </g>

                {/* End nodes */}
                {[
                  { x: 140, y: 60 },
                  { x: 150, y: 100 },
                  { x: 140, y: 140 },
                  { x: 60, y: 150 },
                  { x: 50, y: 80 },
                  { x: 70, y: 40 },
                ].map((pos, idx) => (
                  <motion.circle
                    key={idx}
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill="#7BCBFF"
                    opacity="0.5"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{
                      duration: 2.5,
                      delay: idx * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SPLIT SECTION 2: MISSION ===== */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Visual */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative h-96 flex items-center justify-center order-2 md:order-1"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Workflow background */}
              <motion.div
                className="absolute w-64 h-48 bg-gradient-to-br from-blue-200/40 to-teal-200/30 rounded-2xl blur-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Workflow diagram */}
              <svg className="relative z-10 w-72 h-72" viewBox="0 0 200 200" fill="none">
                {/* Workflow nodes */}
                <g>
                  {/* Node 1 */}
                  <circle cx="40" cy="100" r="12" fill="#BFDFFF" stroke="#7BCBFF" strokeWidth="2" />

                  {/* Arrow 1 */}
                  <line
                    x1="52"
                    y1="100"
                    x2="88"
                    y2="100"
                    stroke="#A88BFF"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <polygon
                    points="95,100 88,97 88,103"
                    fill="#A88BFF"
                    opacity="0.6"
                  />

                  {/* Node 2 */}
                  <circle cx="100" cy="100" r="12" fill="#E6DFFF" stroke="#A88BFF" strokeWidth="2" />

                  {/* Arrow 2 */}
                  <line
                    x1="112"
                    y1="100"
                    x2="148"
                    y2="100"
                    stroke="#A88BFF"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <polygon
                    points="155,100 148,97 148,103"
                    fill="#A88BFF"
                    opacity="0.6"
                  />

                  {/* Node 3 */}
                  <circle cx="160" cy="100" r="12" fill="#BFDFFF" stroke="#7BCBFF" strokeWidth="2" />
                </g>

                {/* Icons in nodes */}
                <text x="40" y="108" textAnchor="middle" fontSize="20" fill="#7BCBFF" opacity="0.8">
                  ▄
                </text>
                <text x="100" y="108" textAnchor="middle" fontSize="20" fill="#A88BFF" opacity="0.8">
                  ⚙
                </text>
                <text x="160" y="108" textAnchor="middle" fontSize="20" fill="#7BCBFF" opacity="0.8">
                  ✓
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Right: Mission Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 order-1 md:order-2"
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block pb-4 border-b-2 border-gradient-to-r from-blue-400 to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </motion.div>

              <p className="text-lg text-gray-700 leading-relaxed pt-6">
                Our mission is to build powerful AI-driven tools that unlock productivity and simplify operations for companies of all sizes. We focus on delivering solutions that reduce manual effort, automate repetitive tasks, and turn complex processes into beautifully efficient workflows.
              </p>
            </div>

            {/* Core Principles */}
            <motion.div
              className="space-y-4 py-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Every product is guided by:</p>
              <div className="space-y-3">
                {[
                  {
                    title: "Purposeful Innovation",
                    desc: "We design with intention, building technology that solves real business challenges.",
                  },
                  {
                    title: "Human + AI Harmony",
                    desc: "Our systems are made to enhance human creativity, not overshadow it.",
                  },
                  {
                    title: "Scalable Impact",
                    desc: "Whether serving a small team or a large enterprise, our solutions grow with your needs.",
                  },
                ].map((principle, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <span className="text-blue-500 font-bold text-lg flex-shrink-0">◆</span>
                    <div>
                      <p className="font-semibold text-gray-900">{principle.title}</p>
                      <p className="text-gray-600 text-sm">{principle.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pull Quote */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100/50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-lg font-semibold text-gray-900 italic text-center">
                "AI should simplify life, not complicate it."
              </p>
            </motion.div>

            <p className="text-base text-gray-600 leading-relaxed">
              At CubeAI, we combine deep engineering expertise with a human-centered mindset. We don't just automate processes — we elevate them. We don't just build AI — we build trust, intelligence, and long-term value for our customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PURPOSE LINE ===== */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-16">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative">
            {/* Glassmorphic Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl blur-xl" />

            <div className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-12 backdrop-blur-md border border-blue-100/30 shadow-lg">
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={40} className="text-blue-500/60" />
              </motion.div>

              {/* Text */}
              <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                To help businesses work better, think faster, and achieve more through the power of intuitive, reliable, and{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                  future-ready AI
                </span>
                .
              </h3>
            </div>
          </div>
        </motion.div>
      </section>

 

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-16 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Experience the Future of AI?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join businesses worldwide that are transforming their operations with CubeAI's intelligent automation solutions.
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
              Explore Our Solutions
            </motion.button>
            <motion.button
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
