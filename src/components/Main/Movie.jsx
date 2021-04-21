import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Movie extends Component{
    render(props){
        return(
                    <li>"{this.props.title}" es una película con un rating de {this.props.rating}, lo que significa que esta película es muy {this.props.rating>6? 'buena':'mala'}.</li>
        )    
    }
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