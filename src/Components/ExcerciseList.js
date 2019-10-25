import React from 'react';
import Card from "../Components/Card";

const ExcerciseList = ({ ejemplos }) => (
    <div>
        {
            ejemplos.map((ejercicio) => {
                return (<Card key={ejercicio.id} title={ejercicio.title}
                    description={ejercicio.description}
                    img={ejercicio.img}
                    leftColor={ejercicio.leftColor}
                    rightColor={ejercicio.rightColor} />);
            })
        }
    </div>
)

export default ExcerciseList;