"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Hide navbar, footer, and navbar spacer
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const navSpacer = navbar?.nextElementSibling as HTMLElement;
    
    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";
    if (navSpacer && navSpacer.className.includes("h-16")) {
      navSpacer.style.display = "none";
    }

    return () => {
      // Restore on unmount
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
      if (navSpacer) navSpacer.style.display = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        {/* 404 Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full max-w-md mx-auto aspect-square"
        >
          <Image
            src="/assets/404.png"
            alt="404 Page Not Found"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
          >
            <Home size={20} />
            <span>Go to Homepage</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-gray-500"
        >
          Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium underline">Contact our support team</Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
