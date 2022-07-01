import React, { useState }from 'react';

import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos/Formularios'
import Input from '../../componentes/Input';

function Info({passw}){
    console.log("entra info: " + passw)
}


export function Input_password() {
    const [password, setPassword] = useState({ campo: '', valido: null });
    const expresiones = {password: /^.{4,12}$/ }
    const value = password['campo'];
    //const changepassword = (e) => {
    //    e.preventDefault();
    //    console.log("entra " + value);
    //}
    return (
    <Formulario action="" onSubmit={Info}>
        <Input
            estado={password}
            cambiarEstado={setPassword}
            tipo="password"
            label="Contraseña"
            placeholder="password"
            name="password1"
            leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
            expresionRegular={expresiones.password}
        />
            <Info passw = {value} />

    </Formulario>
    );


}