import React, { Component } from 'react';
import Loading from "../Loading/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";

class Excercises extends Component {
    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount() {
        await this.getExercises();
    }

    getExercises = async () => {
        try {
            //obtengo el contenido de la url
            let url = await fetch('http://localhost:8000/api/exercises');
            //lo convierto a json
            let resultado = await url.json();

            this.setState({
                //seteo el resultado en el estado
                data: resultado,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }
        if (this.state.error) {
            return <FatalError />;
        }
        return (
            <Exercises data={this.state.data} />
        );
    }
}

export default Excercises;