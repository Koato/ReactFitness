import React from "react";
import add from "../images/add.png";
import "../Components/styles/Button.css";

function Button(props) {
    return (
        <a href="#">
            <img src={add} className="Fitness-Add" alt="" />
        </a>
    );
}

export default Button;