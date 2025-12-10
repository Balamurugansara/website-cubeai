import React from 'react';

const faqs = [
  {
    question: 'What industries does CubeAI serve?',
    answer: 'We work with retail, finance, healthcare, manufacturing, and more, delivering tailored AI solutions for each sector.'
  },
  {
    question: 'How does CubeAI ensure data security?',
    answer: 'We use enterprise-grade encryption, secure cloud infrastructure, and strict compliance with data protection regulations.'
  },
  {
    question: 'Can CubeAI integrate with existing business systems?',
    answer: 'Yes, our team specializes in seamless integration with CRMs, ERPs, and other enterprise platforms.'
  },
  {
    question: 'What support does CubeAI offer after deployment?',
    answer: 'We provide ongoing support, maintenance, and optimization to ensure long-term success for our clients.'
  },
];

export default function FaqsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">CubeAI FAQs</h1>
      <ul className="space-y-8">
        {faqs.map((faq, idx) => (
          <li key={idx} className="bg-white rounded-lg shadow p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">Q: {faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
