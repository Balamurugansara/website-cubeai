import Link from 'next/link';

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cybersecurity Solutions</h1>
          <p className="text-lg text-gray-700 mb-8">Protect your systems and data with practical security engineering, threat detection, and compliance services.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Request Security Review</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-lg">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Security Assessments</h3>
            <p className="text-gray-600">Penetration testing, threat modeling, and architecture reviews that reveal real risk and fixable recommendations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Secure Engineering</h3>
            <p className="text-gray-600">Secure defaults, secrets management, and secure CI/CD practices that reduce exposure while keeping teams productive.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Monitoring & Response</h3>
            <p className="text-gray-600">Detection rules, alerting, and playbooks so incidents are caught early and handled consistently.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Security outcomes</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Reduced attack surface and exposure</li>
            <li>Faster detection and containment</li>
            <li>Improved compliance posture</li>
            <li>Security baked into delivery pipelines</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Case Study — SecureBank</h3>
          <p className="text-gray-700">We helped a fintech provider meet regulatory requirements and implemented continuous monitoring, reducing mean time to detect from hours to minutes.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">Book a Security Review</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
