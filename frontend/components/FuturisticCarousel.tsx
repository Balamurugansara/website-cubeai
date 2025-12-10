"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const cards = [
  {
    title: "Autonomous Operations",
    tag: "AI Core",
    accent: "from-[#5ee7ff] via-[#7f7bff] to-[#3023ae]",
    glow: "bg-cyan-400/40",
    image: "/assets/Autonomous Operations.png",
  },
  {
    title: "Predictive Analytics",
    tag: "Data Cloud",
    accent: "from-[#8e2de2] via-[#4a00e0] to-[#0f0c29]",
    glow: "bg-purple-400/35",
    image: "/assets/Predictive Analytics.png",
  },
  {
    title: "Secure Access",
    tag: "Cyber Defense",
    accent: "from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d]",
    glow: "bg-amber-300/30",
    image: "/assets/Secure Access.png",
  },
  {
    title: "Cloud Orchestration",
    tag: "Multi-Cloud",
    accent: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    glow: "bg-emerald-300/30",
    image: "/assets/Cloud Orchestration.png",
  },
  {
    title: "Voice Automation",
    tag: "CX AI",
    accent: "from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]",
    glow: "bg-pink-300/30",
    image: "/assets/Voice Automation.png",
  },
  {
    title: "Intelligent Agents",
    tag: "GenAI",
    accent: "from-[#020024] via-[#090979] to-[#00d4ff]",
    glow: "bg-blue-400/35",
    image: "/assets/Intelligent Agents.png",
  },
  {
    title: "Compliance Guard",
    tag: "Zero Trust",
    accent: "from-[#232526] via-[#414345] to-[#1f1c2c]",
    glow: "bg-slate-300/30",
    image: "/assets/Compliance Guard.png",
  },
];

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export default function FuturisticCarousel() {
  const [active, setActive] = useState(3); // center card

  // auto rotate
  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % cards.length), 4200);
    return () => clearInterval(id);
  }, []);

  const items = useMemo(() => cards.map((card, idx) => ({ ...card, idx })), []);

  const renderCard = (itemIdx: number) => {
    const offset = itemIdx - active;
    const total = cards.length;
    // wrap offsets to keep shortest path
    const half = Math.floor(total / 2);
    let logicalOffset = offset;
    if (offset > half) logicalOffset = offset - total;
    if (offset < -half) logicalOffset = offset + total;

    const distance = Math.abs(logicalOffset);
    const depth = clamp(1 - distance * 0.16, 0.6, 1);
    const translateX = logicalOffset * 140;
    const translateY = distance * 18; // arc
    const rotateY = logicalOffset * -10;
    const opacity = clamp(1 - distance * 0.18, 0.3, 1);
    const zIndex = 100 - distance;

    const isCenter = logicalOffset === 0;

    return (
      <motion.div
        key={itemIdx}
        initial={{ opacity: 0, x: translateX * 0.5, scale: 0.9 }}
        animate={{
          opacity,
          x: translateX,
          y: translateY,
          scale: depth,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 115, damping: 24, mass: 1 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          perspective: "1200px", 
          zIndex
        }}
      >
        <div
          className={`relative w-[160px] sm:w-[200px] lg:w-[240px] h-[230px] sm:h-[270px] lg:h-[320px] rounded-3xl overflow-hidden border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] bg-gradient-to-br ${cards[itemIdx].accent}`}
        >
          {/* full-bleed image */}
          <Image
            src={cards[itemIdx].image}
            alt={cards[itemIdx].title}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 320px"
            className="object-cover"
            priority={itemIdx === active}
          />

          {/* glow */}
          {/* <div className="pointer-events-none absolute inset-0">
            <div
              className={`absolute -inset-10 ${isCenter ? "" : "blur-3xl"} ${cards[itemIdx].glow}`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${
                isCenter ? "from-black/10 via-black/5 to-black/20" : "from-black/25 via-black/15 to-black/30"
              }`}
            />
          </div> */}

          {/* content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <Sparkles size={16} className="text-cyan-200" />
              {cards[itemIdx].tag}
            </div>
            <div className="space-y-2 mt-auto">
              <p className="text-lg sm:text-xl font-semibold leading-snug drop-shadow">{cards[itemIdx].title}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#070814] py-16 sm:py-20">
      {/* gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,119,255,0.18),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(0,230,255,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(120,64,255,0.2),transparent_32%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Futuristic AI Delivery in Motion</h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Seven pillars of our enterprise platform—automation, analytics, security, and cloud—presented in a cinematic arc.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] max-h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[100%] max-w-5xl h-[100%]">
              {items.map((_, idx) => renderCard(idx))}
            </div>
          </div>

          {/* nav buttons */}
          <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-20">
            <button
              onClick={() => setActive((prev) => (prev - 1 + cards.length) % cards.length)}
              className="h-12 w-12 rounded-full bg-white/10 border border-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center z-20">
            <button
              onClick={() => setActive((prev) => (prev + 1) % cards.length)}
              className="h-12 w-12 rounded-full bg-white/10 border border-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
