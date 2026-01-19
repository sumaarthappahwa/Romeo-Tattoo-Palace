
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTattooConcept = async (prompt: string): Promise<{ imageUrl: string; description: string }> => {
  const ai = getAI();
  
  // 1. Generate text description and artistic advice
  const textResponse = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as a master tattoo artist. Analyze the user's idea: "${prompt}". 
               Provide a detailed artistic breakdown including style recommendation (e.g., Neo-traditional, Fine line, Blackwork), 
               placement advice, and potential meanings. Keep the tone professional and inspiring.`,
    config: {
      maxOutputTokens: 500,
    }
  });

  const description = textResponse.text || "Our artists are ready to bring your vision to life.";

  // 2. Generate a visual concept using the image model
  const imageResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: `A professional tattoo design flash sheet concept of: ${prompt}. High contrast, white background, detailed linework, artistic tattoo style.` }
      ]
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  let imageUrl = "";
  for (const part of imageResponse.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      imageUrl = `data:image/png;base64,${part.inlineData.data}`;
      break;
    }
  }

  return { imageUrl, description };
};
