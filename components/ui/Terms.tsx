import "./global.input.css";

export default function Terms() {
  return (
    <section className="terms">
        <input type="checkbox" name="terms" id="terms" />
        <small id="terms">Li e aceito os termos e condições de uso</small>
    </section>
  );
}