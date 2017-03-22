import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui attached stackable menu">
            <div className="ui container">
                <a className="item">
                <i className="home icon"></i> Home
                </a>
                <a className="item">
                <i className="grid layout icon"></i> Browse
                </a> 
                <a className="item">
                <i className="mail icon"></i> Messages
                </a>
                <div className="right item">
                </div>
            </div>
            </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;