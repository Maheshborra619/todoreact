import {useState} from "react";

export default function AddTask({add}) {
    const [task,setTask] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);
    

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!task || !day || !reminder){
            alert("Please add task")
            return
        }
        add({task,day,reminder})

        setTask('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
         <div className='form-control'>
             <label>Task</label>
             <input type="text" placeholder="Type task here" value={task} onChange={(e)=>setTask(e.target.value)}/>
         </div>
         <div className='form-control'>
             <label>TEXT</label>
             <input type="text" placeholder="Type task here"  value={day} onChange={(e)=>setDay(e.target.value)} />
         </div>
         <div className='form-control form-control-check'>
             <label>SET reminder</label>
             <input type="checkbox"  value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
         </div>
         
         <input className="btn btn-block" type="submit" value="save" />

         {/* <input type="submit" value="save" /> */}
        </form>
    )
}
