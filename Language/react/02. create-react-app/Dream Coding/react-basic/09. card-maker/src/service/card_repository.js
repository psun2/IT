import firevaseApp from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firevaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firevaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
