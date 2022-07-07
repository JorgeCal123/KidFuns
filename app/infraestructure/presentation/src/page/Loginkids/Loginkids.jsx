import React from 'react'
import logo1 from '../../image/logos/logo7-3.PNG';
import { Perfil } from "./Perfil"
import './Loginkids.css'

/**
 * LoginKids -kids login home page
 * @return: component with view from login kids
 */
const LoginKids = () => {
  return (
    <div className="inicio5">
        <header className="headerlogo5">
            <div>
                <img className="imglogo5" src= {logo1}/>
            </div>
        </header>
        <main className="containermain">
            <Perfil />
        </main>
    </div>
  );
}

export { LoginKids };
