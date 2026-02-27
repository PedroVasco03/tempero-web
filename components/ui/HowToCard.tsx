import { HowTo } from "@/types/HowToContract";
import "./global.input.css";

export function HowToCard({ ht }: { ht: HowTo }) {  
    return (
        <div className="htContainer">
            <div className="idContainer">
                <h1 className="id">{ht.id}</h1>
            </div>
            <div className="textContainer">
                <h2 className="title">{ht.title}</h2>
                <p className="description">{ht.description}</p>
            </div>
        </div>
    );
}