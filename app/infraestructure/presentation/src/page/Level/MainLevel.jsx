import React from "react";
import { SelectLevel } from "./selectlevel";


const Level = () => {
    const level = 'l3'
    const materia = 'm2'
      return (
    <div> 
         <SelectLevel level={level} materia={materia}/>
     </div>
   );
}

export { Level };