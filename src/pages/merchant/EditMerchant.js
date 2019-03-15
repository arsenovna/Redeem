import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import CheckBox from '../../components/UI/CheckBox';
import styled from 'styled-components';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import { connect } from "react-redux";

let ChangeMerchant = styled.div`
    margin-left: 20px;

    form {
        display: flex;
        flex-direction: column;
        background-color: white;

        input {
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            border-radius: 3px;
            border: 1px solid #d9d9d9;
        }

        label {
            margin-bottom: 10px;
            margin-right: 10px;
            :not(:first-child) {
                margin-top: 15px;
            }
        }

        .buttons {
            display: flex;
            margin-top: 15px;
        }

        img {
            margin-bottom: 20px;
        }
    }
    .opening-hours {
        width: 60px;
        color: red;

    }
`;

class EditMerchant extends Component {

    state = {
        openingHours: [
            {label: 'Monday', startTime: '900', closeTime: '1800', closed: false},
            {label: 'Tuesday', startTime: '900', closeTime: '1800', closed: false},
            {label: 'Wednesday', startTime: '900', closeTime: '1800', closed: false},
            {label: 'Thursday',  startTime: '900', closeTime: '1800', closed: false},
            {label: 'Friday', startTime: '900', closeTime: '1800', closed: false},
            {label: 'Saturday', startTime: '900', closeTime: '1800', closed: false},
            {label: 'Sunday', startTime: '900', closeTime: '1800', closed: false},
        ]
    }
    render(){
        const {merchant} = this.props;
        console.log(merchant);
        let defaultBtn = {color: '#333', backgroundColor: '#fff', border: '1px solid #ccc'};
        let blueBtn = {color: 'white', backgroundColor: '#7aa8d3', marginLeft: '10px'}
        
        let {openingHours} = this.state;
        return(
            <ChangeMerchant>
                <UICard title="Edit merchant details">
                    <form>
                        <Input label="Name" value={merchant.name}/>
                        <Input label="Email" value={merchant.email}/>
                        <Input label="Contact Email" value={merchant.contact_email}/>
                        <Input label="Phone Number" value={merchant.contact_email}/>
                        <Input label="Description" value={merchant.display_phone}/>
                        <Input label="Website" value={merchant.website}/>
                  
                        <label>Logo</label>
                        <img alt="" src={merchant.logo_url}/>
                        <div className="buttons">
                            <Button style={defaultBtn} text="Choose Image"></Button>
                            <Button style={blueBtn} text="Upload"></Button>
                        </div>
                        <label>Background</label>
                        <img alt="" src={merchant.background_url}/>
                        <div className="buttons">
                            <Button style={defaultBtn} text="Choose Image"></Button>
                            <Button style={blueBtn} text="Upload"></Button>
                        </div>
                        <Input label="Address 1" value={merchant.address.line1}/>
                        <Input label="Address 2" value={merchant.address.line2}/>
                        <Input label="City" value={merchant.address.city}/>
                        <Input label="State" value={merchant.address.state}/>
                        <Input label="Zip" value={merchant.address.zip}/>
                        <Input label="Latitude" value={merchant.latitude}/>
                        <Input label="Longitude" value={merchant.longitude}/>
                        <CheckBox style={{margin: '15px 0'}} label="Public Profile"/>
                        <SelectMerchant/>
                        <label>Opening Hours</label>
                        {openingHours && openingHours.map((hour, index) => 
                        <OpeningHours key={index} hour={hour}/>)}
                        <div className="buttons">
                            <Button themed={true} text="Save"/>
                            <Button style={defaultBtn} text="Cancel"/>
                        </div>
                    </form>
                </UICard>
            </ChangeMerchant>
        );
    }
}

let Merchant = styled.div`
    label: width: 60px;
    margin-bottom: 15px;

    select {
        width: 40%;
        height: 30px;
        margin-left: 5px;
    }
`;
class SelectMerchant extends Component {
    render(){
        return (
            <Merchant>
                <label className="merchant-type">Merchant types</label>
                <select>
                    <option value="bakery">bakery</option>
                    <option value="bar">bar</option>
                    <option value="beautySalon">beauty salon</option>
                    <option value="cafe">cafe</option>
                    <option value="clothingStore">clothing store</option>
                </select>
            </Merchant>
        );
    }
}

let Hour = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .label {
        width: 10%;
        // font-weight: bold;
    }

    span {
        margin-left: 10px;
    }
`;


class OpeningHours extends Component {
    state = {
        disabled: false
    }

    changeDisabled = () => {
        this.setState({disabled: !this.state.disabled});
    }

    render(){
        let {hour} = this.props;
        let {disabled} = this.state;
        let from = moment();
        let to = moment();
        from.set({hour: 9, minute: 0, second: 0});
        to.set({hour: 18, minute: 0, second: 0});

        return (
            <>
                <Hour>
                    <div className="label">{hour.label}:</div>
                    <TimePicker defaultValue={from} disabled={disabled} showSecond={false} use12Hours={true} format="h:mm a"/> - <TimePicker defaultValue={to} disabled={disabled} showSecond={false} use12Hours={true} format="h:mm a"/>
                    <CheckBox onChange={() => this.changeDisabled()}/>
                    <span>closed</span>
                </Hour>
            </>
        );
    }
}

const mapStateToProps = state => ({
    merchant: state.merchant
})

export default connect(mapStateToProps)(EditMerchant);
