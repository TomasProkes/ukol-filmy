import React from 'react';

import Actor from '../Actor'; 

import './style.css';

const Movie = ({title, poster, year, rating, director, genre, cast}) => (
    <>
        <div className="movie">
            <div className="capture">
                <div className="title"><h2>{title}</h2></div>
                <div className="poster"><img className="poster-img" src={`/assets/${poster}`} alt={`Plakát filmu ${title}`} /></div>
            </div>
            <div className="details">
                <div className="director"><span className="dets-item-spec">Režie: </span>{director}</div>
                <div className="year"><span className="dets-item-spec">Natočeno: </span>{year}</div>
                <div className="genre"><span className="dets-item-spec">Žánr: </span>{genre}</div>
                <div className="rating"><span className="dets-item-spec">Hodnocení: </span>{rating}</div>
                <div className="cast">
                    <h3>V hlavních rolích:</h3>
                        {
                            cast.map(({name, as}, idx) => <Actor key={idx} name={name} as={as} />)
                        }
                </div>
            </div>
        </div>
    </>
);

export default Movie;