// Since app is rendering in the index anyway, the styles are imported here.
import React, { Component } from "react";
//import {  } from "reactstrap";
import "./styles/bootstrap.min.css";
import "./styles/style.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";



// Initializes state to 0 or empty
class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0
  };

  // On the click of a card/image, the targeted character is taken out of the array
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const characterAlreadyClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;

    //if you click on a character that has already been selected, the game is reset and cards reordered
    if (characterAlreadyClicked) {
      this.setState({
        character: this.state.characters.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacters: [],
        score: 0
      });
      alert("You lose. Play again?");

      //if you click on an available character, your score is increased and cards reordered
    } else {
      this.setState(
        {
          character: this.state.characters.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        //if you get all 12 character corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              character: this.state.characters.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };



  //the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.characters.map(character => (
            <FriendCard
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;






/*
const CharacterImages = props => {
  

  return (
    <div className="container">
      <div className="row">

        <div className="col sm12 md6 lg3 p-3 text-center">
          <img src={characters[0].image} />
        </div>

          <div className="col sm12 md6 lg3 p-3 text-center">
          <img src={characters[7].image} />
        </div>

          <div className="col sm12 md6 lg3 p-3 text-center">
          <img src={characters[3].image} />
        </div>

          <div className="col sm12 md6 lg3 p-3 text-center">
          <img src={characters[6].image} />
        </div>

      </div>
    </div>
  )
}

 
const CharacterCards = props => {

  return (
    <div className="container">
      <div className="row">

        <div className="col sm12 md6 lg3 p-3 text-center">
          <img src={props.image} />
        </div>

      </div>
    </div>
  )
}
*/

/*  Notes to self

// Practicing OOP style here. I can always turn these into components later on. This just seems easier to preview everything for now.
const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container.png">
        <center>
          <img src= {tew} id= "tew"/>
          <p className="lead"> This is a game where you dare not to click on the same character more than once. </p>
          <p> Click on the characters if you dare! </p>
        </center>
      </div>
    </div>
  )
}

  
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

// Because app is already being rendered in index.js, there is no need to wrap return in render
const App = () => {
 

  return (
    <React.Fragment>
      <Jumbotron />
      <CharacterImages />
      <CharacterImages />
      <CharacterImages />
    </React.Fragment>
  )
};
export default App;

*/


