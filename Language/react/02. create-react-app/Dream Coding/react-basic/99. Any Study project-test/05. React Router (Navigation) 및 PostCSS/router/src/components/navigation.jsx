import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './active.module.css';

const Navigation = (props) => {
  const navRef = useRef();

  const onClick = (event) => {
    Array.from(navRef.current.children).forEach((ele) =>
      ele.classList.remove(styles.active),
    );
    console.log(styles.item, typeof styles.item);
    // console.log(styles.active);
    // console.log(styles.item + ' active');
    // console.log(styles.item.active);
    // event.target.className = styles.active;
    // event.target.className styles.item= styles.item.active;
    event.target.classList.add(styles.active);
  };
  useEffect(() => {
    navRef.current.addEventListener('click', onClick);
  }, []);

  return (
    <nav ref={navRef}>
      <Link className={`${styles.item} ${styles.active}`} to="/">
        index
      </Link>
      <Link className={styles.item} to="/home">
        home
      </Link>
      <Link className={styles.item} to="/about">
        about
      </Link>
      <Link className={styles.item} to="/about/any">
        any
      </Link>
    </nav>
  );
};

export default Navigation;
