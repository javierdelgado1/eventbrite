import React, { Component } from 'react'
import axios from 'axios';
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

export default class EventosProvider extends Component {
    

    token = "SO4SXFQGGE4EEILNPVOE";
    ordenar= "date";
    state={
        eventos: []
    }
    
    obtenerEventos = async (busqueda) =>{
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`
        const eventos = await axios.get(url);
        console.log(eventos);
        this.setState({
            eventos: eventos
        });
    }
    render() {
        return (
            <EventosContext.Provider
                value = {{
                    eventos :this.state.eventos,
                    obtenerEventos : this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        )
    }
}
