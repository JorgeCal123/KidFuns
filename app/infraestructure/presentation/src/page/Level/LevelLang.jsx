import React from "react";
import { WeekDays } from "./selectlang";


const Level = () => {
    const state = 'a2'
      return (
    <div> 
         <WeekDays value={state} />
     </div>
   );
}

export { Level };