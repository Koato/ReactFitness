import React, { Fragment } from 'react';
import Welcome from "../Welcome";
import ExcerciseList from "../ExcerciseList";
import Button from '../Button';

const Exercises = ({ data }) => {
    return (
        <Fragment>
            <Welcome name="Andy" />
            <ExcerciseList ejemplos={data} />
            <Button />
        </Fragment>
    );
};

export default Exercises;