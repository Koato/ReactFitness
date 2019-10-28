import React from "react";
import ExerciseForm from "../ExerciseForm";
import Card from "../Card";

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
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm">
                    <ExerciseForm onChange={this.handleCharge} form={this.state.form} />
                </div>
            </div>
        );
    }
}

export default ExcercisesNew;