import React from "react";
import { SelectLevel } from "./selectlevel";


const Level = () => {
    const level = 'l2'
    const materia = 'm1'
      return (
    <div> 
         <SelectLevel level={level} materia={materia}/>
     </div>
   );
}

export { Level };