import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {

    const[menu, setMenu] = useState('Home');
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='nabar-menu'>
        <li onClick={() => setMenu('Home')} className={menu === 'Home'? "active" : ""}>Home</li>
        <li onClick={() => setMenu('menus')} className={menu === 'menus' ? "active" : ""}>menu</li>
        <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? "active" : ""}>mobile-app</li>
        <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? "active" : ""}>contact-us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
