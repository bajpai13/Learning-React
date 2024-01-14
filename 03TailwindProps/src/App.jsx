import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mb-6'>Tailwind Test</h1>
    
    <Card name="Sameer" btnText="Check This"/>
    <Card name="Jasmine " btnText="Learn More"/>
  
    </>
  )
}

export default App
