import React, {useEffect, useState} from 'react';


function Pokemons(){
    const [api,setApi] = useState([])
    function apiCall(url,handler){
        fetch(url)
            .then(response => response.json())
            .then(data=>handler(data))
            .catch(error=>console.log(error))
    }
    function mostrarPokemons(data){
        setApi(data.results)
        console.log(api)
    }
    useEffect(()=>{
        console.log('Pokemons montado.');
        apiCall('https://pokeapi.co/api/v2/pokemon/',mostrarPokemons)
    },[])
    let contenido;
    if (api === []) {
        contenido = <p>Cargando...</p>
    }else{
        contenido=
        <ul>
            {api.map((pokemon,i)=>(<li key={i}><a href={pokemon.url}>{pokemon.name}</a></li>))}
        </ul>
    }
    return(
        <div>
            {contenido}
        </div>
    )   
}
export default Pokemons;