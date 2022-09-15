import React from "react";
import Logo from "../image/annuar.svg";
import '../stylesheets/inicio.css'
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <main className="inicio">
      <section>
        <img src={Logo} alt="" />
        <h1 className='annuar'>annuar shopping</h1>
        <h1 className='annuar'>Cines</h1>
        <Link className="annuar" to="moviePage">
          <button className='btn-inicio'><span className="btn-animacion">&#x27a4;</span></button>
        </Link>
      </section>
    </main>
  );
}

export default Inicio;