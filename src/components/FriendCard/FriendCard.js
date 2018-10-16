//sets up the reusable FriendCard component
import React from "react";
import "./FriendCard.css";


//pass the image into each card so all 12 are rendered
const FriendCard = props => (
    <div className="col p-3 text-center">
      <img src={props.image} onClick={props.imageClick} />
    </div>
);

export default FriendCard;