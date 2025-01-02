import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  
  // let counter = 5
  const addValue = () =>
  {
    setCounter(counter + 1)
  }

  const removeValue = () =>
  {
    setCounter(counter - 1)
  }

  return (
    <>
      
      <h1>Hello react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add {counter + 1}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove {counter - 1}</button>
        
    </>
  )
}

export default App
