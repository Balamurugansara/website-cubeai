"use client";

const technologies = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'OpenCV',
  'NLP',
  'Scikit-Learn',
  'AWS',
  'Azure',
  'Google Cloud',
  'Big Data',
  'Spark',
  'Power BI',
  'Tableau',
  'Docker',
  'Kubernetes',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'FastAPI',
];

export default function TechnologiesSectionNew() {
  return (
    <section id="technologies" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600">
              Leveraging cutting-edge technologies to build powerful AI solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white border-2 border-blue-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              We continuously evaluate and adopt the latest technologies to ensure our clients 
              receive the most innovative and effective AI solutions available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
