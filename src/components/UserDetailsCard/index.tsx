import "./styles.css";

import { UserDTO } from "../../models/userDTO";

type Props = {
  user: UserDTO;
};

export default function UserDetailsCard({ user }: Props) {
  return (
    <main>
      <section className="container-user">
        <div className="container-user-control">
          <div>
            <img className="user-img" src={user.avatar_url} alt="Foto Perfil" />
          </div>

          <div className="user-details">
            <div>
              <h1 className="user-details-title">Informações</h1>
            </div>

            <div className="user-details-box">
              <div className="user-details-box-card">
                <p>Perfil: <span className="user-link">{user.url}</span></p>
              </div>
              <div className="user-details-box-card">
                <p>Seguidores: <span>{user.followers}</span></p>
              </div>
              <div className="user-details-box-card">
                <p>Localidade: <span>{user.location}</span></p>
              </div>
              <div className="user-details-box-card">
                <p>Nome: <span>{user.name}</span></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
