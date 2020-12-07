import React, { Component} from "react";
import './card-list.css';
import  Card  from '../card/card.component.js'
export const CardList = props =>{
    return (
    <div className="card-list">
     {props.users.map(user=>(
        <Card key={user.id} user={user}/>
       ))}

    </div>
      );
};