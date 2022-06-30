import React from "react";
import { WeekDays } from "./selectlang";


const Level = () => {
    const state = 'a3'
      return (
    <div> 
         <WeekDays value={state} />
     </div>
   );
}

export { Level };