import React, {Component} from 'react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import CheckBox from '../../components/UI/CheckBox';
import Select from 'react-select';
import { connect } from "react-redux";
import PerksService from '../../services/perks';
import { getPerksRequest } from '../../redux/actions/index'


const perksService = new PerksService();

const options = [
    {value: '$12 W', label: '$12 W'},
]

class EditPerk extends Component {

    state = {
        perk: {}
    }

    handleChange = (event, field) => {
        this.setState({
            perk: {
                ...this.state.perk,
                [field]: event
            }
        });
    }

    handleSubmit = async () => {
        const data = { 
            perk: {
                ...this.state.perk,
                bonus_perks: [{ ...this.state.perk }],
                merchant: this.props.merchant
            }
        }
        await perksService.editPerk(data);
        let perk = await perksService.getPerks();
        this.props.dispatch(getPerksRequest(perk));
        this.props.history.push(`/perk/viewPerk/${data.perk.id}`);
    }

    componentWillMount(){
        const {perks} = this.props;
        const currentPerk = perks.find(item => item.id === parseInt(this.props.match.params.id));
        this.setState({ perk: currentPerk});
    }

    render(){
        const {perk} = this.state
        
        return(
            <div className="perk-cont">
                <div className="left">
                    <img alt="" src="/img/screen.png"/>
                    <div className="express-studios">
                        <h2>Express Hair Studios</h2>
                        <p>7624 W. 111th Street</p>
                    </div>
                    <div className="expires">
                        <span>Expires</span>
                        <p>Select Your Friends</p>
                    </div>
                </div>
                <div className="right">
                    <h2 className="">Edit Perk for Customer Rewards</h2>
                    <p className="">Use the guide to the left as a reference when creating your perk promos.</p>
                    <div className="form">
                        <Input name="title" onChange={(event) => this.handleChange(event, 'title')} label="Title" value={perk.title}/>
                        <Input name="description" onChange={(event) => this.handleChange(event, 'description')} label="Description" value={perk.description}/>
                        <Select className="select"
                        value={this.selectedOption}
                        onChange={this.handleOption}
                        options={options}
                        isMulti={false}
                        placeholder="Select a bonus"/>
                        <CheckBox onChange={(event) => this.handleChange(event, 'enabled')} label="Enabled" checked={perk.enabled}/> 
                        <CheckBox onChange={(event) => this.handleChange(event, 'requires_qr_code')} style={{marginBottom: '15px'}} label="Requires QR code" checked={perk.requires_qr_code}/>
                        <Input name="finePrint" onChange={(event) => this.handleChange(event, 'fine_print')} label="Fine print" value={perk.fine_print}/>
                        <Input name="referral" onChange={(event) => this.handleChange(event, 'required_referrals')} label="Required Referrals" value={perk.required_referrals}/>
                        <Input name="expire_date" onChange={(event) => this.handleChange(event, 'expire_date')} label="Expire date" type="date" min="2019-03-05" max="2020-03-05" step="7" value={perk.expire_date}/>
                        <div className="btns">
                            <Button onClick={() => this.handleSubmit()}  className="saveBtn" text="Save"/>
                            <Button className="cancelBtn" text="Cancel"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    perks: state.perks,
    merchant: state.merchant
})

export default connect(mapStateToProps)(EditPerk);