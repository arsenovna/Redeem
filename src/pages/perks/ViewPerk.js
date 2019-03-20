import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ViewPerk extends Component {
    render(){
        const {perks} = this.props;
        const currentPerk = perks.find(item => item.id === parseInt(this.props.match.params.id));

        let gridItem = (label, text) => {
            return (
                <div>
                    <label>{label}</label>
                    <div>{text}</div>
                </div>
            )
        } 
        return(
            <div className="view-perk-container">
                <UICard title="View perk">
                <div className="perk-grid">
                    {gridItem("Title", currentPerk.title)}
                    {gridItem("Description", currentPerk.description)}
                    {gridItem("Referral Bonus", currentPerk.referral_bonus ? 'yes' : 'no')}
                    {gridItem("Enabled", currentPerk.enabled ? 'yes' : 'no')}
                    {gridItem("Requires QR code", currentPerk.requires_qr_code ? 'yes' : 'no')}
                    {gridItem("Fine print", currentPerk.fine_print)}
                    {gridItem("Required Referrals", currentPerk.required_referrals)}
                    {gridItem("Expire date<", currentPerk.expire_date)}
                    <div>
                        <Link to="/perks">Back to perks list</Link>
                    </div>
                    </div>
                </UICard>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    perks: state.perks
})
export default connect(mapStateToProps)(ViewPerk);