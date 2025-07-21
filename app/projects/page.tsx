import ProjectCard from '../../components/ProjectCard';

// --- Projects Page with details from your resume ---
const projects = [
  {
    title: 'Face Filters & Screen Injection Analysis',
    description: 'A cybersecurity research project where I reproduced advanced threat techniques to analyze their features and document vulnerabilities using Splunk and Python.',
    tags: ['Splunk', 'Git', 'Python', 'Threat Analysis', 'Windows'],
    repoUrl: '#', // IMPORTANT: Add your GitHub link here
  },
  {
    title: 'Ebay All-In-One App',
    description: 'Developed a sophisticated C# application using Selenium and RestSharp to automate and enhance user engagement for listings on eBay, complete with a user-friendly CLI.',
    tags: ['C#', 'Selenium', 'RestSharp', 'JSON', 'API Integration'],
    repoUrl: '#', // IMPORTANT: Add your GitHub link here
  },
  {
    title: 'AI Resume Analyst Portfolio',
    description: 'This personal portfolio website. It was built with Next.js and features a custom AI assistant powered by the Google Gemini API to intelligently answer questions about my resume.',
    tags: ['Next.js', 'React', 'TypeScript', 'Gemini API', 'Tailwind CSS'],
    liveUrl: '/',
    repoUrl: '#', // IMPORTANT: Add your GitHub link here
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto slide-in-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          My Projects
        </h1>
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
          A selection of my work, from cybersecurity research to full-stack application development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}