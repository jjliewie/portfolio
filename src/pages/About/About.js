import React, { Component } from "react";
import '../../styles/style.css';
import pic from './pic.jpg'
// import face from './face.jpg'
// import candid from './candid.jpg'
import Typewriter from 'typewriter-effect';

class About extends Component {
  render () {
    return (

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

            Hi! I’m Juheon, and I’m a sixteen year old student who likes coding. ^^<br/> 
            I’m currently interested in IOS development, and recently published my first app! <br/> 

            I’m also working on pixel-wise image segmentation encoder-decoder based model, and on another app for finding insurance covered oriental hospitals in South Korea!
            <br/> 
            I like competitive programming and I’m a USACO gold division competitor. 

            </p>

            <div className="extra-small">
              
            Also, please don't search me up on google. I don't look like that. I was pretty terrible at taking photos and posing.

            </div>

            </section>
            

        </div>

    )
  }
}

export {About};