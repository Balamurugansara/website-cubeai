import React from 'react';

const caseStudies = [
  {
    title: 'AI-Powered CRM for Retail Growth',
    summary: 'How CubeAI helped a retail chain increase sales by 30% with a custom AI-driven CRM solution.',
    client: 'RetailMart',
    year: 2025,
  },
  {
    title: 'Cloud Migration for Financial Services',
    summary: 'CubeAI migrated legacy systems to the cloud, improving security and scalability for a finance client.',
    client: 'FinTrust Bank',
    year: 2025,
  },
  {
    title: 'Voice Agent Automation in Healthcare',
    summary: 'Our AI voice agents reduced patient wait times and improved service quality for a hospital network.',
    client: 'HealthFirst Hospitals',
    year: 2024,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">CubeAI Case Studies</h1>
      <ul className="space-y-8">
        {caseStudies.map((cs, idx) => (
          <li key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{cs.title}</h2>
            <p className="text-gray-700 mb-2">{cs.summary}</p>
            <div className="text-sm text-gray-500">Client: {cs.client} &mdash; Year: {cs.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
