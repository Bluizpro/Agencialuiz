import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Pessoa/Cadastro';
import Destino from './Pages/Pessoa/Destino';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Cadastro" element={<Cadastro/>}></Route>
          <Route path="/Destino" element={<Destino/>}></Route>
       

        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
