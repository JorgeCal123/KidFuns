import React, {useState, useEffect} from 'react'
import { KidCard } from "./KidCard"
import Axios from 'axios';
//import styles from'./Loginkids.css'


function GetImage(props) {

const a =("../.." + props.ruta);
console.log(a);
const image = require("../../image/avatar/1.png");

    return (    
        <div>
            <img src ={require("../../image/avatar/1.png")} alt="hola" />
            {/*<img src ={require("../.." + props.ruta)} alt="" />*/}

        </div>
);
}

export function KidGrid(props) {

  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://127.0.0.1:8000/kid/",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <button key={item.id}>
           {item.name}
            <GetImage ruta={item.avatar} />
          </button>
        ))}
      </ul>
    </div>
  );
}
