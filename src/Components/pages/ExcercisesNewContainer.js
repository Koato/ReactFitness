import React from "react";
import FatalError from "./500";
import ExercisesNew from "./ExercisesNew";
import configuracionGlobal from "../config";
import "../styles/ExerciseNew.css";

class ExcercisesNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: true,
        error: null
    }

    handleCharge = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        //muestro interactividad con el usuario
        this.setState({
            loading: true
        })
        //cancelo el envio del boton
        e.preventDefault();
        //ejecucion del boton
        try {
            //configuracion para el envio por POST
            let configuracion = {
                method: 'POST',
                // tipo de informacion como header
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //envio la informacion del estado en el body
                body: JSON.stringify(this.state.form)
            }
            //indico el medio de la solicitud, sino lo indico sera GET
            let respuesta = await fetch(`${configuracionGlobal}/exercises`, configuracion);
            //obtengo la respuesta de la url en json
            let json = await respuesta.json();
            //termino la interactividad con el usuario
            this.setState({
                loading: false
            })
            //redireccionamiento
            this.props.history.push('/excercise');
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
        console.log(this.state);
    }

    render() {
        if (this.state.error) {
            return <FatalError />;
        }
        return (
            <ExercisesNew form={this.state.form} onChange={this.handleCharge} onSubmit={this.handleSubmit} />
        );
    }
}

export default ExcercisesNewContainer;