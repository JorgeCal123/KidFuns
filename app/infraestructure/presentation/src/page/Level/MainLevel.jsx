import { SelectLevel } from "./selectlevel";
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Level = () => {
    const location = useLocation();

    
    const [level, setLevel] = useState(location.state.level);
    const [materia, setmateria] = useState(location.state.materia);

    useEffect(() => {
      console.log("antes del user");
      setLevel(location.state.level);
      setmateria(location.state.materia);
      console.log("en kids" + level +"   " + materia);
    }, [location]);

    //const level = 'l1'
    //const materia = 'm1'
      return (
    <div className="mainLevels"> 
         <SelectLevel level={level} materia={materia}/>
     </div>
   );
}

export { Level };