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
                strings: ["I write poems.", "I do math. (sometimes)", "I read.", "I climb!"],
                autoStart: true,
                loop: true,
            }}
            />

            </h3>

            <p>

            <br/>

            Hi. I'm 19 now.<br/> 
            I like math, reading, competitive programming & climbing!

            <br/> 
            I also write.
            <br/>
            *･゜ﾟ･*:.｡..｡.:*･'(*ﾟ▽ﾟ*)'･*:.｡. .｡.:*･゜ﾟ･*
            </p> 

            </section>
            
        <Footer/>

        </div>
        </div>
    )
  }
}

export {About};