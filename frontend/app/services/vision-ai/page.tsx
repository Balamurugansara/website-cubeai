"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Camera, Brain, Sparkles, Zap, Settings, MessageCircle, Globe, Database, Mic, Rocket, Users } from "lucide-react";

export default function VisionAIPage() {
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
            title: 'Introduction to Agentic Vision AI',
            icon: Camera,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-blue-600">Cube AI Solutions</span> redefines traditional <span className="font-bold text-blue-600">Vision AI</span> with <span className="font-bold text-blue-600">Agentic AI</span>, empowering enterprises to move beyond passive <span className="font-bold text-blue-600">image recognition</span> into <span className="font-bold text-blue-600">autonomous visual decision-making</span>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In conventional AI, visual systems detect and classify objects, but they still rely heavily on manual intervention. With <span className="font-bold text-blue-600">Agentic AI</span>, our vision systems perceive, interpret, and act in real time — enabling faster, smarter, and self-directed operations that boost <span className="font-bold text-blue-600">business productivity using AI</span>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our <span className="font-bold text-blue-600">Agentic Vision AI solutions</span> integrate <span className="font-bold text-blue-600">generative AI models</span>, <span className="font-bold text-blue-600">AI automation tools</span>, and <span className="font-bold text-blue-600">enterprise AI solutions</span> to deliver scalable, industry-specific <span className="font-bold text-blue-600">visual intelligence</span>.
                    </p>
                </div>
            ),
        },
        {
            title: 'Core Capabilities of Agentic Vision AI',
            icon: Settings,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of Agentic Vision AI:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Autonomous Visual Agents – AI that understands visual data context and executes decisions independently.', icon: Brain },
                                { text: 'Real-Time Object Tracking & Recognition – Detect anomalies, threats, or defects instantly.', icon: Eye },
                                { text: 'Generative AI-Enhanced Insights – Predict future visual patterns and anomalies using advanced models.', icon: Sparkles },
                                { text: 'Edge-Based AI Processing – Reduce latency by processing data locally, enabling immediate response.', icon: Zap },
                                { text: 'Seamless Integration – Works with enterprise ERP, CRM, IoT, and operational systems.', icon: Settings },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-violet-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Agentic Chatbot Solutions',
            icon: MessageCircle,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            We extend our <span className="font-bold text-blue-600">Agentic AI capabilities</span> into <span className="font-bold text-blue-600">Chatbot Solutions</span> that go far beyond scripted Q&A. These <span className="font-bold text-blue-600">intelligent agents</span> perceive, understand, and act — turning customer interactions into instant <span className="font-bold text-blue-600">business outcomes</span>.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of Agentic Chatbots:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Vision-Enabled Conversations – Chatbots that can see and interpret images sent by users.', icon: Camera },
                                { text: 'Generative AI Conversations – Adaptive, context-rich responses driven by enterprise-trained LLMs.', icon: Sparkles },
                                { text: 'Automated Task Execution – Complete transactions, schedule meetings, process orders without human handoff.', icon: Zap },
                                { text: 'Omnichannel Integration – Deploy across websites, mobile apps, messaging platforms, and social media.', icon: Globe },
                                { text: 'Enterprise Data Connectivity – Securely access and use company databases for personalized, accurate responses.', icon: Database },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-violet-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Voice Agent',
            icon: Mic,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">AI-powered voice agent</span> enables natural, real-time voice interactions between users and the system, providing intelligent conversational experiences similar to an AI assistant. This advanced voice technology transforms how users interact with VisionAI, allowing seamless communication through spoken language for enhanced productivity and intuitive user experiences.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of Voice Agent:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'AI Voice Assistant for Restaurants – Automated restaurant booking and reservation management with natural voice interactions.', icon: Mic },
                                { text: '24/7 AI Booking Assistant – Always-available voice booking support that handles reservations round-the-clock.', icon: Rocket },
                                { text: 'Natural Language Voice AI Agent – Conversational voice interface that understands and responds to booking requests naturally.', icon: MessageCircle },
                                { text: 'Voice AI with Human-like Conversation – Natural, engaging voice interactions that provide intelligent conversational experiences.', icon: Users },
                                { text: 'Automated Voice Reservation System – Complete voice-driven reservation automation that reduces manual errors and saves staff time.', icon: Zap },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
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
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-violet-600 to-purple-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <Eye className="w-5 h-5 text-violet-600 mr-2" />
                            <span className="text-violet-700 font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Agentic Vision AI
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Autonomous Visual Intelligence for Enterprises
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Redefining Vision AI with Agentic Intelligence
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
                                                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
