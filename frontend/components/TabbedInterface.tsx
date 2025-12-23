"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TabItem {
    id: string;
    title: string;
    description: string;
    icon?: LucideIcon;
    image?: string; // Path to image if any
    features?: string[];
    ctaText?: string;
    ctaLink?: string;
}

interface TabbedInterfaceProps {
    title: string;
    subtitle?: string;
    items: TabItem[];
    baseColor?: "blue" | "purple" | "cyan"; // For theming
}

export default function TabbedInterface({
    title,
    subtitle,
    items,
    baseColor = "blue"
}: TabbedInterfaceProps) {
    const [activeTab, setActiveTab] = useState<string>(items[0].id);

    // Determine colors based on theme
    const getThemeColors = () => {
        switch (baseColor) {
            case "purple":
                return {
                    activeBg: "bg-purple-600",
                    activeText: "text-purple-600",
                    lightBg: "bg-purple-50",
                    gradient: "from-purple-500 to-indigo-600",
                    buttonHover: "hover:bg-purple-700",
                };
            case "cyan":
                return {
                    activeBg: "bg-cyan-500",
                    activeText: "text-cyan-600",
                    lightBg: "bg-cyan-50",
                    gradient: "from-cyan-400 to-blue-500",
                    buttonHover: "hover:bg-cyan-600",
                };
            default: // blue
                return {
                    activeBg: "bg-blue-600",
                    activeText: "text-blue-600",
                    lightBg: "bg-blue-50",
                    gradient: "from-blue-500 to-blue-700",
                    buttonHover: "hover:bg-blue-700",
                };
        }
    };

    const theme = getThemeColors();
    const activeItem = items.find((item) => item.id === activeTab) || items[0];

    return (
        <div className="w-full bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-12">
                    <div className={`inline-block w-1.5 h-8 ${theme.activeBg} align-middle mr-3 rounded-full`}></div>
                    <h2 className="inline-block text-3xl sm:text-4xl font-bold text-gray-900 align-middle">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-gray-600 max-w-3xl ml-5 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Column: Tabs */}
                    <div className="lg:w-1/3 flex flex-col space-y-3">
                        {items.map((item) => {
                            const isActive = activeTab === item.id;
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`
                     group flex items-center p-4 rounded-xl text-left transition-all duration-200 border-l-4
                     ${isActive
                                            ? `${theme.lightBg} border-l-4`
                                            : "border-l-4 border-transparent hover:bg-gray-50"}
                   `}
                                    style={isActive ? { borderLeftColor: baseColor === 'purple' ? '#9333ea' : baseColor === 'cyan' ? '#06b6d4' : '#2563eb' } : {}}
                                >
                                    {Icon && (
                                        <div className={`p-2 rounded-lg mr-4 ${isActive ? "bg-white shadow-sm" : "bg-gray-100 group-hover:bg-white"}`}>
                                            <Icon
                                                size={20}
                                                className={isActive ? theme.activeText : "text-gray-500"}
                                            />
                                        </div>
                                    )}
                                    <span className={`font-semibold ${isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
                                        {item.title}
                                    </span>

                                    {/* Arrow on active */}
                                    {isActive && (
                                        <ArrowRight size={16} className={`ml-auto ${theme.activeText}`} />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Content Card */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {/* Content Box */}
                                <div className={`rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 sm:p-10 relative overflow-hidden`}>
                                    {/* Decorative background element */}
                                    <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-400 opacity-5 rounded-bl-full -z-0`}></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                            {activeItem.title}
                                        </h3>

                                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                                            {activeItem.description}
                                        </p>

                                        <div className="mt-auto">
                                            <Link
                                                href={activeItem.ctaLink || "#"}
                                                className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition shadow-md bg-cyan-500 hover:bg-cyan-600"
                                            >
                                                {activeItem.ctaText || "Book a free consultation"}
                                                <ArrowRight size={18} className="ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Features and Image Section */}
                                {activeItem.features && (
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Features List */}
                                        <div className="sm:w-1/2 flex flex-col justify-center">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">{activeItem.title}</h4>
                                            <div className="space-y-3">
                                                {activeItem.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start">
                                                        <CheckCircle2 size={18} className="mr-3 mt-0.5 flex-shrink-0 text-cyan-500" />
                                                        <span className="text-gray-700 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Image Placeholder */}
                                        <div className="sm:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl h-48 sm:h-auto flex items-center justify-center relative overflow-hidden">
                                            {activeItem.image ? (
                                                <Image
                                                    src={activeItem.image}
                                                    alt={activeItem.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-50"></div>
                                                    <div className="text-center z-10">
                                                        <div className="text-5xl mb-2">📊</div>
                                                        <p className="text-white text-sm font-medium">Service Visualization</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
}
