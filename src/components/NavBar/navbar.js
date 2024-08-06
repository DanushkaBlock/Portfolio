import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/logo2.png';
import contacting from '../../assets/contact.png';
import {Link} from 'react-scroll'
import menu from '../../assets/menu-bar.png';
import Contact from "../Contact/contact";
import sendEmail from "../Contact/contact";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return(
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <div className="desktopMenu">
                <Link activeClass='active' to="intro" spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to="skills" spy={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to="works" spy={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to="famTools" spy={true} offset={-50} duration={500} className="desktopMenuListItem">Tools</Link>
            </div> 
            
            <Link  to="contact" className="btn btn-primary">Contact Me</Link>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display : showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to="intro" spy={true} offset={-100} duration={500} onClick={() => setShowMenu(!showMenu)} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to="skills" spy={true} offset={-50} duration={500} onClick={() => setShowMenu(!showMenu)} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to="works" spy={true} offset={-50} duration={500} onClick={() => setShowMenu(!showMenu)} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to="famTools" spy={true} offset={-50} duration={500} onClick={() => setShowMenu(!showMenu)} className="desktopMenuListItem">Tools</Link>
                <Link activeClass='active' to="contact" spy={true} offset={-50} duration={500} onClick={() => setShowMenu(!showMenu)} className="desktopMenuListItem">Contact</Link>
            </div> 
        </nav>
    )
}   

export default Navbar