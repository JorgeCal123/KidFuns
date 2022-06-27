import React, {useState, useEffect} from 'react'
import logo1 from '../../image/avatar/1.png';
import logo2 from '../../image/avatar/2.png';
import logo3 from '../../image/avatar/3.png';
import logo4 from '../../image/avatar/4.png';
import logo5 from '../../image/avatar/5.png';
import logo6 from '../../image/avatar/6.png';
import logo7 from '../../image/avatar/7.png';
import logo8 from '../../image/avatar/8.png';
import logo9 from '../../image/avatar/9.png';
//const kid_response = document.querySelector("#app")
//const tpl;



export function KidGrid(props) {
    const data = [
        {id:1, name:'Juan1', avatar:logo1 },
        {id:2, name:'Juan2', avatar:logo2 },
        {id:3, name:'Juan3', avatar:logo3 },
        {id:4, name:'Juan3', avatar:logo4 },
        {id:5, name:'Juan3', avatar:logo5 },
        {id:6, name:'Juan3', avatar:logo6 },
        {id:7, name:'Juan3', avatar:logo7 },
        {id:8, name:'Juan3', avatar:logo8 },
        {id:9, name:'Juan3', avatar:logo9 }

    ]
    const [kids, setKids] = useState()

    useEffect(() => {
        setKids(data)
    }, [])

    return (
        <ul>
            {   !kids ? 'cargando...' :
                kids.map( (kid,index) => {
                    return (
                    <li> 
                        {kid.name}
                        <button>
                        <img src= {kid.avatar} alt="hola" />
                        </button>
                    </li>
                    );
             })
            }
        </ul>       
    );
}



/**
export function KidGrid(props) {
    const API_URL = "http://44.204.57.239:8000/kid/"
    const [kids, setKids] = useState()
    const fetchApi = async () => {
        const response = await fetch(API_URL, {mode: 'no-cors'})
        const responseJSON = await response.json()
        setKids=(responseJSON)
        console.log(kids);
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <ul>
            {   !kids ? 'cargando...' :
                kids.map( (kid,index) => {
                    return <li key = {kid.id}> kid: {kid.name} </li>
             })
            }
        </ul>
    );
}

**/
