import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <div className='header__nav'>
            <div className='nav__content'>
                <h2 className='logo'>This logo</h2>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'><NavLink to='/home' className='nav__link'>Home</NavLink></li>
                        <li className='nav__item'><NavLink to='/courses' className='nav__link'>Courses</NavLink></li>
                        <li className='nav__item'><NavLink to='/about' className='nav__link'>About</NavLink></li>
                        <li className='nav__item'><NavLink to='/jobs' className='nav__link'>Jobs</NavLink></li>
                        <li className='nav__item'><NavLink to='/blog' className='nav__link'>Blog</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className='header__buttons'>
                <a href='#' className='btn btn-login'>Login</a>
                <a href='#' className='btn btn-Signup'>Signup</a>
            </div>

            
        </div>
     );
}
 
export default NavBar
