import React from 'react'
import logo1 from '../../image/logos/logo7-3.PNG';
import { Buttonkids } from "./Perfil"
import './estilos.css'

const LoginKids = () => {
  return (
    <main>
        <div className="logo">
            <img src= {logo1} alt="logokidfun" />

        </div>
        <div className="logo">
            <Buttonkids />

        </div>
    </main>
  );
}

export { LoginKids };
