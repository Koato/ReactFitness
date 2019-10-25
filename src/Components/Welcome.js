import React from "react";
import '../Components/styles/Welcome.css'

const Welcome = ({ name }) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hola {name}</h1>
            <p>Empezarás un regimen de alimentación y entrenamiento riguroso</p>
        </div>
    </div>
)

export default Welcome;