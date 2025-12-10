import React from 'react';

const blogs = [
  {
    title: 'How CubeAI Revolutionizes Business Automation',
    summary: 'Discover how our AI-driven automation solutions help companies streamline operations and boost productivity.',
    date: '2025-11-20',
    author: 'CubeAI Team',
  },
  {
    title: 'The Future of Ethical AI at CubeAI',
    summary: 'Learn about our commitment to responsible AI development and how we ensure transparency and trust.',
    date: '2025-10-05',
    author: 'CubeAI Ethics Board',
  },
  {
    title: 'Integrating Cloud & DevOps for Scalable AI',
    summary: 'Explore our approach to cloud-native AI deployments and DevOps best practices for reliability.',
    date: '2025-09-15',
    author: 'CubeAI Cloud Team',
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">CubeAI Blogs</h1>
      <ul className="space-y-8">
        {blogs.map((blog, idx) => (
          <li key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-2">{blog.summary}</p>
            <div className="text-sm text-gray-500">{blog.date} &mdash; {blog.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
