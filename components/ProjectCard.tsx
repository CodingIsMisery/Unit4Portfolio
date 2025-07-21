import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const LiveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;


// --- Modern Project Card Component ---
export default function ProjectCard({ title, description, tags, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <h3 className="text-xl font-heading font-bold text-accent-1">{title}</h3>
      <p className="mt-2 text-text-secondary flex-grow text-sm">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-accent-1/10 text-accent-1 text-xs font-medium px-2.5 py-1 rounded-full border border-accent-1/20">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        {liveUrl && (
          <Link href={liveUrl} target="_blank" className="flex items-center gap-2 bg-accent-1 text-black font-bold py-2 px-4 rounded-lg hover:bg-white transition-all duration-300 text-sm">
            <LiveIcon />
            Live Demo
          </Link>
        )}
        {repoUrl && (
          <Link href={repoUrl} target="_blank" className="flex items-center gap-2 bg-slate-700/50 text-white font-medium py-2 px-4 rounded-lg hover:bg-slate-600/50 border border-slate-600 transition-colors text-sm">
            <GithubIcon />
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
} 