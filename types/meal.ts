export interface MealAPIResponse {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  // Mapeamos os ingredientes como strings opcionais para o TS não reclamar
  [key: `strIngredient${number}`]: string | null | undefined;
  [key: `strMeasure${number}`]: string | null | undefined;
}

export interface RecipeData {
  title: string;
  instructions: string;
  image: string;
  ingredients: { item: string; measure: string }[];
}

export interface AIChatRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  prepTime: number;
}