"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    Sparkles,
    CheckCircle,
    Mail,
    X,
    TrendingUp,
    Target,
    Zap,
} from 'lucide-react';

export default function AndromedaCRMPage() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowForm(false);
        setFormData({ name: '', email: '', message: '' });
    };

    const product = {
        title: 'Andromeda CRM',
        subtitle: 'AI-Powered Customer Relationship Management',
        tagline: 'Transforming Customer Engagement with Intelligent Automation',
        description:
            "In today's hyper-competitive market, managing customer relationships is no longer just about storing data — it's about understanding customers deeply, predicting their needs, and engaging with precision. **Andromeda CRM** by **Cube AI Solutions** is an **AI-powered CRM platform** designed to empower businesses with **real-time intelligence**, **automate workflows**, and deliver **personalized customer experiences** at scale.",
        extendedDescription:
            "Unlike traditional CRM systems, **Andromeda CRM** uses **artificial intelligence** to go beyond tracking interactions — it learns from every customer touchpoint, analyzes behavioral patterns, and optimizes engagement strategies automatically.",
        icon: Users,
        color: 'from-blue-600 to-indigo-700',
        bgImage: '/assets/products/new crm.webp',
        productImage: '/assets/products/kcrm.jpg',
        keyFeatures: [
            '**AI-Powered Predictive Analytics** – Forecast sales trends, customer churn, and buying patterns.',
            '**Intelligent Lead Scoring** – Automatically prioritize leads with the highest conversion probability.',
            '**Personalized Customer Journeys** – Use AI to tailor campaigns and recommendations.',
            '**Workflow Automation** – Automate repetitive tasks like follow-ups, reminders, and report generation.',
            '**Omni-Channel Integration** – Manage customer interactions across email, social media, chat, and phone from a single dashboard.',
            '**Real-Time Data Insights** – Get instant reports and performance metrics powered by AI.',
            '**Seamless Scalability** – Designed to grow with your business without disrupting existing processes.',
        ],
        keyBenefits: [
            '**Increase Sales Efficiency** – Focus your team\'s efforts where they matter most using **AI-driven lead intelligence**.',
            '**Enhance Customer Retention** – Proactively address customer needs with **predictive insights**.',
            '**Save Time with Automation** – Let AI handle repetitive administrative tasks so teams can focus on high-value activities.',
            '**Improve Decision-Making** – Get **real-time, data-backed recommendations** for faster, more accurate strategies.',
            '**Boost Marketing ROI** – Deliver the right message, to the right person, at the right time — automatically.',
            '**Enable Data-Driven Growth** – Use **AI insights** to scale intelligently and sustainably.',
        ],
        benefits: [
            {
                icon: TrendingUp,
                title: 'Increase Sales by 40%',
                description: 'AI-powered lead scoring and predictive analytics help identify high-value prospects and optimize sales strategies.',
                image: '/assets/products/kcrm1.jpg',
            },
            {
                icon: Target,
                title: 'Improve Customer Retention',
                description: 'Advanced customer behavior analysis and automated engagement workflows reduce churn by 35%.',
                image: '/assets/products/kcrm2.jpg',
            },
            {
                icon: Zap,
                title: 'Automate 80% of Tasks',
                description: 'Intelligent automation handles routine tasks, freeing your team to focus on strategic customer relationships.',
                image: '/assets/products/kcrm3.jpg',
            },
        ],
    };

    const Icon = product.icon;

    const renderTextWithSuperscript = (text: string, keyPrefix: string) => {
        if (!text.includes(' ')) return text;
        const segments = text.split(' ');
        // Handle the word break for this specific title if needed, or just let it flow
        // The previous implementation had a <br/> in the title in the original file, but here we render dynamically.
        // We'll stick to a simple mapping.
        return segments.map((segment, idx) => (
            <React.Fragment key={`${keyPrefix}-${idx}`}>
                {segment}
                {idx < segments.length - 1 && (
                    <sup className="ml-0.5 text-[0.65em] align-super leading-none tracking-tight text-current"> </sup>
                )}
            </React.Fragment>
        ));
    };

    const formatText = (text: string) => {
        return text.split('**').map((part, index) => {
            const content = renderTextWithSuperscript(part, `part-${index}`);
            if (index % 2 === 1) {
                return (
                    <strong key={`strong-${index}`} className="font-semibold text-gray-900">
                        {content}
                    </strong>
                );
            }
            return (
                <React.Fragment key={`text-${index}`}>
                    {content}
                </React.Fragment>
            );
        });
    };

    return (
        <div className="min-h-screen pt-12 bg-gray-50">
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={product.bgImage} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
                            <Sparkles className="w-5 h-5 text-white mr-2" />
                            <span className="text-white font-medium">Product Details</span>
                        </div>
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-8`}>
                            <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            {renderTextWithSuperscript(product.title, 'title')}
                        </h1>
                        <p className="text-2xl text-blue-300 mb-4 font-medium">{product.subtitle}</p>
                        <p className="text-xl text-yellow-300 mb-8 font-semibold">{product.tagline}</p>
                        <a
                            href="https://cubegtp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Visit Our Website
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Product Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <img src={product.productImage} alt={product.title} className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Overview</h2>
                            <div className="text-lg text-gray-700 leading-relaxed mb-6">{formatText(product.description)}</div>
                            {product.extendedDescription && (
                                <div className="text-lg text-gray-700 leading-relaxed">{formatText(product.extendedDescription)}</div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Key Features</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the powerful capabilities that make {product.title} the industry leader
                        </p>
                    </motion.div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {product.keyFeatures.map((feature: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-gray-700 leading-relaxed">{formatText(feature)}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Andromeda CRM uses Key Benefits and Visual Benefits from Friend's Code if present */}
            {/* Based on friend's code structure for this specific product, applications section was missing in the data object for Andromeda. */}
            {/* So we skip applications section here as per productData['andromeda-crm'] */}

            {/* Key Benefits */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Business Benefits</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your operations with measurable business outcomes</p>
                    </motion.div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-20">
                        {product.keyBenefits.map((benefit: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                            >
                                <div className="flex items-start">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mr-4 mt-2 flex-shrink-0`}></div>
                                    <div className="text-gray-700 leading-relaxed">{formatText(benefit)}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Benefits Cards */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {product.benefits.map((benefit, index) => {
                            const BenefitIcon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full shadow-lg">
                                        <motion.div className="mb-6 overflow-hidden rounded-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                            <img src={benefit.image} alt={benefit.title} className="w-full h-32 object-cover" />
                                        </motion.div>
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <BenefitIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Modal */}
            {showForm && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ scale: 0.9, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        className="bg-white rounded-2xl p-8 max-w-md w-full relative"
                    >
                        <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
                            <X className="w-5 h-5 text-gray-500" />
                        </button>

                        <div className="text-center mb-8">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-4`}>
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Request a Demo</h3>
                            <p className="text-gray-600 mt-2">Fill out the form and we'll get back to you soon</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3 px-6 bg-gradient-to-r ${product.color} text-white font-bold rounded-lg hover:opacity-90 transition-opacity`}
                            >
                                Submit Request
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
