import React from 'react';
import { BrowserRouter as Router,  Route, Switch, Redirect} from 'react-router-dom';
import  SideBar from './components/SideBar';
import  Dashboard from './pages/dashboard/Dashboard';
import  SignUp from './publicPages/SignUp';
import  Login from './publicPages/Login';

let token = window.localStorage.getItem('authentication_token');

const AppRoutes = () => (
    <Router>
          <Switch>
            <Route exact path="/" render={() => (
                token ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}/>
            {token && <SideBar/>}

            <Route path="/login" component={Login}/>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/dashboard" exact component={Dashboard}></Route>
        </Switch>
    </Router>
)
export default AppRoutes;