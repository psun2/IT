import React, { PureComponent } from 'react';
import axios from 'axios';
import Loading from './component/loading';
import Movies from './component/movies';
import Modal from './component/modal';
import './app.css';
import styles from './css/app.module.css';

class App extends PureComponent {
  state = {
    isLoading: true,
    movies: [],
    modal: false,
  };

  showModal = (props) => {
    const newData = { modal: true, modalProps: props };
    this.setState(newData);
  };

  hideModal = () => {
    const newData = { modal: false, modalProps: null };
    this.setState(newData);
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating',
    );

    this.setState({ movies });

    console.log(this.state.movies);

    this.setState({ isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <section className={styles.container}>
          {isLoading ? (
            <Loading />
          ) : (
            <Movies movies={this.state.movies} onShowModal={this.showModal} />
          )}
        </section>
        <div>
          {this.state.modal ? (
            <Modal
              onHideModal={this.hideModal}
              property={this.state.modalProps}
            />
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  }
}

export default App;
