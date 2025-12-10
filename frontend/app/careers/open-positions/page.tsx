"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, X, Briefcase, GraduationCap, CheckCircle2, AlertCircle } from "lucide-react";

interface JobDetails {
  experience?: string;
  arrears?: string;
  eligibility?: string;
}

interface Job {
  id: number;
  role: string;
  location: string;
  description: string;
  lastDate: string;
  details: JobDetails;
}

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      role: "Full Stack Developer",
      location: "Bangalore",
      description:
        "We're looking for a Full Stack Developer who loves solving complex problems and building scalable products. You'll work with modern frameworks, create smooth APIs, and contribute to our AI-driven platforms. If you enjoy ownership, clean code, and fast-paced development, this role is for you.",
      lastDate: "31 December 2025",
      details: {
        experience: "2-4 years of experience in full stack development with proficiency in React, Node.js, and modern JavaScript frameworks. Experience with TypeScript, Next.js, and cloud platforms is a plus.",
        arrears: "No active arrears. Candidates should have a clear academic record.",
        eligibility: "Bachelor's degree in Computer Science, Engineering, or related field. Strong problem-solving skills and ability to work in a fast-paced environment. Portfolio or GitHub showcasing relevant projects is highly preferred.",
      },
    },
    {
      id: 2,
      role: "DevOps Engineer",
      location: "Tiruchengode",
      description:
        "Join our DevOps team to enhance CI/CD pipelines, manage cloud deployments, monitor infrastructure, and automate system operations. You'll work closely with developers to ensure smooth releases and maintain high reliability across our AI services.",
      lastDate: "28 December 2025",
      details: {
        experience: "1-3 years of hands-on experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions), containerization (Docker, Kubernetes), and cloud platforms (AWS, Azure, GCP).",
        arrears: "No standing arrears in academic records.",
        eligibility: "Bachelor's degree in Computer Science, IT, or related field. Strong understanding of infrastructure automation, scripting (Bash, Python), and monitoring tools (Prometheus, Grafana). Certifications in AWS or Azure are a bonus.",
      },
    },
    {
      id: 3,
      role: "AI/ML Engineer",
      location: "Bangalore",
      description:
        "We're seeking an AI/ML Engineer passionate about model development, optimization, and real-world deployment. You'll work with NLP, automation models, vector databases, and experiment with cutting-edge AI technologies to improve our intelligent automation products.",
      lastDate: "5 January 2026",
      details: {
        experience: "2-5 years of experience in AI/ML with expertise in Python, TensorFlow, PyTorch, or similar frameworks. Experience with NLP, LLMs, and vector databases (Pinecone, Weaviate) is highly valued.",
        arrears: "Clear academic standing with no pending arrears.",
        eligibility: "Master's or Bachelor's degree in Computer Science, AI/ML, Data Science, or related field. Strong mathematical foundation, experience with model deployment, and familiarity with MLOps practices. Research publications or contributions to open-source AI projects are a plus.",
      },
    },
    {
      id: 4,
      role: "Data Analyst",
      location: "Tiruchengode",
      description:
        "As a Data Analyst at CubeAI, you'll transform raw data into insights that guide product decisions and business strategy. You'll work on dashboards, trend analysis, and performance metrics to help teams make smarter decisions powered by data.",
      lastDate: "30 December 2025",
      details: {
        experience: "1-3 years of experience in data analysis, business intelligence, or related roles. Proficiency in SQL, Excel, and data visualization tools (Tableau, Power BI, Looker).",
        arrears: "No active arrears.",
        eligibility: "Bachelor's degree in Statistics, Mathematics, Economics, Computer Science, or related field. Strong analytical skills, attention to detail, and ability to communicate insights effectively. Experience with Python or R for data manipulation is a plus.",
      },
    },
    {
      id: 5,
      role: "Marketing Executive",
      location: "Bangalore",
      description:
        "We're looking for a creative Marketing Executive who can craft campaigns, manage social media, understand customer needs, and strengthen CubeAI's brand presence. You'll work closely with product and design teams to bring our AI solutions to the right audience.",
      lastDate: "10 January 2026",
      details: {
        experience: "1-3 years of experience in digital marketing, social media management, or brand strategy. Experience in B2B marketing or tech industry is a strong advantage.",
        arrears: "No standing arrears.",
        eligibility: "Bachelor's degree in Marketing, Communications, Business, or related field. Strong writing and communication skills, creativity, and familiarity with marketing tools (Google Analytics, HubSpot, Mailchimp). Portfolio showcasing campaigns or content is preferred.",
      },
    },
    {
      id: 6,
      role: "Graphic Designer",
      location: "Tiruchengode",
      description:
        "If you're passionate about creating powerful visuals, this role is for you. You'll design graphics for product pages, social media, presentations, and branding assets that represent CubeAI's identity. Creativity, speed, and attention to detail are essential.",
      lastDate: "7 January 2026",
      details: {
        experience: "1-3 years of graphic design experience with a strong portfolio showcasing branding, digital assets, and creative projects. Proficiency in Adobe Creative Suite (Photoshop, Illustrator, Figma).",
        arrears: "Clear academic record with no arrears.",
        eligibility: "Bachelor's degree in Graphic Design, Visual Arts, or related field. Strong design sense, creativity, and ability to work under tight deadlines. Experience with motion graphics or UI/UX design is a bonus.",
      },
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200 font-semibold mb-4">
              Join Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Open Positions
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore exciting career opportunities at CubeAI. Join us in building intelligent solutions that drive real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-16 sm:py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <Briefcase size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {job.role}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                        <span>{job.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-blue-500 flex-shrink-0" />
                        <span>Apply by: {job.lastDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button className="w-full py-2 px-4 bg-blue-50 text-blue-600 font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
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
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">{selectedJob.role}</h2>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Apply by: {selectedJob.lastDate}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Job Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Experience */}
                {selectedJob.details.experience && (
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Briefcase size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Experience Required</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{selectedJob.details.experience}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Eligibility */}
                {selectedJob.details.eligibility && (
                  <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <div className="flex items-start gap-3">
                      <GraduationCap size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Eligibility Criteria</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{selectedJob.details.eligibility}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Arrears */}
                {selectedJob.details.arrears && (
                  <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Academic Standing</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{selectedJob.details.arrears}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                  <a
                    href="/careers/apply-now"
                    className="flex-1 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 text-center shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </a>
                  <button
                    onClick={() => setSelectedJob(null)}
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
