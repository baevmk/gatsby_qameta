import React from 'react'
import Link from 'gatsby-link'
import './custom_style.scss'

const Menu = () => (
    <div className = 'main_header'>

        <ul className = 'header_links'>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            
        </ul>      
    </div>
  )

export default Menu