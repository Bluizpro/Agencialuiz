import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default () => {
    return (
      <div className="topo">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">AgenciaBluiz</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="" href="/">Inical</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Cadastro">Cadastro</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Destino">Destino</a>
              </li>              
              <li class="nav-item">
                <a class="nav-link" href="https://api.whatsapp.com/send?phone=5521979009967text=Olá tenho interesse" target="_blank">Contatos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://api.whatsapp.com/send?phone=5521979009967text=Olá tenho interesse" target="_blank">Promoções</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.viajarpelomundo.com/2011/10/20-lugares-de-tirar-o-folego.html"target="_blank">Conheça os melhores lugares</a>           
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
}
