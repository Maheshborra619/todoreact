import {useState} from "react";
import Header from './Components/Header'
import { Tasks } from './Components/Tasks';
import AddTask from './Components/AddTask';


function App() {
  const [tasks,setTasks] = useState([{
    id: 1,
    text: "mahesh1",
    day: "monday",
    reminder: true,
  },
  {
    id: 2,
    text: "mahesh2",
    day: "tuesday",
    reminder: true,
  },
  {
    id: 3,
    text: "mahesh3",
    day: "wednesday",
    reminder: true,
  }])

  //Add task
  const onAdd=(task)=>{
   const id = Math.floor(Math.random()*1000)+1;
   console.log(id);
  }

  const onDelete = (id)=>{
   setTasks(tasks.filter((v)=>v.id!==id));
  }

  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder}:task))
  }
  return (
    <div className="container">
    
    <Header title={"Task tracker"}/>
    <AddTask add={onAdd}/>
    {tasks.length > 0?<Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>:"NO TASKS TO SHow"}
    </div>
  );
}

export default App;
