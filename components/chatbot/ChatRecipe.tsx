"use client";

import { useState } from "react";
import { Button } from "../ui/Button"; 
import { AIChatRecipe } from "@/types/meal";

export function ChatRecipe() {
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState<AIChatRecipe | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ ingredients: input.split(",") }),
      });
      const data = await res.json();
      setRecipe(data);
    } catch (err) {
      alert("Erro ao gerar receita");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-orange-100">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
        <span>👨‍🍳</span> Chef IA Tempero
      </h2>
      
      <div className="flex flex-col gap-4">
        <textarea
          className="p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 outline-none resize-none"
          placeholder="Ex: ovo, tomate, queijo, cebola..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
        />
        
        <Button 
          onClick={handleGenerate} 
          disabled={loading || !input}
        >
          {loading ? "Pensando na receita..." : "Sugerir Receita"}
        </Button>
      </div>

      {recipe && (
        <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200 animate-in fade-in slide-in-from-bottom-4">
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
          <p className="text-sm text-gray-600 italic mb-4">{recipe.description}</p>
          
          <div className="mb-4">
            <h4 className="font-bold text-orange-700">Ingredientes:</h4>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-orange-700">Modo de Preparo:</h4>
            <p className="text-gray-700 whitespace-pre-line">{recipe.instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}