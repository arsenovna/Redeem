import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class UserProfile extends Component {
    render(){
        const {merchant} = this.props;
        return(
            <div className="profile-cont">
                <UICard title="Profile details">
                    <div className="edit-button">
                        <Link to="/editProfile">Edit Profile</Link>
                    </div>
                    <div className="user-info"><span>Email:</span>{merchant.email}</div>
                    <div className="user-info"><span>First Name:</span>{merchant.owner_first_name}</div>
                    <div className="user-info"><span>Last Name:</span>{merchant.owner_last_name}</div>
                    <div className="user-info"><span>Password:</span>*****</div>
                </UICard>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    merchant: state.merchant
})

export default connect(mapStateToProps)(UserProfile);