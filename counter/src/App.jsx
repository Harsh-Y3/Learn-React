import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  // let counter = 5
  const addValue = () =>
  {
    if ( counter <= 19)
    {
    setCounter( counter + 1 )
    }
    else
    {
      alert("maximum value reached");
    }
  }

  const removeValue = () =>
  {
    if ( counter >= 1)
      {
      
         setCounter( counter - 1 )
      }
      else
      {
        alert("cant go in nagative integer");
      }
  }

  return (
    <>
      
      <h1>Counter</h1>
      <p>Simple react app that shows numbers from 0 to 20 by clicking on buttons</p>

      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Go To Next Number: {counter + 1} </button>

      <br />
      <br />

      <button
        onClick={removeValue}
      >Go To Prior Number: {counter - 1 } </button>
        
    </>
  )
}

export default App
