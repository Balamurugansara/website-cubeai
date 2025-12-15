"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Arjun Rao",
    role: "CEO & Co‑Founder",
    img: "/assets/team/arjun.png",
    bio: "Arjun leads CubeAI’s vision and strategy, blending deep AI research experience with product-led growth. He focuses on building human-centered AI products that scale.",
    highlights: ["Product vision", "AI strategy", "Leadership & mentoring"],
  },
  {
    name: "Meera Iyer",
    role: "CTO",
    img: "/assets/team/meera.png",
    bio: "Meera oversees engineering and platform architecture — ensuring reliability, security, and fast delivery across our product suite.",
    highlights: ["Platform engineering", "Scalable systems", "Developer experience"],
  },
  {
    name: "Ravi Kumar",
    role: "Head of Product",
    img: "/assets/team/ravi.png",
    bio: "Ravi brings product craft and customer empathy to every roadmap decision. He connects customer insight to measurable product outcomes.",
    highlights: ["Product design", "Customer insights", "Growth metrics"],
  },
];

export default function LeadershipTeamPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#F7FBFF]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-4 text-2xl">✨</div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Meet Our Leadership Team</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">Leaders who guide CubeAI with clarity, innovation, and a passion for meaningful technology.</p>
        </div>
      </section>

      {/* Leader Blocks */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {leaders.map((leader, idx) => (
            <div key={leader.name} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`order-${idx % 2 === 0 ? "1" : "2"} flex justify-center md:justify-end`}>
                <div className="w-64 h-80 relative rounded-2xl overflow-hidden border border-[#EEF2F7] shadow-sm">
                  <Image src={leader.img} alt={leader.name} fill sizes="(max-width: 768px) 300px, 320px" className="object-cover" />
                </div>
              </div>

              <div className={`order-${idx % 2 === 0 ? "2" : "1"}`}>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-20 rounded-full bg-gradient-to-b from-[#D8FFF1] to-[#E9DBFF] mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">{leader.name}</h2>
                    <div className="text-sm text-gray-500 mb-3">{leader.role}</div>
                    <p className="text-gray-700 mb-4">{leader.bio}</p>
                    <ul className="flex gap-3 flex-wrap">
                      {leader.highlights.map((h) => (
                        <li key={h} className="text-sm text-gray-600 bg-white border border-[#EEF2F7] px-3 py-1 rounded-md shadow-sm">{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 shadow-sm border border-[#EEF2F7]">
          <div className="grid md:grid-cols-3 items-center gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🌟</div>
              <div className="font-semibold">Vision</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-semibold">Innovation</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🤝</div>
              <div className="font-semibold">Integrity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Leadership & Senior Team</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#EEF2F7] text-center">
              <div className="mx-auto w-28 h-28 relative rounded-full overflow-hidden mb-4">
                <Image src="/assets/team/avatar1.png" alt="Team" fill className="object-cover" />
              </div>
              <div className="font-semibold">Priya Nair</div>
              <div className="text-sm text-gray-500">Head of Design</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EEF2F7] text-center">
              <div className="mx-auto w-28 h-28 relative rounded-full overflow-hidden mb-4">
                <Image src="/assets/team/avatar2.png" alt="Team" fill className="object-cover" />
              </div>
              <div className="font-semibold">Sanjay Rao</div>
              <div className="text-sm text-gray-500">Head of Growth</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EEF2F7] text-center">
              <div className="mx-auto w-28 h-28 relative rounded-full overflow-hidden mb-4">
                <Image src="/assets/team/avatar3.png" alt="Team" fill className="object-cover" />
              </div>
              <div className="font-semibold">Anita Paul</div>
              <div className="text-sm text-gray-500">Head of Customer Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-[#F9FBFF] rounded-2xl p-10 border border-[#EEF2F7] shadow-sm">
          <blockquote className="text-2xl italic text-gray-800">“Great leadership isn’t about directing AI — it’s about empowering people with it.”</blockquote>
          <div className="w-32 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#7CC9FF] to-[#A88BFF]" />
          <p className="mt-4 text-sm text-gray-600">Our leadership inspires teams to think bigger, innovate boldly, and put customers first.</p>
        </div>
      </section>
    </main>
  );
}
