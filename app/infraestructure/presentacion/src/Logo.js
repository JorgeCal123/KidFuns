import React from "react";
import logo1 from './image/mainimagen.png';
import { Search } from "./Search"

function Logo() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo1} alt="hola" />
                
                <div>
                    <button>Search</button>
                    <Search />
                </div>
            </header>
        </div>
    );
}

export { Logo };