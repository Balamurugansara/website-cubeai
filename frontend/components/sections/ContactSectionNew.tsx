"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSectionNew() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Intelligent Solutions Together
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with CubeAI Solutions to accelerate innovation and achieve smarter business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="mailto:contact@cubeaisolutions.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-gray-900 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-yellow-300 shadow-lg"
            >
              <Mail className="mr-2" size={20} />
              Contact Us
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 bg-cyan-400 text-gray-900 rounded-full text-lg font-medium shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-cyan-300"
            >
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-yellow-400" />
              </div>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <a href="mailto:cubeaisolutions@gmail.com" className="text-white/70 hover:text-yellow-400 transition-colors">
                cubeaisolutions@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-yellow-400" />
              </div>
              <h4 className="text-white font-semibold mb-1">Phone</h4>
              <a href="tel:+919486938781" className="text-white/70 hover:text-yellow-400 transition-colors">
                +91 94869 38781
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-yellow-400" />
              </div>
              <h4 className="text-white font-semibold mb-1">Location</h4>
              <span className="text-white/70 text-center">
                CubeAISolutions Tech Pvt Ltd
                <br />
                Shri Anathanager, Bangalore - 560100
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
