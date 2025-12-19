"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, Database, Sparkles, Brain, BarChart3, Cpu } from 'lucide-react';
import ContactModal from '../ContactModal';

const heroServices = [
  { icon: Brain, label: 'AI & ML Solutions', angle: 0 },
  { icon: Database, label: 'Data Analytics', angle: 45 },
  { icon: Bot, label: 'Computer Vision', angle: 90 },
  { icon: Sparkles, label: 'NLP Solutions', angle: 135 },
  { icon: BarChart3, label: 'Business Intelligence', angle: 180 },
  { icon: Cpu, label: 'AI Consulting', angle: 225 },
];

export default function HeroSectionNew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroServices.length);
      setRotation((prev) => prev + 60);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-100/30 to-transparent rounded-full" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>AI-Powered Innovation</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                AI Solutions That{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transform
                </span>{' '}
                Businesses
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                CubeAI Solutions empowers organizations with intelligent AI, data-driven insights, and scalable digital solutions to drive growth and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-xl flex flex-col items-center justify-center border border-gray-200 p-4">
                    <img
                      src="/assets/hero-logo.png"
                      alt="CubeAI Solutions logo"
                      className="w-10 h-10 md:w-20 md:h-20 object-contain mb-2"
                    />
                    <span className="font-bold text-sm text-gray-900">CubeAI</span>
                    <span className="text-xs text-gray-600">Solutions</span>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 transition-transform duration-1000 ease-out"
                  style={{ transform: `rotate(${-rotation}deg)` }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300" />
                  
                  {heroServices.map((service, index) => {
                    const Icon = service.icon;
                    const angle = (index * 60 - 90) * (Math.PI / 180);
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const isActive = index === activeIndex;

                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 transition-all duration-500"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`,
                        }}
                      >
                        <div
                          className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-white shadow-lg scale-110 border border-blue-300'
                              : 'bg-white/80 scale-90 opacity-60'
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                                : 'bg-blue-100'
                            }`}
                          >
                            <Icon
                              size={24}
                              className={isActive ? 'text-white' : 'text-blue-600'}
                            />
                          </div>
                          <span
                            className={`text-xs font-medium text-center whitespace-nowrap ${
                              isActive ? 'text-gray-900' : 'text-gray-600'
                            }`}
                          >
                            {service.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
