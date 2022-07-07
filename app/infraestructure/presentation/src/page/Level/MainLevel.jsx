import { SelectLevel } from "./selectlevel";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MainLevel.css'

/**
 * Level - main view that selects the level and subject
 * @Return: component that shows the view depending on the level and matter
 */

const Level = () => {
    const location = useLocation();
    const [level, setLevel] = useState(location.state.level);
    const [materia, setmateria] = useState(location.state.materia);
      return (
         <SelectLevel level={level} materia={materia}/>
   );
}


export { Level };