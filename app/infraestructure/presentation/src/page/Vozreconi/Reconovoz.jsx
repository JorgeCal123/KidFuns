import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateRandomLetter, generateRandomNumber } from '../Level/componentes'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'ES'

const infoprogress = {};

export function add_infoprogress(key2, value) {
  alert(key2, value)
    infoprogress[key2] = value;
}

export function get_infoprogress() {
    return (infoprogress)
}
function Reconovoz({ micro, materia }) {
  
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  const [leter , setLeter] = useState('')
  const [Correcta, setCorrect] = useState(1)
  const [Fallaste, setFalse] = useState(1)
  const navigate = useNavigate('/levelkids')

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
    let value = note.toLowerCase();
    if (note === 'uno' && materia === 'numero'){
      setLeter(generateRandomNumber())
      setCorrect(Correcta + 1)
      alert(`true, ${ note } ${ leter }`);
    }
    else if (value === leter && materia === 'lenguaje'){
      setLeter(generateRandomLetter())
      setCorrect(Correcta + 1)
      alert(`true, ${ value } ${ leter }`);
    }
    else if (Number(note) === leter && materia === 'numero'){
      setLeter(generateRandomNumber())
      setCorrect(Correcta + 1)
      alert(`true, ${ note } ${ leter }`);
    }
    else if (value !== leter && materia === 'lenguaje'){
      setLeter(generateRandomLetter())
      setFalse(Fallaste + 1)
      alert(`False, ${ value } ${ leter }`);
    }
    else if (Number(note) !== leter && materia === 'numero'){
      setLeter(generateRandomNumber())
      setFalse(Fallaste + 1)
      alert(`False, ${ typeof(note) } ${ typeof(leter) }`);
    }
    if (Correcta === 6){
        navigate('/loginkids')
    }
    }
    

  return (
    <>
    <div className="content">
        <p className="text_shadows">{ leter }</p>
    </div>
    <div className='enunciado2' >
      <p className="text_shadows">Presiona</p>
    </div>
      <div className="containermicro">
        
        <div className="box">
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          
          <button className='buttonspeaker1' onClick={() => setIsListening(prevState => !prevState)}>
              <img src={ micro } alt='' className='speaker1'/>
          </button>
        </div>
        <div className="box">
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  )
}

export { Reconovoz };