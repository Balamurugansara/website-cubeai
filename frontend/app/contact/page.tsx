'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { submitEnquiry } from '@/lib/api';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const result = await submitEnquiry({
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      message: form.message,
    });

    if (result.success) {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', message: '', company: '' });
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let’s Build Something Smarter Together</h1>
            <p className="text-lg text-gray-700 mb-6">
              At CubeAI, we love hearing from teams who want to innovate, automate, and grow. Whether you need
              guidance, a consultation, or product support — we’re here to help you every step of the way.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact#form"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition"
              >
                Speak With Us
              </a>

              <a
                href="mailto:contact@cubeaisolutions.com"
                className="inline-block px-6 py-3 border border-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Send a Message
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
              <Image src="/assets/contact-illustration.png" alt="Contact illustration" width={280} height={280} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us Directly</h3>
            <div className="text-gray-700">+91 9486938781</div>
            <div className="text-sm text-gray-500 mt-2">Available Mon–Sat — 10 AM to 7 PM</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <div className="text-gray-700">contact@cubeaisolutions.com</div>
            <div className="text-sm text-gray-500 mt-2">We reply within 24 hours — usually much sooner.</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <div className="text-gray-700">KSR Kalvi Nagar, Tiruchengode, Tamil Nadu 637215</div>
          </div>

        </div>
      </section>

      {/* Why Reach Out */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-white to-blue-50/40 rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-semibold mb-3">We’re more than support — we’re your innovation partner.</h3>
          <p className="text-gray-700">Whether you're exploring automation, evaluating AI solutions, or need help upgrading your workflow, our team is ready to guide you with clarity and confidence. One conversation can change the way you work.</p>
        </div>
      </section>

      {/* Contact Form + Illustration */}
      <section id="form" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h4 className="text-xl font-semibold mb-4">Quick Contact</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone *"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message *"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'sent' && (
                  <div className="text-green-600 font-medium bg-green-50 px-4 py-2 rounded-lg">
                    ✓ Message sent successfully! We'll respond within 1 business day.
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-red-600 font-medium bg-red-50 px-4 py-2 rounded-lg">
                    ✕ {errorMessage}
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-500 mt-2">We respond within 1 business day. Your information is safe with us.</p>
            </form>
          </div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-2xl p-10 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Find Us at KSR</h3>
            <div className="rounded-xl overflow-hidden border border-gray-200">
             <iframe title="CubeAISolutions Tech Pvt Ltd Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.667766644267!2d77.82425297505046!3d11.358959588827455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba967f537594377%3A0x1b9478bc228b5b56!2sCubeAISolutions%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752467952866!5m2!1sen!2sin"
             width="100%"
             height="300"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
          {/* <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-sm">
              <Image src="/assets/contact-form-illustration.png" alt="Person talking with AI bubbles" width={420} height={360} className="object-contain" />
            </div>
          </div> */}
        </div>
      </section>

    
    </main>
  );
}
