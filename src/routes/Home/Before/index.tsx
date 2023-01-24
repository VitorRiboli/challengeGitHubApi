import "./styles.css";

import { Outlet } from "react-router-dom";

import Button from "../../../components/Button";
import { Link } from "react-router-dom";

import { useState } from "react";

type FormData = {
  username: string;
}

export default function Before() {

  const [name, setName] = useState<string>();

  const [formData, setFormData] = useState<FormData>({
    username: ''
  });

  function handleInputChange(event : any) {
    const value = event.target.value;
    const name = event.target.name; 

    setFormData({...formData, [name]: value});
    console.log(name, value)
  }

  function handleFormSubmit(e : any) {
    e.preventDefault();
    setName(formData.username);
  }

  return (
    <>
      <main>
        <div className="container">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleFormSubmit}>
            <input 
              name="username" 
              value={formData.username}
              type="text" 
              placeholder="Usuário Github" 
              onChange={handleInputChange} 
              />
          </form>
          <div>
            <Link to={`after/${name}`} style={{ textDecoration: "none" }}>
              <Button text="Encontrar" />
            </Link>
          </div>
        </div>

      </main>

      <Outlet />
    </>
  );
}
