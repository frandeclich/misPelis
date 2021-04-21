import React from 'react';
import PropTypes from 'prop-types'


function Movie(props){
    return(
        <li>"{props.title}" es una película con un rating de {props.rating}, lo que significa que esta película es muy {props.rating>6? 'buena':'mala'}.</li>
    )    
}
Movie.defaultProps ={
    rating: '(?)'
}

Movie.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
}

export default Movie;


/* {props.movies.map((movie,i)=><li key={movie.title + i}>"{movie.title}"" es una película con un rating de {movie.rating}, lo que significa que esta película es muy {movie.rating>6? 'buena':'mala'}.</li>)} */