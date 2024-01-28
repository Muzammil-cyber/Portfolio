import Collab from "./collab";
import Contact from "./contact";
import "./style.css";

export default function CollabContact() {
  return (
    <section className="flex flex-col sm:flex-row mt-8 gap-4">
      <Collab />
      <Contact />
    </section>
  );
}
