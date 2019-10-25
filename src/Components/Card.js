import React from "react";
import exercise from "../images/exercise.png";
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exercise} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>
                                Guía técnica
                            </h1>
                            <p>
                                Lectura de actividades y rutinas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;