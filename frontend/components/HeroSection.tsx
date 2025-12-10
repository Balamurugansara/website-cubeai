"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export default function HeroSection() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.4 } 
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const trustItems = [
    { icon: Shield, label: "Secure" },
    { icon: Zap, label: "Scalable" },
    { icon: Users, label: "Enterprise-Ready" },
    { icon: ArrowRight, label: "Long-Term Support" },
  ];

  return (
    <section className="pt-28 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, letterSpacing: '0.01em' }}
            >
              Smarter Systems for Faster Growth
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed font-light"
              style={{ fontFamily: "'Inter', 'Segoe UI', '-apple-system', sans-serif", fontWeight: 300, letterSpacing: '0.005em' }}
            >
              Transforming complex processes into intelligent workflows that accelerate productivity and unlock new revenue
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 items-start mb-12"
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

          {/* Right Side - Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center"
          >
            <motion.div
              animate="animate"
              variants={floatingVariants}
              className="relative w-full max-w-md"
            >
              {/* Soft Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-transparent rounded-3xl blur-3xl -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-sm">
                <Image
                  src="/assets/hero-section-picture.png"
                  alt="CubeAI Business Professional"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-300/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 -right-10 w-28 h-28 bg-purple-300/20 rounded-full blur-3xl"></div>
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
