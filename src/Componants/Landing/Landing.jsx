import "./Landing.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import React from "react";
import Typed from 'typed.js';
// import DivFloating from "../DivFloating/DivFloating";
import crown from "../../img/crown.png"
import { useContext } from "react";
import { themeContext } from "../../Context";
function Landing(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
      const typed = React.useRef(null);
      React.useEffect(() => {
        const options = {
            strings: ['Mohamed Fares','Front End Developer','programer'],
            loop:true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay:1500,
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
          }
    }, []);
    return(
        <>
        <div className="wrapper">
            <div className="cols cols0">
                <span className="topline" style={{color:darkMode? "white":""}}>Hello I Am</span>
                <h1><span className="multiText" ref={el}></span></h1>
                <p style={{color:darkMode? "white":""}}>Front End Developer With high level of experiance in web designing and development. producting the Quality Work</p>
                <div className="btns">
                    <button>Hire me</button>
                </div>
                <div className="links" >
                    <a href="https://github.com/midofares61/" style={{color:darkMode? "white":""}}><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.facebook.com/people/Mohamed-Elhakem/pfbid02snQ9p8HqdC74occcbAU9w63QwKRE4JisjQVhmuG6E3AbQAkUPPwQCRjQZWm54sS1l/" style={{color:darkMode? "white":""}}><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/midoel_hakem/?igshid=ZDdkNTZiNTM%3D" style={{color:darkMode? "white":""}}><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="cols cols1">
                <div className="imgbox">
                    <img src={Vector1} alt=""/>
                    <img src={Vector2} alt="" />
                    <img src={boy} alt="" />
                </div>
            <div className="floating">
             <img src={crown} alt="" />
             <span style={{ color: darkMode ? "black" : "" }}>
                web
                <br />
                Developer
             </span>
            </div>
            </div>
        </div>
        </>
    )
}
export default Landing;