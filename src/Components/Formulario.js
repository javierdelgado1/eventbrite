import React, { Component } from 'react'
import {CategoriasConsumer} from '../context/CategoriasContext'

import {EventosConsumer} from '../context/EventosContext'

export default class Formulario extends Component {
    state = {
        nombre: '',
        categoria : ''
    }

    obtenerDatosEvento =e => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <EventosConsumer>
                {
                    (value) => {
                            return (
                                 <form  onSubmit={e =>{
                                    e.preventDefault();
                                    value.obtenerEventos(this.state);
                                }}>
                                    <fieldset className="uk-fieldset">
                                        <legend className="uk-legend uk-text-center" >
                                            Busca tu evento por nombre o categoria
                                        </legend>
                                    </fieldset>
                                    <div className="uk-column-1-3@m uk-margin">
                                        <div className="uk-margin" uk-margin="true">
                                                <input
                                                    name="nombre"
                                                    className="uk-input"
                                                    type="text"
                                                    placeholder="Nombre de evento o ciudad"
                                                    onChange={this.obtenerDatosEvento}
                                                    
                                                    />

                                        </div>
                                        <div className="uk-column-1-3@m uk-margin">
                                            <select 
                                                className="uk-select" 
                                                name="categoria"
                                                onChange={this.obtenerDatosEvento}
                                                >
                                                    <option value = "" >seleccione</option>
                                                <CategoriasConsumer>
                                                    {(value) => {
                                                        console.log(value.categorias);
                                                        return (
                                                            value.categorias.map(categoria  => ( 
                                                                <option key={categoria.id} value={categoria.id}
                                                                data-uk-form-select>
                                                                    {categoria.name_localized}
                                                                </option>
                                                            ))
                                                            )
                                                        }}
                                                </CategoriasConsumer>

                                            </select>
                                        </div>
                                        <div>
                                            <input 
                                                type="submit" 
                                                className="uk-button uk-button-danger"
                                                value="Busca eventos"
                                                />

                                        </div>
                                    </div>
                                </form>
                            )
                    }
                 }
            </EventosConsumer>
        )
    }
}
