"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart4, CheckCircle2, Brain, Settings, Cloud, Database, Sparkles, Zap, Heart, BarChart3, Rocket, TrendingUp, Globe } from "lucide-react";

export default function AIDAPage() {
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
            title: 'Introduction to AIDA',
            icon: Brain,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-blue-600">AIDA</span> by <span className="font-bold text-blue-600">Cube AI Solutions</span> is a next-generation <span className="font-bold text-blue-600">Agentic AI platform</span> designed to revolutionize how enterprises harness <span className="font-bold text-blue-600">data analytics</span>. Moving beyond conventional AI, AIDA leverages <span className="font-bold text-blue-600">autonomous decision-making agents</span> that don't just process data — they interpret, act, and adapt in real time.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In today's hyper-competitive business environment, <span className="font-bold text-blue-600">data</span> is the most valuable asset. With <span className="font-bold text-blue-600">generative AI</span>, <span className="font-bold text-blue-600">AI automation tools</span>, and advanced <span className="font-bold text-blue-600">enterprise AI solutions</span>, AIDA transforms raw data into <span className="font-bold text-blue-600">actionable intelligence</span> that drives <span className="font-bold text-blue-600">business productivity using AI</span>.
                    </p>
                </div>
            ),
        },
        {
            title: 'Core Capabilities of AIDA',
            icon: Settings,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8" variants={fadeInUp}>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Autonomous Data Interpretation – Embedded AI agents that understand data context and act without manual triggers.', icon: Brain },
                                { text: 'Generative AI Insights – Create predictive models and forecasts that adapt to changing trends.', icon: Sparkles },
                                { text: 'Enterprise-Grade AI Automation Tools – Seamless integration with existing workflows.', icon: Zap },
                                { text: 'Scalable SaaS Delivery – Cloud-ready solutions accessible anywhere with enterprise-grade security.', icon: Cloud },
                                { text: 'Real-Time Decision Engines – Make instant, informed business decisions.', icon: BarChart4 },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            <span className="font-bold text-blue-600">AIDA's Medical Data Analysis</span> capabilities empower <span className="font-bold text-blue-600">hospitals</span>, <span className="font-bold text-blue-600">clinics</span>, and <span className="font-bold text-blue-600">life sciences organizations</span> with real-time, <span className="font-bold text-blue-600">AI-driven decision support</span>.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">How It Works:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                                { text: 'Integrates data from EMR/EHR systems, IoT medical devices, and clinical databases.', icon: Database },
                                { text: 'Applies Agentic AI to detect anomalies and predict patient risks.', icon: Brain },
                                { text: 'Uses generative AI for drug discovery and disease prediction.', icon: Sparkles },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Faster clinical decision-making.', icon: Zap },
                                { text: 'Improved patient outcomes with predictive analytics.', icon: Heart },
                                { text: 'Reduced operational costs through AI automation.', icon: BarChart3 },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'SaaS Solutions',
            icon: Cloud,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            <span className="font-bold text-blue-600">AIDA's SaaS model</span> ensures businesses access <span className="font-bold text-blue-600">enterprise AI solutions</span> without large infrastructure investments.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Advantages:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Instant Deployment – Go live within hours, not weeks.', icon: Rocket },
                                { text: 'Pay-as-You-Grow Model – Scale AI services based on demand.', icon: TrendingUp },
                                { text: 'Enterprise-Grade Security – Data encryption and compliance protocols.', icon: CheckCircle2 },
                                { text: 'Continuous Learning – Agents evolve with your data.', icon: Brain },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
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
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <BarChart4 className="w-5 h-5 text-emerald-600 mr-2" />
                            <span className="text-emerald-700 font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            AIDA
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Agentic AI Data Analysis
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Transforming data into autonomous intelligence
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
                                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
