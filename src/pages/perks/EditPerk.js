import React, {Component} from 'react';
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import CheckBox from '../../components/UI/CheckBox';
import Select from 'react-select';


// let Perk = styled.div`
//     display: flex;
//     .left {
//         background: rgb(19, 23, 30);
//         text-align: center;
//         padding: 40px 0;
//         position: relative;
//         margin-top: 30px;
//         height: 600px;
//         width: 50%;
//     }

//     .express-studios {
//         position: absolute;
//         text-align: center;
//         transform: translate(-50%, -50%);
//         top: 180px;
//         left: 50%;
//         * {
//             margin: 0;
//             color: white;
//         }
//     }

//     .expires {
//         position: absolute;
//         text-align: center;
//         transform: translate(-50%, -50%);
//         bottom: 160px;
//         left: 50%;
//         color: white;
//         span {
//             color: rgb(157, 157, 157);
//         }
//     }

//     .right {
//         width: 50%;
//         margin-top: 40px;
        
//         .checkBox {
//             display: flex;
//             align-items: center;
//             margin-top: 10px;

//             label {
//                 margin-bottom: 0;
//                 margin-right: 10px;
//             }

//             input {
//                 margin: 0;
//                 width: initial;
//             }
//         }

//         p {
//             color: rgb(157, 157, 157);
//             margin-top: 5px;
//             text-align: center;
//         }

//         h2 {
//             font-size: 25px;
//             font-weight: normal;
//             margin-bottom: 0px;
//             text-align: center;
//         }

//         form {
//             display: flex;
//             flex-direction: column;
    
//             input {
//                 width: 84%;
//                 height: 27px;
//                 padding: 7px 12px;
//                 font-size: 14px;
//                 line-height: 1.42857143;
//                 border-radius: 3px;
//                 border: 1px solid #d9d9d9;
//                 margin-left: 27px;
//                 margin-bottom: 15px;
//             }

//             input:focus {
//                 outline: none;
//             }
    
//             label {
//                 margin-bottom: 10px;
//                 margin-left: 27px;
//             }

//             .btns {
//                 display: flex;
//                 margin-top: 15px;
//                 margin-left: 30px;
//                 width: 26%;
//             }

//             button:focus {
//                 outline: none;
//             }

//             .select {
//                 font: inherit;
//                 width: 89%;
//                 margin-left: 27px;
//             }
//         }
//     }
// `;

const options = [
    {value: '$12 W', label: '$12 W'},
]

class EditPerk extends Component {

    state = {
        perk: null
    }

    componentDidMount(){
        console.log(this.props.location.perk);
        this.setState({
            perk: this.props.location.perk
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
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
        let {perk} = this.state;
        console.log(perk);
        let cancelBtn = {color: '#333', backgroundColor: '#fff', border: '1px solid #ccc', padding: '8px 13px'};
        let saveBtn = {color: 'white', backgroundColor: '#fd6c21', padding: '9px 13px'}
        return(
            <div className="perk-edit-container">
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
                    <h2 className="">Edit Perk for Customer Rewards</h2>
                    <p className="">Use the guide to the left as a reference when creating your perk promos.</p>
                    <div className="form">
                        <Input name="title" onChange={(event) => this.handleChange(event)} label="Title"></Input>
                        <Input name="description" onChange={(event) => this.handleChange(event)} label="Description"/>
                        <Select className="select"
                        value={this.selectedOption}
                        onChange={this.handleOption}
                        options={options}
                        isMulti={false}
                        placeholder="Select a bonus"/>
                        <CheckBox onChange={() => this.changeEnabled()} label="Enabled"/> 
                        <CheckBox onChange={() => this.changeQRCode()} style={{marginBottom: '15px'}} label="Requires QR code"/>
                        <Input name="finePrint" onChange={(event) => this.handleChange(event)} label="Fine print"/>
                        <Input name="referral" onChange={(event) => this.handleChange(event)}label="Required Referrals"/>
                        <Input name="expire_date" onChange={(event) => this.handleChange(event)} label="Expire date" type="date" min="2019-03-05" max="2020-03-05" step="7"/>
                        <div className="btns">
                            <Button onClick={() => this.handleSubmit()}  style={saveBtn} text="Save"/>
                            <Button style={cancelBtn} text="Cancel"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPerk;