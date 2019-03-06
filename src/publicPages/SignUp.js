/* global google */
import React, {Component} from 'react';
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
    {value: 'bakery', label: 'Bakery'},
    {value: 'bar', label: 'Bar'},
    {value: 'cafe', label: 'Cafe'}
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
        selectedOption: null
    }

    //Address autocomplete
    componentDidMount() {
       this.initAutocomplete();
    }

    initAutocomplete = () => {
        let addressLine = '';
        const autocomplete = new google.maps.places.Autocomplete( this.addressInput.current, {types: ['geocode']});
          google.maps.event.addListener(autocomplete, 'place_changed', this.handleSelect = () => {
               
            let place = autocomplete.getPlace();
            this.setState({ latitude: place.geometry.location.lat()} );
            this.setState({ longitude: place.geometry.location.lng()} );

            //Fill in address fields
            for(let i = 0; i < place.address_components.length; i++){
                if(place.address_components[i].types[0] === 'street_number'){
                    addressLine += place.address_components[i].long_name + ' ';
                }
                if(place.address_components[i].types[0] === 'route'){
                    addressLine += place.address_components[i].long_name;
                    this.addressInput.current.value = addressLine;
                    this.setState({address1: this.addressInput.current.value});
                } 
                if(place.address_components[i].types[0] === 'locality'){
                    this.cityInput.current.value = place.address_components[i].long_name;
                    this.setState({ city: this.cityInput.current.value });
                }
                if(place.address_components[i].types[0] === 'administrative_area_level_1'){
                    this.stateInput.current.value = place.address_components[i].short_name;
                    this.setState({ state: this.stateInput.current.value });
                    }
                if(place.address_components[i].types[0] === 'postal_code'){
                    this.zipInput.current.value = place.address_components[i].short_name;
                    this.setState({ zip: this.zipInput.current.value});
                }
            }
        
        //Get latitude and longtitude of location and change the state
        });
    }

    handleChange = (event, field) => {
        if(field === "name"){
            this.setState({merchantName: event.target.value});
        } else if(field === 'phone'){
            this.setState({phone: event.target.value});
        } else if(field === 'email'){
            this.setState({email: event.target.value});
        } else if(field === 'desc'){
            this.setState({description: event.target.value});
        } else if(field === 'www'){
            this.setState({website: event.target.value});
        } else if(field === 'address2'){
            this.setState({address2: event.target.value});
        }
    }

    //Handle merchant options  
    handleOption = (selectedOption) => {
        this.setState({ selectedOption});
    }
    
    // componentDidUpdate() {
    //   console.log(this.state.selectedOption);
    // }

    //Handle form submit
    handleSubmit = async () => {
        const {merchantName, phone, email, description, website, address1, address2, city, state, zip, latitude, longitude, selectedOption} = this.state;
        const data = { merchant: {
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
        } }

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
        // window.localStorage.setItem('authentication_token', json.merchant.authentication_token);
        // window.location.href = "http://localhost:3000/dashboard";
      }

    render(){
        return (
            <SignForm>
            <div className="form">
                <Input onChange={(event) => this.handleChange(event, 'name')} label="Merchant name" placeholder="Name"/>
                <Input onChange={(event) => this.handleChange(event, 'phone')} label="Phone number" placeholder="Enter a phone number"/>
                <Input onChange={(event) => this.handleChange(event, 'email')} label="Email address" placeholder="Address"/>
                <Input onChange={(event) => this.handleChange(event, 'desc')} label="Description" placeholder="Description"/>
                <Input onChange={(event) => this.handleChange(event, 'web')} label="Website" placeholder="www."/>
                <Input onChange={(event) => this.handleChange(event, 'address1')}  inputRef={this.addressInput}  label="Address 1"/>
                <Input onChange={(event) => this.handleChange(event, 'address2')}  label="Address 2" placeholder="Address2"/>
                <Input onChange={(event) => this.handleChange(event, 'city')} inputRef={this.cityInput} label="City" placeholder="City"/>
                <Input onChange={(event) => this.handleChange(event, 'state')}  inputRef={this.stateInput} label="State" placeholder="State"/>
                <Input onChange={(event) => this.handleChange(event, 'zip')}  inputRef={this.zipInput} label="Zip" placeholder="Zip"></Input>
                <label>Merchant types</label>
                <Select
                    value={this.selectedOption}
                    onChange={this.handleOption}
                    options={options}
                    isMulti={true}
                    placeholder="Select..."
                />
                <Button onClick={() => this.handleSubmit()} themed={true} text="Submit"/>
            </div>
            </SignForm>
        );
    }
}

export default SignUp;