import React from "react";
import logo1 from '../image/animales/conejo1.png';

function Logo1 () {
    return (
        <div className="App">
            <header className="App-header">
                <img className="logoprincipal" src={logo1} alt="hola" />
            </header>
        </div>
    );
}

export { Logo1 };