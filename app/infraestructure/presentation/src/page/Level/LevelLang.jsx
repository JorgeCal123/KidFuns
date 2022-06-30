import React from "react";
import { WeekDays } from "./selectlang";


const Level = () => {
    const state = 'a1'
      return (
    <div> 
         <WeekDays value={state} />
     </div>
   );
}

export { Level };