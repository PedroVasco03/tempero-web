import { FeaturedRecipes } from "@/components/layout/Featuredrecipes";
import { Hero } from "@/components/layout/Hero";
import Introduction from "@/components/layout/Introducion";
import Learn from "@/components/layout/Learn";

export default async function Home() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <Hero/>
      <FeaturedRecipes/>
      <Introduction/>
      <Learn/>
    </main>
  );
}