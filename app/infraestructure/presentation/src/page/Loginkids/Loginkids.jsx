import React from 'react'
import logo1 from '../../image/logos/logo7-3.PNG';
import { Buttonkids } from "./Perfil"
import './Loginkids.css'

const LoginKids = () => {
  return (
    <main>
        <div className="logo">
            <img src= {logo1} alt="logokidfun" className="imgprincipal"/>
        </div>
        <div className="but">
            <Buttonkids />

        </div>
    </main>
  );
}

export { LoginKids };
