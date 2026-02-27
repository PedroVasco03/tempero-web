import { getPublicRecipes } from "@/lib/api";

export default async function Home() {
  const recipes = await getPublicRecipes();

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">Tempero Web 🍳</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{recipe.instructions}</p>
              <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                Ver Receita
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}