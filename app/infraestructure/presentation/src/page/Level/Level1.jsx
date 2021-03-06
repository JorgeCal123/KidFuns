import { Formulario, Formulario1 } from '../../elementos_formulario/Formularios1'
import logo from '../../image/logos/logo7-4.PNG'
import lettera from '../../image/abecedario/a.png'
import numero1 from '../../image/numeros/numeros/1.png'
import mano1 from '../../image/numeros/manos/1.png'
import micro from '../../image/logos/microphone.png'
import speaker from '../../image/logos/speaker.png'
import conejo from '../../image/animales/conejo4.png'
import { Component1, Component4 } from './componentes'


/**
 * Level1 - function that selects the type of matter for level 1 
 * @materia: level 1 language or number
 */
function Level1({ materia }) {
    switch (materia) {
        case 'm1':
            return (<Component1 logo={logo}  micro={micro} />);
        case 'm2':
            return (<Component4 logo={logo} numero={numero1} mano={mano1} micro={micro} speaker={speaker} Formulario={Formulario1} conejo={conejo}/>);
        default:
            return <h2>Invalid Input</h2>
    }
} 

export { Level1 };