import { useHealth } from "../../Context/heatlhContext"
import HabitCard from './habitCard.module.css';
export const HealthCard=({habit,showArchiveBtn,editValues})=>{
    const {_id,name,time,startDay}=habit;
    const {dispatch} =useHealth();
    return <div className={HabitCard.hcard}>
        <div className={HabitCard.detailsContainer}>
        <h2>{name}</h2>
        <p>{time}</p>
        <p>{startDay}</p>
        <div className={HabitCard.buttonContainer}>
        <button onClick={()=>dispatch({type:"REMOVE",payload:_id})}>Remove Habit</button>
        <button onClick={()=>editValues({...habit,edit:true})}>Edit</button>
        {showArchiveBtn && <button onClick={()=>dispatch({type:"ARCHIVE",payload:_id})}>ARCHIVE </button>}
        </div>
        </div>
    </div>
}