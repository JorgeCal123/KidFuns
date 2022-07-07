import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function GetImage(props) {

const a =("../.." + props.ruta);
const image = require("../../image/avatar/1.png");

    return (    
        <div>
            <img src ={ require("../../image/avatar/1.png")} alt="hola" />
        </div>
);
}


export function Kidbutton({item}) {
  let history = useNavigate();

  const location = useLocation();
  const [useractual, setUseractual] = useState(location.state.user);

  const onsubmit = (e) => {
    history('/levelkids', { state: { kid: item.id } });
  }

  if (item.user === useractual) {

    return (
      <button className='containerbutton' key={item.id} type="submit" onClick={onsubmit}>
      {item.name}
       <GetImage ruta={item.avatar} />
     </button>
   
    );

  }
}

export function KidGrid(props) {
  let history = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios({
      url: "http://127.0.0.1:8000/kid/",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
      });
  }, [setList]);

  return (
    <div className="App">
      <ul>
        {list.map((item) => (
          <div key= {item.id}>
            <Kidbutton item={item} />
          </div>

      ))}
      </ul>
    </div>
  );
}
