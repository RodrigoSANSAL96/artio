import React from "react";
import './Historia.css';
import './Fuente.css';
export default class Historia extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contenedorHistoria fuenteTexto">
                <div className="contenedor">
                    <div className="subcontenedor">
                        <h4>{this.props.título}</h4>
                        <h2>{this.props.nombre}</h2>
                        <p>{this.props.descripción}</p>
                    </div>
                    <div className="sombra">
                        <img src={this.props.imagen} alt={this.props.títuloImagen}></img>
                    </div>
                </div>
            </div>
        )
    }
}