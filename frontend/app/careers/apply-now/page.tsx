"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, AlertCircle, FileUp, Briefcase, GraduationCap, Mail, Phone, User, FileText } from "lucide-react";
import { submitCareerApplication } from "@/lib/api";

type ApplicationType = "job" | "internship" | null;

interface FormData {
  applicationType: ApplicationType;
  selectedRole: string;
  fullName: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  resumeFile: File | null;
  portfolioFile: File | null;
  coverLetter: string;
  termsAccepted: boolean;
}

export default function ApplyNow() {
  const [formData, setFormData] = useState<FormData>({
    applicationType: null,
    selectedRole: "",
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    resumeFile: null,
    portfolioFile: null,
    coverLetter: "",
    termsAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const jobRoles = [
    "Full Stack Developer",
    "DevOps Engineer",
    "AI/ML Engineer",
    "Data Analyst",
    "Marketing Executive",
    "Graphic Designer",
  ];

  const internshipRoles = [
    "Software Development Intern",
    "AI/ML Intern",
    "Data Analytics Intern",
    "UI/UX & Graphic Design Intern",
    "Digital Marketing Intern",
  ];

  const portfolioRequiredRoles = ["Graphic Designer", "UI/UX & Graphic Design Intern"];

  const currentRoles = formData.applicationType === "job" ? jobRoles : internshipRoles;
  const isPortfolioRequired = portfolioRequiredRoles.includes(formData.selectedRole);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "resumeFile" | "portfolioFile"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [fileType]: file,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const validateForm = () => {
    if (!formData.applicationType) {
      setError("Please select application type");
      return false;
    }
    if (!formData.selectedRole) {
      setError("Please select a role");
      return false;
    }
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Valid email is required");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!formData.education.trim()) {
      setError("Education details are required");
      return false;
    }
    if (!formData.resumeFile) {
      setError("Resume/CV is required");
      return false;
    }
    if (isPortfolioRequired && !formData.portfolioFile) {
      setError("Portfolio is required for this role");
      return false;
    }
    if (!formData.termsAccepted) {
      setError("Please accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    // Submit to backend
    const result = await submitCareerApplication({
      name: formData.fullName,
      email: formData.email,
      position: formData.selectedRole,
      coverLetter: `Application Type: ${formData.applicationType}\n\nEducation: ${formData.education}\n\nExperience: ${formData.experience}\n\nCover Letter:\n${formData.coverLetter}`,
      resume: formData.resumeFile!,
    });

    if (result.success) {
      setSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          applicationType: null,
          selectedRole: "",
          fullName: "",
          email: "",
          phone: "",
          education: "",
          experience: "",
          resumeFile: null,
          portfolioFile: null,
          coverLetter: "",
          termsAccepted: false,
        });
        setSubmitted(false);
      }, 5000);
    } else {
      setError(result.error || 'Failed to submit application. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
              Join Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Apply Now
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Share your details and take the first step towards your career journey with CubeAI
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-green-200 shadow-lg p-8 sm:p-12 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Application Submitted Successfully!
              </h2>
              <p className="text-lg text-gray-600">
                Thank you, <span className="font-semibold">{formData.fullName}</span>! We've received your application and will review it shortly.
              </p>
              <p className="text-gray-600">
                We'll contact you at <span className="font-semibold">{formData.email}</span> with next steps.
              </p>
              <div className="pt-6">
                <p className="text-sm text-gray-500">Redirecting...</p>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-12 space-y-8"
            >
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
                >
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{error}</p>
                </motion.div>
              )}

              {/* Application Type Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Application Type</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="applicationType"
                      value="job"
                      checked={formData.applicationType === "job"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          applicationType: "job" as ApplicationType,
                          selectedRole: "",
                        }))
                      }
                      className="sr-only"
                    />
                    <div
                      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                        formData.applicationType === "job"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <Briefcase
                        size={24}
                        className={
                          formData.applicationType === "job"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Full-Time Job</p>
                        <p className="text-sm text-gray-600">Career opportunities</p>
                      </div>
                    </div>
                  </label>

                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="applicationType"
                      value="internship"
                      checked={formData.applicationType === "internship"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          applicationType: "internship" as ApplicationType,
                          selectedRole: "",
                        }))
                      }
                      className="sr-only"
                    />
                    <div
                      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                        formData.applicationType === "internship"
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <GraduationCap
                        size={24}
                        className={
                          formData.applicationType === "internship"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Internship</p>
                        <p className="text-sm text-gray-600">Learning opportunity</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Role Selection */}
              {formData.applicationType && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    Select Role *
                  </label>
                  <select
                    name="selectedRole"
                    value={formData.selectedRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  >
                    <option value="">Choose a role...</option>
                    {currentRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                      />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9486938781"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Education Details *
                    </label>
                    <textarea
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      placeholder="e.g., B.Tech in Computer Science, XYZ University, Graduation: 2025"
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Experience Details {formData.applicationType === "job" && "*"}
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder={
                        formData.applicationType === "job"
                          ? "Describe your relevant work experience..."
                          : "Describe your projects, skills, or relevant experience (optional)"
                      }
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Documents</h3>
                <div className="space-y-6">
                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Resume / CV *
                    </label>
                    <label className="relative block border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload(e, "resumeFile")}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <FileText size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                        </div>
                        {formData.resumeFile ? (
                          <>
                            <p className="font-semibold text-gray-900">
                              ✓ {formData.resumeFile.name}
                            </p>
                            <p className="text-xs text-gray-500">Click to change file</p>
                          </>
                        ) : (
                          <>
                            <p className="font-semibold text-gray-800">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                          </>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Portfolio Upload (conditional) */}
                  {isPortfolioRequired && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Portfolio / Design Work * <span className="text-xs text-blue-600 font-normal">(Required for this role)</span>
                      </label>
                      <label className="relative block border-2 border-dashed border-blue-400 rounded-xl p-8 text-center cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group bg-blue-50/20">
                        <input
                          type="file"
                          accept=".pdf,.zip,.pptx,image/*"
                          onChange={(e) => handleFileUpload(e, "portfolioFile")}
                          className="hidden"
                        />
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                            <Upload size={32} className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                          </div>
                          {formData.portfolioFile ? (
                            <>
                              <p className="font-semibold text-gray-900">
                                ✓ {formData.portfolioFile.name}
                              </p>
                              <p className="text-xs text-gray-500">Click to change file</p>
                            </>
                          ) : (
                            <>
                              <p className="font-semibold text-gray-800">
                                Upload your portfolio
                              </p>
                              <p className="text-sm text-gray-500">
                                PDF, ZIP, PPTX or images (Max 10MB)
                              </p>
                            </>
                          )}
                        </div>
                      </label>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Cover Letter / Message
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in CubeAI and what you can bring to the team..."
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="bg-gray-50 rounded-lg p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the terms and conditions and confirm that the information provided is accurate. I also agree to be contacted by CubeAI regarding my application. *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </motion.button>

              <p className="text-center text-sm text-gray-600">
                Have questions? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Contact us</a>
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}
