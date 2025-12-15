import Link from 'next/link';

export default function WebMobileAppPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Web & Mobile App Development</h1>
          <p className="text-lg text-gray-700 mb-8">Design-led product development for web and mobile — delightful UX, fast performance, and robust APIs.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Plan My App</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-lg">Request Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Product Design</h3>
            <p className="text-gray-600">User research, prototyping, and design systems to ensure your product is intuitive and consistent.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Cross-Platform Engineering</h3>
            <p className="text-gray-600">Native or hybrid approaches depending on performance needs and time-to-market considerations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">API & Integrations</h3>
            <p className="text-gray-600">Well-documented REST/GraphQL APIs and third-party integrations to power your mobile and web experiences.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Typical engagements</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>MVP launches for startups</li>
            <li>Feature-rich consumer apps</li>
            <li>Internal tools for operations teams</li>
            <li>Progressive web apps for web-first businesses</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Case Study — MobileReach</h3>
          <p className="text-gray-700">We developed a cross-platform retail app that increased daily active users by 3x and improved checkout conversion by 25%.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">Start a Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
