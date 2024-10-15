import React, { useState } from 'react'
import { Task } from './Task'
import { FormTask } from './FormTask'

export const ToDoList = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (name) => {
    setTasks([...tasks, { name, status: 'pending' }])
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  const toggleTaskStatus = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: task.status === 'pending' ? 'done' : 'pending' } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <div>
      <h2>Tasks</h2>
      <FormTask addTask={addTask} />
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          name={task.name} 
          status={task.status} 
          onDelete={() => deleteTask(index)}
          onToggle={() => toggleTaskStatus(index)}
        />
      ))}
    </div>
  )
}
