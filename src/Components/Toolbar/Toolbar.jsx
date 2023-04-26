import React from 'react'
import Navbar from './MenuItems/Navbar'
import "./MenuItems/Dropdownsty.css"


const Toolbar = () => {
  return (
    <div>
      <header >
        <div className = "nav-area" >
        <a href = "/#" className = "logo">
         </a> <Navbar/>
        </div> 
        </header >
    </div>
  )
}

export default Toolbar
