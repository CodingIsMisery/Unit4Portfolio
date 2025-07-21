import { GoogleGenerativeAI } from "@google/generative-ai";

// This is the secure backend route. It's never exposed to the client.
// It reads the API key from your environment variables.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  // Get the user's prompt from the frontend request
  const { prompt } = await request.json();

  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Generate content based on the prompt
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Send the AI's response back to the frontend
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("AI API Error:", error);
    // Send a generic error message back to the frontend
    return new Response(JSON.stringify({ error: "Failed to generate response from AI." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
