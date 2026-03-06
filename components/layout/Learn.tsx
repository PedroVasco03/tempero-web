import { Button } from "../ui/Button";
import "./global.layout.css";

export default function Learn() {
  return (
    <section className="learn">
        <div className="textSection">
            <h2 className="text-4xl font-bold text-[#1A1A1A] text-center md:text-left">
              Aprenda e bom apetite
            </h2>
            <p>Aprenda a fazer os melhores pratos aqui na TemperoWeb.</p>
            <Button className="mt-4" variant="primary">
              Todas as Receitas
            </Button>
        </div>
    </section>
  );
}