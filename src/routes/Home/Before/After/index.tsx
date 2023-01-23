import "./styles.css";

import { UserDTO } from "../../../../models/userDTO";

const user: UserDTO = {
  foto: "https://github.com/VitorRiboli.png",
  nome: "Vitor",
  linkPerfil: "https://github.com/VitorRiboli/",
  localidade: "rs",
  quantidadeSeguidores: 30,
};

export default function After() {
  return (
    <main>
      <section className="container-user">
        <div className="container-user-control">
          <div>
            <img className="user-img" src={user.foto} alt="Foto Perfil" />
          </div>

          <div className="user-details">
            <div>
              <h1>Informações</h1>
            </div>

            <div>
              <p>Perfil: {user.linkPerfil}</p>
              <p>Seguidores: {user.quantidadeSeguidores}</p>
              <p>Localidade: {user.localidade}</p>
              <p>Nome: {user.nome}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
