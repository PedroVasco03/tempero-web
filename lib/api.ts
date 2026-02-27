// lib/api.ts
import { MealAPIResponse, RecipeData } from "@/types/meal";

export async function getPublicRecipes(search: string = "cake"): Promise<RecipeData[]> {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  const data = await response.json();

  if (!data.meals) return [];

  return data.meals.map((meal: MealAPIResponse) => {
    const ingredients = [];

    // Loop para pegar os 20 ingredientes possíveis da API
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          item: ingredient,
          measure: measure || ""
        });
      }
    }

    return {
      title: meal.strMeal,
      instructions: meal.strInstructions,
      image: meal.strMealThumb,
      ingredients: ingredients, // Isso casa com o campo Json do seu Prisma!
    };
  });
}