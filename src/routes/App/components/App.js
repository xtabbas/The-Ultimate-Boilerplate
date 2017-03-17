import React, { Component, PropTypes } from 'react';
import { Link, Route } from 'react-router-dom';
import chunk1 from 'src/routes/Chunk1/components/Chunk1.js';

class App extends Component {

  componentDidMount() {
    // const socket = io();
    // socket.on('onlineUsers', (onlineUsers) => {
    //   console.log(onlineUsers);
    // });
  }

  render() {
    return (
      <div>
        <Link to="/chunk1">chunk1</Link>
        <Link to="/chunk2">chunk2</Link>
        <Route path="/chunk1" component={chunk1} />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  children: PropTypes.object.isRequired
};
