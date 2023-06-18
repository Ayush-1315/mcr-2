import { useEffect } from "react"
import { useHealth } from "../../Context/heatlhContext";
import { HealthCard } from "../../Components/HeathCard/healthCard";

export const ArchivePage=()=>{
    useEffect(()=>{
        document.title="Archived Habits";
    },[]);
    const {archivedHabits}=useHealth();
    return <>Archive Habits
    {archivedHabits.length===0?<><h2>Nothing To show Here</h2></>:archivedHabits.map((habit,index)=><HealthCard habit={habit}key={index}/>)}
    </>
}