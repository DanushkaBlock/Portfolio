import React, { useRef, useState } from "react";
import '../Contact/contact.css';
import fb from '../../assets/fbLogo.png';
import linkedin from '../../assets/linkedIn.png';
import node from '../../assets/node.png';
import html from '../../assets/html.png';
import ret from '../../assets/react.png';
import metamask from '../../assets/Metamask.png';
import eth from '../../assets/eth.png';
import solana from '../../assets/solana.png';
import binance from '../../assets/binance.png';
import steller from '../../assets/steller.png'; 
import cardano from '../../assets/cardano.png';
import matic from '../../assets/matic.png';
import git from '../../assets/Git.png';
import aws from '../../assets/aws.png';
import x from '../../assets/xw.png'
import emailjs from '@emailjs/browser';
import alert from 'sweetalert';


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
      email: " ",
      name: " ",
      message: " ",
    })


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setFormData({loading: true});

        emailjs.sendForm('service_q2qzr7i', 'template_lwmavkr', form.current, {
        publicKey: 'JWhhU2KuVLxan-vLE',
      })
      .then(
        (response) => {
          alert({
            title: "Email sent!",
            text: "Successfully sent the email",
            icon: "success",
          })
        }
      ).catch (
        (err) => {
            alert({
                title: "Faild to send the email!",
                text: err.message,
                icon: "warning",
            });
        }
      )
    };

    return (
        <section id="contactMe">
            <div className="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="conDesc">I would love to work on more Blockchain projects</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name"  onChange={(e) => setName(e.target.value)} value={name} className="name" placeholder="Your Name" required/>
                    <input type="email" name="from_email"  onChange={(e) => setEmail(e.target.value)} value={email} className="email" placeholder="Your Email" required/>
                    <textarea className="message" name="message" onChange={(e) => setMessage(e.target.value)} value={message} rows={5} placeholder="Your Message" required></textarea>
                    <button className="submitBtn" value="submit" onClick={(e) => formData} >Submit</button>
                    
                    <div className="links">
                      <p><img src={fb} alt="Facebook" className="link"/></p> 
                        <p><a href="https://www.linkedin.com/in/danushka-samarakoon-96676a39/">
                          <img src={linkedin} alt="LinkedIn" className="link"  /></a></p>
                        <p><a href="https://github.com/DanushkaBlock" >
                        <img src={git} alt="" className="link" /></a></p>
                        <p><a href="https://x.com/Danushka7878">
                        <img src={x} alt="" className="link" /></a></p>  
                    </div>
                </form>
           </div>
        </section>
    );
}

export default Contact;