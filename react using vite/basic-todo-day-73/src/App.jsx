import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [taskName,setTaskName] = useState('');
  const [taskValue,setTaskValue ] = useState('');
  const [taskArr,SetTaskArr] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = [...taskArr];
    newTask.push({taskName:taskName,taskValue:taskValue});
    SetTaskArr(newTask);
    console.log(newTask);
    setTaskName('');
    setTaskValue('');
  }
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
    // console.log(e.target.value);
  }
  const handleTaskValueChange = (e) => {
    setTaskValue(e.target.value);
    // console.log(e.target.value);
  }



  return (
    <>
      <form onSubmit={(e)=>{
        handleSubmit(e);
      }}>
        <input 
          type="text"
          placeholder="Enter Task Name"
          value={taskName}
          onChange={handleTaskNameChange}
          name='taskname'
          required
        />
        <input 
          type="text" 
          placeholder="Enter Task" 
          value={taskValue}
          onChange={handleTaskValueChange}
          required
        />
        <button>
          Add Task
        </button>
      </form>


      {taskArr.map((task,index)=>{
        return (
          <div className='task' key={index}>
            <h3>{index+1} -- {task.taskName}</h3>
            <p>{task.taskValue}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
