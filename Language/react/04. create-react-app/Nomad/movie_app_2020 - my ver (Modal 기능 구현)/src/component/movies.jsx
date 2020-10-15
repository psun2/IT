import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';
import styles from '../css/movies.module.css';

class Movies extends PureComponent {
  showModal = (props) => {
    this.props.onShowModal(props);
  };
  render() {
    const { movies } = this.props;
    // console.log(movies);
    return (
      <ul className={styles.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            onShowModal={this.showModal}
          />
        ))}
      </ul>
    );
  }
}

// prop-types 클래스에서 사용 불가능
// MovieWrap.prototype = {
//   movies: PropTypes.array.isRequired,
// };

export default Movies;
