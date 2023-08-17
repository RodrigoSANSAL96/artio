import React from "react";
import './Menu.css';
import './Fuente.css';

import { Link } from "react-router-dom";
export default class Menu extends React.Component {
    
    
    render() {
        return(
            <div>
                <div className="nav">
                    <div>
                        <img src="../recursos/logo-puma.png" alt="Logo Puma"></img>
                    </div>
                    <div className="secciones">
                        <Link to="/inicio" className="seccion fuenteTexto">Inicio</Link>
                        <Link to="/historia" className="seccion fuenteTexto">Historia</Link>
                        <Link to="/imagenes" className="seccion fuenteTexto">Imágenes</Link>
                        <Link to="/contacto" className="seccion fuenteTexto">Contacto</Link>    
                    </div>
                </div>
            </div>
        )
    }
}