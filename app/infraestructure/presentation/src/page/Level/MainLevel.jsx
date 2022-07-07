import { SelectLevel } from "./selectlevel";
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MainLevel.css'

const Level = () => {
    const location = useLocation();

    
    const [level, setLevel] = useState(location.state.level);
    const [materia, setmateria] = useState(location.state.materia);

      return (
         <SelectLevel level={level} materia={materia}/>
   );
}


export { Level };