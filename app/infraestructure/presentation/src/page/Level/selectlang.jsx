import logo from '../../image/logos/logo7-4.PNG'
import lettera from '../../image/letter/a.png'
import micro from '../../image/logos/microphone.png'
import speaker from '../../image/logos/speaker.png'
import speaker1 from '../../image/logos/speaker2.png'
import conejo from '../../image/animales/conejo4.png'
import conejo1 from '../../image/animales/conejo5.png'
import conejo2 from '../../image/animales/conejo6.png'
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
                    <img src={ micro } alt='Kidfuns' className='logoa'/>
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
                        <CanvasDraw brushRadius={3} brushColor={'red'}/>
                    </div>
                </div>
                <div>
                    <img src={ conejo2 } alt='Kidfuns'/>
                </div>
            </Formulario>)
        case 4:
            return <h2>Today is Tuesday</h2>
        case 5:
            return <h2>Today is Wednesday</h2>
        case 6:
            return <h2>Today is Thursday</h2>
        case 7:
            return <h2>Today is Friday</h2>
        default:
            return <h2>Invalid Input</h2>
    }
}

export { WeekDays };