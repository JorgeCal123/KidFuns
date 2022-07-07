import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


/**
 * GetImage - shows each child's profile picture
 * @props: image path
 * @return: componen with image
 */
function GetImage(props) {

const a =("../.." + props.ruta);
const image = require("../../image/avatar/1.png");

    return (    
        <div>
            <img src ={ require("../../image/avatar/1.png")} alt="hola" />
        </div>
);
}

/**
 * Kidbutton - component that displays the buttons in profile form
 * @item: id of kid 
 * @return: buton of each kid
 */


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


/**
 * KidGrid - component that displays in the form of columns and rows
 * @item: id of kid 
 * @return: buton of each kid
 */

export function KidGrid() {
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
