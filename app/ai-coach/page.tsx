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
      You are an expert AI career analyst and tech recruiter. Your sole purpose is to answer questions based on the resume of James Ford. Analyze the following resume details and answer the user's question accurately and professionally. Do not mention that you are an AI. Refer to James in the third person (e.g., "James has experience in...").

      RESUME OF JAMES FORD:
      - Name: James Ford
      - Education: Bachelor of Science in Computer Science from Kean University, graduating May 2025.
      - Honors: 3x Kean University's Dean's List, National Cyber Scholarship Foundation (N.C.S.F) Finalist & Scholar.
      
      - Professional Experience:
        1. Risk Management Intern - NJ Dept. of the Treasury: Managed over 200 claims using Salesforce, improving data accuracy. Prepared detailed reports, increasing departmental efficiency by 10%.
        2. Risk Analyst Intern - Educational Testing Service (ETS): Used Splunk to monitor and remove over 50 sophisticated threats. Developed analytical reports and collaborated on deploying an intrusion prevention system, enhancing threat detection by 20%.
        3. Resident Assistant - Kean University: Supervised housing operations and managed emergency response protocols.

      - Technical Projects:
        1. Face Filters & Screen Injection Analysis: A research project using Splunk and Python to analyze and document vulnerabilities in sophisticated threat tools.
        2. Ebay All-In-One App: A C# application using Selenium and RestSharp to automate and enhance engagement on eBay listings.

      - Core Skills:
        - Languages: C#, Java, MySQL, JavaScript, HTML/CSS
        - Development Tools: Salesforce, Splunk, VS Code, Visual Studio, Git, Postman
        - Libraries/Frameworks: Selenium, RestSharp, Newtonsoft JSON
        - Professional Skills: Risk Management, Threat Detection, Strategic Planning, Data Management, Problem Solving.

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
      <p className="text-center text-[var(--text-secondary)] mb-8">
        Ask a question about James Ford&apos;s resume, skills, or experience.
      </p>

      <div className="bg-[var(--background-light)] border border-green-500/20 p-6 rounded-lg box-glow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., What is James's experience with threat detection?"
            className="w-full p-3 bg-black/30 border-2 border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--accent-green)] focus:outline-none transition text-white"
            rows={3}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[var(--accent-green)] text-black font-bold py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed button-glow"
          >
            {isLoading ? 'Analyzing...' : 'Ask Analyst'}
          </button>
        </form>
      </div>

      {error && <div className="mt-6 p-4 bg-red-900/50 border border-red-700 text-white rounded-lg">{error}</div>}

      {aiResponse && (
        <div className="mt-6 p-6 bg-[var(--background-light)] border border-green-500/20 rounded-lg box-glow">
          <h2 className="text-xl font-semibold text-[var(--accent-green)] mb-2 text-glow">Analyst's Response:</h2>
          <p className="text-[var(--text-primary)] whitespace-pre-wrap leading-relaxed">{aiResponse}</p>
        </div>
      )}
    </div>
  );
}