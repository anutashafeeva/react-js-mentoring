import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/img/movie/pulp-fiction.jpg';
import '../../assets/img/movie/bill-vol2.jpg';
import '../../assets/img/movie/bohemian-rhapsody.jpg';
import '../../assets/img/movie/inception.jpg';
import '../../assets/img/movie/reservior-dogs.jpg';
import '../../assets/img/movie/avengers-war-of-infinity.jpg';

let Movie = (props) => (
    <div className='movie'>
      <img className='movie-image' src={props.image} alt='Movie Image'></img>
      <span className='movie-content'>
        <span className='movie-data'>
          <h3 className='movie-title'>{props.title}</h3>
          <span className='movie-description'>{props.description}</span>
        </span>
        <span className='movie-year'>{props.year}</span>
      </span>
    </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string
}
  
export default Movie;