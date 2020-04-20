import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/section/body';
import Footer from './components/footer/footer'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;