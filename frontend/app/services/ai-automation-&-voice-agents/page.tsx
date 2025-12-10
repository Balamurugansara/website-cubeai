'use client';

import { useState } from 'react';
import Link from 'next/link';

const AIAutomationPage = () => {
  const features = [
    {
      icon: '🤖',
      title: '24/7 Voice Agents',
      desc: 'Always-on AI reception & customer support',
    },
    {
      icon: '⚡',
      title: 'End-to-End Automation',
      desc: 'Lead routing, CRM updates, ticket creation',
    },
    {
      icon: '🎙️',
      title: 'Human-Like Speech',
      desc: 'Natural voice, emotions, pauses',
    },
    {
      icon: '🌍',
      title: 'Multilingual AI',
      desc: 'Speak & automate in any language',
    },
  ];

  const workflowSteps = [
    { icon: '🔍', title: 'Understand Workflow' },
    { icon: '🎨', title: 'Design AI & Persona' },
    { icon: '💻', title: 'Develop + Integrate' },
    { icon: '🚀', title: 'Deploy + Optimize' },
  ];

  const useCases = [
    { icon: '💬', title: 'Customer Support', desc: 'Instant query resolution and ticketing' },
    { icon: '🏠', title: 'Real Estate', desc: 'Property inquiries and appointment booking' },
    { icon: '🏥', title: 'Clinics & Healthcare', desc: 'Patient scheduling and follow-ups' },
    { icon: '💼', title: 'SAAS & IT', desc: 'Onboarding and tech support' },
    { icon: '💰', title: 'Finance & Insurance', desc: 'Claims processing and client queries' },
    { icon: '🎓', title: 'Education & Training', desc: 'Course enrollment and student support' },
  ];

  const caseStudies = [
    {
      title: 'Customer Support Automation',
      image: '/assets/case-support.jpg',
      metrics: ['60% manual call reduction', '3× faster response times', '24/7 availability'],
    },
    {
      title: 'Real Estate Lead Management',
      image: '/assets/case-realestate.jpg',
      metrics: ['40% operational savings', '5× lead conversion', 'Automated scheduling'],
    },
    {
      title: 'Healthcare Appointment Booking',
      image: '/assets/case-healthcare.jpg',
      metrics: ['90% booking accuracy', '50% staff time saved', 'Multi-language support'],
    },
  ];

  const integrations = [
    'Salesforce',
    'HubSpot',
    'Zoho CRM',
    'Twilio',
    'Microsoft Teams',
    'Slack',
    'Zapier',
    'Custom APIs',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Voice Agents & Automation That Work For You 24/7
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Reduce manual work, automate conversations, and deliver instant customer experiences powered
              by intelligent voice AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Automation
              </Link>
              <Link
                href="https://cubegtp.com"
                target="_blank"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Try CubeGTP →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-200 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎙️</div>
                <div className="h-2 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full mb-4 animate-pulse"></div>
                <p className="text-gray-600 text-lg">AI Voice Assistant Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Agent Demo Block */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your AI that can answer calls, book appointments, and resolve queries — instantly.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience human-like conversations powered by advanced natural language processing and voice
              synthesis technology.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <span className="text-2xl">▶️</span>
              Play Demo
            </button>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 border border-gray-200 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-6">🎧</div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-blue-500 rounded-full animate-pulse"
                    style={{
                      height: `${Math.random() * 60 + 20}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
              <p className="text-gray-700 font-medium">AI Voice Waveform Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Workflow */}
      <section className="px-6 md:px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Build Your AI Agent</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl text-white mb-4 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{step.title}</h3>
              {idx < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-blue-300 to-purple-300"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Use Cases</h2>
          <p className="text-lg text-gray-600">AI automation tailored to your industry needs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 md:px-12 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact Metrics</h2>
          <p className="text-lg text-gray-600">Real results from real implementations</p>
        </div>
        <div className="space-y-8 max-w-6xl mx-auto">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-48 flex items-center justify-center">
                <p className="text-gray-500">Image: {cs.title}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{cs.title}</h3>
                <ul className="space-y-3">
                  {cs.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-2xl">✅</span>
                      <span className="text-lg text-gray-700 font-medium">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Works With Your Tools</h2>
          <p className="text-lg text-gray-600">Seamless integration with your existing systems</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {integrations.map((integration, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-gray-100 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-300"
            >
              {integration}
            </div>
          ))}
        </div>
      </section>

      {/* CubeGTP Signature Block */}
      <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to try our voice agent live?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Experience real AI calls and see how our technology works in action
          </p>
          <Link
            href="https://cubegtp.com"
            target="_blank"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Experience CubeGTP →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business With AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build intelligent voice agents that work 24/7 for your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Talk to an Expert
            </Link>
            <Link
              href="http://cubegtp.com"
              target="_blank"
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Try CubeGTP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;
