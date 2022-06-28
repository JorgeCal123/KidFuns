import React, { useState } from 'react';
import { Logo1 } from "./Logo1"
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../componentes/Input'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let history = useNavigate();
  const [country, cambiarCountry] = useState({ campo: '', valido: null });
  const [name, cambiarName] = useState({ campo: '', valido: null });
  const [email, cambiarEmail] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const [password, cambiarPassword] = useState({ campo: '', valido: null });
  const [password2, cambiarPassword2] = useState({ campo: '', valido: null });

  const expresiones = {
    country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
  }
  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: 'false' }
        });
      } else {
        cambiarPassword2((prevState) => {
          return { ...prevState, valido: 'true' }
        });
      }
    }
  }
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      country.valido === 'true' &&
      name.valido === 'true' &&
      email.valido === 'true' &&
      password.valido === 'true' &&
      password2.valido === 'true'
    ) {
      cambiarFormularioValido(true);
      cambiarCountry({ campo: '', valido: '' });
      cambiarName({ campo: '', valido: null });
      cambiarEmail({ campo: '', valido: null });
      cambiarPassword({ campo: '', valido: null });
      cambiarPassword2({ campo: '', valido: null });

      // envio de datos
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country: country['campo'],
          name: name['campo'],
          email: email['campo'],
          password: password['campo'],
        })
      };

      fetch('http://127.0.0.1:8000/user/', requestOptions)
        .then(response => {

          if (response.status === 201)
            return response.json()
          else { throw new Error(response.status) };

        })
        .then(data => {
          history('/registerkids', { state: { id_user: data.id } });
        })


    } else {
      //cambiarFormularioValido(false);
    }
  }

  return (
    <main>
      <Logo1 />
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={country}
          cambiarEstado={cambiarCountry}
          tipo="text"
          label="country"
          placeholder="colombia"
          name="country"
          leyendaError="El country tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
          expresionRegular={expresiones.country}
        />
        <Input
          estado={name}
          cambiarEstado={cambiarName}
          tipo="text"
          label="Nombre"
          placeholder="John Doe"
          name="country"
          leyendaError="El name solo puede contener letras y espacios."
          expresionRegular={expresiones.name}
        />
        <Input
          estado={email}
          cambiarEstado={cambiarEmail}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@email.com"
          name="email"
          leyendaError="El email solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.email}
        />
        <Input
          estado={password}
          cambiarEstado={cambiarPassword}
          tipo="password"
          label="password"
          name="password"
          leyendaError=" el password debe teber 4 a 12 digitos."
          expresionRegular={expresiones.password}
        />
        <Input
          estado={password2}
          cambiarEstado={cambiarPassword2}
          tipo="password"
          label="password2"
          name="password2"
          funcion={validarPassword2}
          leyendaError="el password debe ser igual."
          expresionRegular={expresiones.password2}
        />
        {formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit" onClick>Enviar</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
}

export { Register };
