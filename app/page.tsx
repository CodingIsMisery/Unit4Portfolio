'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, ShieldCheck, Brain, Zap } from 'lucide-react';

export default function Home() {
  const cards = [
    {
      title: 'Full-Stack Development',
      icon: <Code className="w-6 h-6 text-accent" />,
      description: 'Building modern, scalable applications using React, Node.js, and SQL.',
    },
    {
      title: 'Cybersecurity & Risk',
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      description: 'Experience in risk analysis, threat detection, and secure systems.',
    },
    {
      title: 'AI-Powered Tools',
      icon: <Brain className="w-6 h-6 text-accent" />,
      description: 'Blending AI with user interfaces—like my AI resume analyst and coach.',
    },
    {
      title: 'Always Improving',
      icon: <Zap className="w-6 h-6 text-accent" />,
      description: 'Driven by learning, refining, and launching tools that make impact.',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-20 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          James Ford
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-accent font-medium">
          Computer Scientist · Risk Analyst · Developer
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          I&apos;m a driven computer science student with practical experience in threat detection,
          risk management, and full-stack development. I build clean, scalable solutions—and I
          never stop learning.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-accent text-black font-semibold py-3 px-6 rounded-lg hover:bg-white transform hover:scale-105 transition duration-200"
          >
            View Projects
          </Link>
          <Link
            href="/ai-coach"
            className="bg-white/10 text-white border border-slate-600 py-3 px-6 rounded-lg hover:bg-white/20 transform hover:scale-105 transition duration-200"
          >
            Ask My AI Analyst
          </Link>
        </div>
      </motion.div>

      {/* Floating Horizontal Scroll Cards */}
      <motion.div
        className="mt-16 w-full overflow-x-auto whitespace-nowrap scrollbar-hide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="inline-flex gap-6 px-2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5 text-left shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-3">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

