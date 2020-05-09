import React from 'react';
import axios from 'axios';
import Movie from './Movie';
// import Clock from './Clock';
import './App.css';

class App extends React.Component {
  state = {
    // isLoading: true,
    isLoading: 'https://placeimg.com/1000/800/any',
    moives: [],
  };

  getMovies = async () => {
    console.log(`[3] getMovie() 함수가 호출됩니다.`);
    // const movies = await axios.get(`https://yts-proxy.now.sh/list_movies.json`);
    // console.log(movies);
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`,
    );
    // console.log(movies);
    // this.setState({ movies: movies, isLoading: false });
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    console.log(`[2] componentDidMount() 함수가 호출됩니다.`);
    this.getMovies();
    // this.setState({ isLoading });
  }

  render() {
    console.log(`[1] render() 함수가 호출됩니다.`);
    const { isLoading, movies } = this.state;
    // console.log(checkPropTypes(movies.title));
    return (
      // <div>
      //   {/* <Clock /> */}
      //   {isLoading ? (
      //     <img src={isLoading} alt={isLoading} />
      //   ) : (
      //     movies.map((movie) => {
      //       // console.log(checkPropTypes(movie.title));
      //       return (
      //         <Movie
      //           key={movie.id}
      //           id={movie.id}
      //           title={movie.title}
      //           year={movie.year}
      //           genres={movie.genres.map((genres) => `\t${genres}`)}
      //           poster={movie.medium_cover_image}
      //           rating={movie.rating}
      //           runtime={movie.runtime}
      //           summary={movie.summary}
      //         />
      //       );
      //     })
      //   )}
      // </div>
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              genres={movie.genres.map((genres) => `\t${genres}`)}
              poster={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))
        )}
      </section>
    );
  }
}

export default App;
