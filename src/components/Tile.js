import { useState } from "react";
import React from "react";
import '../App.css'

function Tile(props){
    return(
        <div className="tile" onClick={() => (props.handleChange(props.tile))}>
            <h1>{props.tile.getCheck() == 'empty' ? null : props.tile.getCheck()}</h1>
        </div>
    )
}

export default Tile