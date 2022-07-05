import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route } from "react-router-dom";

import Logo from "../../image/logos/logo_principal.png"

import { Kid } from './kid';
import './Register_kids.css'
const info = [];

export function Add_Kids (props) {
    console.log("se agrega " + props)
    info.push(props)

}

export function List_Kids () {
    console.log(info)
    return (
        <div>
            <div className='title'>
                 <h1>Lista de Niños</h1>
            </div>
            <div>
                {info.map( (item, index) => {
                    return (
                        <div key={index}>
                            {item.n}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}



export function Register_all_kids() {

    info.map( (item, index) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: item.n,
                  age: item.a,
                  avatar: '1.jpg',
                  user: item.i
                })
              };
              console.log(requestOptions);
              fetch('http://127.0.0.1:8000/kid/', requestOptions)
                .then(response => response.json())                
                .then(
                    data => console.log('respuesta', data)
                    );
            

    })
    
}
