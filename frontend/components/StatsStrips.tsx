"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useMotionValue, animate } from "framer-motion";

type StatItem = {
  value: number;
  label: string;
  gradient: string;
  accent: string;
  direction: "left" | "right";
};

const stats: StatItem[] = [
  { value: 40, label: "Happy Clients", gradient: "from-[#10102f] via-[#201f4a] to-[#0f1535]", accent: "bg-blue-400", direction: "right" },
  { value: 70, label: "Projects Delivered", gradient: "from-[#0b1b3f] via-[#132c67] to-[#0c1a3a]", accent: "bg-cyan-400", direction: "left" },
  { value: 50, label: "Technology Collaborations", gradient: "from-[#0c1a3a] via-[#1a2f5c] to-[#0c1a3a]", accent: "bg-violet-400", direction: "left" },
  { value: 150, label: "AI & Digital Product Solutions", gradient: "from-[#11112e] via-[#1f1f4a] to-[#0f1033]", accent: "bg-emerald-400", direction: "right" },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [count, target, inView]);

  return (
    <motion.span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
      {display}+
    </motion.span>
  );
}

function StatCard({ item }: { item: StatItem }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const xStart = item.direction === "left" ? -90 : 90;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: xStart, filter: "blur(6px)" },
        visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: "easeOut" } },
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] bg-gradient-to-r ${item.gradient}`}
    >
      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className={`absolute -left-12 -top-16 h-40 w-40 blur-3xl ${item.accent}`} />
        <div className="absolute right-0 bottom-0 h-32 w-32 blur-3xl bg-indigo-500/40" />
      </div>

      <div className="relative flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-8 gap-6 sm:gap-12">
        <div className="flex items-center gap-4">
          <div className={`h-14 w-1 rounded-full ${item.accent}`} aria-hidden />
          <CountUp target={item.value} inView={inView} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } } : {}}
          className="text-lg sm:text-xl font-medium tracking-[0.08em] uppercase text-blue-50/90"
        >
          {item.label}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function StatsStrips() {
  return (
    <section className="py-20 bg-[#080a1a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">CubeAI in Numbers</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Proof of performance, at a glance.</h2>
        </div>

        <div className="space-y-6">
          {stats.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
