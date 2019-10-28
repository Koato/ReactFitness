import React from "react";
import "../styles/Errors.css";
import NotFoundImg from "../../images/404.png";

const NotFound = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 404 No se ha encontrado lo que busca</h1>
        <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
    </div>
);

export default NotFound;