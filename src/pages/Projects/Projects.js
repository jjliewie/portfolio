import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';

class Projects extends Component {
  render () {
    return (
      <section id="projects">

      <div className="projects">

      <h1>
      Check out some of my <span>really cool</span> projects!
      </h1>

      <br/><br/>

      <div className="cards">

      <a href="https://github.com/jjliewie/carotid-artery-ultrasonic" target="_blank" rel="noreferrer">

      <Card className="project-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title className="card-title">CIMT Segmentation</Card.Title>
          <Card.Text>
            Deep Learning approach to pixel-wise classification.
            UNet with Attention map.
          </Card.Text>
        </Card.Body>
      </Card>

      </a>

      <a href="https://apps.apple.com/us/app/times-table-world/id1610117697" target="_blank" rel="noreferrer">

      <Card className="project-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title className="card-title">Times Table World</Card.Title>
          <Card.Text>
            Created Times Table App with SwiftUI.
            Now Available on the AppStore. 
          </Card.Text>
        </Card.Body>
      </Card>

      </a>

      <a href="https://github.com/jjliewie/greenfoot-shooting" target="_blank" rel="noreferrer">

      <Card className="project-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title className="card-title">Shooting Game</Card.Title>
          <Card.Text>
            Created with Greenfoot (Java). 
            Parabolic Gravity-abiding bullets.
          </Card.Text>
        </Card.Body>
      </Card>

      </a>

      <a href="https://github.com/jjliewie/job_test" target="_blank" rel="noreferrer">

      <Card className="project-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title className="card-title">Personality-Job</Card.Title>
          <Card.Text>
            Recommends occupation based on personality.
            Made with Python Flask.
          </Card.Text>
        </Card.Body>
      </Card>

      </a>

      <a href="https://github.com/jjliewie/Competitive-Programming" target="_blank" rel="noreferrer">

      <Card className="project-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title className="card-title">USACO Solutions</Card.Title>
          <Card.Text>
            Respository containing USACO solutions. 
            Mostly Bronze and Silver.
          </Card.Text>
        </Card.Body>
      </Card>

      </a>

      <a href="#this" target="_blank" rel="noreferrer">

      <Card className="project-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title className="card-title">This Website</Card.Title>
          <Card.Text>
            Personal portfolio with minimalistic UI. 
            Made with React JS.
          </Card.Text>
        </Card.Body>
      </Card>

      </a>
        
      </div>

      <br/>

      </div>
      
      </section>
    )
  }
}

export {Projects};