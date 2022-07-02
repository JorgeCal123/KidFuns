import Logo from "../../image/logos/logo_principal.png"
import { Formulario_user } from './formulario';
import './Home.css'

const Home = () => {
  return (
    <body className="inicio">
      <main className="Logo">
        <div clasName="containerimg">
            <img className="imglogo"src={Logo} alt="logoInicio"/>
        </div>
      </main>
      <aside className="formulario">
        <Formulario_user />
      </aside>
    </body>
  );
}

export { Home };
