import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to talk about your project?</h3>
          <p className="text-blue-100/90">Schedule a call or email our team to get started with a free consultation.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:shadow-lg transition"
          >
            Schedule a call
          </Link>

          <a
            href="mailto:contact@cubeaisolutions.com"
            className="inline-block px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
