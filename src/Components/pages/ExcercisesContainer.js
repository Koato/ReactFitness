import React from 'react';
import Loading from "../Loading/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";
// incorporar el hook personalizado
import useFetch from "../Hooks/useFetch";

const ExcercisesContainer = () => {
    const { data, loading, error } = useFetch('http://localhost:8000/api/exercises');

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