import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const info = {};

export function add_info(key2, value) {
    info[key2] = value;
}

export function get_info() {
    return (info)
}

export function Validation_data() {

    Axios.get("http://127.0.0.1:8000/user/")
      .then((respuesta) => {
          respuesta.data.map( (item) => {
            
            if ((item.email === info.email) && (item.password === info.password)){
                console.log(item.email +" === " + info.email +" &&" + item.password +" === " + info.password);
                console.log("entra");
                valor = true;
                return(valor2)
            }
              /*if ((item.email === info.email) && (item.password === info.password)){
                console.log(item.email +" === " + info.email +" &&" + item.password +" === " + info.password);
                Valor = 'true';
              }*/
          })
      })
      .catch(() => {
        console.log("src/componentes_formularios/data_formulario1 error en request Axios method validation data")
      })


      return(valor)

   /* List.map(function (current) {
      console.log(current)
    
    })*/
}