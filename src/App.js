import React, { Component } from 'react';
import Login from "./publicPages/Login";
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import SignUp from './publicPages/SignUp';
// import CheckEmail from './publicPages/CheckEmail';


class App extends Component {
  render() {
    let token = window.localStorage.getItem('authentication_token');
    return (
      <Router>
        <div className="App">
        <SignUp/>
        {/* <CheckEmail/> */}
          {/* {token && <SideBar/>} 
          <Route path="/login" component={Login}/>
          <Route exact path="/" render={() => (
             token ? (
              <Redirect to="/dashboard"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/> */}
        </div>
      </Router>
    );
  }
}

export default App;