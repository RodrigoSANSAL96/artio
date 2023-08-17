import React from "react";
import Historia from "./Historia";

export default class ListaHistoria extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                {this.props.historia.map((historia) => (
                    <Historia título={historia.título} nombre={historia.nombre} descripción={historia.descripción} imagen={historia.imagen} títuloImagen={historia.títuloImagen}/>
                ))}
            </>
        );
    }
}