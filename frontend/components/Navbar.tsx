"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Bot,
  Code2,
  Workflow,
  CloudCog,
  BarChart4,
  Smartphone,
  ShieldCheck,
  PenLine,
  Briefcase,
  HelpCircle,
  FileText,
  BadgeCheck,
  HeartHandshake,
  GraduationCap,
  Send,
  Building2,
  Target,
  Users,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const servicesMenu = [
    "AI Automation & Voice Agents",
    "Custom Software Development",
    "CRM & ERP Solutions",
    "Cloud & DevOps Services",
    "Data Analytics & Business Intelligence",
    "Web & Mobile App Development",
    "Cybersecurity Solutions",
  ];

  const resourcesMenu = ["Blogs", "Case Studies", "FAQs", "Guides"];

  const careersMenu = ["Open Positions", "Life at CubeAI", "Internships", "Apply Now"];

  const aboutMenu = [
    "Company Overview",
    "Our Vision & Mission",
    "Our Core Values",
    "Leadership Team",
    "Why Choose Us",
    "Our Process"
  ];

  const iconRegistry: Record<string, LucideIcon> = {
    "AI Automation & Voice Agents": Bot,
    "Custom Software Development": Code2,
    "CRM & ERP Solutions": Workflow,
    "Cloud & DevOps Services": CloudCog,
    "Data Analytics & Business Intelligence": BarChart4,
    "Web & Mobile App Development": Smartphone,
    "Cybersecurity Solutions": ShieldCheck,
    "Blogs / Insights": PenLine,
    "Case Studies": Briefcase,
    FAQs: HelpCircle,
    "Whitepapers / Guides": FileText,
    "Open Positions": BadgeCheck,
    "Life at CubeAI": HeartHandshake,
    Internships: GraduationCap,
    "Apply Now": Send,
    "Company Overview": Building2,
    "Our Vision & Mission": Target,
    "Leadership Team": Users,
    "Why Choose Us": Star,
    "Our Process": Workflow,
  };

  const renderItemWithIcon = (label: string) => {
    const normalized = label.trim();
    const Icon = iconRegistry[normalized] || FileText;
    return (
      <>
        {Icon && <Icon size={16} className="text-blue-600 shrink-0" aria-hidden />}
        <span>{label}</span>
      </>
    );
  };

  const getMenuItemPath = (item: string, section: string) => {
    const slug = item.toLowerCase()
      .replace(/\s*&\s*/g, "-") // Replace & and surrounding spaces with single hyphen
      .replace(/\s+/g, "-")      // Replace remaining spaces with hyphens
      .replace(/-+/g, "-");      // Replace multiple hyphens with single hyphen
    return `/${section}/${slug}`;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="CubeAI logo"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center - Navigation Links (Desktop/Laptop Only - lg: breakpoint) */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              href="/"
              className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${servicesDropdown ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {servicesMenu.map((item) => (
                      <Link
                        key={item}
                        href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                      >
                        {renderItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdown(true)}
              onMouseLeave={() => setResourcesDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${resourcesDropdown ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {resourcesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item}
                        href={`/resources/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                      >
                        {renderItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCareersDropdown(true)}
              onMouseLeave={() => setCareersDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>Careers</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${careersDropdown ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {careersDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {careersMenu.map((item) => (
                      <Link
                        key={item}
                        href={`/careers/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                      >
                        {renderItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>About</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${aboutDropdown ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {aboutDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {aboutMenu.map((item) => (
                      <Link
                        key={item}
                        href={getMenuItemPath(item, "about")}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150"
                      >
                        {renderItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4 ml-auto lg:ml-0">
            {/* CTA Button - Hide on mobile, show on tablet and up */}
            <Link
              href="/contact"
              className="hidden sm:block px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              <span className="hidden md:inline">Get Support</span>
              <span className="md:hidden">Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Home Link */}
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                >
                  Home
                </Link>

                {/* Services Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {servicesMenu.map((item) => (
                          <Link
                            key={item}
                            href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                          >
                            {renderItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                  >
                    <span>Resources</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {resourcesMenu.map((item) => (
                          <Link
                            key={item}
                            href={`/resources/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                          >
                            {renderItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Careers Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                  >
                    <span>Careers</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileCareersOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileCareersOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {careersMenu.map((item) => (
                          <Link
                            key={item}
                            href={`/careers/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                          >
                            {renderItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                  >
                    <span>About</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {aboutMenu.map((item) => (
                          <Link
                            key={item}
                            href={getMenuItemPath(item, "about")}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition duration-150"
                          >
                            {renderItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile CTA Button */}
                <div className="sm:hidden pt-2 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition duration-200 text-center"
                  >
                    Get Support
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to account for fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
