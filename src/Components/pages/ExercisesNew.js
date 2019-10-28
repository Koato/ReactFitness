import React from 'react';
import ExerciseForm from "../ExerciseForm";
import Card from "../Card";

const ExercisesNew = ({ form, onChange, onSubmit }) => {
    return (
        <div className="ExerciseNew_Lateral_Spaces row">
            <div className="col-sm ExerciseNew_Card_Space">
                <Card {...form} />
            </div>
            <div className="col-sm ExerciseNew_Card_Space">
                <ExerciseForm onChange={onChange} onSubmit={onSubmit} form={form} />
            </div>
        </div>
    );
};

export default ExercisesNew;