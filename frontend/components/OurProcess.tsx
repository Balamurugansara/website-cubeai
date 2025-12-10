const steps = [
  {
    icon: "🧩",
    title: "Discovery & Strategy",
    desc: "We understand your goals, challenges, and workflows to create a clear AI-driven roadmap.",
  },
  {
    icon: "🎨",
    title: "Design & Prototyping",
    desc: "We build clean UI/UX flows and proof-of-concepts so you visualize the solution early.",
  },
  {
    icon: "💻",
    title: "Development & Deployment",
    desc: "Our team engineers scalable, secure, and efficient systems tailored to your needs.",
  },
  {
    icon: "🔄",
    title: "Support & Optimization",
    desc: "We provide ongoing improvements, monitoring, and training for long-term success.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-3xl mb-4 border border-blue-200">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-base text-center mb-2">{step.desc}</p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block w-24 h-1 bg-gradient-to-r from-blue-200 to-blue-400 my-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
