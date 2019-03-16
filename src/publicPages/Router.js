import React from 'react';
import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import  SideBar from '../components/SideBar';
import  Dashboard from '../pages/dashboard/Dashboard';
import  Customers from '../pages/customers/Customers';
import  SignUp from './SignUp';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SideBar}></Route>
            <Route path="/" component={Dashboard}></Route>
            <Route component={Customers}></Route>
            <Route path="/signUp" component={SignUp}></Route>
        </Switch>
    </BrowserRouter>
)
export default Router;