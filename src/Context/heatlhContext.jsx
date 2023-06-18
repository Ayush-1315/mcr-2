import { createContext,useContext, useReducer} from "react";
import { healthList, healthReducerFun } from "../reducers/heatlhReducer";
const HealthContext=createContext();
export const HealthProvider=({children})=>{
    const [habitsList,dispatch]=useReducer(healthReducerFun,healthList);
    const nonArchivedHabits=habitsList.filter(({archived})=>!archived);
    const archivedHabits=habitsList.filter(({archived})=>archived);
    return <HealthContext.Provider value={{habitsList,dispatch,archivedHabits,nonArchivedHabits}}>{children}</HealthContext.Provider>
}
export const useHealth=()=>useContext(HealthContext);