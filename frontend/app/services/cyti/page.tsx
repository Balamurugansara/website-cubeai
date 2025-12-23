"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Wifi, Cpu, Gauge, Globe, Eye, Settings } from "lucide-react";

export default function CyTIPage() {
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
            title: 'Introduction to CyTI',
            icon: Lock,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In today’s hyper-connected enterprise environment, <span className="font-bold text-blue-600">cybersecurity</span> is no longer just about protection — it’s about <span className="font-bold text-blue-600">prediction</span>, <span className="font-bold text-blue-600">prevention</span>, and <span className="font-bold text-blue-600">autonomous action</span>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-blue-600">Cube AI Solutions</span> transforms conventional <span className="font-bold text-blue-600">AI-powered security</span> into <span className="font-bold text-blue-600">Agentic AI–driven Cyber Tech Innovation</span>, delivering self-directed digital defense systems that adapt, learn, and respond in real time. Our solutions go beyond monitoring to create active, intelligent <span className="font-bold text-blue-600">cyber agents</span> capable of neutralizing threats before they escalate — empowering organizations to achieve higher <span className="font-bold text-blue-600">business productivity using AI</span>.
                    </p>
                </div>
            ),
        },
        {
            title: 'IoT Services',
            icon: Wifi,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            The <span className="font-bold text-blue-600">Internet of Things (IoT)</span> is no longer just about connected devices — it’s about <span className="font-bold text-blue-600">connected intelligence</span>.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">Agentic AI–powered IoT services</span> transform passive devices into <span className="font-bold text-blue-600">decision-making agents</span> capable of analyzing data locally, optimizing operations, and initiating <span className="font-bold text-blue-600">security protocols</span> autonomously.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key IoT Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Edge Autonomy – Embedded agents process and act on data instantly at the device level.', icon: Cpu },
                                { text: 'Predictive Maintenance – Generative AI forecasts component failures before they happen.', icon: Gauge },
                                { text: 'Smart Security Integration – IoT systems coordinate with cybersecurity agents for unified defense.', icon: Shield },
                                { text: 'Industry 4.0 & 5.0 Alignment – Designed for automated manufacturing, logistics, and urban infrastructure.', icon: Globe },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-red-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'LLM Security Solutions',
            icon: Lock,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            As enterprises adopt <span className="font-bold text-blue-600">large language models (LLMs)</span> for advanced <span className="font-bold text-blue-600">data intelligence</span>, securing them is critical.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">LLM Security Solutions</span> safeguard <span className="font-bold text-blue-600">sensitive data</span> and prevent <span className="font-bold text-blue-600">malicious prompt injections</span>, <span className="font-bold text-blue-600">data leaks</span>, or misuse of <span className="font-bold text-blue-600">generative models</span>. By embedding <span className="font-bold text-blue-600">Agentic AI</span> into the security layer, our solutions autonomously detect suspicious patterns, enforce <span className="font-bold text-blue-600">compliance</span>, and adapt to evolving threats in real time.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">LLM Security Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Prompt Injection Defense – Detect and neutralize malicious queries instantly.', icon: Shield },
                                { text: 'Data Privacy Enforcement – Restrict unauthorized data access using autonomous policies.', icon: Lock },
                                { text: 'Generative AI Monitoring – Audit model outputs for bias, misinformation, or data leaks.', icon: Eye },
                                { text: 'Zero-Trust AI Integration – Aligns with enterprise zero-trust architecture.', icon: Settings },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-red-600 mr-3" />
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
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-red-600 to-rose-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-white font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            CyTI
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Cyber Tech Innovation with Agentic AI
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Next-Generation Digital Security & Intelligence
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
                                                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-rose-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
