import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

export default function Welcome() {
  return (
    <main className="welcome">
      <div className="welcome-content">
        <h1>Desafio Github API</h1>
        <p>DevSuperior - Escola de programação</p>
      </div>

      <Link to={"/before"} style={{ textDecoration: "none" }}>
        <Button text="Começar" />
      </Link>
    </main>
  );
}
