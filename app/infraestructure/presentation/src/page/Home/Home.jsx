import Logo from "../../image/logos/logo_principal.png"
import { Formulario_login } from './formulario';
import './Home.css'

const Home = () => {
  return (
    <div className="inicio">
      <div className="margenes">
        <main className="mainLogo">
          <div className="containerimg">
              <img className="imglogo"src={Logo} alt="logoInicio"/>
          </div>
        </main>
        <aside className="formulario">
          <Formulario_login />
        </aside>
      </div>
    </div>
  );
}

export { Home };
