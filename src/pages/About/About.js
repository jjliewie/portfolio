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

            Hi! I’m Juheon, and I’m a seventeen year old student. ^^<br/> 
            I’m interested in machine learning and I’m currently working on an autoencoder based representation learning for deepfake detection!
            <br/> 
            I like competitive programming and I taught USACO silver and bronze at <a href="https://joincpi.org/">CPI</a>. 
            <br/>
            I also like math & writing poetry. 
            I'm the co-eic & founder at Woolgathering! Check it out <a href="https://www.wgmag.org">here</a>!
            </p> 

            </section>
            
        <Footer/>

        </div>
        </div>
    )
  }
}

export {About};