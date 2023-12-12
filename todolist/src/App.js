import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')


useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
}, [])

function addTask(e) {
    e.preventDefault()
    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({task})
    })
    .then(res => res.json())
    .then(data => {
        setTasks([...tasks, data])
        setTask('')
    })
    e.target.reset()
}



const displayTasks = tasks.map(task => {
    return (
        <div key={task.id}>
            <h3>{task.task}</h3>
            <button onClick={() => deleteTask(task.id)}>❌</button>
        </div>
    )

})

function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(() => {
    setTasks(tasks.filter(task => task.id !== id)); 
  });
}


  return (
    <div className='tasklist'>
        <h1>Your Todo List</h1>
        <form onSubmit={addTask}>
            <input type="text" placeholder="Add a task" value={task} onChange={(e) => setTask(e.target.value)} />
        </form>
        <ul>
            {displayTasks}
        </ul>

    </div>
  )
}

export default App