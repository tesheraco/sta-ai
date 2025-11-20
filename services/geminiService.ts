import { GoogleGenAI, Type } from "@google/genai";
import { LessonPlan } from "../types";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLessonPlan = async (
  topic: string,
  gradeLevel: string
): Promise<LessonPlan | null> => {
  try {
    const prompt = `Create a concise, engaging lesson plan for a ${gradeLevel} class about "${topic}". make it fun and "out of the box".`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            duration: { type: Type.STRING },
            objective: { type: Type.STRING },
            activities: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  time: { type: Type.STRING },
                  description: { type: Type.STRING }
                }
              }
            },
            assessmentIdea: { type: Type.STRING }
          },
          required: ["title", "duration", "objective", "activities", "assessmentIdea"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as LessonPlan;

  } catch (error) {
    console.error("Error generating lesson plan:", error);
    return null;
  }
};

// --- Mock Functions for other tools (since we don't have backend support for them yet) ---

export const generateQuiz = async (topic: string, grade: string, count: number) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return Array.from({ length: count }).map((_, i) => ({
    question: `Sample Question ${i + 1} about ${topic}`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A'
  }));
};

export const generateRubric = async (assignment: string, grade: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    title: `Rubric for ${assignment}`,
    criteria: [
      { name: 'Content Understanding', levels: ['Advanced', 'Proficient', 'Developing', 'Beginning'] },
      { name: 'Organization', levels: ['Advanced', 'Proficient', 'Developing', 'Beginning'] },
      { name: 'Grammar & Mechanics', levels: ['Advanced', 'Proficient', 'Developing', 'Beginning'] }
    ]
  };
};

export const generateEmail = async (notes: string, tone: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return `Subject: Regarding Recent Progress\n\nDear Parent,\n\nI wanted to reach out regarding ${notes}. We are committed to supporting your student's success.\n\nBest,\n[Teacher Name]`;
};

export const generateIEPGoal = async (area: string, grade: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    goal: `By the end of the IEP period, when given a ${grade} level task related to ${area}, the student will achieve 80% accuracy in 4 out of 5 trials.`,
    benchmarks: [
      'Will achieve 60% accuracy by first quarter.',
      'Will achieve 70% accuracy by second quarter.'
    ]
  };
};
