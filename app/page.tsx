'use client';

import React, { useState, useEffect } from 'react';
// This component now uses framer-motion. Make sure to install it:
// npm install framer-motion
import { motion } from 'framer-motion';

// === TYPE DEFINITION FOR A STAR ===
// This tells TypeScript what a "star" object looks like, fixing the error.
interface StarStyle {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  animationName: string;
}

// === SVG ICONS (Replaced lucide-react for simplicity) ===
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.5-1.6 0-3.2s-1.2-.4-4 1.5c-.9-.2-1.9-.3-2.9-.3s-2 .1-2.9.3c-2.8-1.9-4-1.1-4-1.1s-.4 1.9 0 3.2C2.5 10.3 2 11.4 2 12.8c0 4.8 2.7 5.9 5.5 6.2-.6.5-.5 1.5-.5 2V22"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

// --- New Icons from your code ---
const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>
    </svg>
);

const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.94.36 2.5 2.5 0 0 1-.06-4.86V2a2.5 2.5 0 0 1 2.5-2.5z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.94.36 2.5 2.5 0 0 0 .06-4.86V2a2.5 2.5 0 0 0-2.5-2.5z"></path>
    </svg>
);

const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);


// === BACKGROUND COMPONENTS ===
const Star = ({ style }: { style: React.CSSProperties }) => <div className="star" style={style} />;

const Meteor = () => (
  <div className="absolute top-1/2 left-0 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] 
    before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
    style={{ animation: 'meteor 5s linear infinite' }}
  ></div>
);

const CosmicBackground = () => {
    // Explicitly typed the state to be an array of StarStyle objects.
    const [stars, setStars] = useState<StarStyle[]>([]);
    
    useEffect(() => {
        const newStars = Array.from({ length: 50 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            animationName: 'pulse-subtle',
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 -z-50 overflow-hidden">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_40%)]" />
            {stars.map((star, i) => <Star key={i} style={star} />)}
            <Meteor />
        </div>
    );
};


// === PAGE SECTIONS ===

const HeroSection = () => (
    <section className="min-h-screen container mx-auto flex flex-col items-center justify-center text-center px-4">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-glow">
                James Ford
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary font-medium">
                Computer Scientist · Risk Analyst · Developer
            </p>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                I'm a driven computer science student with practical experience in threat detection,
                risk management, and full-stack development. I build clean, scalable solutions—and I
                never stop learning.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a href="/projects" className="cosmic-button">
                    View Projects
                </a>
                <a href="/ai-coach" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                    Ask My AI Analyst
                </a>
            </div>
        </motion.div>
    </section>
);

const SkillsCarouselSection = () => {
    const cards = [
        { title: 'Full-Stack Development', icon: <CodeIcon />, description: 'Building modern, scalable applications using React, Node.js, and SQL.' },
        { title: 'Cybersecurity & Risk', icon: <ShieldCheckIcon />, description: 'Experience in risk analysis, threat detection, and secure systems.' },
        { title: 'AI-Powered Tools', icon: <BrainIcon />, description: 'Blending AI with user interfaces—like my AI resume analyst and coach.' },
        { title: 'Always Improving', icon: <ZapIcon />, description: 'Driven by learning, refining, and launching tools that make impact.' },
    ];

    return (
        <motion.div
            className="w-full overflow-x-auto whitespace-nowrap py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="inline-flex gap-6 px-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="min-w-[280px] bg-card/50 border border-border backdrop-blur-md rounded-2xl p-5 text-left shadow-md hover:shadow-xl hover:border-primary/50 transform hover:-translate-y-1 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="mb-3 text-primary">{card.icon}</div>
                        <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                        <p className="text-sm text-foreground/70 mt-2">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative">
   <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
     About <span className="text-primary"> Me</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
     <div className="space-y-6 text-center md:text-left">
      <h3 className="text-2xl font-semibold">
       Passionate Analyst & Tech Creator
      </h3>
      <p className="text-foreground/80">
       As a Computer Science student at Kean University, I specialize in cybersecurity and risk analysis. I have hands-on experience from internships at the NJ Department of the Treasury and ETS, where I honed my skills in threat detection, data management, and strategic planning.
      </p>
      <p className="text-foreground/80">
       I'm passionate about creating elegant solutions to complex problems, from developing threat analysis tools to building full-stack applications. I'm constantly learning new technologies to stay at the forefront of the ever-evolving tech landscape.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
       <a href="#contact" className="cosmic-button">
        Get In Touch
       </a>
       <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
        Download CV
       </a>
      </div>
     </div>
     <div className="grid grid-cols-1 gap-6">
      <div className="gradient-border p-6 card-hover">
       <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary"><CodeIcon /></div>
        <div className="text-left">
         <h4 className="font-semibold text-lg"> Web Development</h4>
         <p className="text-foreground/80">Creating responsive websites and full-stack applications with modern frameworks.</p>
        </div>
       </div>
      </div>
      <div className="gradient-border p-6 card-hover">
       <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary"><UserIcon /></div>
        <div className="text-left">
         <h4 className="font-semibold text-lg">Cybersecurity</h4>
         <p className="text-foreground/80">Analyzing threats, managing risk, and implementing security protocols to protect data.</p>
        </div>
       </div>
      </div>
      <div className="gradient-border p-6 card-hover">
       <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary"><BriefcaseIcon /></div>
        <div className="text-left">
         <h4 className="font-semibold text-lg">Data Analysis</h4>
         <p className="text-foreground/80">Leveraging tools like Splunk and Salesforce to derive insights and improve efficiency.</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
);

const ProjectsSection = () => {
    const projects = [
        { title: "Face Filters & Screen Injection Analysis", description: "A research project utilizing Splunk and Python to dissect and document vulnerabilities within sophisticated threat tools, enhancing institutional security knowledge.", tags: ["Splunk", "Python", "Cybersecurity", "Research"] },
        { title: "Ebay All-In-One App", description: "A comprehensive C# desktop application built with Selenium and RestSharp to automate eBay interactions, streamline listing management, and boost user engagement.", tags: ["C#", "Selenium", "RestSharp", ".NET"] },
        { title: "AI Resume Analyst", description: "An interactive web app where an AI, trained on my resume, answers questions about my skills and experience. Built with Next.js and the OpenAI API.", tags: ["Next.js", "React", "AI", "OpenAI API"] }
    ];
    return (
        <section id="projects" className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="gradient-border p-6 card-hover flex flex-col" style={{ animation: `fade-in 0.7s ease-out ${0.2 * (index + 1)}s forwards`, opacity: 0 }}>
                            <h3 className="font-semibold text-xl mb-2 text-left">{project.title}</h3>
                            <p className="text-foreground/80 text-left flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map(tag => <span key={tag} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => (
    <footer id="contact" className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-foreground/80 max-w-lg mx-auto mb-8">I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out.</p>
            <a href="mailto:james.ford.dev@email.com" className="cosmic-button text-lg">Say Hello</a>
            <div className="flex justify-center gap-6 mt-12">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><GithubIcon /></a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><LinkedinIcon /></a>
            </div>
            <p className="text-sm text-foreground/50 mt-12">&copy; {new Date().getFullYear()} James Ford. All Rights Reserved.</p>
        </div>
    </footer>
);


// === MAIN APP COMPONENT ===
export default function HomePage() {
  return (
    <main className="relative">
      <CosmicBackground />
      <div className="relative z-10">
        <HeroSection />
        <SkillsCarouselSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
