import React from "react";
import ListaHistoria from "../componentes/ListaHistoria";

export default class HistoriaPágina extends React.Component{

    historia = [
        {
            título: '1952 - Nace el proyecto',
            nombre: 'Comienzos en IAME',
            descripción: 'A mediados de 1952 se analiza en IAME (Industrias Aeronáuticas y Mecánicas del Estado) la posibilidad de producir una motocicleta de baja cilindrada y precio accesible, para cubrir una gran demanda de los sectores más populares. Se tomó como modelo una moto Guericke de origen alemán. La primera producción, a nivel prototipo, fue de 20 unidades que se obsequiaron a obreros del equipo para que las testearan.',
            imagen: '../recursos/IAME.jpg',
            títuloImagen: 'Fábrica IAME',
        },
        {
            título: 'Un hito en la industria (1952 - 1956)',
            nombre: 'Primera Serie',
            descripción: 'Con una cilindrada de 98cc, 2 velocidades y su característica inconfundible, la palanca de cambios en el tanque, arranque con pedales duales tipo bicicleta, freno trasero contrapedal y delantero con patines expansibles y cintas. Poseía solo un asiento individual. Contaba con una caja de herramientas en la parte inferior del asiento y para parar el motor tenía un descompresor.',
            imagen: '../recursos/primera-serie.jpg',
            títuloImagen: 'Primera Serie',
        },
        {
            título: 'Para trabajar y pasear (1956 - 1963)',
            nombre: 'Segunda Serie',
            descripción: 'Con una cilindrada de 98cc se empezó a fabricar en 1956, para esta época la palanca de cambios ya se encontraba como pedalera, y el freno trasero era a varilla, las cubiertas cambiaron de 26 x 2.00 a 26x2.25 en esta serie, y se realizaron algunas modificaciones como es el caso del descompresor que fue remplazado por un botón de apagado que se encontraba debajo del farol en la misma línea del velocímetro, que también fue añadido en este modelo. Se puede notar grandes cambios con respecto a la articulación del cuadro y suspensiones entre esta y la primera.',
            imagen: '../recursos/segunda-serie.jpg',
            títuloImagen: 'Segunda Serie',
        },
        {
            título: 'Un hito en la industria (1952 - 1956)',
            nombre: 'Cuarta Serie',
            descripción: 'Nació en el año 1959, al igual que la segunda se diferencian modelos entre la misma serie, la primera camada venía con motor de 98cc aunque ya con 3 velocidades, y luego ya empezó a fabricarse con motores de 125cc. A diferencia de las series anteriores, contaba con un rodado 16. La horquilla no contaba con suspensión telescópica pero poseía un par de bielas en forma contrapuesta a la línea de las astas de la horquilla haciendo que su andar fuera más suave. Contaban con asiento para dos personas unificado.',
            imagen: '../recursos/cuarta-serie.jpg',
            títuloImagen: 'Cuarta Serie',
        },
        {
            título: 'Motor más poderoso! (1963 - 1966)',
            nombre: 'Quinta Serie',
            descripción: 'En el año 1963 debido al comienzo de las privatizaciones no tuvo tiempo de ser producida en serie, sólo salieron de la fábrica muy pocas unidades, contaba con un rodado de 18 y un motor de 200 cc.',
            imagen: '../recursos/quinta-serie.jpg',
            títuloImagen: 'Quinta Serie',
        },
    ]
    render() {
        return (
            <>
                <h1 className="fuenteTexto">Historia</h1>
                <ListaHistoria historia={this.historia} />                                                      
            </>
        )
    }
}