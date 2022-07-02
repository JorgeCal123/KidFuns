import React, { useState }from 'react';
import { Input_mail, Input_password } from './inputs';
import { useNavigate } from 'react-router-dom';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, F } from '../../elementos/Formularios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../componentes/Input'

export function Formulario_user() {
    
    return (
        <main>
        <Formulario>
            <Input />
            <Input_mail />
            <Input_password />
                <ContenedorBotonCentrado>
                    <Boton 
                        type="submit"
>                           Ingresar    
                    </Boton>
                </ContenedorBotonCentrado>
                <ContenedorBotonCentrado>
                    <Boton>
                        Registrarse
                    </Boton>
                </ContenedorBotonCentrado>
            {formularioValido === false && <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </MensajeError>}
        </Formulario>
        </main>
    );
}


