import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="part">
      <img className='logo' src={assets.cake_icon} alt="" /> 
      <h3>Admin Panel</h3>
      </div>
        

      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
