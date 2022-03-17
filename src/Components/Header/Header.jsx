import React from "react";

import Navbar from '../Navbar/Navbar';
import './Header.css'

export default () => {
    return (
        <header>
           
            <Navbar></Navbar>
            <div className="slogan container-fluid">
                <div>
                    <h2>Suas viagens com mais emoções</h2>
                   
                </div>

                <div>
                    <h1> O Que Voçê acha em viaja o mundo pagando menos ?</h1>
                </div>
                <div>
                  
                </div>
            </div>
        </header>
    );
}