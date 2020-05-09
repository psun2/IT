// TODO: http://www.kobis.or.kr/kobisopenapi/homepg/user/openLogin.do

const API_KEY = 'fbd9ea05009aa94cd82eaf103ea87770';

const days = prompt('보고싶은 날짜의형식을 20200427 으로 지정해주세요');
const API_ITEM = days;

// let i = prompt();
// console.log(i);

const body = document.querySelector('body'),
  ul = body.querySelector('ul');

function getAPI() {
  fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${API_ITEM}`,
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.boxOfficeResult.dailyBoxOfficeList);
      const List = json.boxOfficeResult.dailyBoxOfficeList;
      //   List.map((array) => {
      //     console.log(array.movieNm);
      //     paintMovie(array.movieNm);
      //   });
      const newObj = List.reduce((acc, cur) => {
        console.log(cur.movieNm);
        paintMovie(cur.movieNm);
        if (acc[cur.movieNm]) {
        } else {
          acc[cur.movieNm] = cur.movieNm.length;
        }
        return acc;
      }, {});
      console.log(newObj);
    });
}

function paintMovie(text) {
  const li = document.createElement('li');
  li.innerText = text;
  ul.appendChild(li);
}

function init() {
  getAPI();
}

init();
