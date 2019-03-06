import React from 'react';
import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import  SideBar from '../components/SideBar';
import  Dashboard from '../pages/dashboard/Dashboard';
import  Customers from '../pages/customers/Customers';
import  Perks from '../pages/perks/Perks';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SideBar}></Route>
            <Route path="/" component={Dashboard}></Route>
            <Route component={Customers}></Route>
        </Switch>
    </BrowserRouter>
)
export default Router;