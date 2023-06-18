import { useEffect } from "react"
import { useHealth } from "../../Context/heatlhContext";
import { HealthCard } from "../../Components/HeathCard/healthCard";
import archive from "./archive.module.css"
export const ArchivePage=()=>{
    useEffect(()=>{
        document.title="Archived Habits";
    },[]);
    const {archivedHabits}=useHealth();
    return <>
    {archivedHabits.length===0?<><h2>Nothing To show Here</h2></>:<div className={archive.archivedContainer}>
    <h2>Archived Habits</h2>
    {archivedHabits.map((habit,index)=><HealthCard habit={habit}key={index}/>)}
    </div>}
    </>
}