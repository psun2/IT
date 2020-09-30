import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// const likeButton = () => {
//   alert('좋아요를 눌러주셔서 감사합니다.');
// };

function Movie({ id, title, year, genres, poster, rating, runtime, summary }) {
  return (
    // <div>
    //   <h4>{title}</h4>
    //   <div>개봉년도: {year}</div>
    //   <div>장르: {genres}</div>
    //   <span>평점: {`${rating}점\t`}</span>
    //   <span>runtime: {`${runtime}분`}</span>
    //   <div>
    //     <img src={poster} alt={id} />
    //   </div>
    //   <span>요약내용</span>
    //   <div>{summary}</div>
    //   {/* <input type="button" value="좋아요" onClick={this.likeButton} /> */}
    //   <hr />
    // </div>
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="movie__genres">
          {genres.map((genres, index) => (
            <li key={index} className="genres__genres">
              {genres}
            </li>
          ))}
        </ul>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  // id: PropTypes.id.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
