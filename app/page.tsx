import Comments from "@/components/layout/Comments";
import { FeaturedRecipes } from "@/components/layout/Featuredrecipes";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import Introduction from "@/components/layout/Introducion";
import Learn from "@/components/layout/Learn";
import Newsletter from "@/components/layout/Newsletter";
import Tip from "@/components/layout/Tip";

export default async function Home() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <Hero/>
      <FeaturedRecipes/>
      <Introduction/>
      <Learn/>
      <Comments/>
      <Tip/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}