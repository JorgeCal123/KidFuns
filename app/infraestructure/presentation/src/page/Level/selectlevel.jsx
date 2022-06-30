import { Level1 } from './Level1'
import { Level2 } from './Level2'
import { Level3 } from './level3'
function SelectLevel({ level, materia }) {
    switch (level) {
        case 'a1':
            return <Level1 materia={ materia }/>
        case 'a2':
            return <Level2 materia={ materia }/>
        case 'a3':
            return <Level3 materia={ materia }/>
        default:
            return <h2>Invalid Input</h2>
    }
}

export { SelectLevel };