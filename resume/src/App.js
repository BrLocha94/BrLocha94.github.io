import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/section/body';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;