import React from "react";

class ExerciseForm extends React.Component {

    render() {
        const { onChange, onSubmit, form } = this.props;
        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Título" className="form-control" name="title" onChange={onChange} value={form.titulo} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripción" className="form-control" name="description" onChange={onChange} value={form.descripcion} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen" className="form-control" name="img" onChange={onChange} value={form.imagen} />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" placeholder="Color izquierdo" className="form-control" name="leftColor" onChange={onChange} value={form.izquierda} />
                        </div>
                        <div className="col">
                            <input type="text" placeholder="Color derecho" className="form-control" name="rightColor" onChange={onChange} value={form.derecha} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        );
    }
}

export default ExerciseForm;