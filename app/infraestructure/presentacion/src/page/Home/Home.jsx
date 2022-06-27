import { useState } from 'react';
import { Logo } from "../../Logo"
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../componentes/Input';
import { useNavigate } from 'react-router-dom';
import './Home.css'


const Home = () => {
  const [password, cambiarPassword] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const navigate = useNavigate();

  const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }


  const onSubmit = (e) => {
    e.preventDefault();

    if (
      password.valido === 'true' &&
      correo.valido === 'true'
    ) {
      cambiarFormularioValido(true);
      cambiarPassword({ campo: '', valido: null });
      cambiarCorreo({ campo: '', valido: null });

      // ... 
    } else {
      cambiarFormularioValido(false);
    }
  }

  return (
    <main>
      <Logo />
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={password}
          cambiarEstado={cambiarPassword}
          tipo="password"
          label="Contraseña"
          placeholder="password"
          name="password1"
          leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
          expresionRegular={expresiones.password}
        />

        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
        />

        {formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit">Ingresar</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
      <Boton onClick={() => navigate('/Register')}>
        Registrate
      </Boton>
    </main>
  );
}

export { Home };
