"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Monitor, Smartphone, Briefcase, Megaphone, Users, Sparkles, Zap, Shield, Brain, TrendingUp, BarChart3, Settings, Globe, Wifi, Rocket } from "lucide-react";

export default function TechSolutionPage() {
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
            title: 'Introduction to Technology Solutions',
            icon: Monitor,
            content: (
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At <span className="font-bold text-blue-600">Cube AI Solutions</span>, we believe that technology should not just support your business — it should think, adapt, and grow alongside it. Our Tech Solutions integrate <span className="font-bold text-blue-600">Agentic AI</span>, <span className="font-bold text-blue-600">generative AI</span>, and <span className="font-bold text-blue-600">AI automation tools</span> into every layer of your enterprise technology stack, ensuring that your business stays ahead in a world of continuous digital evolution.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Unlike traditional IT services, our <span className="font-bold text-blue-600">enterprise AI solutions</span> enable systems to make autonomous decisions, optimize operations in real time, and drive measurable <span className="font-bold text-blue-600">business productivity using AI</span>. From web and app development to business consulting and digital marketing, we create intelligent, self-improving solutions that redefine efficiency and innovation.
                    </p>
                </div>
            ),
        },
        {
            title: 'Web Development with Agentic AI',
            icon: Monitor,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Your website is no longer just a digital presence — it’s a smart, adaptive platform that engages visitors dynamically.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">Agentic AI-driven web development solutions</span>:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Personalize user journeys based on behavior and context.', icon: Users },
                                { text: 'Use generative AI to create dynamic content, chatbots, and recommendations.', icon: Sparkles },
                                { text: 'Continuously optimize site performance through AI automation tools.', icon: Zap },
                                { text: 'Deliver enterprise-grade security, scalability, and UX design.', icon: Shield },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – Web Development:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Autonomous content personalization.', icon: Brain },
                                { text: 'AI-driven SEO optimization for higher rankings.', icon: TrendingUp },
                                { text: 'Predictive analytics for user engagement trends.', icon: BarChart3 },
                                { text: 'Seamless integration with CRM and ERP systems.', icon: Settings },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'App Development with Agentic AI',
            icon: Smartphone,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Mobile and enterprise apps become <span className="font-bold text-blue-600">intelligent assistants</span> with <span className="font-bold text-blue-600">Agentic AI integration</span>.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">app development services</span>:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Enable apps to anticipate user needs through predictive analytics.', icon: Brain },
                                { text: 'Automate workflows using embedded AI automation tools.', icon: Zap },
                                { text: 'Integrate generative AI for natural language processing and personalization.', icon: Sparkles },
                                { text: 'Provide multi-platform deployment with real-time adaptability.', icon: Globe },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – App Development:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Context-aware personalization in real time.', icon: Users },
                                { text: 'Self-updating performance optimization.', icon: Zap },
                                { text: 'Offline intelligence for remote use cases.', icon: Wifi },
                                { text: 'Integration with IoT, AR/VR, and enterprise AI systems.', icon: Settings },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Business Consulting with Agentic AI',
            icon: Briefcase,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Consulting is no longer about static reports — it’s about <span className="font-bold text-blue-600">continuous intelligence</span>.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">Agentic AI-powered business consulting</span> approach:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Uses enterprise AI solutions to simulate scenarios and forecast outcomes.', icon: Brain },
                                { text: 'Automates data gathering, competitive analysis, and KPI tracking.', icon: Zap },
                                { text: 'Generates real-time recommendations for operational and strategic shifts.', icon: Rocket },
                                { text: 'Supports Industry 4.0 and 5.0 transformation initiatives.', icon: Globe },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – Business Consulting:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'AI-driven decision support systems.', icon: Brain },
                                { text: 'Predictive market and customer insights.', icon: BarChart3 },
                                { text: 'Automated performance benchmarking.', icon: TrendingUp },
                                { text: 'Continuous business model optimization.', icon: Settings },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ),
        },
        {
            title: 'Digital Marketing with Agentic AI',
            icon: Megaphone,
            content: (
                <div className="space-y-8">
                    <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Marketing powered by <span className="font-bold text-blue-600">Agentic AI</span> is precise, predictive, and highly personalized.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Our <span className="font-bold text-blue-600">digital marketing solutions</span>:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Use generative AI to create optimized ad creatives and campaigns.', icon: Sparkles },
                                { text: 'Apply AI automation tools for bid management, segmentation, and targeting.', icon: Zap },
                                { text: 'Deliver personalized experiences to each user in real time.', icon: Users },
                                { text: 'Continuously improve ROI through data-driven campaign intelligence.', icon: BarChart3 },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                                    <span className="text-gray-700">{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – Digital Marketing:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: 'Autonomous ad optimization.', icon: Zap },
                                { text: 'Predictive audience targeting.', icon: Brain },
                                { text: 'AI-enhanced SEO and content generation.', icon: TrendingUp },
                                { text: 'Real-time marketing analytics and insights.', icon: BarChart3 },
                            ].map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={bulletVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                                >
                                    <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
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
                        className="text-center mb-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 shadow-xl"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
                            <Monitor className="w-5 h-5 text-indigo-600 mr-2" />
                            <span className="text-indigo-700 font-medium">Service Details</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Technology Solutions
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-4">
                            Future Technology & Services
                        </p>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Integrating Agentic AI for Intelligent Technology Stacks
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
                                                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
