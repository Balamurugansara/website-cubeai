"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Server, Cloud, Settings, Database, Zap, Eye, Globe, Sparkles, TrendingUp, Shield, CheckCircle, Gauge, Brain } from "lucide-react";

export default function DCEPage() {
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
            title: 'Introduction to DCE',
            icon: Cloud,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At <span className="font-bold text-blue-600">Cube AI Solutions</span>, our <span className="font-bold text-blue-600">Data & Cloud Engineering (DCE)</span> services are engineered for the next generation of <span className="font-bold text-blue-600">digital enterprises</span>. By integrating <span className="font-bold text-blue-600">Agentic AI</span>, we enable <span className="font-bold text-blue-600">data ecosystems</span> that are not only intelligent but autonomously adaptive, capable of self-optimizing workflows, detecting anomalies in real time, and delivering actionable insights without constant human intervention.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Unlike traditional data engineering methods that focus solely on collection and storage, our <span className="font-bold text-blue-600">enterprise AI solutions</span> transform raw data into <span className="font-bold text-blue-600">business productivity using AI</span> by embedding <span className="font-bold text-blue-600">autonomous agents</span> at every stage — from ingestion to analytics to deployment.
                    </p>
                </div>
            ),
        },
        {
            title: 'Agentic AI-Powered Data & Cloud Engineering',
            icon: Settings,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">DCE services</span> combine <span className="font-bold text-blue-600">data engineering expertise</span>, <span className="font-bold text-blue-600">cloud-native architectures</span>, and <span className="font-bold text-blue-600">AI automation tools</span> to help enterprises build resilient, future-ready <span className="font-bold text-blue-600">data infrastructures</span>. Leveraging <span className="font-bold text-blue-600">generative AI</span> and <span className="font-bold text-blue-600">agentic AI frameworks</span>, we deliver platforms that:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Automate data cleaning, transformation, and integration.', icon: Zap },
                                { text: 'Make real-time optimization decisions without manual triggers.', icon: Brain },
                                { text: 'Scale dynamically across hybrid and multi-cloud environments.', icon: TrendingUp },
                                { text: 'Provide continuous intelligence for faster decision-making.', icon: Gauge },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Data Engineering with Agentic AI',
            icon: Database,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            In today’s enterprise landscape, <span className="font-bold text-blue-600">data engineering</span> is more than pipelines and warehouses — it’s about creating self-managing, <span className="font-bold text-blue-600">intelligent data ecosystems</span>.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            With <span className="font-bold text-blue-600">Agentic AI</span>, our data engineering solutions:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Autonomously cleanse and enrich data from multiple sources.', icon: Settings },
                                { text: 'Apply predictive and generative AI models to forecast trends and detect anomalies.', icon: Sparkles },
                                { text: 'Enable real-time analytics without waiting for batch processing cycles.', icon: Zap },
                                { text: 'Optimize ETL/ELT pipelines with minimal human oversight.', icon: Gauge },
                                { text: 'Integrate seamlessly with legacy systems to preserve investments while modernizing capabilities.', icon: Cloud },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Key Features – Data & Cloud Engineering with Agentic AI',
            icon: Server,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">DCE (Data & Cloud Engineering):</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'End-to-end enterprise AI solutions for data modernization.', icon: Settings },
                                { text: 'Agent-based orchestration of data pipelines and cloud operations.', icon: Server },
                                { text: 'Real-time anomaly detection and automated resolution.', icon: Eye },
                                { text: 'Full alignment with Industry 4.0 and Industry 5.0 transformation goals.', icon: Globe },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Data Engineering:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Autonomous data cleaning, transformation, and integration.', icon: Settings },
                                { text: 'Predictive analytics powered by generative AI.', icon: Sparkles },
                                { text: 'AI-driven quality control for data reliability.', icon: CheckCircle },
                                { text: 'Seamless legacy system modernization without disruption.', icon: Cloud },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Cloud Engineering:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Intelligent scaling and cost optimization.', icon: TrendingUp },
                                { text: 'Automated compliance and security enforcement.', icon: Shield },
                                { text: 'AI-optimized data flow management.', icon: Zap },
                                { text: 'Resilient, self-healing cloud architectures.', icon: Server },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
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
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <Server className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-cyan-700 font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            DCE
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Data & Cloud Engineering with Agentic AI
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Building Resilient, Intelligent Data Infrastructures
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
                                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
