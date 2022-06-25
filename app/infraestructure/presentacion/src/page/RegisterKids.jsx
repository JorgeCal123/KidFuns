import React, { useState } from 'react';
import { Logo } from "../Logo"
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../componentes/Input';

const Registerkids = () => {
  const [name, cambiarName] = useState({ campo: '', valido: null });
  const [age, cambiarAge] = useState({ campo: '', valido: null });
  //const [avatar, cambiaraAvatar] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const expresiones = {
    country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    age: /^[0-9]{1,2}$/
    //avatar: pendiente
   
  }
  
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.valido === 'true' &&
      age.valido === 'true' 
      //avatar.valido === 'true'
      
    ) {
      cambiarFormularioValido(true);
      cambiarName({ campo: '', valido: null });
      cambiarAge({ campo: '', valido: null });
      //cambiarAvatar({ campo: '', valido: null });
    
      // envio de datos
      console.log('hola')
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:  name['campo'],
          age: age['campo'],
          //avatar: avatar['campo'],
      })
    };
    fetch('http://127.0.0.1:8000/kid/', requestOptions)
        .then(response => response.json())
        .then(data => console.log('repuesta', data));

    } else {
      cambiarFormularioValido(false);
    }
  }

  return (
    <main>
      <Logo />
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={name}
          cambiarEstado={cambiarName}
          tipo="text"
          label="name"
          placeholder="nombre"
          name="name"
          leyendaError="por lo menos el primer nombre, letras y guion bajo."
          expresionRegular={expresiones.name}
        />
        <Input
          estado={age}
          cambiarEstado={cambiarAge}
          tipo="text"
          label="age"
          placeholder="edad"
          name="age"
          leyendaError="cual es la edad."
          expresionRegular={expresiones.age}
        />       
        {/*<Input
          estado={avatar}
          cambiarEstado={cambiarAvatar}
          tipo="img"
          label="avatar"
          name="avatar"
          leyendaError="selecciona un avatar."
          
        />
  */}
        {formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit" >Registrar</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
}

export { Registerkids };
