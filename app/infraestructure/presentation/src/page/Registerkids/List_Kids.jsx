import React, { useState } from 'react';
import './Register_kids.css'
const info = [];
const objKids = [];
const kid = {};


/**
 * Add_Kids - add the object kid
 * @props: object kid  
 */
export function Add_Kids (props) {
    info.push(props)
}

/**
 * obj_Kids - add the id kid and add level
 * @data: id from kid
 */
export function obj_Kids ({data}) {
    objKids.push(data.id)
    add_Level();
}

/**
 * getuser - get object kid
 * @return: object kid
 */

export function getuser () {
    return (kid);
}

/**
 * getuser - component that show list of kids
 * @return: view with all kids
 */


export function List_Kids () {
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

/**
 * Register_all_kids - function that register all kids in the Apis
 * @return: void
 */

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
              fetch('http://127.0.0.1:8000/kid/', requestOptions)
                .then(response => response.json())                
                .then(
                    data => obj_Kids({data})
                    
                    );
    })
    }
    const add_Level = () =>{

        availableLevel({stage:1, lvl:"l1", type:"m1"});
        availableLevel({stage:1, lvl:"l2", type:"m1"});
        availableLevel({stage:1, lvl:"l3", type:"m1"});
        availableLevel({stage:1, lvl:"l1", type:"m2"});
        availableLevel({stage:1, lvl:"l2", type:"m2"});
        availableLevel({stage:1, lvl:"l3", type:"m2"});
    }

/**
 * availableLevel - function that register all levels in the Apis
 * @stage: staage block or desblock level
 * lvl: level that register to each kid
 * type: game stuff
 * @return: void
 */

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
              fetch('http://127.0.0.1:8000/level/', requestOptions)
                .then(response => response.json())
    })
    
}