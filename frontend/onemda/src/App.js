import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index'
import MainApp from './MainApp/index'
class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <MainApp/>
      </div>
    );
  }
}

export default App;
