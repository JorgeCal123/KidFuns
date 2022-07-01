import React from "react";
import logo from '../../image/logos/logo7-4.PNG'
import { Datatable } from "./DataTable";
import { SelectMenu, SelectMenu2 } from "./SelectMenu";
import { BotonCentrado, Formulario1 } from '../../elementos/Formularios1'
import { Boton, Formulario } from '../../elementos/Formularios'

const Result = () => {
    return (
        <main className="level1">
            <div>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
            </div>
            <Formulario1>
                <div>
                    <p>Nombre de usuario</p>
                </div>
                <div>
                    <SelectMenu />
                </div>
                <div>
                    <SelectMenu2 />
                </div>
            </Formulario1>
            <BotonCentrado>
              <Datatable/>
            </BotonCentrado>
            <Formulario>
                <Boton type="button">Config</Boton>
                <Boton type="button">Salir</Boton>
            </Formulario>
        </main>
    );
};

export { Result };
