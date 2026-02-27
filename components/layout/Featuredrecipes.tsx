import { Recipe } from "@/types/RecipeContract";
import { Button } from "../ui/Button";
import "./global.layout.css";
import { RecipeCard } from "../recipes/RecipeCard";


const RECIPES_DATA: Recipe[] = [
  { id: 1, title: "Churraco", category: "Carnes", time: "40 min", image: "/images/prato6.png" },
  { id: 2, title: "Peixe Grelhado", category: "Peixe", time: "15 min", image: "/images/prato5.png" },
  { id: 3, title: "Feijoada", category: "Feijão", time: "50 min", image: "/images/prato4.png" },
  { id: 4, title: "Frango Acebolado", category: "Carnes", time: "40 min", image: "/images/prato3.png" },
  { id: 5, title: "Salada Caesar", category: "Saladas", time: "15 min", image: "/images/prato2.png" },
  { id: 6, title: "Frutos do Mar", category: "Peixe", time: "120 min", image: "/images/prato1.png" },
];

interface FeaturedRecipesProps {
  activeCategory?: string; // O '?' torna a prop opcional
  limit?: number;          // Opcional: para limitar a 6 na Home
}

export function FeaturedRecipes({ activeCategory = "", limit }: FeaturedRecipesProps) {
  
  // 1. Lógica de Filtro (Só filtra se activeCategory não for vazio)
  const filteredRecipes = RECIPES_DATA.filter(recipe => 
    activeCategory === "" || recipe.category === activeCategory
  );

  // 2. Lógica de Limite (Se passar limit=6, ele corta o array)
  const displayRecipes = limit ? filteredRecipes.slice(0, limit) : filteredRecipes;

  return (
    <section className="featuredRecipes">
      <div className="textSection">
        <h2 className="text">
          {activeCategory ? `Receitas de ${activeCategory}` : "Nossas Receitas"}
        </h2>
        {!activeCategory && (
          <Button variant="primary" className="button">Todas as Receitas</Button>
        )}
      </div>
    
      <div className="cardContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayRecipes.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </section>
  );
}