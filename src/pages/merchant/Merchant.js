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

class Merchant extends Component {
    state = {
        merchant: {
            name: 'Express Hair Studios',
            phoneNumber: '(708)-974-0033',
            contantEmail: 'mgmt@expresshairstudios.com',
            description: 'Trends come and go, which is why we focus on delivering affordable style that stays true to who you are—no matter the season. You’ll get just the look you’re going for while relaxing in a comfortable, friendly environment when you come to Express Hair.',
            website: 'www.expresshairstudios.com',
            logo: './img/logo.jpg',
            background: './img/background.jpg',
            publicProfile: 'No',
            merchantTypes: '',
            address1: '7624 W. 111th Street',
            address2: '',
            city: 'Palos Hills',
            state: 'IL',
            zip: '60465',
            latitude: 41.689885,
            longitude: -87.8087099,
            openHours: []

        }
    }

    render(){
        let {merchant} = this.state;
        return(
            <Profile>
                <UICard title="Merchant details">
                    <Button themed={true} text="Edit Merchant"></Button>
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
                    <div className="user-info">{merchant.openHours.length > 0 ? <><span>Longitude:</span>{merchant.openHours}</> : "You didn't set open hours."}</div>
                </UICard>
            </Profile>
        );
    }

}

export default Merchant;