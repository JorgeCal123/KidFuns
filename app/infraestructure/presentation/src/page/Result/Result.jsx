import React from "react";
import logo from '../../image/logos/logo7-4.PNG'
import { Datatable } from "./DataTable";
import { SelectMenu2 } from "./SelectMenu";
import { Formulario1 } from '../../elementos_formulario/Formularios1'
import { Boton, Formulario } from '../../elementos_formulario/Formularios'
import './Result.css'
const Result = () => {
    const ListNivel = [{Item: 'Nivel 1' },
    {Item: 'Nivel 2' },
    {Item: 'Nivel 3' }]
    const ListMateria = [
    {Item: 'Languaje' },
    {Item: 'Matematicas' }]
    return (
        <div className="mainlist">
                <div>
                        <header className="App-header">
                            <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                        </header>
                </div>
                <div className="margin2">

                <Formulario1>
                    <div>
                        <p>Camilo</p>
                    </div>
                    <div>
                        <SelectMenu2 Menu='Materia' List={ ListMateria }/>
                    </div>
                    <div>
                        <SelectMenu2 Menu='Nivel' List={ ListNivel }/>
                    </div>
                </Formulario1>
                <div>
                  <Datatable/>
                </div>
                <Formulario>
                    <Boton type="button">Config</Boton>
                    <Boton type="button">Salir</Boton>
                </Formulario>
            </div>
        </div>
    );
};

export { Result };
