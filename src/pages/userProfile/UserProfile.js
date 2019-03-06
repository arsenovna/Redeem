import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Button from '../../components/UI/Button';
import styled from 'styled-components';


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
    }


`;

class UserProfile extends Component {
    state = {
        user: {
            email: 'jim@rifird.com',
            firstName: 'Jim',
            lastName: 'Trahanas',
            password: '*****'
        }
    }

    render(){
        let {user} = this.state;
        return(
            <Profile>
                <UICard title="Profile details">
                    <Button themed={true} text="Edit Profile"></Button>
                    <div className="user-info"><span>Email:</span>{user.email}</div>
                    <div className="user-info"><span>First Name:</span>{user.firstName}</div>
                    <div className="user-info"><span>Last Name:</span>{user.lastName}</div>
                    <div className="user-info"><span>Password:</span>{user.password}</div>
                </UICard>
            </Profile>
        );
    }

}

export default UserProfile;