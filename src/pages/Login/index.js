import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
// 
export default function Login() {
  return (
    <Container>
      <header>Aplicação Carolina Luiza</header>
      <div>
        <form>
        
          <label >Login</label>
          <input type="text" />
          <label >Password</label>
          <input type="password" />

          <button type="button">Login</button>
        </form>
        <Link to="/Cadastrar">Cadastrar</Link>
        <Link to="/Recuperar">Recuperar Senha</Link>

      </div>
      
    </Container>
  );
}
