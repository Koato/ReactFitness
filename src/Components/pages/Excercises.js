import React, { Component } from 'react';
import Welcome from "../Welcome";
import ExcerciseList from "../ExcerciseList";
import Button from '../Button';

class Excercises extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        await this.getExercises();
    }

    getExercises = async () => {
        //obtengo el contenido de la url
        let url = await fetch('http://localhost:8000/api/exercises');
        //lo convierto a json
        let resultado = await url.json();

        this.setState({
            //seteo el resultado en el estado
            data: resultado
        })
    }

    render() {
        return (
            <div>
                <Welcome name="Andy" />
                <ExcerciseList ejemplos={this.state.data} />
                <Button />
            </div>
        );
    }
}

export default Excercises;