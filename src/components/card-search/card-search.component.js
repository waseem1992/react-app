import React, { Component} from "react";
import './card-search.css';


function SearchBox({placeholder,onChange}) {
    return (
        <div>
        <input className="search" type="text" onChange={onChange} name="search" placeholder={placeholder}/>
    </div>
      );
}

export default SearchBox;

