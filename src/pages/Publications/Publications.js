import React, { Component } from "react";
import '../../styles/style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAtom } from '@fortawesome/free-solid-svg-icons';
import Slide from '../../components/Slide'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class Publications extends Component {
  render () {
    return (
      <section className="publications">
        
      <div className="pt">

      <h1>
        <span>Publications</span>
      </h1>

      <div className="slider">
      <Slide/>
      </div>

      </div>
      
      </section>
    )
  }
}

export {Publications};