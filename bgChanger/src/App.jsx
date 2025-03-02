import { useState } from "react"

 function App() {
      const [color,setColor]=useState('olive')

  return (
    <>
  <div className="w-screen h-screen "
        style={{backgroundColor:color}}

  > 
  <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-4">
    <div className="bg-white flex flex-wrap justify-central gap-3 px-3 py-2 rounded-3xl">
           <button onClick={()=>setColor('green')}  className="bg-green-500 p-1 pl-2 pr-2  rounded-lg">green</button>
           <button onClick={()=>setColor('pink')} className="bg-pink-500 p-1 pl-2 pr-2  rounded-lg">pink</button>
           <button onClick={()=>setColor('yellow')} className="bg-yellow-500 p-1 pl-2 pr-2  rounded-lg">yellow</button>
           <button onClick={()=>setColor('red')} className="bg-red-500 p-1 pl-2 pr-2  rounded-lg">red</button>
           <button onClick={()=>setColor('gray')} className="bg-gray-500 p-1 pl-2 pr-2  rounded-lg">gray</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default App
