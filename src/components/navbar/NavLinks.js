import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/asandoval-iii" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/asandoval-3" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:alejandrosandoval422@gmail.com" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;