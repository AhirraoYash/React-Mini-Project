import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContext from "./context/UserContext"
import UserContextProvider from "./context/UserContextProvidere"

 

function App() {
  
  return (
    <UserContextProvider>
       <h1>hello everyone</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App
