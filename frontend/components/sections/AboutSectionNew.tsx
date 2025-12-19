"use client";

import '../../app/home2.css';
import { Check, Brain, Database, Sparkles, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Comprehensive AI Portfolio',
    description:
      'Our service portfolio encompasses a wide range of AI capabilities designed to support customers across various sectors and business functions.',
  },
  {
    icon: Sparkles,
    title: 'Data-Driven Innovation',
    description:
      'A foundation of well-governed, timely, and trusted data is essential for activating cutting-edge use cases like Generative AI and advanced analytics.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'We partner with technology leaders and employ a team of experienced AI engineers and data scientists to craft next-generation enterprise solutions.',
  },
  {
    icon: Brain,
    title: 'AI Engineering Excellence',
    description:
      'We specialize in both research and implementation, delivering top-notch AI engineering solutions for our customers and their stakeholders.',
  },
  {
    icon: Rocket,
    title: 'Future-Focused Solutions',
    description:
      'Through our consulting and implementation services, we assist organizations in developing innovative AI solutions that drive business transformation.',
  },
];

const serviceAreas = [
  { icon: Database, label: 'Data Services' },
  { icon: Brain, label: 'Artificial Intelligence Solutions' },
  { icon: Users, label: 'Microsoft Consulting Practice' },
  { icon: Sparkles, label: 'Salesforce Consulting Practice' },
  { icon: Rocket, label: 'Product Engineering' },
  { icon: Database, label: 'Startup Solutions' },
  { icon: Brain, label: 'Staffing Solutions' },
];

export default function AboutSectionNew() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative w-full max-w-[480px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-8 border-primary/20 bg-gradient-to-tr from-background via-muted/30 to-background shadow-inner mx-auto">
                <div className="absolute inset-0 m-10 border-4 border-secondary/30 rounded-full" />
                <div className="absolute inset-0 m-14 border-4 border-primary/30 rounded-full" />
                <div className="absolute inset-0 m-24 border-4 border-primary/70 rounded-full" />
                <div className="flex items-center justify-center h-full">
                  <div className="w-32 h-32 bg-card rounded-full shadow-2xl flex items-center justify-center border border-border/60 overflow-hidden relative z-10">
                    <img
                      src="/assets/hero-logo.png"
                        alt="CubeAI logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
                <div className="flex flex-col gap-3 md:gap-5 md:ml-0 lg:ml-12 w-full md:w-auto">
                  {serviceAreas.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="service-link">
                        <div className="service-bubble">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 flex-shrink-0">
                            <Icon size={18} />
                          </div>
                          <span className="text-xs md:text-sm font-semibold text-foreground line-clamp-2">{service.label}</span>
                        </div>
                        <span className="connector-tail hidden md:block" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
              <h2 className="section-title mb-2 text-2xl md:text-4xl">About CubeAI Solutions</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                CubeAI Solutions is a technology-driven company specializing in artificial intelligence, machine learning, and data analytics. We help businesses unlock the power of data through intelligent automation, predictive analytics, and custom AI solutions tailored to real-world challenges.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="feature-check group">
                    <div className="feature-check-icon">
                      <Check size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-blue-600 mb-1 transition-colors">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
