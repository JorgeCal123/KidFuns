import React from "react";
import logo1 from './image/logos/logo_principal.png';

function Logo() {
    return (
        <div className="App">
            <header className="App-header">
                <img className="logoprincipal" src={logo1} alt="hola" />
            </header>
        </div>
    );
}

export { Logo };