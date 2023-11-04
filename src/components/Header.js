import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    Shopping Cart
                </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/cart'>Cart Page</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;