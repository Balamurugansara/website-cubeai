"use client";

import TabbedInterface from "@/components/TabbedInterface";
import {
    Bot,
    BarChart4,
    Eye,
    ShieldCheck,
    Cpu,
    Database,
    Code2,
} from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            id: "aima",
            title: "AIMA",
            description: "Artificial Intelligence, Machine Learning & Agent. Empower your business with self-learning algorithms and intelligent agents that automate complex decision-making processes.",
            icon: Bot,
            image: "/assets/services/AI3.png",
            features: [
                "Custom ML Models",
                "Autonomous Agents",
                "Predictive Analysis",
                "Natural Language Processing"
            ],
            ctaLink: "/services/aima",
            ctaText: "Explore AIMA"
        },
        {
            id: "aida",
            title: "AIDA",
            description: "Artificial Intelligence & Data Analysis. Transform raw data into strategic insights. We combine advanced AI with robust data analytics to drive business growth.",
            icon: BarChart4,
            image: "/assets/services/aida bg2.jpeg",
            features: [
                "Big Data Processing",
                "Real-time Dashboards",
                "Business Intelligence",
                "Data Visualization"
            ],
            ctaLink: "/services/aida",
            ctaText: "Discover AIDA"
        },
        {
            id: "vision-ai",
            title: "VisionAI",
            description: "AI Solutions & Computer Vision. Implement state-of-the-art computer vision technology for image recognition, surveillance, and automated quality control.",
            image: "/assets/services/vision AI.png",
            icon: Eye,
            features: [
                "Object Detection",
                "Facial Recognition",
                "Automated Inspection",
                "Video Analytics"
            ],
            ctaLink: "/services/vision-ai",
            ctaText: "See VisionAI"
        },
        {
            id: "cyti",
            title: "CyTI",
            description: "Cyber Tech Innovation. Next-generation cybersecurity solutions designed to protect your digital assets against evolving threats in real-time.",
            image: "/assets/services/cyber Tech.png",
            icon: ShieldCheck,
            features: [
                "Threat Intelligence",
                "Zero Trust Architecture",
                "Penetration Testing",
                "Security Audits"
            ],
            ctaLink: "/services/cyti",
            ctaText: "Secure with CyTI"
        },
        {
            id: "cubebotics",
            title: "Cubebotics",
            description: "Embedded Systems & IoT. Bridge the physical and digital worlds with custom embedded solutions and smart IoT ecosystems for industrial and consumer applications.",
            image: "/assets/services/iot-embedded-systems-tw.png",
            icon: Cpu,
            features: [
                "IoT Device Management",
                "Embedded Firmware",
                "Smart Home/City Solutions",
                "Industrial Automation"
            ],
            ctaLink: "/services/cubebotics",
            ctaText: "Explore Cubebotics"
        },
        {
            id: "dce",
            title: "DCE",
            image: "/assets/services/data.png",
            description: "Data & Cloud Engineering. Build scalable, resilient cloud infrastructure and optimized data pipelines to support your enterprise applications.",
            icon: Database,
            features: [
                "Cloud Migration Strategy",
                "Data Warehousing",
                "DevOps Automation",
                "High-Performance Computing"
            ],
            ctaLink: "/services/dce",
            ctaText: "Go to DCE"
        },
        {
            id: "tech-solution",
            title: "Tech Solution",
            image: "/assets/services/future.png",
            description: "Future Technology & Services. Stay ahead of the curve with our R&D-driven approach to emerging technologies, from blockchain to quantum computing readiness.",
            icon: Code2,
            features: [
                "Blockchain Development",
                "Web3 Integration",
                "Custom Enterprise Software",
                "Digital Transformation"
            ],
            ctaLink: "/services/tech-solution",
            ctaText: "View Solutions"
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className=" text-white py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{backgroundImage: 'url(/assets/services/Services.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0"></div>
                <div className="relative max-w-7xl mx-auto z-10 text-center">
                   
                </div>
            </div>

            <TabbedInterface
                title="Explore Our Domains"
                subtitle="We specialize in cutting-edge technologies to drive your business forward."
                items={services}
                baseColor="blue"
            />
        </main>
    );
}
