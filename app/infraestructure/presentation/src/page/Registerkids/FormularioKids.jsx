import React, { useState, useEffect } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos_formulario/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../componentes_formularios/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import { Add_Kids, List_Kids } from './List_Kids';

const Formulariokids = (props) => {
  const [name, cambiarName] = useState({ campo: '', valido: null });
  const [age, cambiarAge] = useState({ campo: '', valido: null });
  const [avatar, cambiarAvatar] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [id_user, setId_user] = useState(location.state.id_user);
  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y es
    age: /^[0-9]{1,2}$/,
    avatar: /^[a-zA-ZÀ-ÿ\s]{2,40}$/

  }
  useEffect(() => {
    setId_user(location.state.id_user)
  }, [location]);
  function listakid(){
    const dic = {
      name :name,
      age : age,
      avatar : avatar,
      
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.valido === 'true' &&
      age.valido === 'true' &&
      avatar.valido === 'true'

    ) {
      cambiarFormularioValido(true);
      cambiarName({ campo: '', valido: null });
      cambiarAge({ campo: '', valido: null });
      cambiarAvatar({ campo: '', valido: null });
      const new_kid = {n:name['campo'], a:age['campo'], v:avatar['campo'], i:id_user}
      Add_Kids(new_kid);
    
    } 
    else {
      cambiarFormularioValido(false);
    }
    <List_Kids />

  }

  return (
    <div className="form_list">
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
        <Input
          estado={avatar}
          cambiarEstado={cambiarAvatar}
          tipo="img"
          label="avatar"
          name="avatar"
          leyendaError="selecciona un avatar."
          expresionRegular={expresiones.avatar}
        />

        {formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit" >Agregar</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
      <div  className="formulario2">
         <List_Kids></List_Kids>
      </div>
    </div>
  );
}

export { Formulariokids };
