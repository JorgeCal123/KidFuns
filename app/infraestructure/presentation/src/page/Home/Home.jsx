import { useNavigate } from 'react-router-dom';
import Logo from "../../image/logos/logo_principal.png"
import { Boton, Formulario } from '../../elementos/Formularios';
import { Logica } from './Logicalformulario';
import './Home.css'
import { Formulario_user } from './formulario';


const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="App">
            <header className="App-header">
                <img className="logoprincipal" src={Logo} alt="hola" />
            </header>
        </div>
      <Formulario_user />
      <Boton onClick={() => navigate('/Register')}>
        Registrate
      </Boton>
    </main>
  );
}

export { Home };
