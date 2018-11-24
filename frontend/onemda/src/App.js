import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index'
import Login from './components/Login/index'
import { Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path='/' component={Login}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
