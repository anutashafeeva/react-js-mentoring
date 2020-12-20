import React from 'react';

let sorts = [
  {
    title: 'RELEASE DATE',
    id: 1
  }
];

let SortBy = () => (
    <div className='sort-options'>
      <span className='sort-options-title'>SORT BY</span>
      <span className='sort-options-list'>{sorts[0].title}</span>
    </div>
);
  
export default SortBy;