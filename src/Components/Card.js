import React from "react";
import exerciseIMG from "../images/exercise.png";
import circlesIMG from "../images/circles.png";
import './styles/Card.css';
import 'bootstrap/dist/css/bootstrap.css';

class Card extends React.Component {
    // constructor de la aplicacion
    constructor(props) {
        super(props);
        this.state = {
            imagen: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    render() {
        // atajo a la informacion pasada
        const { title, description, img, leftColor, rightColor } = this.props;
        // contenido que se muestra en la ventana
        return (
            <div className="card mx-auto Fitness-Card" style={{
                backgroundImage: `url({${circlesIMG}}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.imagen} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;