import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import MovieList from './components/MovieList';

import movies from './movies'

const App = () => (
  <>
    <Header />
    <section className="movie-section">
      <div className="left-col" />
      <div className="movie-list">
        <MovieList movies={movies} />
      </div>
      <div className="right-col" />
    </section>
  </>
);

render(<App />, document.querySelector('#app'));
