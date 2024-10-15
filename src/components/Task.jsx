import React from 'react'

export const Task = ({ name, status, onDelete, onToggle }) => {
  return (
    <>
      <p>Task: {name}, Status: {status}</p>
      <div>
        <button onClick={onToggle}>
          {status = "Done ✅" }
        </button>
        <button onClick={onDelete}>Delete 💣</button>
      </div>
    </>
  )
}
