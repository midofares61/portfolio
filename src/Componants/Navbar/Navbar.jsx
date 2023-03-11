import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
function Navbar(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <>
        <nav className="container">
            <div className="logos">
            <div className="logo" style={{color:darkMode? "white":""}}>Mido<b>.</b></div>
            <Toggle/>
            </div>
            <ul className="nav-item" style={{color:darkMode? "white":""}}>
                <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true} style={{color:darkMode? "white":""}}>Home</Link>
                </li>
                <li>
                <Link to="services" spy={true} smooth={true} style={{color:darkMode? "white":""}}>Services</Link>
                </li>
                <li>
                    <Link to="experianc" spy={true} smooth={true} style={{color:darkMode? "white":""}}>Experianc</Link>
                </li>
                <li>
                    <Link to="Portofolio" spy={true} smooth={true} style={{color:darkMode? "white":""}}>Portofolio</Link>
                </li>
            </ul>
            <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
            </Link>
        </nav>
        </>
    )
}
export default Navbar;
