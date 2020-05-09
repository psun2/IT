import React from 'react';
import './App.css';
import axios from 'axios';
import Movie from './Movie';

// fbd9ea05009aa94cd82eaf103ea87770

// 지역코드	지역명	2차 지역코드	1차 지역코드
// 102090	구리시	102090	102000

// http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101

// targetDt	문자열(필수)	조회하고자 하는 날짜를 yyyymmdd 형식으로 입력합니다.

// wideAreaCd	문자열	상영지역별로 조회할 수 있으며, 지역코드는 공통코드 조회 서비스에서 “0105000000” 로서 조회된 지역코드입니다. (default : 전체)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  getAPI = async () => {
    try {
      const {
        data: {
          boxOfficeResult: { dailyBoxOfficeList },
        },
      } = await axios.get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=fbd9ea05009aa94cd82eaf103ea87770&targetDt=20200507`,
      );
      // console.log(movies);
      // console.log(movies.data.boxOfficeResult.dailyBoxOfficeList);
      // console.log(dailyBoxOfficeList);
      this.setState({ movies: dailyBoxOfficeList, loading: false });
    } catch {
      throw Error('데이터 정보를 불러오는데 실패 했습니다.');
    } finally {
      console.log('데이터를 성공적으로 불러 왔습니다.');
    }
  };

  componentDidMount() {
    this.getAPI();
    // console.log(this.state);
    setTimeout(() => {
      console.log(this.state);
    }, 10000);
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <div>
        {' '}
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {movies.map((current) => (
              <Movie key={current.rank} movieNm={current.movieNm} />
            ))}
          </div>
        )}{' '}
      </div>
    );
  }
}

export default App;
