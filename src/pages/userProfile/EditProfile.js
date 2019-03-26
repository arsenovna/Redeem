import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { connect } from "react-redux";
import MerchantService from '../../services/merchants';


const merchantService = new MerchantService();

class EditProfile extends Component {

    state = {
        merchant: {}
    }

    handleChange = (event, field) => {
        this.setState({
            merchant: {
                ...this.state.merchant,
                [field]: event
            }
        });
    }

    handleSubmit = async () => {
        const data = { merchant: { ...this.state.merchant } }
        await merchantService.editProfile(data);
    }

    render(){
        const { merchant } = this.state;
        return(
            <div className="profile-edit-cont">
                <UICard title="Edit profile details">
                    <form>
                        <Input label="Email" onChange={(event) => this.handleChange(event, 'email')} value={merchant.email}/>
                        <Input label="First Name" onChange={(event) => this.handleChange(event, 'owner_first_name')} value={merchant.owner_first_name}/>
                        <Input label="Last Name" onChange={(event) => this.handleChange(event, 'owner_last_name')} value={merchant.owner_last_name}/>
                        <Input label="Password"/>
                        <Input label="Confirm Password"/>
                        <div className="btns">
                            <Button onClick={() => this.handleSubmit()} className="saveBtn" text="Save"/>
                            <Button className="cancelBtn" text="Cancel"/>
                        </div>
                    </form>
                </UICard>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    merchant: state.merchant
})
export default connect(mapStateToProps)(EditProfile);



