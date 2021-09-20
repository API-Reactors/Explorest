import React, { Component } from "react";
import "./Footer.css";
import "./AboutUs.css";

export class Footer extends Component {
  render() {
    return (
      <div id="boo">
        <center>
        <a href="https://github.com/API-Reactors">   <i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/">   <i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/home"><i class="fab fa-linkedin-in"></i></a>
  
          <p>Contact Us Explorist © 2021</p> 
        </center>
      </div>
    );
  }
}
export default Footer;
