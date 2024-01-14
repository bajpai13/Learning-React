import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}}
    >
       <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-2 py-2 rounded-lg">
          <button onClick={() => setColor("red")}className="outline-none px-2 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}}>Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"green"}}>Green</button>

          <button onClick={() => setColor("yellow")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"yellow"}}>Yellow</button>

          <button onClick={() => setColor("blue")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={() => setColor("orange")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"orange"}}>Orange</button>

          <button onClick={() => setColor("purple")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"purple"}}>Purple</button>

          <button  onClick={() => setColor("brown")}className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"brown"}}>Brown</button>

          <button onClick={() => setColor("indigo")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"indigo"}}>Indigo</button>

          <button onClick={() => setColor("black")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"black"}}>Black</button>

          <button onClick={() => setColor("grey")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"grey"}}>Grey</button>

        </div>
       </div>
    </div>
  )
}

export default App
