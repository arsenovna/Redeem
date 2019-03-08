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

    a {
        text-decoration: none;
        font-weight: 500;
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

class Merchant extends Component {
    state = {
        merchant: {
            name: '',
            phoneNumber: '',
            contantEmail: '',
            description: '',
            website: '',
            logo: '',
            background:'', 
            publicProfile: 'No',
            merchantTypes: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            latitude: null,
            longitude: null,
            openHours: []
        }
    }

    componentDidMount() {
        let token = window.localStorage.getItem('authentication_token');
        fetch('https://api.rifird.com/admin/merchants/1', {
            method: 'GET',   
            headers: {
                'Authorization': `Token token=${token}`,
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        // .then(data => console.log(data.merchant))
        .then(data => this.setState({
            merchant: {
                name: data.merchant.name,
                phoneNumber: data.merchant.display_phone,
                contactEmail: data.merchant.contact_email,
                description: data.merchant.description,
                website: data.merchant.website,
                logo: data.merchant.logo_url,
                background: data.merchant.background_url,
                merchantTypes: data.merchant.merchant_types,
                address1: data.merchant.address.line1,
                address2: data.merchant.address.line2,
                city: data.merchant.address.city,
                state: data.merchant.address.state,
                zip: data.merchant.address.zip,
                latitude: data.merchant.latitude,
                longitude: data.merchant.longitude,
                openHours: data.merchant.opening_hours
            }})
        )
    }

    render(){
        let {merchant} = this.state;
        return(
            <Profile>
                <UICard title="Merchant details">
                    <div className="edit-button">
                        <Link to="/editMerchant">Edit merchant</Link>
                    </div>
                    <div className="user-info"><span>Name:</span>{merchant.name}</div>
                    <div className="user-info"><span>Phone Number:</span>{merchant.phoneNumber}</div>
                    <div className="user-info"><span>Contact Email:</span>{merchant.contactNumber}</div>
                    <div className="user-info"><span>Description:</span>{merchant.description}</div>
                    <div className="user-info"><span>Website:</span>{merchant.website}</div>
                    <div className="user-info"><span>Logo:</span><img  alt="" src={merchant.logo}/></div>
                    <div className="user-info"><span>Background:</span><img alt="" src={merchant.background}/></div>
                    <div className="user-info"><span>Public Profile:</span>{merchant.publicProfile}</div>
                    <div className="user-info"><span>Merchant Types:</span>{merchant.merchantTypes}</div>
                </UICard>
                <UICard title="Adress">
                    <div className="user-info"><span>Address1:</span>{merchant.address1}</div>
                    <div className="user-info"><span>Address2:</span>{merchant.address2}</div>
                    <div className="user-info"><span>City:</span>{merchant.city}</div>
                    <div className="user-info"><span>State:</span>{merchant.state}</div>
                    <div className="user-info"><span>Zip:</span>{merchant.zip}</div>
                </UICard>
                <UICard title="Location">
                    <div className="user-info"><span>Latitude:</span>{merchant.latitude}</div>
                    <div className="user-info"><span>Longitude:</span>{merchant.longitude}</div>

                </UICard>
                <UICard title="Open Hours">
                    <div className="user-info">{ merchant.openHours != null && merchant.openHours.length > 0 ? <>{merchant.openHours}</> : "You didn't set open hours."}</div>
                </UICard>
            </Profile>
        );
    }
}

export default Merchant;