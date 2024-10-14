import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormTask } from './components/FormTask'
import { ToDoList } from './components/ToDoList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>📝 ToDo list 📝 </h1>
      <FormTask />

      <ToDoList />
    </>
  )
}

export default App
