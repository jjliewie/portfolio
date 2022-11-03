import React, { Component } from "react";
import '../../styles/style.css';
import pic from './pic.jpg'
// import face from './face.jpg'
// import candid from './candid.jpg'
import Typewriter from 'typewriter-effect';
import Footer from '../../components/Footer'
import { Foot } from "../../components/Footer/FooterElements";

class About extends Component {
  render () {
    return (
        <div id="page-container">
        <div id="about"> 
            
            <section className="about">

            <img src={pic}/>

            <h2>
                <span>About Me</span>
            </h2>

            <br/>

            <h3>

            <Typewriter

            options={{
                strings: ["I'm a software developer.", "I write poems.", "I do math.", "I read.","I'm a competitive programmer.", "I'm just trying my best."],
                autoStart: true,
                loop: true,
            }}
            />

            </h3>

            <p>

            <br/>

            Hi! I’m Juheon, and I’m a seventeen year old student who likes coding. ^^<br/> 
            I’m currently interested in IOS development, and recently published my first app! <br/> 

            I’m also working on an autoencoder based representation learning for deepfake detection and on another app for finding insurance covered oriental hospitals in South Korea!
            <br/> 
            I like competitive programming and I’m a USACO gold division competitor. 
            I'm also the co-eic at Woolgathering! Check it out <a href="https://www.wgmag.org">here</a>!

            </p> 

            </section>
            
        <Footer/>

        </div>
        </div>
    )
  }
}

export {About};