import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, cancelGame } from "../actions/settings.jsx";
import { fetchNewDeck } from "../actions/deck.jsx";
import fetchStates from "../reducers/fetchStates.jsx";
import Description from "./Description.jsx";
import CardDisplay from "./CardDisplay.jsx";
import Card from "./Card.jsx";
import Guess from "./Guess.jsx";
import GameState from './GameState.jsx';
class Main extends Component {
   startGame = () => {
      this.props.startGame();
      this.props.fetchNewDeck();
   };
   render() {
      if (this.props.fetchStates === fetchStates.error) {
         return (
            <div>
               <p>Please try reloading the app. An error occurred.</p>
               <p>{this.props.message}</p>
            </div>
         );
      }
      return (
         <div className="mainComponent">
            <h2> ♤ ♡ Evens or odds game ♢ ♧</h2>
            <div>
               {this.props.gameStarted ? (
                  <div>
                     <h3>The game is on!</h3>
                     <GameState/>
                     <br />
                     <Guess/>
                     <br/>
                     <CardDisplay />
                     <hr />
                     <Card/>
                     <hr/>
                     <button onClick={this.props.cancelGame}>
                        Cancel Game
                     </button>
                  </div>
               ) : (
                  <div>
                     <h3>A new game awaits!</h3>
                     <br />
                     <button onClick={this.startGame}>Start Game</button>
                  </div>
               )}
            </div>
            <hr />
            <Description />
         </div>
      );
   }
}
const mapStateToProps = state => {
   const {
      settings: { gameStarted },
      deck: { fetchStates, message },
   } = state;
   return {
      gameStarted,
      fetchStates,
      message,
   };
};

const componentConnector = connect(
   mapStateToProps,
   { startGame, cancelGame, fetchNewDeck },
);
export default componentConnector(Main);
