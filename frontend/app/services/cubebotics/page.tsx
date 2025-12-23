"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Wifi, Plane, Zap, Gauge, Shield, Settings, Brain, Rocket, Users, Camera, BarChart3 } from "lucide-react";

export default function CubeboticsPage() {
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
            title: 'Introduction to Cubebotics',
            icon: Cpu,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-blue-600">Cubebotics</span> is <span className="font-bold text-blue-600">Cube AI Solutions’</span> cutting-edge innovation hub for <span className="font-bold text-blue-600">embedded systems</span>, <span className="font-bold text-blue-600">IoT solutions</span>, and next-generation <span className="font-bold text-blue-600">drone technology</span>. By integrating <span className="font-bold text-blue-600">Agentic AI</span>, we go beyond conventional automation — enabling devices to think, decide, and act autonomously.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Unlike traditional AI, which requires constant human or cloud oversight, <span className="font-bold text-blue-600">Agentic AI</span> empowers <span className="font-bold text-blue-600">embedded systems</span> to analyze data locally, make context-aware decisions in milliseconds, and adapt dynamically to real-world conditions. This evolution drives <span className="font-bold text-blue-600">enterprise AI solutions</span> that enhance <span className="font-bold text-blue-600">business productivity using AI</span> while ensuring unmatched <span className="font-bold text-blue-600">reliability</span>, <span className="font-bold text-blue-600">security</span>, and <span className="font-bold text-blue-600">scalability</span>.
                    </p>
                </div>
            ),
        },
        {
            title: 'Embedded IoT Solutions with Agentic AI',
            icon: Wifi,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">embedded IoT solutions</span> are built for <span className="font-bold text-blue-600">Industry 4.0</span> and <span className="font-bold text-blue-600">Industry 5.0</span> environments, where speed, precision, and autonomy are critical.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Enterprise Advantages:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Edge Autonomy – Localized decision-making reduces latency and dependence on the cloud.', icon: Zap },
                                { text: 'Predictive Maintenance – Generative AI predicts equipment failures before they disrupt operations.', icon: Gauge },
                                { text: 'Cybersecurity by Design – Embedded AI agents protect data and systems from real-time threats.', icon: Shield },
                                { text: 'Interoperability – Seamless integration with legacy systems, cloud platforms, and enterprise workflows.', icon: Settings },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-orange-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Drone Technology Powered by Agentic AI',
            icon: Plane,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            We are redefining <span className="font-bold text-blue-600">drone capabilities</span> by embedding <span className="font-bold text-blue-600">Agentic AI</span> into aerial systems. Unlike standard programmed drones, our <span className="font-bold text-blue-600">autonomous drones</span>:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Plan and adapt routes dynamically based on live environmental data.', icon: Brain },
                                { text: 'Execute complex missions such as industrial inspections, security patrols, and disaster response with minimal human input.', icon: Rocket },
                                { text: 'Collaborate in swarms for coordinated large-scale tasks.', icon: Users },
                                { text: 'Capture and analyze high-resolution data in real time using onboard generative AI models.', icon: Camera },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-orange-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Business Impact of Agentic Drones:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Faster and safer operations in hazardous environments.', icon: Zap },
                                { text: 'Real-time intelligence delivery for enterprise decision-making.', icon: Brain },
                                { text: 'Reduced operational costs with automated deployment cycles.', icon: BarChart3 },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-orange-600 mr-3" />
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
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-orange-600 to-amber-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <Cpu className="w-5 h-5 text-orange-600 mr-2" />
                            <span className="text-orange-700 font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Cubebotics
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Embedded Systems, IoT & Drone Technology
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Innovative Solutions for Autonomous Devices
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
                                                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
