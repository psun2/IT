import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get(`https://yts-proxy.now.sh/list_movies.json`);
    // console.log(movies);
    // console.log(movies.data.data.movies);
    // const {
    //   data: {
    //     data: { movies },
    //   },
    // } = await axios.get(`https://yts-proxy.now.sh/list_movies.json`);
    // // console.log(movies);
    // // this.setState({ movies: movies });
    // this.setState({ movies, isLoading: false });
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`,
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {/* {isLoading
          ? 'Loading...'
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })} */}
        {isLoading
          ? 'Loading...'
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
