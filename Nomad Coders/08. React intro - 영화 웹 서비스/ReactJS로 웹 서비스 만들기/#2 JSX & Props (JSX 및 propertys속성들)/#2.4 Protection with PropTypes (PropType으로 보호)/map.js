// TODO: map 은 array를 취하고 우리가 정확히 원하는 array를 반환합니다.

const friends = ['dal', 'mark', 'lynn', 'japan guy'];

console.log(friends); // [ 'dal', 'mark', 'lynn', 'japan guy' ]

// TODO: current : 흐름, 경향, 수류
const friendsMap = friends.map((current) => {
  console.log(current);
  return 0;
});

console.log(friendsMap); // [ 0, 0, 0, 0 ]

const testMap = friends.map((friend) => {
  console.log(friend);
  return friend + ' 💖';
});

console.log(testMap); // ["dal 💖", "mark 💖", "lynn 💖", "japan guy 💖"]
