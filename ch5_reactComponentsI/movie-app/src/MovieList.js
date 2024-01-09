import React from 'react';
import MovieCard from './Moviecard.js';

class MovieList extends React.Component{

    render(){
        return(
            <>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            </>
        )
    }
}

export default MovieList;