import { useEffect, useState } from "react";
import { useHealth } from "../../Context/heatlhContext";
import { HealthCard } from "../../Components/HeathCard/healthCard";
import { HabitForm } from "../../Components/Habit Form/habitForm";
import home from './home.module.css';

export const Home = () => {
  useEffect(() => {
    document.title = "Habits Tracker";
  }, []);
  const [showForm,setShowForm]=useState(false);
  const { nonArchivedHabits, dispatch } = useHealth();
  const [initialData, setInitialData] = useState({
    _id: 0,
    name: "",
    repeat: 0,
    goal: 0,
    time: 0,
    startDay: 0,
    edit: false,
  });
  return (
    <>

      { showForm && <HabitForm
        onFinish={(data) => {
            dispatch({ type: "ADD_NEW", payload: data });
            setShowForm(false)
        }}
        onEdit={(data) => {
          dispatch({ type: "EDIT", payload: data });
            setInitialData({
              _id: 0,
              name: "",
              repeat: 0,
              goal: 0,
              time: 0,
              startDay: 0,
              edit: false,
            });
        setShowForm(false)
        }}
        {...initialData}
      />}
      <div className="habitsContainer">
        {nonArchivedHabits.length === 0 ? (
          <>
            <h2>Nothing To Show Here</h2>
          </>
        ) : (
          nonArchivedHabits.map((habit, index) => (
            <HealthCard
              habit={habit}
              key={index}
              showArchiveBtn
              editValues={(data) => {
                setInitialData(data);
                setShowForm(true);
            }}
            />
          ))
        )}
      </div>
      <button className={home.btn} onClick={()=>setShowForm(true)}>Add new Habit</button>
    </>
  );
};
