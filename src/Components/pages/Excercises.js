import React, { Component, Fragment } from 'react';
import Welcome from "../Welcome";
import ExcerciseList from "../ExcerciseList";
import Button from '../Button';
import Loading from "../Loading/Loading";
import FatalError from "../pages/500";

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
            <Fragment>
                <Welcome name="Andy" />
                <ExcerciseList ejemplos={this.state.data} />
                <Button />
            </Fragment>
        );
    }
}

export default Excercises;