import React from "react";
import logo1 from './image/mainimagen.png';

function Logo() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo1} alt="hola" />
            </header>
        </div>
    );
}

export { Logo };