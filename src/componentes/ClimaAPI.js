import React, { useDebugValue } from "react";
import './ClimaAPI.css';

export default class ClimaAPI extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            climasCor: [],
            climasBsAS: []
        };

    }

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=-31.4135&lon=-64.18105&appid=4a52d040f7ab75447dd871c1c1da5aba&units=metric")
           .then(res => res.json() )
           .then(result => {
               console.log(result);
               this.setState({
                  climasCor: [result]
            });
        });
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&appid=4a52d040f7ab75447dd871c1c1da5aba&units=metric")
           .then(res => res.json() )
           .then(result => {
               console.log(result);
               this.setState({
                  climasBsAS: [result]
            });
        });
    }
    render(){
        return (
            <>
            <div>
                {this.state.climasCor.map((clima, index) => (
                    <div>
                        <div className="ciudad">
                            <h2 key={index}>{clima.name}</h2>
                        </div>
                        <div className="dato">
                            <h5>Temperatura máxima</h5>
                            <h5 key={index}>{clima.main.temp_max}°C</h5>
                        </div>
                        <div className="dato">
                            <h5>Temperatura mínima</h5>
                        <h5 key={index}>{clima.main.temp_min}°C</h5>
                        </div>
                        <div className="dato">
                            <h5>Humedad</h5>
                        <h5 key={index}>{clima.main.humidity}</h5>
                        </div>
                        <div className="dato">
                        <h5>Viento</h5>
                        <h5 key={index}>{clima.wind.speed}m/s</h5>
                        </div>
                    </div>
                ))}
                {this.state.climasBsAS.map((clima, index) => (
                    <div>
                        <div className="ciudad">
                            <h2 key={index}>{clima.name}</h2>
                        </div>
                        <div className="dato">
                            <h5>Temperatura máxima</h5>
                            <h5 key={index}>{clima.main.temp_max}°C</h5>
                        </div>
                        <div className="dato">
                            <h5>Temperatura mínima</h5>
                        <h5 key={index}>{clima.main.temp_min}°C</h5>
                        </div>
                        <div className="dato">
                            <h5>Humedad</h5>
                        <h5 key={index}>{clima.main.humidity}</h5>
                        </div>
                        <div className="dato">
                        <h5>Viento</h5>
                        <h5 key={index}>{clima.wind.speed}m/s</h5>
                        </div>
                    </div>
                ))}
            </div>
            </>

        )
    }
}