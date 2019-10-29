import React, { Component, useState } from 'react';
import Loading from "../Loading/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";

const ExcercisesContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <FatalError />;
    }
    return (
        <Exercises data={data} />
    );
}

// class ExcercisesContainer extends Component {
//     state = {
//         data: [],
//         loading: true,
//         error: null
//     }

//     async componentDidMount() {
//         await this.getExercises();
//     }

//     getExercises = async () => {
//         try {
//             //obtengo el contenido de la url
//             let url = await fetch('http://localhost:8000/api/exercises');
//             //lo convierto a json
//             let resultado = await url.json();

//             this.setState({
//                 //seteo el resultado en el estado
//                 data: resultado,
//                 loading: false
//             })
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }
//     }

//     render() {
//         
//     }
// }

export default ExcercisesContainer;