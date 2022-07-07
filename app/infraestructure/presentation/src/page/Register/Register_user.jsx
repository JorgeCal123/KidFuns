import logo1 from '../../image/animales/conejo1.png';
import { Formulario_user } from "./Formulario_user";
import './Register.css'

/**
 * register - class main page of register ucer
 * @return: formulario User and images
 */

const Register = () => {
    return (
        <div className="inicio2">
            <main className="Logo2">
                <div className="containerimg2">
                     <img className="logoprincipal2" src={logo1} alt="hola" />
                </div>
            </main>
            <aside  className="formulario2">
                <div className="lable_title">
                <h1>Registro</h1>

                </div>
                <Formulario_user />
            </aside>
        </div>
    );
}
export { Register };

