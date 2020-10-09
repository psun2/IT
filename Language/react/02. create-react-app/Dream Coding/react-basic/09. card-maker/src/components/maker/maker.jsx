import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/hrader';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ FileInput, authService, cardRepository }) => {
  // const [cards, setCards] = useState({
  //   // 배열의 형태를 유지하면 ...
  //   // URUD가 꼬일 뿐 더러...
  //   // 그렇게 하지 않으면 모든 배열의 내용을 복사해야 합니다....
  //   1: {
  //     id: '1',
  //     name: 'Park',
  //     company: 'none',
  //     theme: 'dark',
  //     title: 'Software Engineer',
  //     email: 'tjddjs90@gmail.com',
  //     message: 'go for it',
  //     fileName: 'Park0',
  //     fileURL: null,
  //   },
  //   2: {
  //     id: '2',
  //     name: 'Park2',
  //     company: 'none',
  //     theme: 'light',
  //     title: 'Software Engineer',
  //     email: 'tjddjs90@gmail.com',
  //     message: 'go for it',
  //     fileName: 'Park1',
  //     fileURL: 'park.png',
  //   },
  // });

  const historyState = useHistory().location.state;
  console.log('historyState : ', historyState);
  const [userId, setUserId] = useState(historyState && historyState.userId);

  const [cards, setCards] = useState({});

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((userId) => {
        if (!userId) {
          history.push('/');
        }
      });
  });

  const createOrUpdateCard = (card) => {
    // const updated = { ...cards };
    // updated[card.id] = card;
    // setCards(updated); // 이렇게 할 수 도있으나,
    // 비동기적으로 처리 하는 부분이 있으면 항상 저 state의 값이 최신
    // 의 상태라고 말 할 수 없습니다.
    // setState 는 콜백 할수를 받을 수 있으므로 함수로 처리함을 권장 드립니다.

    setCards((cards) => {
      // 인자로 받아오는 cards 라는 state는
      // setCards 가 불린 바로 그 시점에서의 state입니다.
      const updated = { ...cards }; // 인자로 받아온 카드를 복사하여
      // 다음 로직을 진행합니다.
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      // 인자로 받아오는 cards 라는 state는
      // setCards 가 불린 바로 그 시점에서의 state입니다.
      const updated = { ...cards }; // 인자로 받아온 카드를 복사하여
      // 다음 로직을 진행합니다.
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
