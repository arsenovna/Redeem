/* global google */
import React, { Component } from 'react';
import Input from '../components/UI/Input';
import Select from 'react-select';
import Button from '../components/UI/Button';
import { SignUpService } from '../services/signUp';

const signUpService = new SignUpService();

const options = [
    { value: 'bakery', label: 'Bakery' },
    { value: 'bar', label: 'Bar' },
    { value: 'cafe', label: 'Cafe' }
]

class SignUp extends Component {
    //Create refs for input field
    addressInput = React.createRef();

    //State is just an object that holds all of the data in the component and that its children may need
    state = {
        merchantName: '',
        phone: '',
        email: '',
        description: '',
        website: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        latitude: null,
        longitude: null,
        selectedOption: null,
        addressLine: null
    }

    //Address autocomplete
    componentDidMount() {
        let { addressLine } = this.state;

        const autocomplete = new google.maps.places.Autocomplete(this.addressInput.current, { types: ['geocode'] });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {

            let place = autocomplete.getPlace();
            this.setState({ latitude: place.geometry.location.lat() });
            this.setState({ longitude: place.geometry.location.lng() });

            let { address_components } = place;

            //Fill in address fields
            for (let i = 0; i < address_components.length; i++) {
                let adrs_comp = address_components[i].types[0];
                let long_name = address_components[i].long_name;
                let short_name = address_components[i].short_name;

                if (adrs_comp === 'street_number') {
                    addressLine = long_name + ' ';
                }
                if (adrs_comp === 'route') {
                    addressLine += long_name;
                    this.setState({ address1: addressLine });
                }
                if (adrs_comp === 'locality') {
                    this.setState({ city: long_name });
                }
                if (adrs_comp === 'administrative_area_level_1') {
                    this.setState({ state: short_name });
                }
                if (adrs_comp === 'postal_code') {
                    this.setState({ zip: short_name });
                }
            }

            this.setState({ addressLine: addressLine })
        });
    }

    handleChange = (event, field) => {
        // let value = event.target.value;
        this.setState({ [field]: event });
    }

    //Handle merchant options
    handleOption = (selectedOption) => {
        this.setState({ selectedOption });
    }

    //Handle form submit
    handleSubmit = async () => {
        const {
            merchantName,
            phone,
            email,
            description,
            website,
            address1,
            address2,
            city,
            state,
            zip,
            latitude,
            longitude,
            selectedOption
        } = this.state;

        const data = {
            merchant: {
                name: merchantName,
                email: email,
                password: "GJIUTF789$%jk",
                description: description,
                phone_number: phone,
                website: website,
                types: selectedOption,
                line1: address1,
                line2: address2,
                city: city,
                state: state,
                zip: zip,
                latitude: latitude,
                longtitude: longitude
            }
        }

        await signUpService.signUp(data);
        // this.props.history.push(`/checkEmail/${data.email}`);
    }

    render() {
        const {
            merchantName,
            phone,
            email,
            description,
            website,
            address1,
            address2,
            city,
            state,
            zip,
        } = this.state;

        return (
            <>
            <div className="login-header">
            <img alt="" src="./img/rifirdLogo.png"/>
            <p>Spread The Love</p>
            </div>
            <div className="sign-cont">
                <div className="sign-form">
                    <Input onChange={(event) => this.handleChange(event, 'merchantName')} label="Merchant name" placeholder="Name" value={merchantName} />
                    <Input onChange={(event) => this.handleChange(event, 'phone')} label="Phone number" placeholder="Enter a phone number" value={phone} />
                    <Input onChange={(event) => this.handleChange(event, 'email')} label="Email address" placeholder="Address" value={email} />
                    <Input onChange={(event) => this.handleChange(event, 'description')} label="Description" placeholder="Description" value={description} />
                    <Input onChange={(event) => this.handleChange(event, 'web')} label="Website" placeholder="www." value={website} />
                    <Input onChange={(event) => this.handleChange(event, 'address1')} inputRef={this.addressInput} label="Address 1" value={address1} />
                    <Input onChange={(event) => this.handleChange(event, 'address2')} label="Address 2" placeholder="Address2" value={address2} />
                    <Input onChange={(event) => this.handleChange(event, 'city')} label="City" placeholder="City" value={city} />
                    <Input onChange={(event) => this.handleChange(event, 'state')} label="State" placeholder="State" value={state} />
                    <Input onChange={(event) => this.handleChange(event, 'zip')} label="Zip" placeholder="Zip" value={zip} />
                    <label>Merchant types</label>
                    <Select
                        value={this.selectedOption}
                        onChange={this.handleOption}
                        options={options}
                        isMulti={true}
                        placeholder="Select..."
                    />
                    <Button onClick={() => this.handleSubmit()} themed={true} text="Submit" />
                </div>
                </div>
            </>
        );
    }
}

export default SignUp;