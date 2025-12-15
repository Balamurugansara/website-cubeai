"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Faster Growth",
    "Smarter Decisions",
    "Better Performance",
    "Higher Productivity"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const trustItems = [
    { icon: Shield, label: "Secure" },
    { icon: Zap, label: "Scalable" },
    { icon: Users, label: "Enterprise-Ready" },
    { icon: ArrowRight, label: "Long-Term Support" },
  ];

  return (
    <section className="pt-36 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center text-center gap-12 mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col justify-center items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo */}
            <motion.div variants={itemVariants} className="mb-6">
              <Image
                src="/assets/logo.png"
                alt="CubeAI logo"
                width={160}
                height={60}
                priority
                className="mx-auto h-12 w-auto"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, letterSpacing: '0.01em' }}
            >
              Smarter Systems for{" "}
              <br className="block md:hidden" />
              <span className="inline-block mx-2 relative text-5xl lg:text-4xl overflow-hidden" style={{ minWidth: '100%', width: 'auto', height: '1.3em', verticalAlign: 'baseline' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent font-black"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
                  >
                    {rotatingTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-3xl"
              style={{ fontFamily: "'Inter', 'Segoe UI', '-apple-system', sans-serif", fontWeight: 300, letterSpacing: '0.005em' }}
            >
              Transforming complex processes into intelligent workflows that accelerate productivity and unlock new revenue
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white font-bold text-lg rounded-lg hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Connect Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-bold text-lg rounded-lg hover:bg-primary-50 transition duration-300 flex items-center space-x-2 group w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Discover More</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Trust Strip */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-12 border-t border-gray-200"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 text-gray-700"
              whileHover={{ scale: 1.1 }}
            >
              <item.icon size={24} className="text-primary-600" />
              <span className="font-semibold text-base md:text-lg">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
