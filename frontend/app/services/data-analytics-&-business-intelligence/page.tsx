import Link from 'next/link';

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Data Analytics & Business Intelligence</h1>
          <p className="text-lg text-gray-700 mb-8">Turn raw data into clear decisions with dashboards, predictive models, and data pipelines that scale with your business.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Discuss Data Needs</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-lg">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Data Engineering</h3>
            <p className="text-gray-600">Reliable ETL/ELT pipelines, data lakes, and warehousing so analytics are fast and trustworthy.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Analytics & BI</h3>
            <p className="text-gray-600">Custom dashboards and KPI tracking that bring clarity to stakeholders across product, sales, and operations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">ML & Predictive Models</h3>
            <p className="text-gray-600">Forecasting, churn prediction, and recommendation systems to unlock new product and revenue opportunities.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How we help teams</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Faster, accurate reporting for executives</li>
            <li>Self-serve analytics for product & marketing</li>
            <li>Predictive models to reduce churn</li>
            <li>Data governance and lineage</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Case Study — InsightPro</h3>
          <p className="text-gray-700">We built an analytics platform that reduced monthly reporting time from days to minutes and uncovered new upsell opportunities worth 12% ARR.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">Start a Data Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
