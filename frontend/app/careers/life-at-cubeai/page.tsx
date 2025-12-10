"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Users, Lightbulb } from "lucide-react";

export default function LifeAtCubeAI() {
  const sections = [
    {
      title: "Grow Faster Than Anywhere Else",
      icon: TrendingUp,
      content:
        "At CubeAI, you don't just work — you level up. From day one, you get real projects, real ownership, and real opportunities to showcase your talent. Whether you're an intern or a full-time employee, you're encouraged to explore new ideas, learn modern technologies, and sharpen your skills through continuous guidance and hands-on challenges.\n\nHere, your learning curve is your superpower — and we help you climb it.",
      imagePlaceholder: "/assets/carrers/life-grow.png",
    },
    {
      title: "A Culture Built on Collaboration & Support",
      icon: Users,
      content:
        "We believe the best ideas come from open minds and a positive environment. At CubeAI, everyone is approachable — teammates, mentors, and leaders. We work together, celebrate together, and solve problems as a team.\n\nInterns feel included from day one, and employees feel valued every step of the way.\n\nNo ego. No barriers. Just teamwork, trust, and kindness.",
      imagePlaceholder: "/assets/carrers/life-culture.png",
    },
    {
      title: "Create Impact With Purposeful Innovation",
      icon: Lightbulb,
      content:
        "CubeAI is a place where your work matters. You'll build AI-powered tools, automation systems, and intelligent solutions used by real businesses. Every line of code, design, or idea you contribute helps shape the future of digital transformation.\n\nFor interns, it's a chance to build a portfolio that stands out.\nFor employees, it's a career with real influence.\n\nYou don't just build features here — you build impact.",
      imagePlaceholder: "/assets/carrers/life-impact.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200 font-semibold mb-4">
              ⭐ Careers
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Life at CubeAI
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A place where talent thrives, collaboration inspires, and innovation drives real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 sm:py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Image Card */}
                <div className="flex-1 w-full">
                  <div className="relative w-full h-80 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <Icon size={64} className="mx-auto text-gray-400" />
                        <p className="text-gray-500 font-medium text-lg">
                          Image Placeholder
                        </p>
                        <p className="text-sm text-gray-400 px-4">
                          Add image: <span className="font-mono text-xs">{section.imagePlaceholder}</span>
                        </p>
                      </div>
                    </div>
                    {/* Uncomment when images are ready */}
                    <Image
                      src={section.imagePlaceholder}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Join the Team?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Be part of a culture that values growth, collaboration, and impact. Explore open positions or apply today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers/open-positions"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 shadow-lg"
            >
              View Open Positions
            </a>
            <a
              href="/careers/apply-now"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg border-2 border-white hover:bg-blue-600 transition duration-200"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
