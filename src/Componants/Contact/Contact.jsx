import "./Contact.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { themeContext } from "../../Context";
function Contact(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [Done,setDond]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ol3mwkf', 'template_ukf90hj', form.current, '-H2tuiZEW6frgYGOq')
        .then((result) => {
            console.log(result.text);
            setDond(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
        <div className="contact">
        <div className="container contacts">
            <div className="text">
                <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
                <span>Contact me</span>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="user_name"  className="user"/>
                <input type="email" placeholder="Email" name="user_email"  className="user"/>
                <textarea name="Message" placeholder="Message" className="user"></textarea>
                <input type="submit" value="send" className="button"/>
                <span>{Done && "Thanks For Contact Me"}</span>
            </form>
        </div>
        </div>
        </>
    )
}
export default Contact;