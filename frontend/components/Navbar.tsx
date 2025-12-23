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
  Mic,
  Globe,
  Database,
  Layers,
  Cpu, // For IoT/Cubebotics
  Eye, // For VisionAI
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Types for Menu Items
interface MenuItem {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Dropdown States
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // --- Data Definitions ---

  const servicesData: MenuItem[] = [
    {
      title: "AIMA",
      description: "Artificial Intelligence, Machine Learning & Agent",
      icon: Bot,
      path: "/services/aima",
    },
    {
      title: "AIDA",
      description: "Artificial Intelligence & Data Analysis",
      icon: BarChart4,
      path: "/services/aida",
    },
    {
      title: "VisionAI",
      description: "AI Solutions",
      icon: Eye,
      path: "/services/vision-ai",
    },
    {
      title: "CyTI",
      description: "Cyber Tech Innovation",
      icon: ShieldCheck,
      path: "/services/cyti",
    },
    {
      title: "Cubebotics",
      description: "Embedded Systems & IoT",
      icon: Cpu,
      path: "/services/cubebotics",
    },
    {
      title: "DCE",
      description: "Data & Cloud Engineering",
      icon: Database,
      path: "/services/dce",
    },
    {
      title: "Tech Solution",
      description: "Future Technology & Services",
      icon: Code2,
      path: "/services/tech-solution",
    },
  ];

  const productsData: MenuItem[] = [
    {
      title: "iSpeak AI Voice Agent",
      description: "Next-generation voice AI for support.",
      icon: Mic,
      path: "/products/ispeak-ai-voice-agent",
    },
    {
      title: "Andromeda CRM",
      description: "Powerful CRM for sales productivity.",
      icon: Users,
      path: "/products/andromeda-crm",
    },
    {
      title: "Orion ERP",
      description: "Complete optimize business processes.",
      icon: Layers,
      path: "/products/orion-erp",
    },
    {
      title: "Nebula CDM",
      description: "Customer Data Management platform.",
      icon: Database,
      path: "/products/nebula-cdm",
    },
    {
      title: "Cosmos Orchestration",
      description: "Orchestrate complex workflows.",
      icon: Globe,
      path: "/products/cosmos-orchestration",
    },
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
    "Blogs": PenLine,
    "Case Studies": Briefcase,
    "FAQs": HelpCircle,
    "Guides": FileText,
    "Open Positions": BadgeCheck,
    "Life at CubeAI": HeartHandshake,
    "Internships": GraduationCap,
    "Apply Now": Send,
    "Company Overview": Building2,
    "Our Vision & Mission": Target,
    "Our Core Values": Star,
    "Leadership Team": Users,
    "Why Choose Us": Star,
    "Our Process": Workflow,
  };

  const renderSimpleItemWithIcon = (label: string) => {
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
      .replace(/\s*&\s*/g, "-")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    return `/${section}/${slug}`;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
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
              <div className="flex items-center px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 cursor-pointer">
                <Link href="/services">Services</Link>
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${servicesDropdown ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {servicesData.map((item) => (
                      <Link
                        key={item.title}
                        href={item.path}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-150 group"
                      >
                        <div className="p-1.5 bg-blue-50 rounded-lg group-hover:bg-white transition">
                          <item.icon size={18} className="text-blue-600 shrink-0" />
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-xs text-gray-500 font-normal opacity-80">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <div className="flex items-center px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 cursor-pointer">
                <Link href="/products">Products</Link>
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-300 ${productsDropdown ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {productsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {productsData.map((item) => (
                      <Link
                        key={item.title}
                        href={item.path}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition duration-150"
                      >
                        <item.icon size={18} className="text-purple-600 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdown(true)}
              onMouseLeave={() => setResourcesDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${resourcesDropdown ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {resourcesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item}
                        href={`/resources/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {renderSimpleItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Careers */}
            <div
              className="relative"
              onMouseEnter={() => setCareersDropdown(true)}
              onMouseLeave={() => setCareersDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>Careers</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${careersDropdown ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {careersDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {careersMenu.map((item) => (
                      <Link
                        key={item}
                        href={`/careers/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {renderSimpleItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button className="px-3 py-2 text-sm text-gray-700 font-medium hover:text-blue-600 transition duration-200 flex items-center space-x-1">
                <span>About</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${aboutDropdown ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  >
                    {aboutMenu.map((item) => (
                      <Link
                        key={item}
                        href={getMenuItemPath(item, "about")}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {renderSimpleItemWithIcon(item)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4 ml-auto lg:ml-0">
            <Link
              href="/talk-to-expert"
              className="hidden sm:block px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              <span className="hidden md:inline">Talk to Expert</span>
              <span className="md:hidden">Expert</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-2">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                >
                  Home
                </Link>

                {/* Mobile Services */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  >
                    <span>Services</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 overflow-hidden"
                      >
                        <Link
                          href="/services"
                          onClick={closeMobileMenu}
                          className="block px-8 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg mb-1"
                        >
                          View All Services
                        </Link>
                        {servicesData.map((item) => (
                          <Link
                            key={item.title}
                            href={item.path}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                          >
                            <item.icon size={16} className="text-blue-600 shrink-0" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Products */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  >
                    <span>Products</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 overflow-hidden"
                      >
                        <Link
                          href="/products"
                          onClick={closeMobileMenu}
                          className="block px-8 py-2 text-sm font-semibold text-purple-600 bg-purple-50 rounded-lg mb-1"
                        >
                          View All Products
                        </Link>
                        {productsData.map((item) => (
                          <Link
                            key={item.title}
                            href={item.path}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition"
                          >
                            <item.icon size={16} className="text-purple-600 shrink-0" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Resources */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  >
                    <span>Resources</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {resourcesMenu.map((item) => (
                          <Link
                            key={item}
                            href={`/resources/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                          >
                            {renderSimpleItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Careers */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  >
                    <span>Careers</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileCareersOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileCareersOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {careersMenu.map((item) => (
                          <Link
                            key={item}
                            href={`/careers/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                          >
                            {renderSimpleItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile About */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  >
                    <span>About</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {aboutMenu.map((item) => (
                          <Link
                            key={item}
                            href={getMenuItemPath(item, "about")}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 px-8 py-2 text-xs sm:text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                          >
                            {renderSimpleItemWithIcon(item)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="sm:hidden pt-2 border-t border-gray-100">
                  <Link
                    href="/talk-to-expert"
                    onClick={closeMobileMenu}
                    className="block w-full px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition duration-200 text-center"
                  >
                    Talk to Expert
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
