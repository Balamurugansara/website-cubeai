"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, Users, TrendingUp, Sparkles, Code2, Lightbulb } from "lucide-react";

export default function CompanyOverview() {
  const highlights = [
    {
      icon: Rocket,
      title: "Innovation With Purpose",
      description: "We create AI tools that solve real business challenges.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Human + AI Collaboration",
      description: "Technology that enhances people — not replaces them.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable & Future-Ready",
      description: "Reliable systems designed to grow with your business.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const coreValues = [
    { icon: Sparkles, text: "Purposeful Innovation" },
    { icon: Users, text: "Human–AI Collaboration" },
    { icon: Code2, text: "Reliable, Scalable Technology" },
    { icon: Lightbulb, text: "User-focused Product Design" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24 sm:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                <Sparkles size={16} />
                About CubeAI
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Empowering Businesses with
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We build AI-driven solutions that simplify, accelerate, and elevate business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Section - Who We Are */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                CubeAI Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                CubeAI Solutions is a next-generation technology company dedicated to transforming the way businesses operate. We build intelligent automation platforms powered by AI, ML, and modern engineering to help organizations streamline workflows, eliminate repetitive tasks, and scale with confidence.
              </p>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission:</h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <p className="text-lg font-semibold text-gray-800 italic">
                    Make technology work for people — not replace them.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Every product we build enhances human productivity, accelerates decision-making, and creates seamless digital experiences across industries.
              </p>
            </motion.div>

            {/* Right - Visual Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 shadow-2xl overflow-hidden border border-gray-200">
                {/* Placeholder for animated product mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Code2 size={40} className="text-white" />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                      AI Automation Dashboard
                    </p>
                    <p className="text-sm text-gray-500 px-4">
                      Add animated product mockup or workflow visualization here
                    </p>
                  </div>
                </div>
                {/* Add animated lines/shapes */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl animate-pulse animation-delay-1000" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-20 sm:py-28 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why CubeAI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with human-centered design to deliver solutions that truly make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What We Build
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From smart CRM tools to automated workflow engines, predictive insights, and real-time dashboards, CubeAI empowers companies to operate faster and smarter. With a growing team of innovators, engineers, designers, and strategists, we aim to deliver solutions that bring clarity, efficiency, and intelligence to everyday business operations.
            </p>
          </motion.div>

          {/* Core Values Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-800">{value.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quote Box */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8"
        >
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full">
            <Sparkles size={32} className="text-yellow-300" />
          </div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">
            "At CubeAI, we don't just build automation — we create technology that empowers people to achieve more."
          </blockquote>
          <div className="pt-6">
            <p className="text-xl text-blue-200 font-semibold">
              We're not just building software — We're shaping the future of digital transformation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600">
            Discover how CubeAI's intelligent automation solutions can help your organization thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition duration-200"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}
