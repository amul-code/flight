import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './Ninjas.js';
import Details from './Details.js';
import UserDetails from './UserDetails.js';
import Confirmation from './Confirmation.js';
import {BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {<input type="text" id="source"/>
    return (
      <Router>
      <div className="App">
        <h1>Welcome to flight app:)</h1>
       <Switch>
        <Route path="/Details"  component={Details}/>
        <Route path="/UserDetails"  component={UserDetails}/>
        <Route path="/Confirmation"  component={Confirmation}/>
        <Route path='/' exect component={Ninjas}/>
         
         </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
