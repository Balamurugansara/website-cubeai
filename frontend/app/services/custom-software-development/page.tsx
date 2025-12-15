import Link from 'next/link';

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Custom Software Development</h1>
          <p className="text-lg text-gray-700 mb-8">We design and build tailor-made software that aligns with your business processes, scales with growth, and delivers measurable ROI.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Get Started</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-lg">Request a Proposal</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Discovery & Strategy</h3>
            <p className="text-gray-600">We map your workflows, stakeholders, and success metrics to design a targeted product strategy that minimizes risk and speeds time-to-value.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Architecture & Engineering</h3>
            <p className="text-gray-600">Scalable, maintainable architectures using modern stacks (cloud-native, microservices, event-driven patterns) tailored to your needs.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Delivery & Support</h3>
            <p className="text-gray-600">Agile delivery with CI/CD, automated testing, and post-launch support so your product keeps improving after launch.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Who benefits</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Enterprises modernizing legacy systems</li>
            <li>Startups needing an MVP & roadmap</li>
            <li>Operations teams automating manual work</li>
            <li>Product teams scaling to new markets</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Case Study — OrderFlow</h3>
          <p className="text-gray-700">We rebuilt a custom order management platform for a distribution company, reducing lead time by 60% and cutting manual errors by 85%.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">Talk to an Expert</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
