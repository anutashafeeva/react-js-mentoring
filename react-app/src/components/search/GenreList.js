import React from 'react';

let genres = [
  {
    title: 'ALL',
    id: 1
  },
  {
    title: 'DOCUMENTARY',
    id: 2
  },
  {
    title: 'COMEDY',
    id: 3
  },
  {
    title: 'HORROR',
    id: 4
  },
  {
    title: 'CRIME',
    id: 5
  }
]



let GenreList = () => (
  <div className='genres'>
      {genres.map((genre) => (
          <span key={genre.id}>{genre.title}</span>
      ))}
    </div>
);
  
export default GenreList;