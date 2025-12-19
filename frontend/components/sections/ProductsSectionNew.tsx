"use client";

import { products } from '@/data/products';

export default function ProductsSectionNew() {
  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-blue-600">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AI-Powered Enterprise Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our suite of AI-powered solutions designed to streamline operations, enhance customer relationships,
              and accelerate digital transformation with cutting-edge intelligence and automation.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Explore our business transformation tools – from CRM and ERP enrichment to orchestrated workflows and
              customer data management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: any) => (
              <article
                key={product.slug}
                className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col gap-4 shadow-xl hover:shadow-2xl transition-shadow group"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.subtitle}</p>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {product.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
