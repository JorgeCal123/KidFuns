import React from "react";
import { SelectLevel } from "./selectlevel";


const Level = () => {
    const level = 'l1'
    const materia = 'm1'
      return (
    <div className="mainLevels"> 
         <SelectLevel level={level} materia={materia}/>
     </div>
   );
}

export { Level };