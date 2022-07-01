import React from "react";
import useUser from "./useUser";
export default function MoreInfo() {
    const {mail, password} =useUser();
    if (
        {password} =='undefined' &&
        {mail} =='undefined'
      ) {
    return (
        <div>
            informacion del usuario
            {mail}
            {password}
        </div>
    );
      }
    else {
        <div>
            falta informacion del usuario
        </div>
    }
}


export function ValidationInfo() {
    const {mail, password} =useUser();
    return (
        <div>
            informacion del usuario
            {mail}
            {password}
        </div>
    );
}