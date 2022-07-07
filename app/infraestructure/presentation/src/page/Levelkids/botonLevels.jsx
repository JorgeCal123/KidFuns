import { Boton } from '../../elementos_formulario/Formularios1'
import { useNavigate } from 'react-router-dom';
import './LevelKids.css'

/**
 * Boton_Levels - shows a list of buttons with the image and name of the children
 * @props: materia that selecction 
 * @returns: component with list botton from each kid
 */
export const Boton_Levels = (props) => {
    let history = useNavigate();

    const level1 = (e) => {
        history('/levelexcercice', { state: { level: "l1", materia:props.m } });

    }
    const level2 = (e) => {
        history('/levelexcercice', { state: { level: "l2", materia:props.m } });

    }
    const level3 = (e) => {
        history('/levelexcercice', { state: { level: "l3", materia:props.m } });
    }
    return (
        <div className='listbotonesdd'>
            <Boton type='button' onClick={level1} >1</Boton>
            <Boton type='button' onClick={level2} >2</Boton>
            <Boton type='button' onClick={level3} >3</Boton>
    </div>
    );
}
