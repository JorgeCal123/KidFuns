import React from 'react'
import logo1 from '../../image/logos/logo7-3.PNG';
import { Buttonkids } from "./Perfil"
import './Loginkids.css'

const LoginKids = () => {
  return (
    <div className="inicio3">
        <header className="logo3">
            <img className="imgprincipal" src= {logo1}/>
        </header>
        <main className="but">
            <Buttonkids />

        </main>
    </div>
  );
}

export { LoginKids };
