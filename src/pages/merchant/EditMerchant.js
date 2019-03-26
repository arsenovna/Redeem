import React, { Component } from "react";
import UICard from "../../components/UI/UICard";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import CheckBox from "../../components/UI/CheckBox";
import styled from "styled-components";
import TimePicker from "rc-time-picker";
import moment from "moment";
import { connect } from "react-redux";
import MerchantService from "../../services/merchants";
import { setMerchantData } from "../../redux/actions/index";

const merchantService = new MerchantService();

class EditMerchant extends Component {
  state = {
    openingHours: [
      { label: "Monday", startTime: "900", closeTime: "1800", closed: false },
      { label: "Tuesday", startTime: "900", closeTime: "1800", closed: false },
      {
        label: "Wednesday",
        startTime: "900",
        closeTime: "1800",
        closed: false
      },
      { label: "Thursday", startTime: "900", closeTime: "1800", closed: false },
      { label: "Friday", startTime: "900", closeTime: "1800", closed: false },
      { label: "Saturday", startTime: "900", closeTime: "1800", closed: false },
      { label: "Sunday", startTime: "900", closeTime: "1800", closed: false }
    ],
    merchant: this.props.merchant
  };

  handleChange = (event, field) => {
    this.setState({ merchant: { ...this.state.merchant, [field]: event } });
  };

  handleSubmit = async () => {
    const data = { merchant: { ...this.state.merchant } };
    await merchantService.editMerchant(data);
    let merchant = await merchantService.getMerchant(data.merchant.id);
    this.props.dispatch(setMerchantData(merchant.merchant));
    this.props.history.push(`/merchant`);
  };

  render() {
    const { merchant } = this.state;
    let { openingHours } = this.state;
    return (
      <div className="edit-merchant-container">
        <UICard title="Edit merchant details">
          <form>
            <Input
              onChange={event => this.handleChange(event, "name")}
              label="Name"
              value={merchant.name}
            />
            <Input
              onChange={event => this.handleChange(event, "email")}
              label="Email"
              value={merchant.email}
            />
            <Input
              onChange={event => this.handleChange(event, "contact_email")}
              label="Contact Email"
              value={merchant.contact_email}
            />
            <Input
              onChange={event => this.handleChange(event, "display_phone")}
              label="Phone Number"
              value={merchant.display_phone}
            />
            <Input
              onChange={event => this.handleChange(event, "description")}
              label="Description"
              value={merchant.description}
            />
            <Input
              onChange={event => this.handleChange(event, "website")}
              label="Website"
              value={merchant.website}
            />

            <label>Logo</label>
            <img alt="" src={merchant.logo_url} />
            <div className="buttons">
              <Button className="chooseImgBtn" text="Choose Image" />
              <Button className="uploadBtn" text="Upload" />
            </div>
            <label>Background</label>
            <img alt="" src={merchant.background_url} />
            <div className="buttons">
              <Button className="chooseImgBtn" text="Choose Image" />
              <Button className="uploadBtn" text="Upload" />
            </div>
            <Input
              onChange={event => this.handleChange(event, "line1")}
              label="Address 1"
              value={merchant.address.line1}
            />
            <Input
              onChange={event => this.handleChange(event, "line2")}
              label="Address 2"
              value={merchant.address.line2}
            />
            <Input
              onChange={event => this.handleChange(event, "city")}
              label="City"
              value={merchant.address.city}
            />
            <Input
              onChange={event => this.handleChange(event, "state")}
              label="State"
              value={merchant.address.state}
            />
            <Input
              onChange={event => this.handleChange(event, "zip")}
              label="Zip"
              value={merchant.address.zip}
            />
            <Input
              onChange={event => this.handleChange(event, "latitude")}
              label="Latitude"
              value={merchant.latitude}
            />
            <Input
              onChange={event => this.handleChange(event, "longitude")}
              label="Longitude"
              value={merchant.longitude}
            />
            <CheckBox style={{ margin: "15px 0" }} label="Public Profile" />
            <SelectMerchant />
            <label>Opening Hours</label>
            {openingHours &&
              openingHours.map((hour, index) => (
                <OpeningHours key={index} hour={hour} />
              ))}
            <div className="buttons">
              <Button
                onClick={() => this.handleSubmit()}
                themed={true}
                text="Save"
              />
              <Button className="chooseImgBtn" text="Cancel" />
            </div>
          </form>
        </UICard>
      </div>
    );
  }
}

class SelectMerchant extends Component {
  render() {
    return (
      <div className="select-merchant">
        <label className="merchant-type">Merchant types</label>
        <select>
          <option value="bakery">bakery</option>
          <option value="bar">bar</option>
          <option value="beautySalon">beauty salon</option>
          <option value="cafe">cafe</option>
          <option value="clothingStore">clothing store</option>
        </select>
      </div>
    );
  }
}

let Hour = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .label {
    width: 10%;
    // font-weight: bold;
  }

  span {
    margin-left: 10px;
  }
`;

class OpeningHours extends Component {
  state = {
    disabled: false
  };

  changeDisabled = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  render() {
    let { hour } = this.props;
    let { disabled } = this.state;
    let from = moment();
    let to = moment();
    from.set({ hour: 9, minute: 0, second: 0 });
    to.set({ hour: 18, minute: 0, second: 0 });

    return (
      <Hour>
        <div className="label">{hour.label}:</div>
        <TimePicker
          defaultValue={from}
          disabled={disabled}
          showSecond={false}
          use12Hours={true}
          format="h:mm a"
        />{" "}
        -{" "}
        <TimePicker
          defaultValue={to}
          disabled={disabled}
          showSecond={false}
          use12Hours={true}
          format="h:mm a"
        />
        <CheckBox onChange={() => this.changeDisabled()} />
        <span>closed</span>
      </Hour>
    );
  }
}

const mapStateToProps = state => ({
  merchant: state.merchant
});

export default connect(mapStateToProps)(EditMerchant);
