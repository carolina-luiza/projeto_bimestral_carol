
import React from "react";
import { Link } from "react-router-dom";

//import Logo from "../../assets/airbnb-logo.svg";

import {Container } from "./styles";

  
export default function Cadastrar() {
    return (
      <Container>
        <header>Aplicação Carolina Luiza</header>
          <label>Name</label>
          <input type="text"placeholder="Nome de usuário" />
          <label>Email</label>

          <input type="email"placeholder="Endereço de e-mail"/>
          <label>Password</label>
          <input type="password"placeholder="Senha"/>
          <button type="submit">Cadastrar</button>
          <hr />
          <footer>
          <Link to="/">Login</Link>
          </footer>
      </Container>
    );
  }


