import logo1 from '../../image/animales/conejo1.png';
import { Formulario_user } from "./Formulario_user";
import './Register.css'


const Register = () => {
    return (
        <body className="inicio2">
            <div className="Logo2">
                <div className="containerimg2">
                     <img className="logoprincipal2" src={logo1} alt="hola" />
                </div>
            </div>
            <div  className="formulario2">
                <Formulario_user />
            </div>
        </body>
    );
}
export { Register };

