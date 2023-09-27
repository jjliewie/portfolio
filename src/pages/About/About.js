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
                strings: ["I write poems.", "I do math. (sometimes)", "I read.", "I want to cry."],
                autoStart: true,
                loop: true,
            }}
            />

            </h3>

            <p>

            <br/>

            Hi. I'm 18 now.<br/> 
            I'm into pure mathematics right now. 
            <br/> 
            I also do some writing. 
            <br/>
            I've done some stuff but now I don't have passion for anything.
            </p> 

            </section>
            
        <Footer/>

        </div>
        </div>
    )
  }
}

export {About};