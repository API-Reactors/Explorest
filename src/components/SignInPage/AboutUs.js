import React, { Component } from "react";
import "react-slideshow-image/dist/styles.css";
import Header from "./Header";
import { Slide } from "react-slideshow-image";
import Footer from "./Footer";

const slideImages = [
  "/img/bayan.jpg",
  "/img/reem.jpg",
  "/img/Al-Tayeb.jpg",
  "/img/sam.jpg",
  "/img/yahia.jpg",
  "/img/yousef.jpg",
];

export class AboutUs extends Component {
  
  render() {
    return (
      <div>
        <Header
        />
        <div class="people">
          <div class="para">
            <p class="p">
              Our website focuses on users all around the world to have the
              ability to explore and go through different kinds of genres using
              our website Our website gives u the ability to search through ur
              favorite topic wether u like Cooking , Fashion , Makeup , Desserts
              , Toys for Kids , Quotes ... etc and favoriting your topic at our
              website to check it again easily Our website Helps users to reach
              their favorite matters with its updates as part of knowledge and
              entertainment
            </p>
            <button class="bttn">
              <a href="/">Sign Up</a>{" "}
            </button>
          </div>
        </div>

        <center>
          <section class="sliders">
            <div className="slide-container">
              <Slide>
                <div class="aboutCard">
                  <img src="/img/bayan.jpg" />
                  <div class="aboutContainer">
                    <h3>Bayan Qutshan (TeamLeader)</h3>
                    <p>
                      I'm Electrical Engineer, I've got my degree from JUST. I
                      have four years of experince in Industrial Automation
                      feild. Github account
                    </p>
                  </div>
                </div>
                <div class="aboutCard">
                  <img src="/img/reem.jpg" />
                  <div class="aboutContainer">
                    <h3>Reem Khalil</h3>
                    <p>Civil engineer fresh graduate from LTUC</p>
                  </div>
                </div>
                <div class="aboutCard">
                  <img src="/img/Al-Tayeb.jpg" />
                  <div class="aboutContainer">
                    <h3>Mohammad Al-Tayeb</h3>
                    <p>
                      Mechanical Engineer fresh graduate from Jordan University
                      of Since and Technology
                    </p>
                  </div>
                </div>

                <div class="aboutCard">
                  <img src="/img/sam.jpg" />
                  <div class="aboutContainer">
                    <h3>Samera alhaj</h3>
                    <p>
                      26 years old,translator, graduated at Zarqa private
                      university
                    </p>
                  </div>
                </div>
                <div class="aboutCard">
                  <img src="/img/yahia.jpg" />
                  <div class="aboutContainer">
                    <h3>Yahia Labib</h3>
                    <p>
                      I am Yahia Labib, I am a mechanical engineer I worked in
                      automobile maintenance for one year and now I am taking a
                      coure in software devloping
                    </p>
                  </div>
                </div>
                <div class="aboutCard">
                  <img src="/img/yousef.jpg" />
                  <div class="aboutContainer">
                    <h3>Yousef Mohammad Jariry</h3>
                    <p>
                      A Software engineering fresh graduate from the hashemite
                      University.
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </section>
        </center>
        <Footer />
      </div>
    );
  }
}
export default AboutUs;
