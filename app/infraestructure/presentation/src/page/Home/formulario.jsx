import React, { useState }from 'react';
import { Input_mail } from '../../componentes_formularios/input_mail';
import { Input_password } from '../../componentes_formularios/input_password';
import { useNavigate } from 'react-router-dom';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos_formulario/Formularios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { get_info, Validation_data } from '../../componentes_formularios/data_formulario1';





export function Formulario_login() {
    let history = useNavigate();

    const [formularioValido, cambiarFormularioValido] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(Validation_data());
        
    }
    const Register = () =>{

        console.log("presiona boton");
        history('/register');
    }
    
    return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>
                <Input_mail />
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
            </Formulario>
            <ContenedorBotonCentrado>
                <Boton type="button" onClick={ ()=>{Register()}}>Registrarse</Boton>
            </ContenedorBotonCentrado>

        </main>
    );
}


