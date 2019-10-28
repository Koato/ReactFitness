import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Excercises from "./pages/ExcercisesContainer";
import ExcercisesNew from "./pages/ExcercisesNewContainer";
import NotFound from "./pages/400";

const App = () => (
    <BrowserRouter>
        {/* establesco las rutas que voy a manejar */}
        <Switch>
            {/* indico que mostrar en la ruta principal o vacia */}
            <Route exact path="/" component={Excercises} />
            <Route exact path="/excercise" component={Excercises} />
            <Route exact path="/excercise/new" component={ExcercisesNew} />
            {/* en caso de no encontrar una ruta */}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;