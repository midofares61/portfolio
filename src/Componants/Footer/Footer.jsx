import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

function Footer () {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>midofares61@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/midoel_hakem/?igshid=ZDdkNTZiNTM%3D">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/people/Mohamed-Elhakem/pfbid02snQ9p8HqdC74occcbAU9w63QwKRE4JisjQVhmuG6E3AbQAkUPPwQCRjQZWm54sS1l/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/midofares61/">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
