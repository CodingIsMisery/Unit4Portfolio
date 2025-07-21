'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ModernButton from '../../components/ModernButton';

function ReadMore({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const preview = children.slice(0, 150);

  return (
    <p
      onClick={() => setIsExpanded(!isExpanded)}
      className="mt-4 max-w-xl mx-auto text-text-secondary text-base md:text-lg leading-relaxed cursor-pointer select-text"
      title="Click to expand/collapse"
    >
      {isExpanded ? children : `${preview}... `}
      <span className="text-accent-1 font-semibold underline ml-1">
        {isExpanded ? 'Read less' : 'Read more'}
      </span>
    </p>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 text-center max-w-4xl mx-auto">
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
        className="mt-8 px-4"
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

        <ReadMore>
          I&apos;m a driven computer science student with solid hands-on experience in cybersecurity, risk analysis, and full-stack application development. My focus is on creating practical solutions that tackle real-world problems—always learning, building, and improving along the way.
        </ReadMore>

        <ReadMore>
          Balancing technical expertise with leadership, I serve as a Resident Assistant at Kean University, where I foster community, mentor residents, and keep detailed notes on their progress and interests. This role has sharpened my communication skills and ability to stay organized under pressure.
        </ReadMore>

        <ReadMore>
          I&apos;m passionate about cybersecurity challenges and risk management, constantly diving into new tools and frameworks to stay ahead of industry trends. Whether working on a risk analysis internship or developing a fitness app with my team, I&apos;m motivated by the impact thoughtful technology can have.
        </ReadMore>

        <ReadMore>
          Outside of tech, I enjoy hiking local trails, experimenting with the latest gadgets, and exploring topics in psychology and leadership. These interests fuel my growth mindset and inspire me to approach problems creatively and collaboratively.
        </ReadMore>

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
