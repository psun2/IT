import firevaseApp from './firebase';

class CardRepository {
  // read
  syncCards(userId, onUpdate) {
    const ref = firevaseApp.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); // 실시간 업데이트 종료 함수를 리턴
  }

  // 추가 와 업데이트
  saveCard(userId, card) {
    firevaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  // 삭제
  removeCard(userId, card) {
    firevaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
