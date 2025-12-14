import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { FULL_SYSTEM_PROMPT } from '../constants';

// Initialize the API client
// Note: In a real production app, ensure strict backend proxying if concealing the key is critical.
// For this frontend implementation, we access the environment variable directly.
const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey });

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: FULL_SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat session", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
      throw new Error("Chat session could not be initialized.");
  }

  try {
    const responseStream = await chatSession.sendMessageStream({ message });
    
    // Create a generator to yield chunks of text
    async function* streamGenerator() {
      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
