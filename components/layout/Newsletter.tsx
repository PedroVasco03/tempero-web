import { NewsletterInput } from "../ui/NewsletterInput";
import Terms from "../ui/Terms";
import "./global.layout.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
        <div className="componentsSection">
            <NewsletterInput />
            <Terms/>
        </div>
    </section>
  );
}