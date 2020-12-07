import React, { Component} from "react";
import './card.css';

function Card(props) {
    return (
    <div className="card-container">
        <img src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} />
      <h2> {props.user.name} </h2>
      <p>{props.user.email}</p>
    </div>
      );
}
export default Card;