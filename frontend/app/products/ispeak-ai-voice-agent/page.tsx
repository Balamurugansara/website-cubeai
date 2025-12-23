"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    CheckCircle,
    Mail,
    X,
    Headphones,
    Phone,
    Hotel,
    Heart,
    CreditCard,
    ShoppingBag,
    PhoneCall,
    Brain,
    Languages,
} from 'lucide-react';

export default function ISpeakPage() {
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
        title: 'iSpeak AI Voice Agent',
        subtitle: 'Lightning-Fast Voice AI for ERP & CRM Workflows',
        tagline: 'Automate every live conversation with enterprise-grade intelligence',
        description:
            "Transform how your contact center, CRM, and ERP teams operate with **iSpeak  AI Voice Agent**. Powered by **Lightning Voice AI** and **Electron Intelligence SLMs**, iSpeak  delivers natural, human-like conversations that understand intent, execute actions, and update your business systems in real time. Eliminate bottlenecks, shorten call handling times, and deliver white-glove customer experiences around the clock.",
        extendedDescription:
            "Built for regulated industries and complex enterprise environments, iSpeak  orchestrates bi-directional voice interactions across telephony, CRM, and ERP stacks while guaranteeing compliance with **SOC 2 Type II, HIPAA, and PCI** standards. Deploy it in the cloud or on-premises to delight customers, supercharge operations, and elevate agent productivity instantly.",
        icon: Headphones,
        color: 'from-purple-600 to-blue-600',
        bgImage: '/assets/products/voiceagent.avif',
        productImage: '/assets/products/voiceagent.webp',
        keyFeatures: [
            '**Real-Time Voice Automation** – Handle inbound and outbound calls with natural, latency-free conversations that rival live agents.',
            '**Electron SLM Intent Routing** – Understand caller intent, sentiment, and context to trigger the right workflows in connected systems.',
            '**Native ERP & CRM Actions** – Update Salesforce, Oracle, SAP, and other enterprise apps without manual intervention.',
            '**Omni-Channel Telephony Support** – Seamlessly integrate SIP, PSTN, WhatsApp voice, and webRTC channels.',
            '**Secure Deployment Options** – Choose cloud, hybrid, or on-premise deployments with full compliance coverage.',
            '**Multilingual Voice Library** – Engage customers across 16 global languages with localized, lifelike voices.',
        ],
        keyBenefits: [
            '**Accelerate Resolution Times** – Reduce average handle time with AI agents that resolve issues and trigger system updates instantly.',
            '**Boost Agent Productivity** – Let human teams focus on complex escalations while iSpeak  automates repetitive voice tasks.',
            '**Enhance Customer Satisfaction** – Deliver consistent, empathetic conversations that adapt to caller tone and preferences.',
            '**Ensure Compliance & Security** – Maintain audit trails and meet enterprise security standards out of the box.',
            '**Scale Effortlessly** – Spin up new voice agents for campaigns, geographies, or product lines in minutes, not months.',
            '**Lower Operational Costs** – Decrease staffing and training expenses by augmenting teams with always-on AI capacity.',
        ],
        applications: [
            {
                sector: 'Customer Support & Contact Centers',
                icon: Phone,
                features: [
                    'Handle inbound/outbound calls with zero wait time',
                    'Automate FAQs, ticket creation, and escalation handling',
                    'Reduce operational costs by up to 60%',
                ],
            },
            {
                sector: 'Hospitality & Travel',
                icon: Hotel,
                features: [
                    'Automate booking, check-in, and concierge services',
                    'Deliver personalized guest experiences through conversational assistance',
                    'Real-time multilingual support for travelers',
                ],
            },
            {
                sector: 'Healthcare',
                icon: Heart,
                features: [
                    'Appointment scheduling, patient follow-ups, and reminders',
                    'Voice-based symptom checking and guidance',
                    'AI-powered nurse assistant for 24/7 patient communication',
                ],
            },
            {
                sector: 'Banking & Financial Services',
                icon: CreditCard,
                features: [
                    'Voice authentication for secure transactions',
                    'Account inquiries, balance checks, and payment reminders',
                    'Smart conversational guidance for customer onboarding',
                ],
            },
            {
                sector: 'Retail & E-commerce',
                icon: ShoppingBag,
                features: [
                    'Conversational shopping assistants',
                    'Real-time order tracking and product inquiries',
                    'Voice-driven customer engagement and upselling',
                ],
            },
        ],
        benefits: [
            {
                icon: PhoneCall,
                title: 'Real-Time Call Orchestration',
                description: 'Blend AI voice agents with live transfers, callbacks, and CRM updates to keep every customer journey on track.',
                image: '/assets/products/voice.jpg',
            },
            {
                icon: Brain,
                title: 'Context-Aware Intelligence',
                description: 'Electron SLMs analyze millions of prior interactions to understand intent, sentiment, and next best actions instantly.',
                image: '/assets/products/voice2.jpg',
            },
            {
                icon: Languages,
                title: 'Global Language Coverage',
                description: 'Deliver native-quality voice experiences across 16 languages with configurable tone, accent, and persona.',
                image: '/assets/products/voice3.jpg',
            },
        ],
        industries: [
            '**Contact Centers & BPOs** – Automate high-volume call flows while surfacing complex cases to specialists.',
            '**Financial Services** – Handle collection follow-ups, KYC verification, and transaction alerts within regulatory guardrails.',
            '**Healthcare** – Coordinate appointments, prescription reminders, and member outreach with HIPAA-ready voice agents.',
            '**Retail & E-Commerce** – Offer proactive order updates, returns processing, and loyalty engagement in any language.',
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

            {/* Applications Across Sectors */}
            {product.applications && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Applications Across Sectors</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover how {product.title} transforms operations across diverse industries
                            </p>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {product.applications.map((application, index) => {
                                const ApplicationIcon = application.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg"
                                    >
                                        <div className="flex items-center mb-6">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                                                <ApplicationIcon className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{application.sector}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {application.features.map((feature: string, featureIndex: number) => (
                                                <li key={featureIndex} className="flex items-start text-gray-700">
                                                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

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

            {/* Industries Section (for Nebula CDM) */}
            {product.industries && (
                <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Industries That Rely on {product.title}</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by leading organizations across multiple sectors</p>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {product.industries.map((industry: string, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mr-4 mt-2 flex-shrink-0`}></div>
                                        <div className="text-gray-700 leading-relaxed">{formatText(industry)}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
