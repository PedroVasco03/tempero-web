import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  // Configuramos para a resposta vir sempre como JSON estruturado
  generationConfig: { responseMimeType: "application/json" }
});

export async function generateAIRCp(ingredients: string[]) {
  const prompt = `
    Você é um Chef de Cozinha brasileiro especializado em receitas rápidas.
    Com base nos ingredientes: ${ingredients.join(", ")}, sugira uma receita.
    Responda EXATAMENTE no formato JSON:
    {
      "title": "Nome da Receita",
      "description": "Breve texto cativante",
      "ingredients": ["item 1", "item 2"],
      "instructions": "Passo a passo",
      "prepTime": 30
    }
    Use português do Brasil.
  `;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}