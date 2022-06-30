import { Formulario } from '../../elementos/Formularios1'
import logo from '../../image/logos/logo7-4.PNG'
import lettera from '../../image/abecedario/a.png'
import micro from '../../image/logos/microphone.png'
import speaker from '../../image/logos/speaker.png'
import conejo from '../../image/animales/conejo4.png'
import { Component1 } from './componentes'

function Level1({ materia }) {
    switch (materia) {
        case 'm1':
            return (<Component1 logo={logo} letter={lettera} micro={micro} speaker={speaker} Formulario={Formulario} conejo={conejo}/>);
        default:
            return <h2>Invalid Input</h2>
    }
} 

export { Level1 };