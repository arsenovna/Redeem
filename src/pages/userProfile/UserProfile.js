import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import styled from 'styled-components';
import { BrowserRouter as Link } from "react-router-dom";



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
                    <div className="edit-button">
                        <Link to="/editProfile">Edit Profile</Link>
                    </div>
                    {/* <Button onClick={() => this.handleClick()}themed={true} text="Edit Profile"></Button> */}
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