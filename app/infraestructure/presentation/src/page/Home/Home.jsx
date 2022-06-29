import { useNavigate } from 'react-router-dom';
import { Logo } from "../../Logo"
import { Boton } from '../../elementos/Formularios';
import { Logical } from './Logicalformulario';
import './Home.css'


const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Logo />
      <Logical/>
      <Boton onClick={() => navigate('/Register')}>
        Registrate
      </Boton>
    </main>
  );
}

export { Home };
