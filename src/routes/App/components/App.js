import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div>
        <Link to="/chunk1">chunk1</Link>
        <Link to="/chunk2">chunk2</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;

App.propTypes = {
  children: PropTypes.object.isRequired
};
