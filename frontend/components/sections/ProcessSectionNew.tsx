"use client";

import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description:
      'We analyze your business needs and identify opportunities for AI integration with comprehensive assessments.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Strategy',
    description:
      'We develop a comprehensive AI strategy tailored to your specific business requirements and objectives.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description: 'Our expert team builds and implements cutting-edge AI solutions using the latest technologies.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Optimization',
    description:
      'We continuously monitor and optimize every engagement to maximize impact and deliver sustainable results.',
  },
];

export default function ProcessSectionNew() {
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <p className="text-sm uppercase tracking-[0.5em] text-blue-600">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our AI Solution Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional AI solutions with proven methodologies.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-center">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="group mx-auto text-center relative">
                    <div className="relative flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform relative z-10">
                        <span className="group-hover:hidden">{step.number}</span>
                        <Icon size={24} className="hidden group-hover:block" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="absolute -inset-4 rounded-2xl bg-white opacity-0 group-hover:opacity-100 -z-10 transition-all duration-300 shadow-lg border border-blue-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
