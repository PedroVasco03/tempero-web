"use client";

import Image from 'next/image'; 
import { Tag } from "../ui/Tag";
import { Bookmark, Heart } from "lucide-react";
import { Recipe } from '@/types/RecipeContract';
import { useState } from 'react';
import "./global.recipes.css";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
    const [imgSrc, setImgSrc] = useState(recipe.image);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const [animateHeart, setAnimateHeart] = useState(false);
    const [animateBook, setAnimateBook] = useState(false);

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
        setAnimateHeart(true);
        // Remove a classe após a animação acabar para poder repetir no próximo clique
        setTimeout(() => setAnimateHeart(false), 300);
    };

    const handleSave = () => {
        setIsSaved(!isSaved);
        setAnimateBook(true);
        setTimeout(() => setAnimateBook(false), 300);
    };
  return ( 
    <div className="Card relative">
        <div className="cardHeader aspect-[4/3]  overflow-hidden relative">
            <Image 
                src={imgSrc} 
                alt={recipe.title}
                fill 
                className="cardImage object-cover"
                priority={recipe.id <= 3} 
                onError={() => setImgSrc("/fallback-recipe.jpg")}
                />
        </div>
        
        <div className="cardBody">
            <h3 className="title">
                {recipe.title}
            </h3>
        </div>
        <div className="cardFooter">
            <Tag variant="primary">{recipe.category}</Tag>
            <div className="content">
                <div className="icons">
                <button 
                    onClick={handleFavorite}
                    className={` transition-all duration-300 cursor-pointer 
                    ${isFavorited 
                        ? "bg-transparent text-[#FF3C3C] " 
                        : "bg-transparent text-[#4E4E4E]"}`}
                >
                    <Heart 
                    size={25}
                    strokeWidth={1.5} 
                    // Preenche o ícone quando ativo
                    fill={isFavorited ? "currentColor" : "none"} 
                    className={animateHeart ? "animate-pop" : ""}
                    />
                </button>

                
                <button 
                    onClick={handleSave}
                    className={` transition-all duration-300 cursor-pointer  
                    ${isSaved 
                        ? "bg-transparent text-[#FE7C01] " 
                        : "bg-transparent text-[#4E4E4E] "}`}
                >
                    <Bookmark 
                    size={25} 
                    strokeWidth={1.5} 
                    fill={isSaved ? "currentColor" : "none"} 
                    className={animateBook ? "animate-pop" : ""}
                    />
                </button>
                </div>
                <Tag variant="outline" className=" ">
                    {recipe.time}
                </Tag>
            </div>
            
        </div>
    </div>
  );
}