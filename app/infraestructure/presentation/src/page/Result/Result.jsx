import React from "react";
import logo from '../../image/logos/logo7-4.PNG'
import { SelectMenu } from "./SelectMenu";


const Result = () => {
    return (
        <main>
            <div>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
            </div>
            <div>
                <div>
                    <p>Nombre de usuario</p>
                </div>
                <div>
                    <SelectMenu />
                </div>
            </div>
            <div>
                datos niños (scroll)
            </div>
            <div>
                botones
            </div>
        </main>
    );
};

export { Result };
