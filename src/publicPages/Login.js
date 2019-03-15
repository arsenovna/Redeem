import React, {Component} from 'react';
import styled from 'styled-components';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

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
                <div className="login-header">
                    <img alt="" src="./img/rifirdLogo.png"/>
                    <p>Spread The Love</p>
                </div>
                <div className="login-container">
                    <div className="form">
                        <Input onChange={(event) => this.handleChange(event, 'email')} label="Email" required={true} placeholder="Email"/>
                        <Input onChange={(event) => this.handleChange(event, 'password')} label="Password" required={true} placeholder="Password"/>
                        <div>
                            <Button onClick={() => this.handleSubmit()} text="Login"/>
                            <span>or</span>
                            <Button onClick={() => this.checkToken()}text="Sign Up"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
