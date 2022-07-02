import React, { useState }from 'react';

import { Formulario } from '../../elementos/Formularios'
import Input from '../../componentes/Input';
/*
function Info({input, value}){
    const [mail, setMail] = useState(false);
    const [password, setPassword] = useState(false);
    if (input === "mail")
    {

    }
    else{

    }
}

*/
export function Input_mail() {
    const [mail, setMail] = useState({ campo: '', valido: null });
    const expresiones = {mails: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
   // const value = mail['campo'];
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={mail}
          cambiarEstado={setMail}
          tipo="email"
          label="Correo Electrónico"
          placeholder="john@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.mails}
        />
    </Formulario>
    );
}


export function Input_password() {
    const [password, setPassword] = useState({ campo: '', valido: null });
    const expresiones = {password: /^.{4,12}$/ }
    const value = password['campo'];

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
    <Formulario action="" onSubmit={onSubmit}>
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
  {/*          <Info input="password" passw = {value} />*/}

    </Formulario>
    );


}