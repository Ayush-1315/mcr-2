import { useEffect, useState } from "react";
import { useHealth } from "../../Context/heatlhContext";
import { HealthCard } from "../../Components/HeathCard/healthCard";
import { HabitForm } from "../../Components/Habit Form/habitForm";

export const Home = () => {
  useEffect(() => {
    document.title = "Habits Tracker";
  }, []);
  const { nonArchivedHabits, dispatch } = useHealth();
  const [initialData, setInitialData] = useState({
    name: "",
    repeat: 0,
    goal: 0,
    time: 0,
    startDay: 0,
  });
  console.log(initialData);
  return (
    <>
      Habits Here
      <HabitForm
        onFinish={(data) => dispatch({ type: "ADD_NEW", payload: data })}
        {...initialData}
      />
      <div>
        {nonArchivedHabits.length === 0 ? (
          <>
            <h2>Nothing To Show Here</h2>
          </>
        ) : (
          nonArchivedHabits.map((habit, index) => (
            <HealthCard habit={habit} key={index} showArchiveBtn editValues={(data)=>setInitialData(data)}/>
          ))
        )}
      </div>
    </>
  );
};
