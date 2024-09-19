import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Benvenuto su BrevettAI</h1>
      <Link to="chat">
        Apri una nuova chat con il nostro esperto di brevetti AI
      </Link>
    </div>
  );
}
