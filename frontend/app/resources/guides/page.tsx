import React from 'react';

const guides = [
  {
    title: 'Getting Started with CubeAI Solutions',
    summary: 'A step-by-step guide to onboarding, deploying, and scaling your AI projects with CubeAI.',
    link: '/resources/guides/getting-started',
  },
  {
    title: 'Best Practices for AI Integration',
    summary: 'Learn how to integrate AI into your existing workflows for maximum impact and efficiency.',
    link: '/resources/guides/ai-integration',
  },
  {
    title: 'Cloud & DevOps for AI Teams',
    summary: 'Explore our recommended cloud and DevOps strategies for building robust, scalable AI applications.',
    link: '/resources/guides/cloud-devops',
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">CubeAI Guides</h1>
      <ul className="space-y-8">
        {guides.map((guide, idx) => (
          <li key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{guide.title}</h2>
            <p className="text-gray-700 mb-2">{guide.summary}</p>
            <a href={guide.link} className="text-blue-600 hover:underline text-sm">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
