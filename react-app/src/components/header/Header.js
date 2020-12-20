import React from 'react';
import '../../assets/img/header/header.jpg';

let Header = () => (
    <header className='header'>
      <div className='wrapper'>
        <div className='header-label'>
          <div className='label'><span>netflix</span>roulette</div>
          <button className='add-button'>+ ADD MOVIE</button>        
        </div>
        <div className='search'>
          <h1>FIND YOUR MOVIE</h1>
          <form className='search-input' method="POST">
            <input type='text' placeholder='What do you want to watch?'></input>
            <button className='search-button' type='submit'>SEARCH</button>
          </form>
        </div>
      </div>
    </header>
);
  
export default Header;