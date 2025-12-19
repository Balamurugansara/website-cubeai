"use client";

import Link from 'next/link';
import { Factory, ShieldCheck, HeartPulse, Globe, ServerCog, Grid } from 'lucide-react';

const statHighlights = [
  { value: '70+', label: 'Projects', detail: 'Delivered across manufacturing, finance, healthcare, and logistics.' },
  { value: '40+', label: 'Happy Clients', detail: 'Partners who rely on CubeAI for AI transformation.' },
  { value: '50+', label: 'Collaborations', detail: 'Cross-industry programs blending AI, cloud, and automation.' },
  { value: '150+', label: 'AI Product Solution', detail: 'Purpose-built tools streamlining CRM, ERP, and HRM workflows.' },
];

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'AI-driven automation, predictive maintenance, and digital twins that maximize throughput and reliability.',
    slug: 'manufacturing',
  },
  {
    icon: ShieldCheck,
    title: 'Finance',
    description: 'Transparent risk insights, fraud detection, and compliance automation powered by responsible AI practices.',
    slug: 'finance',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Life Sciences',
    description: 'Medical data analytics, AI diagnostics, and patient experience orchestration that respect privacy and ethics.',
    slug: 'healthcare',
  },
  {
    icon: Globe,
    title: 'Logistics & Telecom',
    description: 'Intelligent routing, performance monitoring, and IoT-enabled visibility for distributed operations.',
    slug: 'telecom',
  },
  {
    icon: ServerCog,
    title: 'Human Resources',
    description: 'AI assistants that streamline talent acquisition, onboarding, and HR operations across global teams.',
    slug: 'hr',
  },
  {
    icon: Grid,
    title: 'Industry Automation',
    description: 'Integrated AI, cloud, and embedded systems orchestration that turns data into action in real time.',
    slug: 'automation',
  },
];

export default function ProjectsSectionNew() {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase text-blue-600 tracking-[0.3em] mb-3">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real-world impact across industries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              70+ successful AI engagements across manufacturing, finance, healthcare, and logistics. Our teams combine AI,
              IoT, cloud, and automation to deliver measurable ROI for every partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 relative z-10">
            {statHighlights.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 p-6 rounded-3xl flex flex-col gap-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-3xl font-bold text-blue-600">{stat.value}</span>
                <h3 className="text-lg font-semibold text-gray-900">{stat.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article
                  key={industry.title}
                  className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-3xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:shadow-2xl group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">{industry.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
                  </div>
                  <Link
                    href={`/industry/${industry.slug}`}
                    className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    Explore {industry.title}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
