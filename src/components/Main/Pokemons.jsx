import React, {Component} from 'react';
/* import PropTypes from 'prop-types' */


class Pokemons extends Component{
    constructor(props){
        super(props)
        this.state = {
            api:'',
        }
    }
    apiCall(url,handler){
        fetch(url)
            .then(response => response.json())
            .then(data=>handler(data))
            .catch(error=>console.log(error))
    }
    mostrarPokemons = (data) => {
        this.setState({api:data.results})
        console.log(this.state.api)
    }
    componentDidMount(){
        console.log('Pokemons montado.')
        this.apiCall('https://pokeapi.co/api/v2/pokemon/',this.mostrarPokemons)
    }
    render(){
        let contenido;
        if (this.state.api == '') {
            contenido = <p>Cargando...</p>
        }else{
            contenido=<ul>
                {this.state.api.map((pokemon,i)=><li key={pokemon.title + i}><a href={pokemon.url}>{pokemon.name}</a></li>)}
            </ul>
        }
        return(
            <div>
                {contenido}
            </div>
        )    
    }
}
export default Pokemons;