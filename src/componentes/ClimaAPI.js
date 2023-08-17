import React, { useDebugValue } from "react";

export default class ClimaAPI extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            climas: []
        }

    }

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Cordoba&APPID=4a52d040f7ab75447dd871c1c1da5aba&units=metric")
        .then(res => res.json() )
        .then( (result) => {
            console.log(result)
            this.setState({
                climas: result.temp
            });
        })
    }
    render(){
        return (
            <>
            {this.state.climas.map((clima) => (
                <span>Climas</span>
            ))}
            </>

        )
    }
}