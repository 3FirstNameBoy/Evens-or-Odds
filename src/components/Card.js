import React from "react";
import { connect } from "react-redux";

const Card = ({ cards }) => {
  const { value, suit, image } = cards[0];

  return (
    <div>
      <h3>
        {value} of {suit}
      </h3>
      <img src={image} alt="card-image" />
    </div>
  );
};
export default connect()(Card);
