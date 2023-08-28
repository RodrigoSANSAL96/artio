import React from "react";
import './Inicio.css';
import ClimaAPI from "./ClimaAPI";
export default class Inicio extends React.Component {
    
    
    render() {
        return(
            <div className="contenedorPrincipal">
                <div>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="imagenCarousel carousel-item active">
                             <img src="../recursos/inicio1.jpg" class="d-block w-100 imagenesInicio" alt="..."/>
                            </div>
                            <div class="imagenCarousel carousel-item">
                             <img src="../recursos/inicio2.jpg" class="d-block w-100 imagenesInicio" alt="..."/>
                            </div>
                            <div class="imagenCarousel carousel-item">
                              <img src="../recursos/inicio3.jpg" class="d-block w-100 imagenesInicio" alt="..."/>
                            </div>
                            <div class="imagenCarousel carousel-item">
                              <img src="../recursos/inicio4.jpg" class="d-block w-100 imagenesInicio" alt="..."/>
                            </div>
                            <div class="imagenCarousel carousel-item">
                              <img src="../recursos/inicio5.png" class="d-block w-100 imagenesInicio" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <aside>
                    <ClimaAPI/>
                </aside>
            </div>
        )
    }
}