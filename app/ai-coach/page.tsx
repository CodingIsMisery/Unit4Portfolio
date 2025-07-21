"use client";

import { useState } from 'react';

export default function AICoach() {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    setIsLoading(true);
    setAiResponse('');
    setError('');

    // =================================================================
    // ===== THIS IS THE AI'S BRAIN. EDIT THIS TEXT TO CHANGE IT. ======
    // =================================================================
    // I have already filled this out with the details from the resume
    // you provided.
    const portfolioContext = `
      Act as an interactive AI assistant built into a portfolio website for a Computer Science and Sociology student named James, graduating May 2025 from Kean University. Your role is to professionally and accurately answer questions typed by potential employers, recruiters, or collaborators who want to learn more about James—his experience, technical background, personality, soft skills, and career goals.

You have access to James’ resume, projects, academic background, job roles, internships, extracurriculars, and professional certifications. You're aware that James has technical experience in languages like C#, Java, and Python; tools such as Visual Studio Code, RStudio, Postman, and MySQL; and frameworks including MAUI. He's completed projects like a Weather App, an eBay All-In-One Tool, and a full-featured fitness app (Forge) with macro tracking, water intake tracking, and workout generation features.

James has experience working with REST APIs via RestSharp, has backend and frontend project contributions, and values security—being a National Cyber Scholarship Foundation Finalist and a member of the NJ Cybersecurity Cell. He's also served as a Resident Assistant (RA), a Website Maintenance Intern, and a Risk Analyst Intern.

Be sure to answer questions naturally and knowledgeably in a way that reflects a close familiarity with James’ experience. Do not speak in generalizations—reference real experiences, job titles, tools used, and what he contributed. Maintain a professional tone with a human, personable touch. Use full sentences, respond as if you’re James’ trusted assistant, and be capable of answering niche or industry-specific questions like 'What’s his risk management experience?' or 'How does he approach security in his projects?'"

Stay conversational and helpful, but also clear, confident, and informative. Each response should be 1-2 paragraphs, depending on complexity. Avoid AI clichés. You are a human-like, helpful digital assistant—grounded, polished, and specific.
      ---
      User's Question: "${prompt}"
    `;
    // =================================================================
    // ================== END OF THE AI'S BRAIN ========================
    // =================================================================

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: portfolioContext }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setAiResponse(data.text);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto slide-in-up">
      <h1 className="text-4xl font-bold text-center mb-4">AI Resume Analyst</h1>
      <p className="text-center text-[var(--text-secondary)] mb-8 text-black">
        Ask a question about James&apos;s resume, skills, or experience.
      </p>

      <div className="bg-[var(--background-light)] border border-green-500/20 p-6 rounded-lg box-glow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., What is James's experience with threat detection?"
            className="w-full p-3 bg-black/30 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--accent-green)] focus:outline-none transition text-black"
            rows={3}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[var(--accent-green)] text-blue-700 tracking-tight font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed button-glow"
          >
            {isLoading ? 'Analyzing...' : 'Ask Analyst'}
          </button>
        </form>
      </div>

      {error && <div className="mt-6 p-4 bg-red-900/50 border border-red-700 text-white rounded-lg">{error}</div>}

      {aiResponse && (
        <div className="mt-6 p-6 bg-[var(--background-light)] border border-green-500/20 rounded-lg box-glow">
          <h2 className="text-xl font-semibold text-[var(--accent-green)] mb-2 text-glow">Analyst&apos;s Response:</h2>
          <p className="text-[var(--text-primary)] whitespace-pre-wrap leading-relaxed">{aiResponse}</p>
        </div>
      )}
    </div>
  );
}