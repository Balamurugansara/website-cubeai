"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Bot, CheckCircle2, Brain, Globe, Users, Zap, Shield, Rocket, Settings, Gauge, Eye, Sparkles, Code, Cloud, Database } from "lucide-react";

export default function AIMAPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
    };

    const bulletVariants = {
        hidden: { opacity: 0, x: -20, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100 },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const sections = [
        {
            title: 'Introduction to AIMA',
            icon: Brain,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In a world where <span className="font-bold text-blue-600">digital transformation</span> is no longer optional, businesses require more than just conventional AI — they need self-directed, decision-making <span className="font-bold text-blue-600">AI agents</span> that operate with speed, accuracy, and autonomy.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-blue-600">Cube AI Solutions</span> introduces AIMA (Advanced Industrial & Manufacturing Automation) — powered by <span className="font-bold text-blue-600">Agentic AI</span>, <span className="font-bold text-blue-600">generative AI</span>, and <span className="font-bold text-blue-600">AI automation tools</span> — to transform operations, boost <span className="font-bold text-blue-600">business productivity using AI</span>, and drive sustainable growth.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our <span className="font-bold text-blue-600">enterprise AI solutions</span> combine <span className="font-bold text-blue-600">real-time decision-making</span>, <span className="font-bold text-blue-600">predictive intelligence</span>, and <span className="font-bold text-blue-600">automation-first strategies</span> to optimize <span className="font-bold text-blue-600">Industry 4.0</span> and <span className="font-bold text-blue-600">Industry 5.0</span> ecosystems.
                    </p>
                </div>
            ),
        },
        {
            title: 'Industry 4.0 with Agentic AI',
            icon: Globe,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            <span className="font-bold text-blue-600">Industry 4.0</span> represents the digitally connected factory, where <span className="font-bold text-blue-600">enterprise AI solutions</span> integrate <span className="font-bold text-blue-600">IoT devices</span>, <span className="font-bold text-blue-600">robotics</span>, and <span className="font-bold text-blue-600">machine learning</span> for predictive, data-driven decisions.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities in Industry 4.0:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'AI-driven Predictive Maintenance – Minimize downtime using AI automation tools to forecast equipment failures.', icon: Gauge },
                                { text: 'Intelligent Robotics – Autonomous robots powered by Agentic AI for precision manufacturing.', icon: Bot },
                                { text: 'Generative AI for Process Optimization – Simulating production workflows to identify improvements.', icon: Settings },
                                { text: 'Real-time Quality Control – Vision AI agents detecting defects before they reach customers.', icon: Eye },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Industry 5.0 with Agentic AI',
            icon: Users,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            <span className="font-bold text-blue-600">Industry 5.0</span> moves beyond automation to <span className="font-bold text-blue-600">human-AI collaboration</span>, where <span className="font-bold text-blue-600">Agentic AI</span> augments human decision-making with <span className="font-bold text-blue-600">generative intelligence</span>.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities in Industry 5.0:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Human-Centric Automation – AI agents working alongside humans to enhance productivity.', icon: Users },
                                { text: 'Generative AI for Innovation – Designing new products and solutions through creative AI capabilities.', icon: Sparkles },
                                { text: 'Personalized Manufacturing – Customizing production at scale using enterprise AI solutions.', icon: Rocket },
                                { text: 'Resilient & Sustainable Operations – AI-driven energy optimization and waste reduction.', icon: Globe },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Legacy Modernization with Agentic AI',
            icon: Rocket,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Outdated IT systems can slow down innovation. <span className="font-bold text-blue-600">Cube AI Solutions</span> helps modernize <span className="font-bold text-blue-600">legacy systems</span> with <span className="font-bold text-blue-600">Agentic AI</span>, ensuring <span className="font-bold text-blue-600">compatibility</span>, <span className="font-bold text-blue-600">scalability</span>, and <span className="font-bold text-blue-600">agility</span>.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'AI-powered Migration – Automated migration from outdated systems to cloud-native platforms.', icon: Cloud },
                                { text: 'Generative AI for Code Refactoring – Automatically rewriting and optimizing legacy code.', icon: Code },
                                { text: 'AI automation tools for Data Integration – Consolidating data from multiple systems.', icon: Database },
                                { text: 'Enterprise AI solutions for Security – Modernizing security protocols with AI-driven threat detection.', icon: Shield },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Navigation */}
            <nav className="p-6">
                <motion.div variants={fadeInUp}>
                    <Link
                        href="/services"
                        className="inline-flex mt-0 items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Services
                    </Link>
                </motion.div>
            </nav>

            {/* Hero Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <Bot className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-blue-700 font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            AIMA
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Advanced Industrial & Manufacturing Automation
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Empowering industries with autonomous, intelligent, and adaptive AI solutions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Sections */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="space-y-24">
                        {sections.map((section, index) => {
                            const SectionIcon = section.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={sectionVariants}
                                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                                >
                                    <div className="flex flex-col">
                                        <div className="p-8 lg:p-12 w-full">
                                            <div className="flex items-center mb-8">
                                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                                    <SectionIcon className="w-8 h-8 text-white" />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
                                            </div>
                                            <div className="space-y-6">{section.content}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
