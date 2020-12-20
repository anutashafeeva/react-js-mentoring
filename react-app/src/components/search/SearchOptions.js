import React from 'react';
import GenreList from './GenreList.js';
import SortBy from './SortBy.js';

let Sort = () => (
    <div className='search-options'>
      <GenreList />
      <SortBy />
    </div>
);
  
export default Sort;