'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ModernButton from '../../components/ModernButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 text-center">
      {/* Profile Image Holder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto"
      >
        <div className="rounded-full overflow-hidden border border-slate-700 shadow-lg w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]">
          <Image
            src="/profile.jpg"
            alt="James Ford profile"
            width={180}
            height={180}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>

      <motion.section
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">
          James Ford
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-accent-1">
          Computer Scientist · Risk Analyst · Developer
        </p>
        <p className="mt-3 max-w-xl mx-auto text-text-secondary text-base md:text-lg leading-relaxed">
          I'm a driven computer science student with hands-on experience in cybersecurity,
          risk analysis, and building full-stack applications that solve real problems.
          Always learning, always building, always improving.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <ModernButton
            href="/projects"
            className="bg-accent-1 text-black font-semibold hover:bg-white transform hover:scale-105 transition duration-200"
          >
            View Projects
          </ModernButton>
          <ModernButton
            href="/ai-coach"
            className="bg-slate-700/50 text-white border border-slate-600 hover:bg-slate-600/50 transform hover:scale-105 transition duration-200"
          >
            Ask My AI Analyst
          </ModernButton>
        </div>
      </motion.section>
    </main>
  );
}
