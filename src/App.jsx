// npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//importamos firebase
import app from './firebase'
//Autentication
import { getAuth, signOut } from 'firebase/auth';

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componentes/header";
import Hero from "./componentes/hero";
import Contenido from "./componentes/contenido";
import Footer from "./componentes/footer";

// Mis paginas
import Caracteristicas from "./pages/caracteristicas";
import Contacto from "./pages/contacto";
import ListaPeliculas from "./componentes/peliculas";
import LoginUsuario from "./componentes/login";
import RegistrarCuenta from "./componentes/RegistrarCuenta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<Contenido />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/peliculas" element={<ListaPeliculas />} />
          <Route path="/iniciar-sesion" element={<LoginUsuario />} />
          <Route path="/registrarse" element={<RegistrarCuenta />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;