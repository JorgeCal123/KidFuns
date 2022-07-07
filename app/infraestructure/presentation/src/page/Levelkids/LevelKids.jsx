import imagen from '../../image/logos/logo7-4.PNG'
import imagen2 from '../../image/animales/osito1.png'
import len from '../../image/recursos/niños.png'
import num from '../../image/recursos/niños2.png'
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { Boton_Levels } from './botonLevels'
import './LevelKids.css'
const LevelKids = () => {
    const location = useLocation();
    const [kid, setKid] = useState(location.state.kid);
    const materia = ""
  return (
    <div className='backgroundlvl'>
        <div className='logo_seleccion7'>
            <div className='containerprin7'>
                <img src={ imagen } alt='' className='num'/>
            </div>
            <div className='textuser'>
                <h2 className='label1'>selecciona el nivel</h2>
            </div>
        </div>
        
        <div className='marco'>
            <div className='seleclv'>
                <div className='leng'>
                    <p>lenguaje</p>
                    <img src={ len } alt='' className='len'/>
                </div>
                    <div className='botones'>
                        <Boton_Levels m="m1"/>
                    </div>
                <div className='numb'>
                    <p>numeros</p>
                    <img src={ num } alt='' className='num'/>
                </div>
                
                    <div>
                        <Boton_Levels m="m2"/>
                    </div>
            </div>
            <div className='asideimgoso'>
                <div className='containerlgpri'>
                <img src={ imagen2 } alt='' className='lgpri'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export { LevelKids };
