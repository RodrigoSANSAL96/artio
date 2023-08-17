import React from "react";
import Imagenes from "./Imagenes";

export default class ListaImagenes extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                {this.props.imagenes.map((imagenes) => (
                    <Imagenes nombre={imagenes.nombre} imagen={imagenes.imagen} títuloImagen={imagenes.títuloImagen}/>
                ))}
            </>
        );
    }

}