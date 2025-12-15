import Link from 'next/link';

export default function CloudDevOpsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cloud & DevOps Services</h1>
          <p className="text-lg text-gray-700 mb-8">We help teams migrate, modernize, and operate applications in the cloud with resilient infrastructure and repeatable delivery.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Assess My Cloud</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-lg">Get a Cloud Plan</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Cloud Migration</h3>
            <p className="text-gray-600">Lift-and-refactor or replatform — we choose the approach that balances risk, cost, and speed for your application portfolio.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Platform Engineering</h3>
            <p className="text-gray-600">Developer-friendly platforms with secure CI/CD, infrastructure as code, and self-service tooling to increase release velocity.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Cost & Reliability</h3>
            <p className="text-gray-600">Optimize spend, introduce autoscaling, and design for resilience so your services stay available without waste.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">What we deliver</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Automated pipelines and safe deployment patterns</li>
            <li>Infrastructure as code & policy guardrails</li>
            <li>Observability and incident response runbooks</li>
            <li>Scalable platform for engineering teams</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Case Study — ScaleCloud</h3>
          <p className="text-gray-700">We migrated a SaaS product to a container-based platform with automated canary releases, reducing downtime during releases to near zero.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">Start a Cloud Assessment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
