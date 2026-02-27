"use client";
import { CircleHelp, Bot, Search } from "lucide-react"; // Nome padrão estável
import { useState } from "react";
import "./global.input.css";

export function Searchbar() {
  const [query, setQuery] = useState("");

  const executarBusca = () => {
    if (!query) return;
    console.log("Buscando por:", query);
  };

  return (
    /* 1. Mantemos sua classe .searchbar, mas adicionamos 'relative' para o ícone obedecer */
    <div className="searchbar relative mx-auto">
      <div 
        onClick={executarBusca}
        className="relative div1"
      >
        <CircleHelp 
          size={24} 
          strokeWidth={1.5}
          className="peer text-[#A2A2A2] hover:text-[#4E4E4E] transition-colors absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer z-20" 
        />
        <div className="textocontainer absolute -left-15 -top-18  z-20 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300 ease-in-out">
          <small className="textInfo text-[#ffffff]">Você pode alternar entre a pesquisa normal e a de I.A clicando nos icones   do lado direito</small>
        </div>
      </div>

      <input
        type="text"
        placeholder="Pesquise por receitas saborosas aqui!"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && executarBusca()}
        /* pr-14 para o texto não passar por baixo do ícone */
        className="w-full h-full bg-white border-none" 
      />
      
      
      <div 
        onClick={executarBusca}
        className="absolute bg-[#f8f8f8]  right-4 flex top-1/2 -translate-y-1/2 cursor-pointer z-20 cBtn"
      >
        <div className="searchI  bg-[#fe7c01] ">
          <Search 
            size={24} 
            strokeWidth={1.5}
            className="text-[#1e1e1e]" 
          />
        </div>
        <div className="bot relative">
          <Bot 
            size={24} 
            strokeWidth={1.5}
            className="text-[#1e1e1e] peer" 
          />
          <div className="textocontainer absolute -right-15 -top-23  z-20 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 transition-all duration-300 ease-in-out">
            <small className="textInfo text-[#ffffff]">Este é o modo I.A, clique para fazer uma busca com seus igredientes</small>
          </div>
        </div>
        
      </div>
    </div>
  );
}