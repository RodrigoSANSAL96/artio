import React from "react";
import './Contacto.css';
import './Fuente.css';
export default class Contacto extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            nombre : '',
            mensaje: '',
        }
        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
        this.mensaje = this.mensaje.bind(this);
    }

    submitted (event) {
        alert("Se envió el formulario de " + this.state.nombre + " con el mensaje que dice " + this.state.mensaje);
        event.preventDefault();
    }
    changed (event) {
        this.setState({
            nombre: event.target.value,
        })
    }
    mensaje (event) {
        this.setState({
            mensaje: event.target.value
        })
    }

    render() {
        return(
            <>
                <h1 className="fuenteTexto">Contacto</h1>
                <form onSubmit={this.submitted}>
                    <div className="contenedorContacto">
                        <div className="formulario">
                            <h3 className="pb-3 fuenteTexto">Vos también tenés una puma? Mandanos tu mensaje!</h3>
                            <div className="mb-3">
                                <input type="text" className="form-control nombre fuenteTexto" id="exampleFormControlInput1" placeholder="Nombre y Apellido" onChange={this.changed}/>
                            </div>
                            <div class="mb-3">
                                <textarea className="form-control mensaje fuenteTexto" id="exampleFormControlTextarea1" rows="3" placeholder="Contános tu historia..." onChange={this.mensaje}></textarea>
                            </div>
                            <div className="botón">
                                <button className="btn btn-primary fuenteTexto">Enviar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </>

        )
    }
}