import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import './Cadastro.css';
import api from "../../Components/api";

import { useRef } from "react";

function Cadastro(props) {
    
    const nome = useRef()
    const Email = useRef()
    const Destino = useRef()
    const Cidade = useRef()

function enviarDados(event){
    event.preventDefault()
    api.post("/projetos" ,{
        nome: nome.current.value,
        Email: Email.current.value,
        Destino: Destino.current.value,
        Cidade: Cidade.current.value
    }).then((res) => console.log(res)).catch((err) => console.log(err))
}      

        return (
        <>
            <Navbar />
            <body>
                <main class="container">
                    <div class="textCadastro" />
                    <h2>Cadastro</h2>
                    <form class="row g-3">
                        <div class="col-md-6" onSubmit={enviarDados}>
                            <label for="inputNome" class="form-label">Nome</label>
                            <input required type="Nome" class="form-control" id="inputNome"ref={nome} />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Email</label>
                            <input required  type="email" class="form-control" id="inputAddress" ref={Email} />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Destino</label>
                            <input required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" ref={Destino} />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Cidade</label>
                            <input required type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"  ref={Cidade}/>
                        </div>                                            

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </main>
            </body>

            <Footer />
        </>

    );
}
export default Cadastro