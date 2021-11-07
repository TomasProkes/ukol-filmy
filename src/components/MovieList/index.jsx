import React from 'react';

import Movie from '../../components/Movie';

import './style.css';

const MovieList = ({movies}) => {
    return (
        <>
            <div className="movie-list">
                {
                    movies.map(({
                        id,
                        title,
                        poster,
                        year,
                        rating,
                        director,
                        genre,
                        cast
                    }) => <Movie key={id} title={title} poster={poster} year={year} rating={rating} director={director} genre={genre} cast={cast} />)
                }
            </div>
        </>
    );
}

export default MovieList;