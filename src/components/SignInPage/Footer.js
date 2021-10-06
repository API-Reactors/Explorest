import React, { Component } from "react";
// import "./Footer.css";
// import "./AboutUs.css";

export class Footer extends Component {
  render() {
    return (
      <div id="boo">
        <div class="meow1">
          <h2>Courses </h2>
          <br />
          <ul>
            <li className="footerli">
              <a className="footerA" href="">Front End Development</a>
            </li>
            <li className="footerli">
              <a className="footerA"  href="">Backend End Development</a>
            </li>
            <li className="footerli">
              <a className="footerA"  href="">DataBases</a>
            </li>
          </ul>
         </div>
        <div class="meow3">
          <h2> Contact</h2>
          <br />
          <ul>
            <li className="footerli">
              <i class="fas fa-home"></i>
              <a className="footerA" href="">Jordan/Amman</a>
            </li>

            <li className="footerli">
              <i class="far fa-envelope"></i>
              <a className="footerA"  href="">info@example.com</a>
            </li>

            <li className="footerli">
              <i class="fas fa-phone"></i>
              <a className="footerA"  href="">+96278888888</a>
            </li>
          </ul>
        </div>
        <br />
        <section class="meowlinks">
          <div>
            <h3 class="footerP">Get connected with us on social networks</h3>
          </div>
          <center>
            <a className="footerA"  href="https://github.com/API-Reactors">
              {" "}
              <i class="fab fa-github"></i>
            </a>
            <a className="footerA"  href="https://www.instagram.com/">
              {" "}
              <i class="fab fa-instagram"></i>
            </a>
            <a className="footerA"  href="https://www.linkedin.com/home">
              <i class="fab fa-linkedin-in"></i>
            </a>

            <p>Contact Us Explorist &copy;2021</p>
          </center>
        </section>
      </div> 
    );
  }
}
export default Footer;
