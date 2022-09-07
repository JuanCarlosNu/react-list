import React from 'react';


const NavBar = () => {
    return ( 
        <div className='header__nav'>
            <div className='nav__content'>
                <h2 className='logo'>This logo</h2>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='list__item'><a href='#' className='nav__link'>Home</a></li>
                        <li className='list__item'><a href='#' className='nav__link'>Courses</a></li>
                        <li className='list__item'><a href='#' className='nav__link'>About</a></li>
                        <li className='list__item'><a href='#' className='nav__link'>Jobs</a></li>
                        <li className='list__item'><a href='#' className='nav__link'>Blog</a></li>
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
