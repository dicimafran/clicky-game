// Since app is rendering in the index anyway, the styles are imported here.
import React, { Component } from "react";
//import {  } from "reactstrap";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import characters from "./characters.json";
import tew from "./tew.png"
import "./App.css";

/*  Practicing OOP style here. I can always turn these into components later on. This just seems easier to preview everything for now.*/
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container.png">
        <center>
          <img src= {tew} id= "tew"/>
          <p className="lead"> Click on an image for points, but avoid clicking!</p>
        </center>
      </div>
    </div>
  )
}

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

const CharacterImages = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col s3 char">
          <img src={characters[0].image} />
        </div>

          <div className="col s3 p-0">
          <img src={characters[1].image} />
        </div>

          <div className="col s3 p-0">
          <img src={characters[3].image} />
        </div>

          <div className="col s3 p-0">
          <img src={characters[6].image} />
        </div>

      </div>
    </div>
  )
}

/*  Notes to self
  
    Since App is already being exported, there"s no need to do the whole class App extends component.
    
    Fragments- Experimenting with app fragments. They let you group a list of children without adding extra nodes to the DOM:
      React 16.0 added support for returning an array of elements from a component’s render method. 
      Instead of wrapping the children in a DOM element, you can put them into an array:
          Children in an array must be separated by commas.
          Children in an array must have a key to prevent React’s key warning.
          Strings must be wrapped in quotes.

      So how do I use it here?  ----- > React.Fragment
          Whenever you need to wrap the content of a component and you don’t want to add an extra div or other wrapping element to the DOM, use a Fragment
          It eliminates need for the single div around all the tags
          The content of the component will render as expected but without the wrapping
*/


// Because app is already being rendered in index.js, there is no need to wrap return in render
const App = () => {
  return (
    <React.Fragment>
      <Jumbotron />
      <CharacterImages />
      <CharacterImages/>
      <CharacterImages/>

    </React.Fragment>
  )
};

export default App;
