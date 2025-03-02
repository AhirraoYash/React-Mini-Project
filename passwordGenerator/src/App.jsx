import {useCallback,useState,useEffect,useRef} from 'react'

function App() {
  const [length,setLength]= useState(8)
  const [numberAllow,setNumberAllow]=useState(false)
  const [char,setChar]=useState(false)
  const [password,setPasword]=useState("")
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllow) str+="0123456789"
      if(char) str+="!@#$%^&*()_-+=[]{}|\:;\"'<>,.?/"

      for(let i=1;i<length;i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }

      setPasword(pass)
  },[length,numberAllow,char,setPasword])

useEffect(()=>{
    passwordGenerator()
},[length,numberAllow,char,passwordGenerator])
 
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
},[password])
 
  return (
    <>
          <div className='w-full max-w-md mx-auto shadow-md rounded-lg
              px-4 py-3 my-8 text-orange-500 bg-gray-700'>
                <h1 className='text-white text-center my-1 '>Password Generator</h1>
                 <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                      <input 
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                        />
                      <button 
                      onClick={copyPasswordToClipboard}
                      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
                 </div>
                 <div className='flex text-sm gap-x-2 0'>
                      <div className='flex items-center gap-x-1'>
                        <input type="range" 
                          min={6}
                          max={100}
                          value={length}
                          className='cursor-pointer'
                          onChange={(e)=>{setLength(e.target.value)}}
                          />
                          <labbel>Length:{length}</labbel>
                         
                      </div>
                      <div className='flex items-center gap-x-1'>
                        <input 
                          type="checkbox"
                          defaultChecked={numberAllow}
                          id="numberInput"
                          onChange={()=>{
                            setNumberAllow((prev)=>!prev) 
                          }}
                        />
                        <label htmlFor='numberInput'>Numbers</label>

                      </div>
                      <div className='flex items-center gap-x-1'>
                        <input 
                          type="checkbox"
                          defaultChecked={numberAllow}
                          id="numberInput"
                          onChange={()=>{
                            setNumberAllow((prev)=>!prev) 
                          }}
                        />
                        <label htmlFor='characterInput'>Characters</label>

                      </div>

                 </div>
        </div>
     </>
  )
}

export default App
