import React from 'react';
import './Navbar.css';
import '../../styles/style.css'

import {
    Nav,
    NavLink,
    NavMenu,
    NavLogo

  } from './NavbarElements';

import {HamLink} from './HamburgerElements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFishFins } from '@fortawesome/free-solid-svg-icons';
import face from './face.png'

import { slide as Burger } from 'react-burger-menu';

const NavBar = () => {

    return (
        <>
        <Nav>

        <NavLogo to = "/">
        <img src={face} width="80" height="80"/>
        {/* <FontAwesomeIcon icon={faFishFins} /> */}
        </NavLogo>

        <NavMenu>

        <NavLink to = "/about" className='hvr-sweep-to-top'>
            ABOUT
        </NavLink>

        <NavLink to = "/projects" className='hvr-sweep-to-top'>
            PROJECTS
        </NavLink>

        <NavLink to = "/publications" className='hvr-sweep-to-top'>
            PUBLICATIONS
        </NavLink>

        </NavMenu>

        {/* ______ */}

        <Burger right>

        <HamLink to = "/" className='hvr'>
            HOME
        </HamLink>

        <HamLink to = "/about" className='hvr'>
            ABOUT
        </HamLink>

        <HamLink to = "/projects" className='hvr'>
            PROJECTS
        </HamLink>

        <HamLink to = "/publications" className='hvr'>
            PUBLICATIONS
        </HamLink>

        </Burger>

        </Nav>
        </>
    );
  };
    
  export default NavBar;