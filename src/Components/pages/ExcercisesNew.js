import React from "react";
import ExerciseForm from "../ExerciseForm";
import Card from "../Card";
import FatalError from "./500";
import "../styles/ExerciseNew.css";

class ExcercisesNew extends React.Component {

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
            let respuesta = await fetch('http://localhost:8000/api/exercises', configuracion);
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
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm ExerciseNew_Card_Space">
                    <ExerciseForm onChange={this.handleCharge} onSubmit={this.handleSubmit} form={this.state.form} />
                </div>
            </div>
        );
    }
}

export default ExcercisesNew;