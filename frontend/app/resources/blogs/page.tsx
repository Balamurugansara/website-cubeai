"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { articles } from "../data/articles";

export default function BlogsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category))).filter(c => c !== 'Case Studies');
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      // exclude case studies from the Blogs listing (they have a separate page)
      if (a.category === 'Case Studies') return false;
      if (category !== "All" && a.category !== category) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.join(" ").toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  return (
    <main className="max-w-7xl mx-auto py-16 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">CubeAI Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Insights and technical deep-dives on AI, automation and enterprise engineering.</p>
      </header>

      <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="md:col-span-2 flex gap-3 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === c ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, tags or summaries..."
            className="w-full md:w-80 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((a) => (
            <article key={a.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <div className="relative h-44 bg-gray-100 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.imageAlt || a.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {a.featured && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">Featured</div>
                )}
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

                  <Link href={`/resources/blogs/${a.slug}`} className="text-blue-600 font-semibold text-sm">
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-gray-600">No articles found for your search.</div>
        )}
      </section>
    </main>
  );
}
