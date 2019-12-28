import React, {Component} from 'react'
import axios from 'axios';

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;


class CategoriasProvider extends Component {
    token = "SO4SXFQGGE4EEILNPVOE";

    state = {
        categorias:[]
    }

    componentDidMount(){
        this.obtenerCategorias();
    }
    obtenerCategorias = async () => {
        let url=  `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        let categories = await axios.get(url);

       // console.log(categories.data.categories);
        this.setState({
            categorias: categories.data.categories
        })
    }
    render (){
        return (
            <CategoriasContext.Provider 
                value={{
                    categorias: this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>


        );
    }
}

export default CategoriasProvider;