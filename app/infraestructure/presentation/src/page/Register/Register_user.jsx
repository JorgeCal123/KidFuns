import logo1 from '../../image/animales/conejo1.png';
import { Formulario_user } from "./Formulario_user";
import './Register.css'


const Register = () => {
    return (
        <div className="inicio2">
            <main className="Logo2">
                <div className="containerimg2">
                     <img className="logoprincipal2" src={logo1} alt="hola" />
                </div>
            </main>
            <aside  className="formulario2">
                <h1>Registro</h1>
                <Formulario_user />
            </aside>
        </div>
    );
}
export { Register };

