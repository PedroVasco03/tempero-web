import { Button } from "./Button";
import "./global.input.css";

export function NewsletterInput() {

  return (
    
    <div className="newsletterInput relative mx-auto">

      <input
        type="email"
        placeholder="Digite seu email aqui"
        className="border-none" 
      />
      <Button className="" variant="primary">
        Enviar 
      </Button>
    </div>
  );
}