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
                <Link to="/" className="home">
                    <li>start</li>
                </Link>
                <Link to="/" className="catalogo">
                    <li>about me</li>
                </Link>
                <Link to="/" className="admin">
                    <li>Projects</li>
                </Link> 
                <Link to="/" className="admin">
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