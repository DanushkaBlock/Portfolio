import React from "react";
import './intro.css';
import pic from '../../assets/profile.png';
import { Link } from "react-scroll";
import hire from '../../assets/contact.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Danushka</span> <br /> Blockchain Developer & Researcher</span>
                <p className="introPara">I am a skilled, experienced blockchain developer & Passionate about blockchain research & analytics</p>
                <Link to="contact"><button className="btn"><img src={hire} alt="hire me" className="hire" />  Hire Me</button></Link>
            </div> 
            <img src={pic} alt="pic" className="proPic" /> 
        </section> 
    )
}

export default Intro;