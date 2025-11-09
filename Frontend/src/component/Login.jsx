import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
   const navigate = useNavigate();
  const [user,setUser]=useState({
      username:"",
      password:""
  })

  const handleInputChange=(e)=>{
    const {name,value}=e.target;  

    setUser((prev)=>({...prev,[name]:value}))
  }

  const handleformSubmit=async(e)=>{
    e.preventDefault();

    const loginData={
      username:user.username,
      password:user.password
    };

    try {
      const response=await fetch("http://localhost:3000/api/v1/users/login",{

      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(loginData),
      credentials:"include"

      });

      const data=await response.json();
      console.log("response",data);
      
      if(response.ok){
        alert("login successful");
        navigate("/")
      }
      else{
        alert("login failed");
      }
    } catch (error) {
      console.log("error",error);
      alert("something happens wrong")
    }


  }
  return (
    <div>
      <form action="" onSubmit={handleformSubmit}>
        
        <label htmlFor="username">UserName: </label>
        <input 
        type="text"
        name='username'
        value={user.username}
        onChange={handleInputChange}
        />

        <br />
        <br />

        <label htmlFor="password">Password: </label>
        <input 
        type="password"
        name='password'
        value={user.password}
        onChange={handleInputChange}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;
