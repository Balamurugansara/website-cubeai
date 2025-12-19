"use client";

import { Award, Shield, Target, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Industry-Focused AI Expertise',
    description: 'Deep domain knowledge across multiple industries with proven AI implementation experience.',
  },
  {
    icon: Shield,
    title: 'Scalable & Secure Architectures',
    description: 'Enterprise-grade AI solutions built with security and scalability at the core.',
  },
  {
    icon: Target,
    title: 'Customized Solutions',
    description: 'Tailored AI solutions designed specifically for your unique business challenges.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced AI engineers, data scientists, and consultants with proven track records.',
  },
  {
    icon: Zap,
    title: 'Innovation & Quality',
    description: 'Committed to delivering cutting-edge AI solutions with uncompromising quality standards.',
  },
];

const stats = [
  { value: '500+', label: 'AI Models Deployed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '15+', label: 'Industries Served' },
];

export default function WhyChooseUsSectionNew() {
  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CubeAI Solutions
            </h2>
            <p className="text-xl text-white/70">
              Partner with industry leaders in AI transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-gray-900" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
