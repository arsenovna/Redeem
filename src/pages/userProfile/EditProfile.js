import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Button from '../../components/UI/Button';
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import { connect } from "react-redux";

let EditForm = styled.div`
    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        background-color: white;
        padding: 20px 10px 20px;

        input {
            margin-bottom: 15px;
            height: 30px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
        }

        input:focus {
            outline: none;
        }

        label {
            margin-bottom: 10px;
        }

        .btns {
            display: flex;
            width: 26%;
            *:focus {outline:none}
        }
    }
`;

class EditProfile extends Component {
    render(){
        const { merchant } = this.props;
        let cancelBtn = {color: '#333', backgroundColor: '#fff', border: '1px solid #ccc', padding: '8px 13px', marginLeft: '10px', fontWeight: 'bold'};
        let saveBtn = {color: 'white', backgroundColor: '#fd6c21', padding: '9px 13px', fontWeight: 'bold'}
        return(
            <EditForm>
                <UICard title="Edit profile details">
                    <form>
                        <Input label="Email" value={merchant.email}/>
                        <Input label="First Name" value={merchant.owner_first_name}/>
                        <Input label="Last Name" value={merchant.owner_last_name}/>
                        <Input label="Password"/>
                        <Input label="Confirm Password"/>
                        <div className="btns">
                            <Button style={saveBtn} text="Save"/>
                            <Button style={cancelBtn} text="Cancel"/>
                        </div>
                    </form>
                </UICard>
            </EditForm>
        );
    }
}

const mapStateToProps = state => ({
    merchant: state.merchant
})
export default connect(mapStateToProps)(EditProfile);



