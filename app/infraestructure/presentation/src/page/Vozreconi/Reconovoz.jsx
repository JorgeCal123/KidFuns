import React, { useState, useEffect } from 'react'
import { generateRandomLetter } from '../Level/componentes'

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
function Reconovoz({ micro }) {
  
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  const [leter , setLeter] = useState(generateRandomLetter())
  const [Correcta, setCorrect] = useState(0)
  const [Fallaste, setFalse] = useState(0)

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
    if (note === leter){
      setLeter(generateRandomLetter())
      alert('bien')
    }
    if (note !== leter){
      setLeter(generateRandomLetter())
      alert('bien')
    }
    }
    

  return (
    <>
    <div className="content">
        <p className="text_shadows">{ leter }</p>
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