import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame } from "../actions/settings";
import { cancelGame } from "../actions/settings";
import Instructions from "./Instructions";
import { fetchNewDeck } from "../actions/deck";
import fetchStates from "../reducers/fetchStates";

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };
  render() {
    console.log("this", this);
    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occured.</p>
          <p>{this.props.message}</p>
        </div>
      );
    }
    return (
      <div>
        <h2>♥️ ♠️ Evens or Odds ♦️ ♣️</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  // const { gameStarted, fetchState, message } = state;
  // const {gameStarted } = state.settings;
  // const { fetchState, message } = state.deck;
  const {
    settings: { gameStarted },
    deck: { fetchState, message },
  } = state;

  return {
    gameStarted,
    fetchState,
    message,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck()),
//   };
// };
const componentConnector = connect(mapStateToProps, {
  startGame,
  cancelGame,
  fetchNewDeck,
});

export default componentConnector(App);
