import React, { Component } from 'react'

export default class Buscador extends Component {
    busquedaRef = React.createRef()
    obtenerDatos = e =>{
        e.preventDefault();
        // tomamos el valor de input
        const termino =this.busquedaRef.current.value
        // enviamos el valaor
        this.props.datosBusqueda(termino)
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type='text' className='form-control form-control-lg' 
                        placeholder='Busca tu imagen. Ejemplo: autos'/>
                    </div>

                    <div className="form-group col-md-4">
                        <input type='submit' className='btn btn-lg btn-danger btn-block' 
                        value='enviar'/>
                    </div>
                </div>
            </form>
        )
    }
}
