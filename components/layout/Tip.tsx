import { Button } from "../ui/Button";
import "./global.layout.css";

export default function Tip() {
  return (
    <section className="tip">
        <div className="textSection">
            <h2 className="text  text-[#1E1E1E]">
              O prato com um sabor  único, você aprender a fazer aqui com uma didática de alto nível para fazer pratos saborosos. 
            </h2>
        </div>
        <Button variant="primary" className="mt-4">
              Aprenda e bom apetite
            </Button>
    </section>
  );
}