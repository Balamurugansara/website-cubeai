"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, X, Briefcase, GraduationCap, CheckCircle2, Target, Lightbulb, Users, Award, TrendingUp } from "lucide-react";

interface InternshipDetails {
  responsibilities?: string;
  learningOutcomes?: string;
  eligibility?: string;
}

interface Internship {
  id: number;
  role: string;
  location: string;
  description: string;
  eligibility: string;
  details: InternshipDetails;
}

export default function Internships() {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  const internships: Internship[] = [
    {
      id: 1,
      role: "Software Development Intern",
      location: "Bangalore",
      description:
        "Work on real features in AI-driven dashboards, UI components, and backend APIs. Learn Next.js, FastAPI, REST, automation flows, and version control.",
      eligibility: "Students / Freshers with strong curiosity & problem-solving skills",
      details: {
        responsibilities: "Build and maintain UI components for AI-driven dashboards, develop REST APIs using FastAPI, implement automation workflows, collaborate with senior developers on feature development, participate in code reviews and version control practices using Git.",
        learningOutcomes: "Hands-on experience with Next.js, React, and TypeScript for frontend development. Backend API development with Python and FastAPI. Understanding of CI/CD pipelines and cloud deployment. Experience with real-world software development workflows and Agile methodologies.",
        eligibility: "Currently pursuing B.Tech/B.E in Computer Science or related field. Basic knowledge of JavaScript, Python, or any programming language. Strong problem-solving skills and willingness to learn. No prior professional experience required — curiosity and dedication are what matter.",
      },
    },
    {
      id: 2,
      role: "AI/ML Intern",
      location: "Tiruchengode",
      description:
        "Assist in training models, optimizing pipelines, and building automation logic. Exposure to NLP, data processing, embeddings, and vector databases.",
      eligibility: "B.Tech / M.Tech / BCA / MCA students with AI/ML interest",
      details: {
        responsibilities: "Assist in training and fine-tuning machine learning models, work on NLP tasks including text processing and embeddings, optimize ML pipelines for better performance, experiment with vector databases and retrieval systems, contribute to automation logic using AI/ML techniques.",
        learningOutcomes: "Practical experience with TensorFlow, PyTorch, or scikit-learn. Understanding of NLP techniques and language models. Hands-on work with vector databases like Pinecone or Weaviate. Exposure to MLOps practices and model deployment. Real-world problem-solving with AI/ML.",
        eligibility: "Currently pursuing B.Tech, M.Tech, BCA, or MCA with focus on AI/ML or Data Science. Basic understanding of Python and machine learning concepts. Familiarity with data structures and algorithms. Passionate about AI and eager to work on cutting-edge projects.",
      },
    },
    {
      id: 3,
      role: "Data Analytics Intern",
      location: "Bangalore",
      description:
        "Work on dashboards, insights, visualizations, and performance metrics. Tools: Python, Excel, BI dashboards, SQL.",
      eligibility: "Any data-driven student passionate about analysis",
      details: {
        responsibilities: "Create interactive dashboards and visualizations for business insights, analyze data trends and generate reports for decision-making, work with SQL databases to extract and transform data, build performance metrics and KPI tracking systems, collaborate with product teams to understand data requirements.",
        learningOutcomes: "Proficiency in data visualization tools (Tableau, Power BI, or similar). Advanced SQL skills for data querying and analysis. Python for data manipulation using pandas and numpy. Understanding of business metrics and KPI development. Experience turning raw data into actionable insights.",
        eligibility: "Students from any background with strong analytical skills and data interest. Basic knowledge of Excel and SQL preferred. Familiarity with Python or any programming language is a plus. Curiosity about data patterns and business insights. Strong attention to detail and logical thinking.",
      },
    },
    {
      id: 4,
      role: "UI/UX & Graphic Design Intern",
      location: "Tiruchengode",
      description:
        "Design creatives, web layouts, product visuals, and brand assets. Work closely with marketing & engineering teams.",
      eligibility: "Students with design skills (Figma, Photoshop, etc.)",
      details: {
        responsibilities: "Design user interfaces for web and mobile applications, create graphics for social media, presentations, and marketing materials, develop brand assets and maintain design consistency, collaborate with developers to implement designs, create wireframes, prototypes, and user flows.",
        learningOutcomes: "Hands-on experience with Figma, Adobe Creative Suite (Photoshop, Illustrator). Understanding of UI/UX principles and user-centered design. Experience designing for AI and automation products. Collaboration skills working with engineering and marketing teams. Building a strong design portfolio with real projects.",
        eligibility: "Students pursuing design, visual arts, or related fields. Proficiency in Figma, Photoshop, Illustrator, or similar design tools. Strong visual design sense and attention to detail. Portfolio showcasing design work (college projects accepted). Passion for creating beautiful and functional designs.",
      },
    },
    {
      id: 5,
      role: "Digital Marketing Intern",
      location: "Bangalore",
      description:
        "Support campaigns, social media, SEO, and content creation. Learn end-to-end marketing strategies for tech products.",
      eligibility: "Any creative student passionate about digital marketing",
      details: {
        responsibilities: "Manage and create content for social media platforms, support SEO optimization and content marketing efforts, assist in planning and executing digital campaigns, analyze campaign performance and generate insights, collaborate on email marketing and lead generation activities.",
        learningOutcomes: "Understanding of digital marketing fundamentals (SEO, SEM, social media). Experience with marketing tools (Google Analytics, HubSpot, Mailchimp). Content creation and copywriting skills for tech audiences. Campaign planning and performance analysis. Building a marketing portfolio with measurable results.",
        eligibility: "Students from any background with creative thinking and marketing interest. Strong written and verbal communication skills. Familiarity with social media platforms and trends. Basic understanding of SEO and digital marketing concepts is a plus. Enthusiasm for learning and experimenting with new strategies.",
      },
    },
  ];

  const whyIntern = [
    {
      icon: Target,
      title: "Hands-On Learning From Day One",
      description: "Forget basic assignments — you'll work on real modules, dashboards, AI features, and client-facing tasks that sharpen your practical skills.",
    },
    {
      icon: Users,
      title: "Mentorship From Industry Experts",
      description: "Our team members guide you personally, helping you understand workflows, improve your code/design, and shape your career path.",
    },
    {
      icon: Lightbulb,
      title: "Exposure to Modern Technologies",
      description: "From AI/ML and automation tools to modern frontend frameworks and cloud systems, you'll get hands-on experience that strengthens your portfolio.",
    },
    {
      icon: Award,
      title: "Flexible, Friendly & Supportive Culture",
      description: "Interns are treated as team members — not trainees. You'll collaborate openly, share ideas, and work in a positive environment built around learning and growth.",
    },
    {
      icon: TrendingUp,
      title: "Opportunity for Full-Time Conversion",
      description: "Top-performing interns often receive pre-placement offers (PPOs) and transition into full-time roles at CubeAI.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200 font-semibold mb-4">
              🎓 Start Your Journey
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Internship Opportunities
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Kickstart Your Career With Real Projects, Real Learning & Real Impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At CubeAI Solutions, internships are not just training periods — they are <span className="font-bold text-blue-600">launchpads</span>. We believe in giving young talent the platform, mentorship, and opportunities they need to grow into confident professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you're passionate about coding, design, analytics, or marketing, CubeAI offers an environment where curiosity is valued and creativity is encouraged. Interns at CubeAI work on live projects, contribute to real product features, and collaborate closely with experienced engineers, designers, and strategists.
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-6">
              Here, your ideas matter, your skills grow, and your work creates impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Intern Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🌟 Why Intern at CubeAI?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyIntern.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🚀 Current Internship Openings
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {internships.map((internship) => (
              <motion.div
                key={internship.id}
                variants={itemVariants}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedInternship(internship)}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {internship.role}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {internship.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <button className="w-full py-2 px-4 bg-blue-50 text-blue-600 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            💼 How to Apply
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg mb-6">
              Send your resume, portfolio (if applicable), and a brief introduction to:
            </p>
            <a
              href="mailto:contact@cubeaisolutions.com"
              className="inline-block text-2xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors duration-200"
            >
              📧 contact@cubeaisolutions.com
            </a>
            <div className="mt-8 text-left space-y-3 max-w-xl mx-auto">
              <p className="text-blue-100">Let us know:</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Which role you're applying for</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Your skills & interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Your availability period</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-3">✨ Start Your Career With CubeAI</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              If you're eager to learn, motivated to grow, and excited to work with intelligent technologies — CubeAI is the right place to begin your journey.
            </p>
            <p className="text-xl font-semibold mt-4">
              Your future starts here. Let's build it together.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Internship Details Modal */}
      <AnimatePresence>
        {selectedInternship && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedInternship(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">{selectedInternship.role}</h2>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{selectedInternship.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedInternship.description}</p>
                </div>

                {/* Responsibilities */}
                {selectedInternship.details.responsibilities && (
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Briefcase size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{selectedInternship.details.responsibilities}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Learning Outcomes */}
                {selectedInternship.details.learningOutcomes && (
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Lightbulb size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">What You'll Learn</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{selectedInternship.details.learningOutcomes}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Eligibility */}
                {selectedInternship.details.eligibility && (
                  <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <div className="flex items-start gap-3">
                      <GraduationCap size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Eligibility Criteria</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{selectedInternship.details.eligibility}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                  <a
                    href="mailto:contact@cubeaisolutions.com"
                    className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 text-center shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </a>
                  <button
                    onClick={() => setSelectedInternship(null)}
                    className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
