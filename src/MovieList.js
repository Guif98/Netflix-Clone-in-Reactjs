import React from 'react';
import Movie from './Movie';
import {data} from './movies';

function MovieList() {
    return (
        <section className="movieList">
            {data.map((movie, index) => {
                return <Movie key={index} {...movie}></Movie>
            })}
        </section>
    )
}

export default MovieList