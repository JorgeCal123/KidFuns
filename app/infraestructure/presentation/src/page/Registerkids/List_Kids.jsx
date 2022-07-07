import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route } from "react-router-dom";

import Logo from "../../image/logos/logo_principal.png"

import { Kid } from './kid';
import './Register_kids.css'
const info = [];
const objKids = [];

const kid = {};

export function Add_Kids (props) {
    console.log("se agrega " + props)
    info.push(props)
}


export function obj_Kids ({data}) {
    console.log("se agrega un kid con id " + data.id)
    objKids.push(data.id)
    a();

}


export function getuser () {
    return (kid);
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


const new_kid = {};

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
                    data => obj_Kids({data})
                    
                    );
            

    })
    
    
    }

    const a = () =>{
        availableLevel({stage:1, lvl:"l1", type:"m1"});
        availableLevel({stage:1, lvl:"l2", type:"m1"});
        availableLevel({stage:1, lvl:"l3", type:"m1"});
        availableLevel({stage:1, lvl:"l1", type:"m2"});
        availableLevel({stage:1, lvl:"l2", type:"m2"});
        availableLevel({stage:1, lvl:"l3", type:"m2"});
    } 

export function availableLevel({ stage, lvl, type}) {

    objKids.map( (item, index) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                stage: stage,
                lvl: lvl,
                type: type,
                kid: item
                })
              };
              console.log(requestOptions);
              fetch('http://127.0.0.1:8000/level/', requestOptions)
                .then(response => response.json())                
                .then(
                    data => console.log("esta mal  "+ data)
                    
                    );
        

    })
    
}