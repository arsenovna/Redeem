import React, { Component } from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";
import { AuthService } from "../services/authorization";
import { setMerchantData } from "../redux/actions/index";
import { connect } from "react-redux";

const login = new AuthService();

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event, field) => {
    this.setState({ [field]: event });
  };

  handleSubmit = async () => {
    let formData = new FormData();
    formData.append("merchant[email]", "nurmuhamed@gmail.com");
    formData.append("merchant[password]", "rifird123");
    let response = await login.signIn(formData);
    window.localStorage.setItem(
      "authentication_token",
      response.merchant.authentication_token
    );
    this.props.dispatch(setMerchantData(response.merchant));
    window.location.href = "http://localhost:3000/dashboard";
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div className="login-header">
          <img alt="" src="./img/rifirdLogo.png" />
          <p>Spread The Love</p>
        </div>
        <div className="login-container">
          <div className="form">
            <Input
              onChange={event => this.handleChange(event, "email")}
              label="Email"
              required={true}
              placeholder="Email"
              value={email}
            />
            <Input
              onChange={event => this.handleChange(event, "password")}
              label="Password"
              required={true}
              placeholder="Password"
              value={password}
            />
            <div>
              <Button
                className="loginBtn"
                onClick={() => this.handleSubmit()}
                text="Login"
              />
              <span>or</span>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  merchant: state.merchant
});

export default connect(mapStateToProps)(Login);
