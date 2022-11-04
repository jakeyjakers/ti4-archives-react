import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <NavLink to='/main'>Home </NavLink >
        <NavLink to='/profile'>Profile </NavLink >
        <NavLink to='/newarchive'>New Archive </NavLink >
    </div>
  )
}

export default Header