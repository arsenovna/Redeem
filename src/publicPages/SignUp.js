/* global google */
import React, { Component } from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import styled from 'styled-components';
import Select from 'react-select';

let SignForm = styled.div`
    .form {
        display: flex;
        flex-direction: column;
        width: 66.66%;
        margin: 0 auto;
        background-color: white;
        padding: 20px 30px 60px;

        input {
            margin-bottom: 15px;
            height: 42px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
        }

        label {
            margin-bottom: 10px;
        }
        button {
            margin-top: 10px;
        }
    }
`;

const options = [
    { value: 'bakery', label: 'Bakery' },
    { value: 'bar', label: 'Bar' },
    { value: 'cafe', label: 'Cafe' }
]

class SignUp extends Component {
    //Create refs for input fields
    addressInput = React.createRef();
    cityInput = React.createRef();
    stateInput = React.createRef();
    zipInput = React.createRef();

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
        let value = event.target.value;
        this.setState({ [field]: value });
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
                // password: "GJIUTF789$%jk",
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

        let response = await fetch('https://api.rifird.com/merchants/signup/signup_as_merchant', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            body: JSON.stringify(data)
        })
        let json = await response.json();
        console.log(json);
    }

    render() {
        console.log('asasas')
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
            <SignForm>
                <div className="form">
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
            </SignForm>
        );
    }
}

export default SignUp;