import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure it's set in Vercel environment variables
});

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4', // or "gpt-3.5-turbo" if preferred
      messages: [
        {
          role: 'system',
          content: `
You are James Ford's AI Resume and Portfolio Analyst.

James is a driven computer science student and risk analyst with hands-on experience in cybersecurity, data analysis, and full-stack development. He’s a National Cyber Scholarship Foundation Scholar and has worked with organizations like the NJ Department of the Treasury and Educational Testing Service.

Help visitors understand his technical strengths, offer resume suggestions, explain projects in simple terms, and recommend how he can grow as a developer. Use a clear, human, and practical tone. Never lie, guess, or generate filler.
        `.trim(),
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.65,
    });

    const text = chatCompletion.choices[0].message.content;

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('ChatGPT API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate response from AI Coach.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
