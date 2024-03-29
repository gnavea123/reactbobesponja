import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log("Value of FriendCArd: ");
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="SpongeBob"
          //src="https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"
          src={props.image}
        />
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
    </div>
  );
}

export default FriendCard;
