import { BotonCentrado } from '../../elementos_formulario/Formularios1'
import logo from '../../image/logos/logo7-4.PNG'
import micro from '../../image/recursos/sonido.png'
import conejo1 from '../../image/animales/conejo5.png'
import etiq1 from '../../image/recursos/etiquetas_01.png'
import etiq2 from '../../image/recursos/etiquetas_02.png'
import etiq3 from '../../image/recursos/etiquetas_03.png'

import { Component2, Component5 } from './componentes'

function Level2({ materia }) {
    switch (materia) {
        case 'm1':
            return (<Component2 logo={logo} micro={micro} conejo1={conejo1} etiq1={etiq1} etiq2={etiq2} etiq3={etiq3}/>);
        case 'm2':
            return (<Component5 logo={logo} micro={micro} conejo1={conejo1} etiq1={etiq1} etiq2={etiq2} etiq3={etiq3}/>);
        default:
            return <h2>Invalid Input</h2>
    }
} 

export { Level2 };