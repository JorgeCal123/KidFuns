import logo from '../../image/logos/logo7-4.PNG'
import lettera from '../../image/abecedario/a.png'
import micro from '../../image/logos/microphone.png'
import speaker from '../../image/logos/speaker.png'
import speaker1 from '../../image/logos/speaker2.png'
import conejo from '../../image/animales/conejo4.png'
import conejo1 from '../../image/animales/conejo5.png'
import conejo2 from '../../image/animales/conejo6.png'
import marco from '../../image/recursos/marco.png'
import { Formulario } from '../../elementos/Formularios1'
import CanvasDraw from 'react-canvas-draw'

function WeekDays(props) {
    switch (props.value) {
        case 1:
            return (
            <Formulario>
                <div className='two'>
                    <img src={ logo } alt='Kidfuns'/>
                </div>
                <div>
                    <p>Repite</p>
                    <div>
                        <img src={ lettera } alt='Kidfuns' className='logoa'/>
                        <img src={ speaker } alt='Kidfuns' className='logoa'/>
                    </div>
                    <p>Presiona</p>
                    <button type='button'><img src={ micro } alt='Kidfuns' className='logoa'/></button>
                </div>
                <div>
                    <img src={ conejo } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </Formulario>
            )
        case 2:
            return (
            <Formulario>
                <div className='two'>
                    <img src={ logo } alt='Kidfuns'/>
                </div>
                <div>
                    <div>
                        <img src={ speaker1 } alt='Kidfuns' className='logoa'/>
                        <p>Selecciona la correcta</p>
                        <button type="button">a</button>
                        <button type="button">z</button>
                        <button type="button">m</button>
                    </div>
                </div>
                <div>
                    <img src={ conejo1 } alt='Kidfuns'/>
                </div>
            </Formulario>
            )
        case 3:
            return ( 
            <Formulario>
                <div className='two'>
                    <img src={ logo } alt='Kidfuns'/>
                </div>
                <div>
                    <div>
                        <img src={ lettera} alt='Kidfuns' className='logoa'/>
                        <p>Dibuja</p>
                        <CanvasDraw brushRadius={3} brushColor={'red'} imgSrc={ marco }/>
                    </div>
                </div>
                <div>
                    <img src={ conejo2 } alt='Kidfuns'/>
                </div>
            </Formulario>)
        default:
            return <h2>Invalid Input</h2>
    }
}

export { WeekDays };