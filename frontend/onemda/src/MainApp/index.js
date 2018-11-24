import React, { Component } from 'react';
import Login from '../components/Login/index'
import NotFound from '../components/NotFound/index'
import { Switch, Route, Redirect } from 'react-router-dom'
class MainApp extends Component {
  constructor(props){
    super(props)
    this.state={
      submittedData:null
    }
  }

  onSubmit=(data)=>{
    this.setState({
      submittedData:data
    })
  }

  render() {
    return (
        <main>
          <Switch>
            <Route exact path='/' render={() => <Login onSubmit={this.onSubmit}/>}/>
            <Route path='/NotFound' component={NotFound} />
            <Redirect from='*' to='/NotFound' />
          </Switch>
        </main>
    );
  }
}

export default MainApp;
