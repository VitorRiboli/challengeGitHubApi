import "./styles.css";

import { Outlet } from "react-router-dom";

import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function Before() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Encontre um perfil Github</h1>
          <form>
            <input name="user" type="text" placeholder="Usuário Github" />
          </form>
          <div>
            <Link to={"after"} style={{ textDecoration: "none" }}>
              <Button text="Encontrar" />
            </Link>
          </div>
        </div>
      </main>

      <Outlet />
    </>
  );
}
