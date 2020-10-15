import React, { PureComponent } from 'react';
// import styles from '../css/modal.module.css';
import styles from '../css/movie.module.css';

class Modal extends PureComponent {
  hideModal = () => {
    this.props.onHideModal();
  };
  render() {
    return (
      <div onClick={this.hideModal} className={styles.modal}>
        <div className={styles.wrapper}>
          <img
            src={this.props.property.poster}
            alt={this.props.property.title}
            title={this.props.property.title}
            className={styles.img}
          />
          <div className={styles.data}>
            <h3 className={styles.title}>{this.props.property.title}</h3>
            <h5 className={styles.year}>{this.props.property.year}</h5>
            <ul className={styles.genres}>
              {this.props.property.genres.map((genres, index) => (
                <li key={index} className={styles.genres}>
                  {genres}
                </li>
              ))}
            </ul>
            <p className={styles.summary}>{this.props.property.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
