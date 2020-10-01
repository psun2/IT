import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div className="navbar">
          <h1 className="navbar__title">
            <i className="fas fa-leaf"></i> Habit Tracker
            <span className="habit-count">
              {this.props.habits.reduce((acc, cur) => (acc += cur.count), 0)}
            </span>
          </h1>
        </div>
      </>
    );
  }
}

export default Navbar;
