"use client";

import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const featuredBlogs = [
  {
    id: '1',
    slug: 'vision-ai',
    title: 'VisionAI: Enterprise AI Solutions for Business Productivity',
    excerpt: 'VisionAI is not just another AI framework—it is a cognitive infrastructure capable of ethical self-evolution, autonomous goal-setting, and real-time cross-domain adaptation.',
    image: '/assets/blogs/vis.avif',
    author: 'Sowntharya',
    date: 'Aug 11, 2025',
    category: 'AI Ethics',
    readTime: '8 min read'
  },
  {
    id: '2',
    slug: 'agentic-ai-2025',
    title: 'The Rise of Agentic AI in 2025',
    excerpt: 'Explore how agentic AI is transforming business operations with autonomous decision-making and intelligent automation.',
    image: '/assets/blogs/agent.jpg',
    author: 'Tech Team',
    date: 'Dec 15, 2025',
    category: 'Technology Trends',
    readTime: '6 min read'
  },
  {
    id: '3',
    slug: 'llm-applications',
    title: 'Large Language Models: Practical Applications',
    excerpt: 'Discover real-world applications of LLMs in enterprise environments and how they drive business productivity.',
    image: '/assets/blogs/llm.webp',
    author: 'AI Research',
    date: 'Dec 10, 2025',
    category: 'Business Strategy',
    readTime: '7 min read'
  }
];

export default function FeaturedBlogs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span>Latest Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            From Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Stay updated with the latest trends, insights, and innovations in AI and technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">{blog.readTime}</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/resources/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center px-4">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
