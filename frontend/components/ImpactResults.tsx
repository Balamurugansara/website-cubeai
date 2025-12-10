const caseStudies = [
  {
    icon: "🤖",
    title: "AI Automation for Support Teams",
    highlights: [
      "60% reduction in manual workload",
      "3× faster response time",
      "Automated ticket routing + voice agent",
    ],
    image: "/assets/case1.jpg",
  },
  {
    icon: "📈",
    title: "Custom CRM for Enterprise Client",
    highlights: [
      "Centralized customer data",
      "40% operational cost savings",
      "Automated reporting & workflows",
    ],
    image: "/assets/case2.jpg",
  },
  {
    icon: "🛒",
    title: "Predictive Analytics for Retail",
    highlights: [
      "22% increase in sales",
      "Real-time insights",
      "Better stock forecasting using ML",
    ],
    image: "/assets/case3.jpg",
  },
];

const clientLogos = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
  "/assets/logo5.png",
];

const testimonial = {
  quote:
    "CubeAI helped us automate 70% of our processes, saving massive time and cost. Their team is fast, reliable, and truly understands AI.",
  author: "CTO, Global Retail Brand",
};

export default function ImpactResults() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact & Results</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="bg-gray-50 rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">{cs.icon}</span>
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{cs.title}</h3>
            <ul className="text-gray-600 text-base mb-2 space-y-1">
              {cs.highlights.map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
        <span className="text-gray-500 text-sm mr-4">Trusted by forward-thinking businesses…</span>
        {clientLogos.map((logo, idx) => (
          <div key={idx} className="w-24 h-10 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
            <img src={logo} alt={`Client logo ${idx + 1}`} className="h-8 object-contain" />
          </div>
        ))}
      </div> */}
      <div className="max-w-2xl mx-auto bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl text-center">
        <p className="text-lg text-gray-700 italic mb-2">“{testimonial.quote}”</p>
        <div className="text-blue-700 font-semibold">{testimonial.author}</div>
      </div>
    </section>
  );
}
