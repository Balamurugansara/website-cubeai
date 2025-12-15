import Link from 'next/link';

export default function CrmErpPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CRM & ERP Solutions</h1>
          <p className="text-lg text-gray-700 mb-8">Modern CRM and ERP systems that connect sales, inventory, finance and support — removing data silos and speeding decisions.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">Book a Demo</Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-200 rounded-lg">Request Info</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">End-to-End Integration</h3>
            <p className="text-gray-600">We integrate CRM and ERP modules to create a single source of truth across teams, improving forecast accuracy and fulfillment.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Custom Workflows</h3>
            <p className="text-gray-600">Automate key processes — lead routing, billing, procurement — with workflows that match how your business actually operates.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-3">Reporting & Compliance</h3>
            <p className="text-gray-600">Accurate financial close, audit trails, and dashboards that keep stakeholders informed without manual spreadsheets.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Common Outcomes</h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Faster order-to-cash cycles</li>
            <li>Improved sales conversion & pipeline visibility</li>
            <li>Lower inventory carrying costs</li>
            <li>Reliable compliance reporting</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Case Study — RetailSync</h3>
          <p className="text-gray-700">We unified retail POS and backend ERP to enable same-day inventory visibility across 120 stores, increasing availability by 18%.</p>
          <div className="mt-6">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">Schedule a Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
