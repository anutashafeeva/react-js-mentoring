import React from 'react';
import Movie from '../../components/movie/Movie.js';

let movies = [
    {
        image: 'src/assets/img/movie/pulp-fiction.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        description: 'Action & Adventure',
        id: 1
    },
    {
        image: 'src/assets/img/movie/bohemian-rhapsody.jpg',
        title: 'Bohemian Rhapsody',
        year: 2003,
        description: 'Drama, Biography, Music',
        id: 2
    },
    {
        image: 'src/assets/img/movie/bill-vol2.jpg',
        title: 'Bill: Vol 2',
        year: 1994,
        description: 'Oscar winning Movie',
        id: 3
    },
    {
        image: 'src/assets/img/movie/avengers-war-of-infinity.jpg',
        title: 'Avengers: War of Infinity',
        year: 2004,
        description: 'Action & Adventure',
        id: 4
    },
    {
        image: 'src/assets/img/movie/inception.jpg',
        title: 'Inception',
        year: 2003,
        description: 'Action & Adventure',
        id: 5
    },
    {
        image: 'src/assets/img/movie/reservior-dogs.jpg',
        title: 'Reservior dogs',
        year: 1994,
        description: 'Oscar winning Movie',
        id: 6
    }
]

let MovieList = () => (
    <div className='movies-list'>
      {movies.map((movie) => (
          <Movie
            image={movie.image}
            title={movie.title}
            year={movie.year}
            description={movie.description}
            key={movie.id}
          />
      ))}
    </div>
);
  
export default MovieList;