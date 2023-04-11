import React from "react";
import { connect } from "react-redux";
import { expandInstructions, collapseInstructions } from "../actions/settings";

const Instructions = (props) => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } =
    props;

  if (instructionsExpanded) {
    return (
      <div>
        <h3>Instructions</h3>
        <p>Welcome to evens or odds. The game goes like this</p>
        <p>
          The deck is shuffeled. Tehn choose: will the next card be even or odd?
        </p>
        <p>Make a choice on every draw, and see how many you can get right!</p>
        <p>(Face cards don't count)</p>
        <br />
        <button onClick={collapseInstructions}>Show Less</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Instructions</h3>
      <p>Welcome to evens or odds. The game goes like this...</p>
      <button onClick={expandInstructions}>Read more</button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     expandInstructions: () => dispatch(expandInstructions()),
//     collapseInstructions: () => dispatch(collapseInstructions()),
//   };
// };

export default connect(
  (state) => ({ instructionsExpanded: state.settings.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
