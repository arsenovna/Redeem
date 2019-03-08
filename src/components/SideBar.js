import React, {Component} from 'react';
import styled from 'styled-components';
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
// import EditPerk from '../pages/perks/EditPerk';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let Header = styled.div`
    background: white;
    height: 70px;
    position: sticky;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9999;

    div {
        width: 170px;
        height: 70px;
        background-color: #fd6c21;
    }

    img {
        height: 40px;
        display:block;
        padding: 15px 38px;
       }
`;

let SideNav = styled.div`
    display: inline-block;
    width: 170px;
    background-color: white; 
    height: 100%;
    position: fixed;

    p {
        text-transform: uppercase;
        color: #bebfc0;
        margin: 20px 20px;
        font-size: 11px;
        font-weight: 700;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 170px;

        i {
            margin-left: 20px;
            color: #d8d8d8;
        }

        li a {
            margin-left: 8px;
            cursor: pointer;
        }

        li {
            margin-bottom: 30px;
        }

        div {
            margin-bottom: 100px;
        }
    }  
    
    i: hover {
        color: #fd6c21;
    }

    a {
        text-decoration: none; 
        color: black;
    }

    a:visited {
        color: black;
    }

    button {
        color: red;
    }

`;

let Content = styled.div`
    padding-left: 170px;
    
`;

class SideBar extends  Component {

    logOut = () => {
        window.localStorage.removeItem('authentication_token');
        window.location.href = "http://localhost:3000";
    }

    render(){
        return (
            <Router>
            <>
            <Header>
                <div className="navbar">
                    <div>
                        <img  alt="" src="/img/rifirdLogo.png"/>
                    </div>
                </div>
            </Header>
            <SideNav>
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
            </SideNav>
            <Content>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/perks" component={Perks}/>
                    <Route path="/perk/addPerkCustomer" component={AddPerkCustomer}/>
                    <Route path="/perk/viewPerk" component={ViewPerk}/>
                    {/* <Route path="/perk/editPerk" component={EditPerk}/> */}
                    <Route path="/userProfile" component={UserProfile}/>
                    <Route path="/editProfile" component={EditProfile}/>
                    <Route path="/merchant" component={Merchant}/>
                    <Route path="/editMerchant" component={EditMerchant}/>
            </Content>
            </>
            </Router>
        );
    }
}

export default SideBar;