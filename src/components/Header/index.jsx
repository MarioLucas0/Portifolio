import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";


export const Header = () => {
  const [isMobile, setMobile] = useState(false)
    
  return (
    <nav className="navbar">
            <h3 className="logo">Mario lucas</h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}>
              {/*   <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/catalogo" className="catalogo">
                    <li>Catalogo</li>
                </Link>
                <Link to="/admin/produto" className="admin">
                    <li>Admin</li>
                </Link> */}
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!isMobile)}>
                {isMobile ? (<i className="fas fa-times"><FaTimes/></i>) : (<i className="fas fa-bars"><FaBars/></i>)}
            </button>
        </nav>
    )
};