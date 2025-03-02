import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";
function Login(){
    const [username,setUsername]=useState('')
    const [password,setpassword]=useState('')
   
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text"
            value={username}

            onChange={(e)=>setUsername(e.target.value)}
            placeholder="User Name"/>
            <input type="password" 
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="User Name"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}
export default Login