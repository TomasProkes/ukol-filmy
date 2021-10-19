import React from 'react';

const Movie = (props) => (
    <>
        <div className="movie">
            <div className="title">{props.title}</div>
            <img className="poster" src={props.poster} alt="Plakát filmu {props.title}" />
            <div className="year">{props.year}</div>
            <div className="rating">{props.rating}</div>
            <div className="director">{props.director}</div>
            <div className="genre">{props.genre}</div>
            <div className="cast">{props.cast}</div>

        </div>
    </>
);

export default Movie;