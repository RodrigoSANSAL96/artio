import React from "react";
import './Imagenes.css';
export default class Imagenes extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mostrar: true
        }

        this.toggleMostrar = this.toggleMostrar.bind(this);
    }

    toggleMostrar(){
        this.setState(prevState => ({
            mostrar: !prevState.mostrar
        }))
    }


    render() {
        return(
            <div className="contenedorImagenes">
                <div className="subcontenedorImagenes">
                    <h2 className="fuenteTexto">{this.props.nombre}</h2>
                    <div>
                        <button className="btn btn-success fuenteTexto" onClick={this.toggleMostrar}>Ver Moto</button>
                    </div>
                    <div className={this.state.mostrar ? 'd-none' : ''}>
                        <img className="imagenMoto fuenteTexto" src={this.props.imagen} alt={this.props.títuloImagen}/>
                    </div>
                </div>
            </div>
        )
    }
}