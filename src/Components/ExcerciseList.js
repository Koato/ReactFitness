import React from 'react';
import Card from "../Components/Card";

function ExcerciseList(props) {
    return (
        <div>
            {
                props.ejemplos.map((ejercicio) => {
                    return (<Card title={ejercicio.title}
                        description={ejercicio.description}
                        img={ejercicio.img}
                        leftColor={ejercicio.leftColor}
                        rightColor={ejercicio.rightColor} />);
                })
            }
        </div>
    );
}

export default ExcerciseList;