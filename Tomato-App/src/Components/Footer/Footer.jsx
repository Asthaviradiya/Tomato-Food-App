import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ipsam obcaecati ad accusamus consectetur corporis mollitia voluptates, laborum error placeat nesciunt deleniti, dicta eligendi. In illo suscipit rem accusantium omnis.</p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul><li>Home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li></ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-123-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        copyright 2024 tomato.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
