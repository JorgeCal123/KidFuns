import logo1 from '../../image/animales/conejo3.png';
import { Formulariokids } from "./FormularioKids";
import './Register_kids.css';
import { Boton, ContenedorBotonCentrado } from '../../elementos_formulario/Formularios';
import { useNavigate } from 'react-router-dom';
import { Register_all_kids } from './List_Kids';


const Registerkids = () => {
    const navigate = useNavigate();

    const onsubmit = (e) => {
        Register_all_kids();
    }

    return (
        <div className="inicio4">
            <div className="main_logo_formulario">
                <div className="containerimg3">
                     <img className="imglogo3" src={logo1} alt="hola" />
                </div>
                <div className="formulario4">
                    <Formulariokids />
                </div>

                <footer className='boton_registrar'>
                <ContenedorBotonCentrado>
                    <Boton type="submit" onClick={onsubmit} >Registrar</Boton>
                </ContenedorBotonCentrado>
                </footer>
            </div>
                                                            
        </div>
    );
}
export { Registerkids };

