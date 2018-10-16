import React, { Component } from "react";

import './Jumbotron.css'
import tew from './tew.png'

/*  Practicing OOP style here. I can always turn these into components later on. This just seems easier to preview everything for now.*/
class Jumbotron extends Component {
    render() {
    return (
      <div className="jumbotron">
        <div className="container.png">
          <center>
            <img src= {tew} id= "tew"/>
            <p className="lead"> This is a memory game where you dare not to click on the same character more than once. </p>
            <p> Click on the characters if you dare! </p>
          </center>
        </div>
      </div>
    )
  }
}
  

  export default Jumbotron;