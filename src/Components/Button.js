import React from "react";
import add from "../images/add.png";
import "../Components/styles/Button.css";
import { Link } from "react-router-dom";

const Button = () => (
    //indico la ruta a la que debo ir de forma tradicional
    /*<a href="/excercise/new">
    <img src={add} className="Fitness-Add" alt="" />
    </a>*/

    //indico la ruta a la que debo ir
    <Link to="/excercise/new">
        <img src={add} className="Fitness-Add" alt="" />
    </Link>
)

export default Button;