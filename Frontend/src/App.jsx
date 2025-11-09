import React from "react"
import Header from "./component/Header"
import Body from "./component/Body"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Login from "./component/Login"
import RegistrationForm from "./component/Registration"
function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Body/>} />
      {/* <Route path='/like' element={<Like/>} /> */}
      <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
    </Routes>
    </>
  )
}

export default App;
