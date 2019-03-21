import React, {Component} from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom'
import { SignInService } from '../services/signIn';

const login = new SignInService();

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event, field) => {
        this.setState({[field]: event});
    }

    handleSubmit = async () => {
        let formData = new FormData();
        formData.append('merchant[email]', 'nurmuhamed@gmail.com');
        formData.append('merchant[password]', 'rifird123');
        let json = await login.signIn(formData);
        window.localStorage.setItem('authentication_token', json.merchant.authentication_token);
        window.location.href = "http://localhost:3000/dashboard";
      }

    render(){
        const {email, password} = this.state;
        return (
            <div>
                <div className="login-header">
                    <img alt="" src="./img/rifirdLogo.png"/>
                    <p>Spread The Love</p>
                </div>
                <div className="login-container">
                    <div className="form">
                        <Input onChange={(event) => this.handleChange(event, 'email')} label="Email" required={true} placeholder="Email" value={email}/>
                        <Input onChange={(event) => this.handleChange(event, 'password')} label="Password" required={true} placeholder="Password" value={password}/>
                        <div>
                            <Button className="loginBtn"onClick={() => this.handleSubmit()} text="Login"/>
                            <span>or</span>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
