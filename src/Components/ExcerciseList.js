import React, { Fragment } from 'react';
import Card from "../Components/Card";

const ExcerciseList = ({ ejemplos }) => (
    <Fragment>
        {
            ejemplos.map((ejercicio) => {
                return (<Card key={ejercicio.id} {...ejercicio} />);
            })
        }
    </Fragment>
)

export default ExcerciseList;