import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import { connect } from "react-redux";

class EditProfile extends Component {
    render(){
        const { merchant } = this.props;
        return(
            <div className="profile-edit-cont">
                <UICard title="Edit profile details">
                    <form>
                        <Input label="Email" value={merchant.email}/>
                        <Input label="First Name" value={merchant.owner_first_name}/>
                        <Input label="Last Name" value={merchant.owner_last_name}/>
                        <Input label="Password"/>
                        <Input label="Confirm Password"/>
                        <div className="btns">
                            <Button className="saveBtn" text="Save"/>
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



