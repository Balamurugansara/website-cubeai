"use client";

import TabbedInterface from "@/components/TabbedInterface";
import {
    Mic,
    Users,
    Layers,
    Database,
    Globe,
} from "lucide-react";

export default function ProductsPage() {
    const products = [
        {
            id: "ispeak",
            title: "iSpeak AI Voice Agent",
            description: "An intelligent voice assistant designed to handle complex customer interactions with human-like empathy and precision. Reduce support costs while improving customer satisfaction.",
            icon: Mic,
            image: "/assets/products/voiceagent2.jpg",
            features: [
                "Real-time Speech Recognition",
                "Multi-language Support",
                "Sentiment-Aware Responses",
                "Seamless Hand-off to Human Agents"
            ],
            ctaLink: "/products/ispeak-ai-voice-agent",
            ctaText: "Request Demo"
        },
        {
            id: "andromeda",
            title: "Andromeda CRM",
            description: "A sales-force multiplier. Andromeda CRM gives you deep visibility into your sales pipeline, helping you track leads, manage opportunities, and close deals faster.",
            icon: Users,
            image: "/assets/products/crm.webp",
            features: [
                "Automated Lead Scoring",
                "Visual Pipeline Management",
                "Email Marketing Integration",
                "Sales Performance Analytics"
            ],
            ctaLink: "/products/andromeda-crm",
            ctaText: "See It In Action"
        },
        {
            id: "orion",
            title: "Orion ERP",
            description: "The backbone of your enterprise. Orion ERP unifies finance, supply chain, operations, and HR into a single, cohesive source of truth for better decision making.",
            icon: Layers,
            image: "/assets/products/ERP.webp",
            features: [
                "Financial Management Module",
                "Supply Chain Optimization",
                "Procurement & Inventory",
                "Project Management Tools"
            ],
            ctaLink: "/products/orion-erp",
            ctaText: "Get Started"
        },
        {
            id: "nebula",
            title: "Nebula CDM",
            description: "Customer Data Management tailored for modern marketers. Unify data from offline and online sources to create a 360-degree view of every customer.",
            icon: Database,
            image: "/assets/products/CDM.webp",
            features: [
                "Identity Resolution",
                "Data Hygiene & Enrichment",
                "Real-time Customer Segmentation",
                "Privacy & Consent Management"
            ],
            ctaLink: "/products/nebula-cdm",
            ctaText: "Learn More"
        },
        {
            id: "cosmos",
            title: "Cosmos Orchestration",
            description: "Connect your digital universe. Cosmos creates seamless workflows across your diverse software ecosystem, eliminating data silos and manual data entry.",
            image: "/assets/products/orchestration.jpg",
            icon: Globe,
            features: [
                "Drag-and-Drop Workflow Builder",
                "Pre-built Connectors for Major Apps",
                "Event-Driven Triggers",
                "Enterprise-Grade Security"
            ],
            ctaLink: "/products/cosmos-orchestration",
            ctaText: "Automate Now"
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="text-white py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundImage: 'url(/assets/products/our%20products.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0"></div>
                <div className="relative max-w-7xl mx-auto z-10 text-center">
                    
                </div>
            </div>

            <TabbedInterface
                title="Discover Our Platforms"
                subtitle="From intelligent voice agents to comprehensive enterprise systems, our products are designed to solve complex business challenges."
                items={products}
                baseColor="purple"
            />
        </main>
    );
}
