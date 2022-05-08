import React,{useState} from 'react';
import {Button} from './Button';
import './HomeNavBar.css';
import {Link} from 'react-router-dom';
import {AiOutlineDingding} from 'react-icons/ai';


function HomeNavBar () {

    const[click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
  

    return(
        <>
        <nav className='homenavbar'>
            <Link to='/' className='homenavbar-logo'>
                VERVE <AiOutlineDingding/>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'homenav-menu active' : 'homenav-menu'}>
                <li className='homenav-item'>
                    <Link to='/' className='homenav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='homenav-item'>
                    <Link to='/contact-us' className='homenav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='homenav-item'>
                    <Link to='/sign-up' className='homenav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button/>
        </nav>
        </>
    );
}

export default HomeNavBar;