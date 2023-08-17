import React from "react";
import ListaImagenes from "../componentes/ListaImagenes";

export default class ImagenesPágina extends React.Component{

    imagenes = [
        {
            nombre: 'Primera Serie',
            imagen: '../recursos/primera-serie-1.jpg',
            títuloImagen: 'Primera Serie Color Beige',
        },
        {
            nombre: 'Segunda Serie',
            imagen: '../recursos/segunda-serie-1.jpg',
            títuloImagen: 'Segunda Serie Color Roja',
        },
        {
            nombre: 'Cuarta Serie',
            imagen: '../recursos/cuarta-serie-1.jpg',
            títuloImagen: 'Cuarta Serie Color Celeste',
        },
        {
            nombre: 'Quinta Serie',
            imagen: '../recursos/quinta-serie-1.jpg',
            títuloImagen: 'Quinta Serie Color Roja',
        },
    ]
    render() {
        return (
            <>
                <h1 className="fuenteTexto">Imágenes</h1>
                <ListaImagenes imagenes={this.imagenes} />
            </>
        )
    }
}