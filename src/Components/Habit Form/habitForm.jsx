import { useState } from "react";

export const HabitForm = ({
  name = "",
  repeat = "Daily",
  goal = 0,
  time = 0,
  startDay = 0,
  onFinish
}) => {
    console.log(name,repeat,goal,time,startDay)
  const [formData, setFormData] = useState({
    name,
    repeat,
    goal,
    time,
    startDay,
  });

  const defaultOptions = [
    "Select",
    "1 times daily",
    "1 time weekly",
    "1 time monthly",
  ];
  const dailyOptions = [
    "Select",
    "1 times daily",
    "2 times daily",
    "3 times daily",
  ];
  const weeklyOptions = [
    "Select",
    "1 times weekly",
    "2 times weekly",
    "3 times weekly",
  ];
  const monthlyOptions = [
    "Select",
    "1 times monthly",
    "2 times monthly",
    "3 times monthly",
  ];
  const [showOptions, setShowOptions] = useState(defaultOptions);
  const changeHandler = (type, value) => {
    if (type !== "goal") {
      setFormData({ ...formData, [type]: value });
    } else {
      setFormData({ ...formData, goal: showOptions[value] });
    }
    switch (value) {
      case "Daily":
        setShowOptions(dailyOptions);
        break;
      case "Weekly":
        setShowOptions(weeklyOptions);
        break;
      case "Monthly":
        setShowOptions(monthlyOptions);
        break;
      default:
        setShowOptions(defaultOptions);
    }
  };
  const submitForm=(e)=>{
    e.preventDefault();
    typeof(onFinish)==='function' && onFinish(formData);
    setFormData({name:"",
        repeat:0,
        goal:0,
        time:0,
        startDay:0})
        e.target.reset();
  }
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">NAME</label>
      <input
        type="text"
        placeholder="name"
        id="name"
        name="name"
        defaultValue={name}
        onChange={(e) => changeHandler("name", e.target.value)}
      />
      <label htmlFor="repeat">REPEAT</label>
      <select
        name="repeat"
        id="repeat"
        defaultValue={repeat}
        onChange={(e) => changeHandler("repeat", e.target.value)}
      >
        <option value="0" disabled>
          Select
        </option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
      <label htmlFor="goal">GOAL</label>
      <select
        name="goal"
        id="goal"
        defaultValue={goal}
        onChange={(e) => changeHandler("goal", e.target.value)}
      >
        {showOptions.map((optionText, index) => (
          <option key={index} disabled={index === 0} value={index}>
            {optionText}
          </option>
        ))}
      </select>
      <label htmlFor="time">TIME  OF DAY</label>
      <select name="time" id="time" onChange={(e)=>changeHandler("time",e.target.value)} defaultValue={time}>
        <option value="0" disabled>Select</option>
        <option value="Anytime">Anytime</option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
        <option value="Night">Night</option>
      </select>
      <label htmlFor="startDay">START DATE</label>
      <select name="startDay" id="startDay" onChange={(e)=>changeHandler("startDay",e.target.value)} defaultValue={startDay}>
            <option value="0" disabled>Select</option>
            <option value="Today">Today</option>
            <option value="Tommorow">Tommorow</option>
      </select>
      <input type="submit" placeholder="submit"/>
    </form>
  );
};
