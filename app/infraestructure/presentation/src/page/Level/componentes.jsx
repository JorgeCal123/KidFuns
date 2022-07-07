import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Reconovoz } from '../Vozreconi/Reconovoz';

/**
 * generateRandomLetter - function that gives a random letter
 * returns: random letter
 */
function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

/**
 * generateRandomNumber - function that gives a random number
 * returns: random number
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 0;
}

/**
 * generateRandomIndex - function that generates a random position of an array
 * returns: random position
 */
function generateRandomIndex() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 0;
}

/**
 * Component1 - component that displays the language level 1 view
 * @logo: image with logo from Kidfun
 * @micro: image with micro
 * returns: level 1 view
 */
function Component1 ({logo,  micro }) {
    const materia = 'lenguaje';
    return (
        <div className="levels"> 
                <div className='conteinerlogolvs'>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipallvs'/>
                    </header>
                </div>
                <div className='enunciado'>
                    <div className="content">
                        <p className="text_shadows">¿Qué letra es?</p>
                    </div>
                    <Reconovoz micro={micro} materia={ materia }/>
                </div>
        </div>
    );
}

/**
 * Component2 - component that displays the language level 2 view
 * @logo: image with logo from Kidfun
 * @micro: image with micro
 * @etiq1: image with etiq1
 * @etiq2: image with etiq2
 * @etiq3: image with etiq3
 * returns: level 2 view
 */

function Component2({ logo, micro, etiq1, etiq2, etiq3 }){
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
            navigate('/levelkids')
        }
    }
    return(
        <div className='levels'>
            <div className='conteinerlogolvs'>
                <header className="App-header">
                    <img src={ logo } alt='Kidfuns' className='logoprincipallvs'/>
                </header>
            </div>
            <div className='enunciado'>
                <div className="content">
                    <p className="text_shadows">¿Qué letra es?</p>
                </div>
                <div className='label_letter'>
                    <p className="text_anime">{ LetterRandom }</p>
                </div>
                <div className='containermicro2'>
                    <div>
                        <button className='buttonspeaker1'>
                            <img src={ micro } alt='Kidfuns' className='sound'/>
                        </button>
                    </div>         
                    <div>
                        <p >Selecciona la correcta</p>
                    </div>
                    <div className='selectanswer'>
                        <button type="button" onClick={() => {handleClick( a, LetterRandom )}} className='glow-on-hover' >
                            <div className='song'>{ a }</div>
                            <div className='song1'><img src={ etiq1 } className='etiq'/></div>
                            
                        </button>
                        <button type="button" onClick={() => {handleClick( b, LetterRandom )}} className='glow-on-hover' >
                            <div className='song'>{ b }</div>
                            <div className='song1'><img src={ etiq2 } className='etiq'/></div>
                            
                        </button>
                        <button type="button" onClick={() => {handleClick( c, LetterRandom )}} className='glow-on-hover' >
                            <div className='song'>{ c }</div>
                            <div className='song1'><img src={ etiq3 } className='etiq'/></div>

                        </button>
                    </div>
                </div>
            </div>
            {/*<div>
                <img src={ conejo1 } alt='Kidfuns' className='logoprincipal'/>
            </div>*/}
        </div>
    );
}

/**
 * Component3 - component that displays the language level 3 view
 * @logo: image with logo from Kidfun
 * @lettera: image with the letter
 * @Boton: component with boton
 * @CanvasDraw: component with canvas
 * returns: level 3 view
 */

function Component3({ logo, lettera, Boton, CanvasDraw}) {
    const canvasRef = useRef(null);
        const download = async () => {
        const image = canvasRef.current.toDataURL('image/png');
        const blob = await (await fetch(image)).blob();
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = "image.png";
        link.click();
    }

    return (
        <div className='levels'>
            <div className='conteinerlogolvs'>
                <header className="App-header">
                    <img src={ logo } alt='Kidfuns' className='logoprincipallvs'/>
                </header>
            </div >

            <div className="content">
                <p className="text_shadows">Dibuja</p>
            </div>
            
            <div className='label_letter'>                
                <img src={ lettera } alt='Kidfuns' className='lettera'/>
            </div>
            {/*imgSrc={ marco } */}
            <div className='containercanvas'>
                <CanvasDraw 
                    className='canvas1'
                    brushRadius={3}
                    brushColor={'red'}
                    id="canvass" 
                    ref={canvasRef}/>
            </div>

            <div className='containerbotons'>
                {/*<button type="button" >Save as Image</button>*/}
                
                <Boton type="button" onClick={download} className='glow-on-hover2' >
                    verificar
                </Boton>
                <Boton type="button" onClick={download} className='glow-on-hover2' >
                    borrar
                </Boton>
            </div>
            
            {/*<div>
                <img src={ conejo2 } alt='Kidfuns' className='logoprincipal'/>
            </div>*/}
        </div>

    );
}

