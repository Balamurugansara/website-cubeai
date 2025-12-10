"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Rocket, Infinity, Sparkles, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function WhyChooseUs() {
  const floatingIcons = [
    { icon: Shield, label: "Trust", color: "text-blue-400", bgColor: "bg-blue-50" },
    { icon: Lightbulb, label: "Intelligence", color: "text-purple-400", bgColor: "bg-purple-50" },
    { icon: Rocket, label: "Growth", color: "text-pink-400", bgColor: "bg-pink-50" },
    { icon: Infinity, label: "Scalability", color: "text-cyan-400", bgColor: "bg-cyan-50" },
    { icon: Sparkles, label: "Innovation", color: "text-amber-400", bgColor: "bg-amber-50" },
  ];

  const highlights = [
    "They want trust.",
    "They want intelligence.",
    "They want growth.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 min-h-screen">
      {/* Soft Gradient Header */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-cyan-50/30 py-20 sm:py-28 overflow-hidden">
        {/* Subtle 3D Cube Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-blue-400 transform rotate-12 rounded-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-purple-400 transform -rotate-12 rounded-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/60 backdrop-blur-sm rounded-full text-sm font-semibold text-blue-700 border border-blue-200/50">
                <Sparkles size={16} />
                The CubeAI Difference
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Why Choose Us
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A partner who understands your business and delivers clarity, speed, and intelligence to every workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Block */}
      <section className="py-16 sm:py-24 relative">
        {/* Floating Illustrations (Right Side) */}
        <div className="absolute right-0 top-1/4 w-1/3 h-96 opacity-8 pointer-events-none hidden lg:block">
          <div className="absolute top-10 right-20 w-32 h-32">
            <svg viewBox="0 0 100 100" className="text-blue-300">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-32 w-40 h-40">
            <svg viewBox="0 0 100 100" className="text-purple-300">
              <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white rounded-3xl border border-gray-200/60 shadow-lg shadow-blue-100/20 p-8 sm:p-12 overflow-hidden"
          >
            {/* Left Decorative Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-l-3xl" />

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Choosing CubeAI means choosing a partner who understands your business as deeply as you do. We don't just offer technology — we deliver <span className="font-semibold text-blue-600">clarity</span>, <span className="font-semibold text-blue-600">speed</span>, and <span className="font-semibold text-blue-600">intelligence</span> to every part of your workflow. Our approach is simple: create solutions that work beautifully, integrate effortlessly, and transform your operations from the very first day.
              </p>

              <p>
                At CubeAI, we blend human creativity with powerful AI automation to unlock new levels of growth. Every product is built with intention — clean design, smart functionality, and real-world usefulness. You feel the difference not in one moment, but in every moment: the time your team saves, the accuracy you gain, the simplicity you experience, and the confidence your business earns.
              </p>

              <p>
                We don't work behind the scenes — we work beside you. Our experts craft solutions that adapt to your needs, evolve with your goals, and scale as your business expands. Whether you're automating tasks, improving decision-making, or building AI-driven customer experiences, CubeAI stands with you as a long-term innovation partner.
              </p>

              <div className="pt-6 mt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Businesses choose us because they want more than software.
                </p>

                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group"
                    >
                      <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block relative">
                        {highlight}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500" />
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl font-semibold text-gray-900 mt-6"
                >
                  And that's exactly what CubeAI delivers — <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">consistently, seamlessly, and with purpose.</span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Light Theme Floating Icons Row */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {floatingIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={iconVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group flex flex-col items-center gap-3"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${item.bgColor} rounded-2xl flex items-center justify-center border border-gray-200/50 shadow-sm group-hover:shadow-md transition-all duration-300 animate-float`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon size={32} className={`${item.color}`} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Experience the CubeAI Difference?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Partner with us to transform your business with intelligent automation and purposeful innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg border-2 border-white hover:bg-blue-600 transition duration-200"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
