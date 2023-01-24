import "./styles.css";

import { UserDTO } from "../../models/userDTO"; 

type Props = {
  user: UserDTO;
}


export default function UserDetailsCard({ user } : Props) {
  return (
    <main>
      <section className="container-user">
        <div className="container-user-control">
          <div>
            <img className="user-img" src={user.avatar_url} alt="Foto Perfil" />
          </div>

          <div className="user-details">
            <div>
              <h1>Informações</h1>
            </div>

            <div>
              <p>Perfil: {user.url}</p>
              <p>Seguidores: {user.followers}</p>
              <p>Localidade: {user.location}</p>
              <p>Nome: {user.name}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}