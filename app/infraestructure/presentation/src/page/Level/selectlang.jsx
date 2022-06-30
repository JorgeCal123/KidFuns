import logo from '../../image/logos/logo7-4.PNG'
import lettera from '../../image/abecedario/a.png'
import micro from '../../image/logos/microphone.png'
import speaker from '../../image/logos/speaker.png'
import speaker1 from '../../image/logos/speaker2.png'
import conejo from '../../image/animales/conejo4.png'
import conejo1 from '../../image/animales/conejo5.png'
import conejo2 from '../../image/animales/conejo6.png'
import marco from '../../image/recursos/marco.png'
import CanvasDraw from 'react-canvas-draw'
import { BotonCentrado } from '../../elementos/Formularios1'
function WeekDays(props) {
    switch (props.value) {
        case 'a1':
            return (
            <main className='level1'>
                <div>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <div>
                    <p>Repite</p>
                    <div>
                            <img src={ lettera} alt='Kidfuns' className='logoa'/>
                            <img src={ speaker } alt='Kidfuns' className='sonido'/>
                    </div>
                    <p>Presiona</p>
                    <button type='button'><img src={ micro } alt='Kidfuns' className='sonido'/></button>
                </div>
                <div>
                    <img src={ conejo } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
            )
        case 'a2':
            return (
            <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ speaker1 } alt='Kidfuns' className='sonido'/>
                        <p>Selecciona la correcta</p>
                        <button type="button">a</button>
                        <button type="button">z</button>
                        <button type="button">m</button>
                    </BotonCentrado>
                </BotonCentrado>
                <div>
                    <img src={ conejo1 } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
            )
        case 'a3':
            return ( 
            <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ lettera} alt='Kidfuns' className='logoa'/>
                        <p>Dibuja</p>
                        <div>
                            <CanvasDraw brushRadius={3} brushColor={'red'} imgSrc={ marco }/>
                        </div>
                    </BotonCentrado>
                </BotonCentrado>
                <div>
                    <img src={ conejo2 } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>)
        default:
            return <h2>Invalid Input</h2>
    }
}

export { WeekDays };