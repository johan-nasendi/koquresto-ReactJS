import React from 'react';
import './contact.css';
import Shape from '../../images/contact/shape.png';
import Location from '../../images/contact/location.png';
import email from '../../images/contact/email.png';
import phone from '../../images/contact/phone.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
const Contact = () => {
    const inputs = document.querySelectorAll(".input");
    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
      }
      
      function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
          parent.classList.remove("focus");
        }
      }
      
      inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
      });

    return (
        <div className="contacts" id='kontak'>
        <span className="big-circle1"></span>
        <img src={Shape} className="square" alt="" />
        <div className="forms">
          <div className="contact-info">
            <h3 className="title">INFORMASI KONTAK</h3>
            <p className="text">
                Kontak Layanan Ko qu Resto
            </p>
  
            <div className="info">
              <div className="information">
                <img src={Location} className="icon" alt="" />
                <p>92 Maribu-Road, NY 31</p>
              </div>
              <div className="information">
                <img src={email} className="icon" alt="" />
                <p>koquresto@gmail.com</p>
              </div>
              <div className="information">
                <img src={phone} className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>
  
            <div className="social-media">
              <p> Bergabung bersama kitong :</p>
              <div className="social-icons">
                <a href="#">
                  <i> <FaFacebook/> </i>
                </a>
                <a href="#">
                  <i > <FaInstagram/> </i>
                </a>
                <a href="#">
                  <i > <FaLinkedin/> </i>
                </a>
                <a href="#">
                  <i> <FaYoutube/> </i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="contact-forms">
            <span className="circle one"></span>
            <span className="circle two"></span>
  
            <form action="index.html" autocomplete="off">
              <h3 className="title">Hubungi Kitong</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Ko Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="">Ko Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Ko Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">Ko Pendapat</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Kirim" className="btn" />
            </form>
          </div>
        </div>
      </div>
    )
}

export default Contact
