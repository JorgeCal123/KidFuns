import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../estilos_viejos.css'

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function generateRandomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 0;
}

function generateRandomIndex() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}

function Component1 ({logo, letter, speaker, Formulario, micro, conejo }) {
    return (
        <main className='level1'>
                <div>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <div className='level1'>
                    <div class="content">
                        <p class="text_shadows">Repite</p>
                    </div>
                    <Formulario>
                            <img src={ letter } alt='Kidfuns' className='lettera'/>
                            <div>
                                 <img src={ speaker } alt='Kidfuns' className='speaker1'/>
                            </div>
                           
                    </Formulario>
                    <div class="content">
                        <p class="text_shadows">Presiona</p>
                    </div>
                    <button type='button' className='button5'><img src={ micro } alt='Kidfuns' className='speaker1'/></button>
                </div>
                <div>
                    <img src={ conejo } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
    );
}

function Component2({ logo, speaker1, BotonCentrado, conejo1 }){
    const a = generateRandomLetter()
    const b = generateRandomLetter()
    const c = generateRandomLetter()
    const list = [a, b, c]
    const LetterRandom = list[generateRandomIndex()]
    const [Correcta, setCorrect] = useState(0)
    const [Fallaste, setFalse] = useState(0)
    const navigate = useNavigate('/levelkids')
function handleClick(e, LetterRandom){
    if (LetterRandom ===  e){
        setCorrect(Correcta + 1);
        alert(`true, ${ Correcta } ${ e }`);
    }
    if (LetterRandom !==  e) {
        setFalse(Fallaste + 1);
        alert(`false, ${ Fallaste } ${ e }`);
    }
    if (Correcta === 6){
        navigate('/loginkids')
    }
        }
    return(
        <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                        <p className="text_anime">{ LetterRandom }</p>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ speaker1 } alt='Kidfuns'/>
                        <p>Selecciona la correcta</p>
                        <button type="button" onClick={() => {handleClick( a, LetterRandom )}} className='glow-on-hover' style={{ color: 'blue' }}>{ a }</button>
                        <button type="button" onClick={() => {handleClick( b, LetterRandom )}} className='glow-on-hover' style={{ color: 'blue' }}>{ b }</button>
                        <button type="button" onClick={() => {handleClick( c, LetterRandom )}} className='glow-on-hover' style={{ color: 'blue' }}>{ c }</button>
                    </BotonCentrado>
                </BotonCentrado>
                <div>
                    <img src={ conejo1 } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
    );
}

function Component3({ logo, lettera, marco, conejo2, BotonCentrado, CanvasDraw}) {
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
            </main>

    );
}

function Component4 ({ logo, numero, mano, micro, speaker, Formulario, conejo }) {
    return (
        <main className='level1'>
                <div>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <div className='level1'>
                    <div class="content">
                        <p class="text_shadows">Repite</p>
                    </div>
                    <Formulario>
                            <img src={ numero } alt='Kidfuns' className='lettera'/>
                            <div>
                                 <img src={ speaker } alt='Kidfuns' className='speaker1'/>
                            </div>
                            <div>
                                <img src={ mano } alt='Kidfuns' className='lettera'/>
                            </div>
                           
                    </Formulario>
                    <div class="content">
                        <p class="text_shadows">Presiona</p>
                    </div>
                    <button type='button' className='button5'><img src={ micro } alt='Kidfuns' className='speaker1'/></button>
                </div>
                <div>
                    <img src={ conejo } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
    );
}

function Component5 ({ logo, speaker1, BotonCentrado, conejo1}) {
    const a = generateRandomNumber()
    const b = generateRandomNumber()
    const c = generateRandomNumber()
    const list = [ a, b, c]
    const NumberRandom = list[generateRandomIndex()]
    const [Correcta, setCorrect] = useState(0)
    const [Fallaste, setFalse] = useState(0)
    const navigate = useNavigate('/levelkids')
function handleClick(e, NumberRandom){
    if (NumberRandom ===  e){
        setCorrect(Correcta + 1);
        alert(`true, ${ Correcta } ${ e }`);
    }
    if (NumberRandom !==  e) {
        setFalse(Fallaste + 1);
        alert(`false, ${ Fallaste } ${ e }`);
    }
    if (Correcta === 6){
        navigate('/loginkids')
    }
        }
    return (
        
        <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                        <br></br>
                        <h1>{ NumberRandom }</h1>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ speaker1 } alt='Kidfuns'/>
                        <p>Selecciona la correcta</p>
                        <button type="button" onClick={() => {handleClick( a, NumberRandom )}}>{ a }</button>
                        <button type="button" onClick={() => {handleClick( b, NumberRandom )}}>{ b }</button>
                        <button type="button" onClick={() => {handleClick( c, NumberRandom )}}>{ c }</button>
                    </BotonCentrado>
                </BotonCentrado>
                <div>
                    <img src={ conejo1 } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
    );
}

function Component6 ({ logo, numero, marco, CanvasDraw, BotonCentrado, conejo2 }) {
    return (
        <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ numero } alt='Kidfuns' className='logoa'/>
                        <p>Dibuja</p>
                        <div>
                            <CanvasDraw brushRadius={3} brushColor={'red'} imgSrc={ marco }/>
                        </div>
                    </BotonCentrado>
                </BotonCentrado>
                <div>
                    <img src={ conejo2 } alt='Kidfuns' className='logoprincipal'/>
                </div>
            </main>
    );
}

export { Component1, Component2, Component3, Component4, Component5, Component6 };