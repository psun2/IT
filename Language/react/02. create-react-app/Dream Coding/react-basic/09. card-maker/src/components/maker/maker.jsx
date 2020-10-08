import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/hrader';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Park',
      company: 'ssibal',
      theme: 'light',
      title: 'Software Engineer',
      email: 'tjddjs90@gmail.com',
      message: 'go for it',
      fileName: 'Park',
      fileURL: 'park.png',
    },
    {
      id: '2',
      name: 'Park2',
      company: 'ssibal',
      theme: 'light',
      title: 'Software Engineer',
      email: 'tjddjs90@gmail.com',
      message: 'go for it',
      fileName: 'Park',
      fileURL: 'park.png',
    },
    {
      id: '3',
      name: 'Park3',
      company: 'ssibal',
      theme: 'light',
      title: 'Software Engineer',
      email: 'tjddjs90@gmail.com',
      message: 'go for it',
      fileName: 'Park',
      fileURL: 'park.png',
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          history.push('/');
        }
      });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
