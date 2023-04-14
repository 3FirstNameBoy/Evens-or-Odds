import React from "react";
import { connect } from "react-redux";
import { setGuessEven, setGuessOdd } from "../actions/guess";

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
  return (
    <div>
      <h3>Will it be Even or Odd?</h3>
      <div>
        <button
          style={guess === "even" ? { background: "#43a047" } : null}
          onClick={setGuessEven}
        >
          Even
        </button>
        {""}
        <button
          style={guess === "odd" ? { background: "#43a047" } : null}
          onClick={setGuessOdd}
        >
          Odd
        </button>
      </div>
    </div>
  );
};

export default connect(({ gameState: { guess } }) => ({ guess }), {
  setGuessEven,
  setGuessOdd,
})(Guess);
