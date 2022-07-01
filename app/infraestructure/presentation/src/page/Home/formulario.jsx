import React, { useState }from 'react';
import Usercontext from './UserContext';
import MoreInfo  from './info_usuario';
import { Input_password } from './inputs';
//const [password, setPassword] = createContext({ campo: '', valido: null });



export function Formulario_user() {
    return (
        <div>
        <Input_password />
        </div>
    );
}

function SetFormulario({mail, password}) {
    console.log("entra info ");

    const userData = { mail: {mail}, password: {password}}

     return (
         <Usercontext.Provider value ={userData}>
         <div>
         </div>
         </Usercontext.Provider>
     );
 }




























