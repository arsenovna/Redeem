import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

let Profile = styled.div`
    .user-info {
        display: flex;
        border-top: 1px solid #ddd;
        padding: 10px;

        span {
            font-weight: bold;
            width: 16%;
        }
    }

    button {
        margin-bottom: 15px;
        *:focus {outline:none}
    }
    button:focus {
        outline:0;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        padding: 8px 10px;
        background-color: #fd6c21;
        color: #fff;
        border-radius: 4px;
    }

    .edit-button {
        margin-bottom: 30px;
    }

`;

class UserProfile extends Component {
    render(){
        const {merchant} = this.props;
        return(
            <Profile>
                <UICard title="Profile details">
                    <div className="edit-button">
                        <Link to="/editProfile">Edit Profile</Link>
                    </div>
                    <div className="user-info"><span>Email:</span>{merchant.email}</div>
                    <div className="user-info"><span>First Name:</span>{merchant.owner_first_name}</div>
                    <div className="user-info"><span>Last Name:</span>{merchant.owner_last_name}</div>
                    <div className="user-info"><span>Password:</span>*****</div>
                </UICard>
            </Profile>
        );
    }
}

const mapStateToProps = state => ({
    merchant: state.merchant
})

export default connect(mapStateToProps)(UserProfile);