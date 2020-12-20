import React from 'react';
import SearchOptions from '../search/SearchOptions.js';
import MovieList from './MovieList.js';

let Movies = () => (
    <section className='movies'>
      <div className='wrapper'>
        <SearchOptions />
        <div className='founded-movies'><span>39</span> movies found</div>
        <MovieList />
      </div>
    </section>
);
  
export default Movies;