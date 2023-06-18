import { v4 as uuid } from "uuid";
export const healthList=[
    {
     _id:uuid(),
    name:"Meditate",
    repeat:"Daily",
    goal:"Everyday",
    time:"Morning",
    startDay:"Today",
    archived:false
    },
    {
        _id:uuid(),
       name:"Read Books",
       repeat:"Daily",
       goal:"1 times daily",
       time:"Evening",
       startDay:"Tommorrow",
       archived:false
    },
    {
        _id:uuid(),
       name:"Code Project",
       repeat:"Daily",
       goal:"2 Times Daily",
       time:"Morning",
       startDay:"Today",
       archived:false
    },
    {
        _id:uuid(),
       name:"Do college assignments",
       repeat:"Weekly",
       goal:"3 times weekly",
       time:"Evening",
       startDay:"Tommorrow",
       archived:false
    },
    {
        _id:uuid(),
       name:"Read Books",
       repeat:"Daily",
       goal:"1 times daily",
       time:"Evening",
       startDay:"Tommorrow",
       archived:false
    },
    {
        _id:uuid(),
       name:"Do Stretching",
       repeat:"Daily",
       goal:"1 times daily",
       time:"Afternoon",
       startDay:"Today",
       archived:true
    },
  ];
export const healthReducerFun=(state,action)=>{
    const {type,payload} =action;
    switch(type)
    {
        case "ADD_NEW":
            const {name,repeat,goal,time,startDay}=payload;
            const newTask={
                _id:uuid(),
                name,repeat,goal,time,startDay,archived:false
            }
            console.log(newTask);
            return [...state,newTask];
        case "EDIT":return state.map((habit)=>habit._id===payload._id?{...payload}:habit)
        case "REMOVE":return state.filter(({_id})=>_id!==payload);
        case "ARCHIVE":return state.map(habit=>habit._id===payload?{...habit,archived:true}:habit)
        default: return state;
    }
}