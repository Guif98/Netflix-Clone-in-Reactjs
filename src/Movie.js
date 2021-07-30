import React from 'react';

const Movie = ({url, title}) => {
    return (
        <article className="movieBox">
            <img className="movieCover" src={url}></img>
            <span className="movieTitle">{title}</span>
        </article>
    )
}

export default Movie