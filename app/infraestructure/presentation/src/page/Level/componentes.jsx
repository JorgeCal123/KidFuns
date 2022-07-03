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
    return(
        <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ speaker1 } alt='Kidfuns'/>
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
    return (
        <main className='level1'>
                <div>
                    <header>
                        <img src={ logo } alt='Kidfuns' className='logoprincipal'/>
                    </header>
                </div>
                <BotonCentrado>
                    <BotonCentrado>
                        <img src={ speaker1 } alt='Kidfuns'/>
                        <p>Selecciona la correcta</p>
                        <button type="button">3</button>
                        <button type="button">1</button>
                        <button type="button">2</button>
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