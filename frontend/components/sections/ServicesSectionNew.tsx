"use client";

import '../../app/home2.css';
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesSectionNew() {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.5em] text-secondary">Our Services</p>
            <h2 className="section-title">AI-Powered Business Solutions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive AI-powered services designed to transform your business and drive innovation across industries. Built on a foundation of Agentic AI, IoT, and cloud engineering, we deliver future-ready automation that scales.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Explore our AI products and learn about the state of AI in business as we guide organizations through machine learning, data analytics, cybersecurity, IoT, and cloud transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service: any, index: number) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`service-icon bg-gradient-to-br ${service.color} bg-opacity-10`}>
                    <Icon size={32} className="text-secondary" />
                  </div>

                  <div className="flex flex-col gap-1 mb-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{service.title}</span>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.subtitle}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
                    {service.features.map((feature: string) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-secondary font-semibold text-sm hover:text-primary transition-colors group"
                    >
                      Get Details
                      <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {services.map((service, index) => (
            <article
              key={service.title}
              id={`service-${service.slug}`}
              className="rounded-3xl border border-border/70 bg-background/80 shadow-2xl p-8"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{service.title}</p>
                  <h3 className="text-3xl font-bold text-foreground">{service.subtitle}</h3>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed max-w-4xl">
                {service.description}
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="rounded-2xl bg-card/70 p-4 border border-border/40">
                    <p className="text-sm text-foreground font-semibold mb-2">{feature}</p>
                    <p className="text-xs text-muted-foreground">
                      {service.title} capability that enhances your AI transformation.
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
