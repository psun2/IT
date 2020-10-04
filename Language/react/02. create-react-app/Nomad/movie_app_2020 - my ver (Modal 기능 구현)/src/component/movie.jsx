import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/movie.module.css';

class Movie extends PureComponent {
  liRef = React.createRef();

  showModal = () => {
    this.props.onShowModal(this.props);
  };

  render() {
    return (
      <li ref={this.liRef} onClick={this.showModal} className={styles.movie}>
        <div className={styles.wrapper}>
          <img
            src={this.props.poster}
            alt={this.props.title}
            title={this.props.title}
            className={styles.img}
          />
          <div className={styles.data}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <h5 className={styles.year}>{this.props.year}</h5>
            <ul className={styles.genres}>
              {this.props.genres.map((genres, index) => (
                <li key={index} className={styles.genres}>
                  {genres}
                </li>
              ))}
            </ul>
            <p className={styles.summary}>{this.props.summary}</p>
          </div>
        </div>
      </li>
    );
  }
}

// prop-types 클래스에서 사용 불가능
// Movie.prototype = {
//   id: PropTypes.number.isRequired,
//   year: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   poseter: PropTypes.string.isRequired,
// };

export default Movie;
