import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from '../pages/dashboard/Dashboard';
import Customers from '../pages/customers/Customers';
import Perks from '../pages/perks/Perks';
import UserProfile from '../pages/userProfile/UserProfile';
import EditProfile from '../pages/userProfile/EditProfile';
import Merchant from '../pages/merchant/Merchant';
import EditMerchant from '../pages/merchant/EditMerchant';
import AddPerkCustomer from '../pages/perks/AddPerkCustomer';
import ViewPerk from '../pages/perks/ViewPerk';
import EditPerk from '../pages/perks/EditPerk';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SideBar extends Component {

    logOut = () => {
        window.localStorage.removeItem('authentication_token');
        window.location.href = "http://localhost:3000";
    }

    render() {
        return (
            <Router>
                <>
                    <div className="header">
                        <div className="navbar">
                            <div>
                                <img alt="" src="/img/rifirdLogo.png" />
                            </div>
                        </div>
                    </div>
                    <div className="sideBar">
                        <ul>
                            <li><p>MAIN</p></li>
                            <li><i className="fa fa-bar-chart"></i><Link to="/dashboard">Dashboard</Link></li>
                            <li><i className="fa fa-users"></i><Link to="/customers">Customers</Link></li>
                            <li><i className="fa fa-list-alt"></i><Link to="/perks">Perks</Link></li>
                            <div></div>
                            <li><p>ACCOUNT</p></li>
                            <li><i className="fa fa-user-circle-o"></i><Link to="/userProfile">User Profile</Link></li>
                            <li><i className="fa fa-building"></i><Link to="/merchant">Merchant</Link></li>
                            <li><i className="fa fa-sign-out"></i><Link to="/login" onClick={() => this.logOut()}>Logout</Link></li>
                        </ul>
                    </div>
                    <div className="route-content">
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/perks" component={Perks} />
                        <Route path="/perk/addPerkCustomer" component={AddPerkCustomer} />
                        <Route path="/perk/viewPerk/:id" component={ViewPerk} />
                        <Route path="/perk/editPerk/:id" component={EditPerk} />
                        <Route path="/userProfile" component={UserProfile} />
                        <Route path="/editProfile" component={EditProfile} />
                        <Route path="/merchant" component={Merchant} />
                        <Route path="/editMerchant" component={EditMerchant} />
                    </div>
                </>
            </Router>
        );
    }
}

export default SideBar;