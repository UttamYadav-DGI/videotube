import React from 'react'
import SlideBar from './SlideBar'
import MainContainer from './MainContainer'
import Header from './Header'
import Home from './Home'
const Body = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <SlideBar/>
        <MainContainer/>
    </div>

  )
}

export default Body