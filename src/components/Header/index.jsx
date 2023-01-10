import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import iconLogo from "../../assets/imgs/icon-logo.png";
import "./style.css";


export const Header = () => {
  const [isMobile, setMobile] = useState(false)
    
  return (
 
    <nav className="navbar">
        <div className='container'>
            <h3 className="logo">MarioLucas 
            <img src={iconLogo} alt=""  className="iconLogo"/>
            </h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}>
                <a href="#s1" className="about">
                    <li>about me</li>
                </a>
                <a href="#s3" className="projects">
                    <li>Projects</li>
                </a> 
                <Link to="/" className="projects">
                    <li>Skills</li>
                </Link> 
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!isMobile)}>
                {isMobile ? (<i className="fas fa-times"><FaTimes/></i>) : (<i className="fas fa-bars"><FaBars/></i>)}
            </button>
            </div>
        </nav>

    )
};