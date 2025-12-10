import { ReactNode } from "react";

const features = [
  {
    icon: "🧠",
    title: "AI-First Expertise",
    desc: "We bring deep AI engineering experience to automate, optimize, and scale your business.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable Delivery",
    desc: "Agile execution, transparent timelines, and zero-noise collaboration.",
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc: "Your strategies are backed by analytics, not guesswork — ensuring measurable results.",
  },
  {
    icon: "🔐",
    title: "Enterprise-Grade Security",
    desc: "Every project follows strict data security and compliance standards.",
  },
  {
    icon: "🛠",
    title: "Custom-Built Solutions",
    desc: "No templates — every solution is engineered to fit your workflows and goals.",
  },
  {
    icon: "🤝",
    title: "Support Beyond Delivery",
    desc: "Long-term partnership with continuous optimization, not just 'project handover.'",
  },
];

export default function WhyChooseCubeAI() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CubeAI</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-4xl mb-4">{f.icon}</span>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
