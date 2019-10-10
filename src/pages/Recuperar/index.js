

import React from "react";
import { Link } from "react-router-dom";


import {Container } from "./styles";

  
export default function Recuperar() {
    return (
        <Container>
            <header>Aplicação Carolina Luiza</header>
       <div>
         <form>
         
           <label >Email</label>
           <input type="text" />
        
           <button type="submit">Recuperar</button>
         </form>
         <hr/>
         <div className = "links">
         <Link to="/">Login </Link>
         </div>

      </div>
    </Container>

    );
  }



