import logo1 from '../../image/animales/conejo3.png';
import { Formulariokids } from "./FormularioKids";
import './Register_kids.css';
import { Boton, ContenedorBotonCentrado } from '../../elementos_formulario/Formularios';
import { useNavigate } from 'react-router-dom';


const Registerkids = () => {
    const navigate = useNavigate();

    return (
        <div className="inicio4">
            <main className="main_logo_formulario">
                <div className="containerimg2">
                     <img className="logoprincipal2" src={logo1} alt="hola" />
                </div>
                <div className="formulario4">
                <Formulariokids />
                </div>
            </main>
            <aside  className="formulario2">
            </aside>
                        
            <footer>
                <ContenedorBotonCentrado>
                    <Boton type="submit" onClick={() => navigate('/loginkids')} >Registrar</Boton>
                </ContenedorBotonCentrado>
            </footer>
                        
            
            
            
        </div>
    );
}
export { Registerkids };

