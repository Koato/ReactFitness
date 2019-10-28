import React from "react";
import ExerciseForm from "../ExerciseForm";
import Card from "../Card";
import "../styles/ExerciseNew.css";

class ExcercisesNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    handleCharge = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm ExerciseNew_Card_Space">
                    <ExerciseForm onChange={this.handleCharge} form={this.state.form} />
                </div>
            </div>
        );
    }
}

export default ExcercisesNew;