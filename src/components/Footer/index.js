import React from 'react';
import './Footer.css';
import '../../styles/style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

import {Foot} from './FooterElements';

const Footer = () => {

    return (
        <Foot>
        <div className='footer'>
        <p>© Juheon Rhee. All Rights Reserved.</p>
        <a href="https://www.github.com/jjliewie" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        </Foot>
    );
  };
    
export default Footer;