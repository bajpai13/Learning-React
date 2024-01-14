import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAll, setNumAll] = useState(false)
  const [charAll, setCharAll] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const PasswordGen  = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAll) str += "0123456789"
    if (charAll) str += "!@#$%^&*+-*/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  },[length,numAll,charAll,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {PasswordGen()}, [length, numAll, charAll, PasswordGen])

  return (
    <>
     
       <h1 className='text-4xl text-center text-white'>Password Generator</h1> 
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-3 py-6 my-8 text-black-600 font-semibold bg-red-600'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none w-full py-2 px-4'
           placeholder='Password'
           readOnly
           ref={passwordRef}
           />
           <button
           onClick={copyPasswordToClipboard}
           className='outline-none bg-black text-white px-4 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={5} max={20} value={length} className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>

          <input type="checkbox" defaultChecked={numAll} id="numberInput" 
            onChange={() =>{
              setNumAll((prev)=> !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
            <input type="checkbox" defaultChecked={charAll} id="charInput" 
            onChange={() =>{
              setCharAll((prev)=> !prev);
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
     
    </>
    
  )
}

export default App
