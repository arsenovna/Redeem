import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import Button from '../../components/UI/Button';
import styled from 'styled-components';
import Input from '../../components/UI/Input';

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

        label {
            margin-bottom: 10px;
        }
    }
`;

class EditProfile extends Component {
    render(){
        return(
            <EditForm>
                <UICard title="Edit profile details">
                    <form>
                        <Input label="Email"/>
                        <Input label="First Name"/>
                        <Input label="Last Name"/>
                        <Input label="Password"/>
                        <Input label="Confirm Password"/>
                        <Button themed={true} text="Submit"/>
                        <Button themed={false} text="Cancel"/>
                    </form>
                </UICard>
            </EditForm>
        );
    }
}

export default EditProfile;



