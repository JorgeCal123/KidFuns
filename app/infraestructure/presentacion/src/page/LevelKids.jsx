import imagen from '../image/logos/logo7-4.PNG'
import imagen2 from '../image/animales/osito1.png'
import { Boton, Formulario } from '../elementos/Formularios1';
const LevelKids = () => {
 
  return (
    <main>
      <div>
        <img src={ imagen } alt='' className='logoprincipal'/>
      </div>
      <div>
        <h2>selecciona el nivel</h2>
      </div>
      <Formulario>
        
        <div className='marco'>
          <p>lenguaje</p>
          <div className='botones'>
            <Boton type='button'>1</Boton>
            <Boton type='button'>2</Boton>
            <Boton type='button'>3</Boton>
            <Boton type='button'>4</Boton>
            <Boton type='button'>5</Boton>
            <Boton type='button'>6</Boton>
            <Boton type='button'>7</Boton>
            <Boton type='button'>8</Boton>
            <Boton type='button'>9</Boton>
            <Boton type='button'>10</Boton>
          </div>
          <p>numeros</p>
          <div>
            <Boton type='button'>1</Boton>
            <Boton type='button'>2</Boton>
            <Boton type='button'>3</Boton>
            <Boton type='button'>4</Boton>
            <Boton type='button'>5</Boton>
            <Boton type='button'>6</Boton>
            <Boton type='button'>7</Boton>
            <Boton type='button'>8</Boton>
            <Boton type='button'>9</Boton>
            <Boton type='button'>10</Boton>
          </div>
        </div>
        <div>
          <img src={ imagen2 } alt='' className='logoprincipal'/>
        </div>
      </Formulario>
    </main>
  );
}

export { LevelKids };
