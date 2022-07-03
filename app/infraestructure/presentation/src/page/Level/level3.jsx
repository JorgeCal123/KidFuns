import { Component3, Component6 } from "./componentes";
import logo from '../../image/logos/logo7-4.PNG'
import lettera from '../../image/abecedario/a.png'
import numero1 from '../../image/numeros/numeros/1.png'
import conejo2 from '../../image/animales/conejo6.png'
import marco from '../../image/recursos/marco.png'
import CanvasDraw from 'react-canvas-draw'
import { BotonCentrado } from '../../elementos_formulario/Formularios1'

function Level3({ materia }) {
    switch (materia) {
        case 'm1':
            return (<Component3 logo={logo} lettera={ lettera } marco={ marco } CanvasDraw={ CanvasDraw } BotonCentrado={ BotonCentrado } conejo2={conejo2}/>);
        case 'm2':
            return (<Component6 logo={logo} numero={ numero1 } marco={ marco } CanvasDraw={ CanvasDraw } BotonCentrado={ BotonCentrado } conejo2={conejo2}/>);
        default:
            return <h2>Invalid Input</h2>
    }
} 

export { Level3 };