import React, {useState} from "react";
import { StyledNav } from "../Styles/Nav.styles";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";

export default function Nav() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <StyledNav>
            <div className="container">
                <div className="logo">
                    <NavLink to="/"><img src="/assets/images/fitness-blog-logo.jpg" alt="logo"/></NavLink>
                </div>
            <div className="menu" onClick={handleShowNavbar}>
                <Menu style={{color: 'black'}} fontSize="large"/>
            </div>
            <div className={`nav-elements ${showNavbar ? 'active': ''}`}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Blogs">Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
            </div>
        </StyledNav>
    )
}