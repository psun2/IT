import React, { PureComponent } from 'react';
import styles from '../css/loading.module.css';

class Loading extends PureComponent {
  render() {
    return (
      <div className={styles.loader}>
        <span className={styles.icon}>
          <i className="fas fa-spinner fa-spin"></i>
        </span>
        <span className={styles.text}>Loading...</span>
      </div>
    );
  }
}

export default Loading;
