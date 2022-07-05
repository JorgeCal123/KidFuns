import imagen from '../../image/logos/logo7-4.PNG'
import imagen2 from '../../image/animales/osito1.png'
import { Boton_Levels } from './botonLevels'
import { Boton, Formulario } from '../../elementos_formulario/Formularios1'
import './LevelKids.css'
const LevelKids = () => {
 
  return (
    <div className='mainLevel'>
      <div>
        <img src={ imagen } alt='' className='logoprincipal'/>
      </div>
      <div>
        <h2>selecciona el nivel</h2>
      </div>

        
        <div className='marco'>
          <p>lenguaje</p>
          <div className='botones'>
          <Boton_Levels />
          </div>
          <p>numeros</p>
          <div>
            <Boton_Levels />
          </div>
        </div>
        <div>
          <img src={ imagen2 } alt='' className='logoprincipal'/>
        </div>
    </div>
  );
}

export { LevelKids };
