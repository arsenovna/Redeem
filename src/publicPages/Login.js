import React, {Component} from 'react';
import styled from 'styled-components';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';


let Header = styled.div`
    text-align: center;
    background: #fd6c21;
    height: 100px;
    font-family: Lato,sans-serif;
    color: white;

    img {
     height: 40px;
     margin-top: 25px;
    }

    p {
     margin: 0;
    }
`;


let Container = styled.div`
    .form {
        margin: 20px auto;
        width: 360px;
        padding: 20px;
        border: 1px solid #c2c2c2;
        font-family: Lato,sans-serif;
        background-color: white;
    }

    label {
        display: inline-block;
        width: 100%;
        text-align: left;
        margin-bottom: 10px;
    }

    input {
        display: inline-block;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box; 
        height: 42px;
        font-size: 13px;
        line-height: 1.42857143;
        padding: 2px 12px;
        margin-bottom: 30px;
    }

    div:not(.form) {
        display: flex;
        align-items: center;
        span {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

class Login extends Component {
    state = {
        //intial state of email and password is empty
        email: '',
        password: ''
    }
    

    //handleChange sets a new state, in other words sets a new value to input fields
    handleChange = (event, field) => {
        field === "email" ? this.setState({email: event.target.value}) : 
        this.setState({password: event.target.value});
    }

    handleSubmit = async () => {
        let formData = new FormData();
        formData.append('merchant[email]', this.state.email);
        formData.append('merchant[password]', this.state.password);

        let response = await fetch('https://api.rifird.com/admin/merchants/login', {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              body: formData,
          })
        let json = await response.json();
        window.localStorage.setItem('authentication_token', json.merchant.authentication_token);
        window.location.href = "http://localhost:3000/dashboard";
      }

    render(){
        return (
            <div>
                <Header>
                    <img alt="" src="./img/rifirdLogo.png"/>
                    <p>Spread The Love</p>
                </Header>
                <Container>
                    <div className="form">
                        <Input onChange={(event) => this.handleChange(event, 'email')} label="Email" required={true} placeholder="Email"/>
                        <Input onChange={(event) => this.handleChange(event, 'password')} label="Password" required={true} placeholder="Password"/>
                        <div>
                            <Button onClick={() => this.handleSubmit()} text="Login"/>
                            <span>or</span>
                            <Button onClick={() => this.checkToken()}text="Sign Up"/>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Login;
