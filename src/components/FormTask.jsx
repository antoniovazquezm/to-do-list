import React, { useState } from 'react'

export const FormTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('')

  const btnAddTask = () => {
    if (taskName.trim() !== '') {
      addTask(taskName)
      setTaskName('')
    }
  }

  return (
    <div>
      <label htmlFor="add_task">Add new task</label>
      <input 
        type='text' 
        id='add_task' 
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <button onClick={btnAddTask}>➕ Add task</button>
    </div>
  )
}
