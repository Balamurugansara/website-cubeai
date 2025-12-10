"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Careers", href: "/careers" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const servicesLinks = [
    { label: "AI & Automation Solutions", href: "/services/ai-automation" },
    { label: "CRM & ERP Systems", href: "/services/crm-erp" },
    { label: "Custom Software Development", href: "/services/custom-software" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "Data & Business Intelligence", href: "/services/data-analytics" },
    { label: "Cybersecurity Solutions", href: "/services/cybersecurity" },
  ];

  const resourcesLinks = [
    { label: "Insights", href: "/resources/insights" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "FAQs", href: "/resources/faqs" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/cubeai", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/cubeai", color: "hover:text-pink-600" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/cubeai", color: "hover:text-blue-700" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/assets/logo.png"
                  alt="CubeAI logo"
                  width={180}
                  height={52}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building intelligent digital systems for business growth through AI, automation, and enterprise technology.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">

              {/* Email */}
              <div className="flex space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@cubeaisolutions.com"
                  className="text-sm text-gray-400 hover:text-primary-400 transition duration-200"
                >
                  contact@cubeaisolutions.com
                </a>
              </div>

              
              {/* Phone */}
              <div className="flex space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919486938781"
                  className="text-sm text-gray-400 hover:text-primary-400 transition duration-200"
                >
                  +91 9486938781
                </a>
              </div>

              {/* Address */}
              <div className="flex space-x-3">
                <MapPin size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>KSR Kalvi Nagar,</p>
                  <p>Tiruchengode,</p>
                  <p>Tamil Nadu 637215</p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 font-semibold mb-2">BUSINESS HOURS</p>
                <p className="text-sm text-gray-400">Mon - Sat: 9 AM - 6 PM</p>
                <p className="text-sm text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 my-12"
        />

        {/* Footer Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Trust Line */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              Secure systems • Scalable architecture • Long-term technology partnership
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition duration-200 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-primary-400 transition duration-200 text-xs md:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-xs md:text-sm">
              © {currentYear} CubeAI Solutions Pvt. Ltd. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
