import React, { useState }from 'react';
import { Input_mail } from '../../componentes_formularios/input_mail';
import { Input_password } from '../../componentes_formularios/input_password';
import { useNavigate } from 'react-router-dom';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos_formulario/Formularios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export function Formulario_user() {
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("hola")
    }
    return (
        <main>       
        <Formulario action="" onSubmit={onSubmit}>
            <Input_mail/>
            <Input_password />

        {formularioValido === false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
          <Boton type="submit" >Ingresar</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
        <ContenedorBotonCentrado>
          <Boton type="submit" >Registrarse</Boton>
          
        </ContenedorBotonCentrado>
        </Formulario>

        </main>
    );
}


