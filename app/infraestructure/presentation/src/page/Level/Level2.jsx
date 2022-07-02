import { BotonCentrado } from '../../elementos/Formularios1'
import logo from '../../image/logos/logo7-4.PNG'
import speaker1 from '../../image/logos/speaker2.png'
import conejo1 from '../../image/animales/conejo5.png'
import { Component2, Component5 } from './componentes'

function Level2({ materia }) {
    switch (materia) {
        case 'm1':
            return (<Component2 logo={logo} speaker1={speaker1} BotonCentrado={ BotonCentrado } conejo1={conejo1}/>);
        case 'm2':
            return (<Component5 logo={logo} speaker1={speaker1} BotonCentrado={ BotonCentrado } conejo1={conejo1}/>);
        default:
            return <h2>Invalid Input</h2>
    }
} 

export { Level2 };