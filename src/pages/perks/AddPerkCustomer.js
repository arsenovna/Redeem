import React, {Component} from 'react';
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import CheckBox from '../../components/UI/CheckBox';
import Select from 'react-select';

const options = [
    {value: '$12 W', label: '$12 W'},
]

class AddPerkCustomer extends Component {

    state = {
        title: '',
        description: '',
        selectedOption: null,
        finePrint: '',
        refferal: 0,
        enabled: false,
        qrCode: false,
        expire_date: ''
    }

    changeEnabled = () => {
        this.setState({enabled: !this.state.enabled});
    }

    changeQRCode = () => {
        this.setState({qrCode: !this.state.qrCode});
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOption = (selectedOption) => {
        this.setState({ selectedOption });
    }

    handleSubmit = async () => {
        let token = window.localStorage.getItem('authentication_token');
        const { title, description, selectedOption, finePrint, refferal, enabled, qrCode, expire_date} = this.state;

        const data = { 
            perk: {
                title: title,
                description: description,
                enabled: enabled,
                expire_date: expire_date,
                fine_print: finePrint,
                receiver_perk_id: '27', //Find out what it is 
                referral_bonus: selectedOption,
                required_referrals: refferal,
                requires_qr_code: qrCode
            }
        }

        let response = await fetch('https://api.rifird.com/admin/perks/', {
            method: "POST",
            headers: {
              'Authorization': `Token token=${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
      let json = await response.json();
      this.props.history.push('/perk/viewPerk');
      console.log(json);
    }

    render(){
        return(
            <div className="perk-cont">
                <div className="left">
                    <img alt="" src="/img/screen.png"/>
                    <div className="express-studios">
                        <h2>Express Hair Studios</h2>
                        <p>7624 W. 111th Street</p>
                    </div>
                    <div className="expires">
                        <span>Expires</span>
                        <p>Select Your Friends</p>
                    </div>
                </div>
                <div className="right">
                    <h2 className="">Create a Perk for Customer Rewards</h2>
                    <p className="">Use the guide to the left as a reference when creating your perk promos.</p>
                    <form className="form">
                        <Input name="title" onChange={(event) => this.handleChange(event)} label="Title"/>
                        <Input name="description" onChange={(event) => this.handleChange(event)} label="Description"/>
                        <Select className="select"
                        value={this.selectedOption}
                        onChange={this.handleOption}
                        options={options}
                        isMulti={false}
                        placeholder="Select a bonus"/>
                        <CheckBox  onChange={() => this.changeEnabled()} label="Enabled"/> 
                        <CheckBox  onChange={() => this.changeQRCode()} style={{marginBottom: '15px'}} label="Requires QR code"/>
                        <Input name="finePrint" onChange={(event) => this.handleChange(event)} label="Fine print"/>
                        <Input name="referral" onChange={(event) => this.handleChange(event)}label="Required Referrals"/>
                        <Input name="expire_date" onChange={(event) => this.handleChange(event)} label="Expire date" type="date" min="2019-03-05" max="2020-03-05" step="7"/>
                        <div className="btns">
                            <Button onClick={() => this.handleSubmit()}  className="saveBtn" text="Save"/>
                            <Button className="cancelBtn" text="Cancel"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPerkCustomer;