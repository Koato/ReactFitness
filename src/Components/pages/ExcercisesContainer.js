import React from 'react';
import Loading from "../Loading/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";
import configuracionGlobal from "../config";
// incorporar el hook personalizado
import useFetch from "../Hooks/useFetch";

const ExcercisesContainer = () => {
    const { data, loading, error } = useFetch(`${configuracionGlobal}/exercises`);

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