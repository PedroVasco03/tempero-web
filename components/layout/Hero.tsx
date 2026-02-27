"use client";

import { useState } from "react";
import { Searchbar } from "../ui/Searchbar";
import { Tag } from "../ui/Tag";
import "./global.layout.css";
export function Hero() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("");
  const categorias = ["Legumes", "Carnes", "Ovos", "Saladas", "Sobremesas"];
  return (
    
    <section className="hero shadow-md border-b border-gray-100">
      <Searchbar/>
      <div className="flex gap-5 containerTags">
        {categorias.map((nome) => (
          <Tag 
            key={nome}
            isActive={categoriaAtiva === nome} 
            // Ao clicar, salvamos o nome desta tag no estado
            onClick={() => setCategoriaAtiva(categoriaAtiva === nome ? "" : nome)}
          >
            {nome}
          </Tag>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
    </section>
  );
}