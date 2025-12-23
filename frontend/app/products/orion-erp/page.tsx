"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    Sparkles,
    CheckCircle,
    Mail,
    X,
    Globe,
    TrendingUp,
    Award,
} from 'lucide-react';

export default function OrionERPPage() {
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
        title: 'Orion ERP',
        subtitle: 'Next-Generation Enterprise Resource Planning for High-Performance Businesses',
        tagline: 'Empowering Enterprises with Intelligent ERP Solutions',
        description:
            "In today's competitive market, businesses need more than just basic ERP systems — they need intelligent, agile, and scalable **enterprise resource planning software**. **Orion ERP** by **Cube AI Solutions** is a **cutting-edge ERP platform** designed to centralize your operations, **boost business productivity using AI automation tools**, and provide **real-time insights** for faster decision-making.",
        extendedDescription:
            "With **Orion ERP**, your finance, HR, supply chain, inventory, sales, and customer management come together in one **unified platform**, ensuring efficiency, accuracy, and operational excellence across the organization.",
        icon: Building2,
        color: 'from-emerald-600 to-teal-700',
        bgImage: '/assets/products/orion.webp',
        productImage: '/assets/products/erp1.png',
        keyFeatures: [
            '**Unified Business Management** – All departments connected in a single system.',
            '**Real-Time Analytics & Reporting** – Get instant visibility into KPIs and trends.',
            '**Customizable Modules** – Tailored to your industry and workflows.',
            '**Cloud & On-Premises Deployment** – Choose the deployment model that suits your strategy.',
            '**Automated Workflows** – Reduce manual errors and save time.',
            '**Global Operations Ready** – Multi-language and multi-currency support.',
            '**Advanced Security** – Robust compliance and data protection features.',
        ],
        keyBenefits: [
            '**Boost Efficiency** – Automate repetitive tasks to free up valuable resources.',
            '**Improve Decision-Making** – **AI-powered analytics** for strategic business planning.',
            '**Enhance Collaboration** – Seamless inter-department communication.',
            '**Reduce Costs** – Optimize resources and eliminate inefficiencies.',
            '**Adapt Quickly** – Stay agile in fast-changing markets.',
            '**Scale Without Limits** – Modular design to support business growth.',
        ],
        benefits: [
            {
                icon: Globe,
                title: 'Unified Business Operations',
                description: 'Seamlessly integrate all business processes from finance to supply chain in one comprehensive platform.',
                image: '/assets/products/erp2.jpg',
            },
            {
                icon: TrendingUp,
                title: 'Reduce Operational Costs by 30%',
                description: 'Streamlined processes and automated workflows significantly reduce manual overhead and operational expenses.',
                image: '/assets/products/erp3.png',
            },
            {
                icon: Award,
                title: 'Real-time Business Intelligence',
                description: 'Advanced analytics and reporting provide instant insights for data-driven decision making.',
                image: '/assets/products/erp4.webp',
            },
        ],
    };

    const Icon = product.icon;

    const renderTextWithSuperscript = (text: string, keyPrefix: string) => {
        if (!text.includes(' ')) return text;
        const segments = text.split(' ');
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
        <div className="min-h-screen pt-0 bg-gray-50">
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
