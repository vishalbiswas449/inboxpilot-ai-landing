
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { emailContent, enhancementType } = await req.json();

    if (!emailContent) {
      return new Response(
        JSON.stringify({ error: "Email content is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let systemPrompt = "You are an expert email assistant. Your task is to enhance the provided email";
    
    switch (enhancementType) {
      case 'professional':
        systemPrompt += " to make it more professional, clear and well-structured while maintaining the original intent.";
        break;
      case 'concise':
        systemPrompt += " to make it more concise and to the point while maintaining the original intent.";
        break;
      case 'friendly':
        systemPrompt += " to make it more friendly and personable while maintaining the original intent.";
        break;
      case 'persuasive':
        systemPrompt += " to make it more persuasive and compelling while maintaining the original intent.";
        break;
      default:
        systemPrompt += " to improve its clarity, tone, and effectiveness while maintaining the original intent.";
    }

    systemPrompt += " Only return the improved email text without any additional explanation or commentary.";

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: emailContent
          }
        ],
        temperature: 0.3,
        max_tokens: 4096
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Groq API error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to enhance email", details: error }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const enhancedEmail = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ enhancedEmail }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", message: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
