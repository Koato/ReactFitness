import { useState, useEffect } from "react";

//peticion de tipo GET
const useFetch = (ruta) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //ejecucion despues de renderizar
        const getExercises = async () => {
            try {
                //obtengo el contenido de la url
                let url = await fetch(ruta);
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
    }, [ruta]);
    return { data, loading, error };
}

export default useFetch;