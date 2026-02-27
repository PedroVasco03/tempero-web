import { HowToCard } from "../ui/HowToCard";
import "./global.layout.css";

const HOW_TO_DATA = [
    { id: 1, title: "Pesquisar", description: "Encontre o que quer comer hoje." },
    { id: 2, title: "Escolher", description: "Escolha o que combina com você." },
    { id: 3, title: "Aprender", description: "Aprenda o passo a passo com um guia didático." },
    { id: 4, title: "Praticar", description: "Pratique, pratique e bom apetite." },
];

export default function Introduction() {
  return (
    <section className="introduction ">
        <div className="textSection mb-12">
            <h2 className="text-4xl font-bold text-[#1A1A1A] text-center md:text-left">
              Como funciona?
            </h2>
        </div>

        {/* Container principal em coluna */}
        <div className="cardContainer1 flex flex-col gap-8 ">
            {HOW_TO_DATA.map((ht) => {
              // Lógica para identificar se é par
              const isEven = ht.id % 2 === 0;

              return (
                <div 
                  key={ht.id} 
                  className={`flex   ${isEven ? "justify-end" : "justify-start"}`}
                >
                  {/* No mobile (padrão) ocupa 100%. 
                    No desktop (md:) ocupa 50% para permitir o deslocamento.
                  */}
                  <div className="transition-transform duration-500 hover:scale-[1.02]">
                    <HowToCard ht={ht} />
                  </div>
                </div>
              );
            })}
        </div>
    </section>
  );
}