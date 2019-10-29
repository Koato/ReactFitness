import React, { useState, useEffect } from 'react';
import Loading from "../Loading/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";
import Example from "./Example";

const ExcercisesContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //ejecucion despues de renderizar
        const getExercises = async () => {
            try {
                //obtengo el contenido de la url
                let url = await fetch('http://localhost:8000/api/exercises');
                //lo convierto a json
                let resultado = await url.json();

                //seteo el resultado en el estado
                setData(resultado);
                setLoading(false);
            } catch (error) {
                //seteo el resultado en el estado
                setLoading(false);
                setError(error);
            }
        }
        // llamada de la funcion a ejecutar
        getExercises();
    }, []);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <FatalError />;
    }
    return (
        // <Example />
        <Exercises data={data} />
    );
}

export default ExcercisesContainer;