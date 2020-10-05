import React from 'react';
import PropTypes from 'prop-types';
// import './Movie.css';
// import './App.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        {/* <h3 class="movie__title" style={{ backgroundColor: 'red' }}> */}
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genres, index) => (
            <li key={index} className="genres__genres">
              {genres}
            </li>
          ))}
        </ul>
        <p className="moive__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