/**
 * Component4 - component that displays the number level 1 view
 * @logo: image with logo from Kidfun
 * @micro: image with micro
 * returns: level 1 view
 */
function Component4 ({ logo, micro }) {
    const materia = 'numero'
    return (
        <div className='levels'>
                <div className='conteinerlogolvs'>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipallvs'/>
                    </header>
                </div>
                <div className='enunciado'>
                    <div className="content">
                        <p className="text_shadows">¿Qué numero es?</p>
                    </div>
                    <Reconovoz micro={micro} materia={ materia }/>
                </div>

            </div>
    );
}

/**
 * Component5 - component that displays the number level 2 view
 * @logo: image with logo from Kidfun
 * @micro: image with micro
 * @etiq1: image with etiq1
 * @etiq2: image with etiq2
 * @etiq3: image with etiq3
 * returns: level 2 view
 */
function Component5 ({ logo, micro, etiq1, etiq2, etiq3}) {
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
        navigate('/levelkids')
    }
        }
    return (
        
        <div className='levels'>
                <div className='conteinerlogolvs'>
                    <header className="App-header">
                        <img src={ logo } alt='Kidfuns' className='logoprincipallvs'/>
                        <br></br>
                    </header>
                </div>

        
            <div className='enunciado'>
                <div className="content">
                    <p className="text_shadows">¿Qué Numero es?</p>
                </div>
                <div className='label_letter'>
                     <p class="text_anime">{ NumberRandom }</p>
                </div>

                <div className='containermicro2'>
                    <div>
                        <button className='buttonspeaker1'>
                            <img src={ micro } alt='Kidfuns' className='sound'/>
                        </button>
                    </div>
                    <div>
                        <p >Selecciona la correcta</p>
                    </div>
                    <div className='selectanswer'>
                        <button type="button" onClick={() => {handleClick( a, NumberRandom )}} className='glow-on-hover' >
                            <div className='song'>{ a }</div>
                            <div className='song1'><img src={ etiq1 } className='etiq'/></div>
                        </button>
                        <button type="button" onClick={() => {handleClick( b, NumberRandom )}} className='glow-on-hover' >
                            <div className='song'>{ b }</div>
                            <div className='song1'><img src={ etiq2 } className='etiq'/></div>
                            
                        </button>
                        <button type="button" onClick={() => {handleClick( c, NumberRandom )}} className='glow-on-hover' >
                            <div className='song'>{ c }</div>
                            <div className='song1'><img src={ etiq3 } className='etiq'/></div>

                        </button>

                    </div>
                </div>
            </div>

                {/*<div>
                    <img src={ conejo1 } alt='Kidfuns' className='logoprincipal'/>
    </div>*/}
            </div>
    );
}


/**
 * Component6 - component that displays the number level 3 view
 * @logo: image with logo from Kidfun
 * @numero: image with the number
 * @Boton: component with boton
 * @CanvasDraw: component with canvas
 * returns: level 3 view
 */
function Component6({ logo, numero, Boton, CanvasDraw}) {
    const canvasRef = useRef(null);
        const download = async () => {
        const image = canvasRef.current.toDataURL('image/png');
        const blob = await (await fetch(image)).blob();
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = "image.png";
        link.click();
    }

    return (
        <div className='levels'>
            <div className='conteinerlogolvs'>
                <header className="App-header">
                    <img src={ logo } alt='Kidfuns' className='logoprincipallvs'/>
                </header>
            </div >

            <div className="content">
                <p className="text_shadows">Dibuja</p>
            </div>
            
            <div className='label_letter'>                
                <img src={ numero } alt='Kidfuns' className='number'/>
            </div>
            <div className='containercanvas'>
                <CanvasDraw 
                    className='canvas1'
                    brushRadius={3}
                    brushColor={'red'}
                    id="canvass" 
                    ref={canvasRef}/>
            </div>

            <div className='containerbotons'>
                
                <Boton type="button" onClick={download} className='glow-on-hover2' >
                    verificar
                </Boton>
                <Boton type="button" onClick={download} className='glow-on-hover2' >
                    borrar
                </Boton>
            </div>
            
        </div>

    );
}


export { Component1, Component2, Component3, Component4, Component5, Component6, generateRandomLetter, generateRandomNumber };