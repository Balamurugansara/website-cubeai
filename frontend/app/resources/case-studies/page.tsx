"use client";

import React from 'react';
import Link from 'next/link';
import { articles, Article } from '../data/articles';

export default function CaseStudiesPage() {
  const caseArticles: Article[] = articles.filter((a) => a.category === 'Case Studies');

  return (
    <main className="max-w-7xl mx-auto py-16 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">CubeAI Case Studies</h1>
        <p className="text-gray-600">Real implementations and outcomes from our enterprise engagements.</p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseArticles.map((a) => (
            <article key={a.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video bg-gray-100 overflow-hidden relative">
                <img
                  src={encodeURI(a.image)}
                  alt={a.imageAlt || a.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // fallback to a simple gray SVG data URI if the image path is invalid
                    (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect width="100%25" height="100%25" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23737478" font-size="20" font-family="Arial,Helvetica,sans-serif"%3EImage%20Unavailable%3C/text%3E%3C/svg%3E';
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-5 flex flex-col justify-between h-56">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{new Date(a.schemaMarkup ? JSON.parse(a.schemaMarkup).datePublished || Date.now() : Date.now()).toLocaleDateString()}</span>
                    <span className="text-xs text-gray-500">{a.category}</span>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{a.title}</h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{a.excerpt}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={a.author.avatar} alt={a.author.name} loading="lazy" decoding="async" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{a.author.name}</div>
                      <div className="text-xs text-gray-500">{a.author.role}</div>
                    </div>
                  </div>

                  <Link href={`/resources/case-studies/${a.slug}`} className="text-blue-600 font-semibold text-sm">
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {caseArticles.length === 0 && <div className="mt-12 text-center text-gray-600">No case studies found.</div>}
      </section>
    </main>
  );
}
