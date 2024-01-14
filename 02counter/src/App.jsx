import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(7)

  const addValue = () => {
    if (counter<30 ? setCounter(counter+1) : setCounter(counter));

  }

  const removeValue = () => {
    if (counter>0 ? setCounter(counter-1) : setCounter(counter));
  }

  

  return (
    <>
      <h2>Lets Learn React</h2>
      <h3>Counter Value : {counter}</h3>
      <button 
      onClick={addValue}>Add Value</button>
      <button 
      onClick={removeValue}>Remove Value</button>      
    </>
  )
}

export default App
