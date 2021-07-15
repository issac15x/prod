import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './components/home.jsx';
import Browse from './components/browse.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';


import './styles/index.css'

function App() {
  return(
    <Router>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/browse' component = {Browse} />
        <Route path='/login' component = {Login} />
        <Route path='/signup' component = {Signup} />
      </Switch>
    </Router>
    
  );

}
export default App;
