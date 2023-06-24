import React, { Component } from "react";
import '../../styles/style.css';
import Footer from '../../components/Footer'

class Homepage extends Component {
  render () {
    return (
      <section className="home">

      <div className="main">

      <h1>
        <span>Hi! I'm Juheon and I do stuff.</span>
      </h1>

      <h2>
        i luv u 
      </h2>

      <Footer/>
      
      </div>
      
      </section>
    )
  }
}

export {Homepage};