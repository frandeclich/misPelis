import React, {Component} from 'react';
import Movie from './Movie'
import Contador from './Contador'
import Pokemons from './Pokemons'
import ReactHookForm from './ReactHookForm'

class Main extends Component{
    componentDidMount(){
        console.log('Montado.')
    }
    componentDidUpdate(){
        console.log('Actualizado.')
    }
    
    render(){
        const user={
            firstName:'Francisco',
            lastName:'Declich',
            nickName:'Fran',
            formatName:function(){
                return this.firstName+' '+ this.lastName
            },
            favouriteMovies:["Alicia en el país de las Maravillas","La momia","El Ángel"]
        } 
        const movies=[
            {
                title:"Alicia en el país de las Maravillas",
                rating:8,
                key:1,
            },
            {
                title:"La momia",
                rating:4,
                key:2,
            },
            {
                title:"El Ángel",
                rating:6,
                key:3,
            }
        ]
        return (
            <div className="main-container">
                <Pokemons/>
                <hr/>
                <h2>Las pelis favoritas de {user.nickName}</h2>
                <ul>
                    {user.favouriteMovies.map(movie=><li>{movie}</li>)}
                    <br/>
                </ul>
                <hr/>
                <h2>Especificaciones de las películas:</h2>
                <ul>
                {movies.map((movie,index)=>
                    <Movie
                        key = {index}
                        title ={movie.title}
                        rating ={movie.rating}
                    />)}
                </ul>
                <hr/>
                <h5>{user.formatName()} es un capo.</h5>
                <hr/>
                <Contador
                    valor = {0}
                />
                <hr/>
                <ReactHookForm/>
                <br/>
            </div>
        );
    }
}

export default Main;