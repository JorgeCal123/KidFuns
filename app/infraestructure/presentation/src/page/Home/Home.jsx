import { useNavigate } from 'react-router-dom';
import Logo from "../../image/logos/logo_principal.png"
import { Boton } from '../../elementos/Formularios';
import { Logical } from './Logicalformulario';
import './Home.css'


const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="App">
            <header className="App-header">
                <img className="logoprincipal" src={Logo} alt="hola" />
            </header>
        </div>
      <Logical/>
      <Boton onClick={() => navigate('/Register')}>
        Registrate
      </Boton>
    </main>
  );
}

export { Home };
