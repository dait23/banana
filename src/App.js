import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />    
      </div>
    );
  }
}

export default App;
