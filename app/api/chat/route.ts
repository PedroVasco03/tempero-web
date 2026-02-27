import { generateAIRCp } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { ingredients } = await request.json();
    if (!ingredients || ingredients.length === 0) {
      return NextResponse.json({ error: "Mande pelo menos um ingrediente!" }, { status: 400 });
    }

    const recipe = await generateAIRCp(ingredients);
    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao falar com o Chef IA" }, { status: 500 });
  }
}