import { FeaturedRecipes } from "@/components/layout/Featuredrecipes";
import { Hero } from "@/components/layout/Hero";

export default async function Home() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <Hero/>
      <FeaturedRecipes/>
    </main>
  );
}