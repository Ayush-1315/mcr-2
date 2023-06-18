import { useHealth } from "../../Context/heatlhContext"

export const HealthCard=({habit,showArchiveBtn,editValues})=>{
    const {_id,name,time,startDay}=habit;
    const {dispatch} =useHealth();
    return <div>
        <h2>{name}</h2>
        <p>{time}</p>
        <p>{startDay}</p>
        <button onClick={()=>dispatch({type:"REMOVE",payload:_id})}>Remove Habit</button>
        <button onClick={()=>editValues(habit)}>Edit</button>
        {showArchiveBtn && <button onClick={()=>dispatch({type:"ARCHIVE",payload:_id})}>ARCHIVE </button>}
    </div>
}