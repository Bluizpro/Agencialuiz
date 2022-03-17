import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import './Destino.css';

function Destino(props) {
    return (
        <>
            <Navbar />
        <body>
                <main class="container">
                    <div class="textLogin" />
                    <h2>Destino</h2>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Destino</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Data Ida</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-6">
                            <label for="inputAddress" class="form-label">Destino volta</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-6">
                            <label for="inputAddress2" class="form-label">Quantidades de passageiro</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Clique Aqui</button>
                        </div>
                    </form>
                </main>
            </body>
            <Footer />
        </>
    );
}
export default Destino