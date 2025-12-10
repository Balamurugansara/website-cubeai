'use client';

import { useState } from 'react';
import Image from 'next/image';

const CoreValuesPage = () => {
  const values = [
    {
      id: 1,
      icon: '🚀',
      title: 'Innovation',
      description:
        'We push boundaries to invent smarter, faster, and more efficient AI solutions. Innovation fuels our culture — from rapid experimentation to continuous improvement.',
      image: '/assets/innovation.jpg',
      layout: 'text-image',
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Goals',
      description:
        'We set purposeful and measurable goals that align with client needs and long-term business growth. Every milestone brings us closer to meaningful impact.',
      image: '/assets/goals.jpg',
      layout: 'image-text',
    },
    {
      id: 3,
      icon: '🤝',
      title: 'Teamwork',
      description:
        'Collaboration is at our core. We believe that diverse ideas, open communication, and shared ownership lead to better solutions and stronger results.',
      image: '/assets/teamwork.jpg',
      layout: 'text-image',
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Integrity',
      description:
        'We uphold transparency, honesty, and ethical standards in everything we do. Integrity builds trust — the foundation of every relationship.',
      image: '/assets/integrity.jpg',
      layout: 'image-text',
    },
    {
      id: 5,
      icon: '💼',
      title: 'Commitment',
      description:
        'We stay dedicated from start to finish. Our team consistently delivers high-quality work, meets deadlines, and supports clients long after launch.',
      image: '/assets/commitment.jpg',
      layout: 'text-image',
    },
    {
      id: 6,
      icon: '👥',
      title: 'Customers',
      description:
        'Our clients are partners. We listen, understand, and build tailored solutions that solve real challenges. Customer success drives our innovation.',
      image: '/assets/customers.jpg',
      layout: 'image-text',
    },
    {
      id: 7,
      icon: '🌍',
      title: 'Responsibility',
      description:
        'We build AI responsibly — with secure data practices, sustainable development, and ethical design. Every decision reflects our commitment to positive impact.',
      image: '/assets/responsibility.jpg',
      layout: 'text-image',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ⭐ Our Core Values
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            At CubeAI, our values are more than principles — they shape how we innovate, collaborate,
            and deliver impact for every client.
          </p>
          <p className="text-gray-500">
            These values guide our decisions, drive our growth, and define who we are as a modern AI-driven company.
          </p>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-20">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`flex flex-col ${
                value.layout === 'image-text' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{value.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{value.title}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{value.description}</p>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full"></div>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1">
                <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border border-gray-300 shadow-lg hover:shadow-blue-200/40 transition-shadow duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 text-lg mb-2">Image Placeholder</p>
                      <p className="text-gray-400 text-sm">{value.title} - {value.image}</p>
                    </div>
                  </div>
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            These Values Drive Everything We Do
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            From the technology we build to the relationships we foster, our core values are the compass
            that guides CubeAI toward innovation, excellence, and positive impact.
          </p>
          <a
            href="/careers/open-positions"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 transform hover:scale-105"
          >
            Join Our Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesPage;
