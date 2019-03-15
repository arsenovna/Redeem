import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ViewPerk extends Component {
    render(){
        const {perks} = this.props;
        const currentPerk = perks.find(item => item.id == this.props.match.params.id);
        return(
            <div className="view-perk-container">
                <UICard title="View perk">
                <div className="perk-grid">
                    <div>
                        <label>Title</label>
                        <div>{currentPerk.title}</div>
                    </div>
                    <div>
                        <label>Description</label>
                        <div>{currentPerk.description}</div>
                    </div>
                    <div>
                        <label>Referral Bonus</label>
                        <div>{currentPerk.referral_bonus ? 'yes' : 'no'}</div>
                    </div>
                    <div>
                        <label>Enabled</label>
                        <div>{currentPerk.enabled ? 'yes' : 'no'}</div>
                    </div>
                    <div>
                        <label>Requires QR code</label>
                        <div>{currentPerk.requires_qr_code ? 'yes' : 'no'}</div>
                    </div>
                    <div>
                        <label>Fine print</label>
                        <div>{currentPerk.fine_print}</div>
                    </div>
                    <div>
                        <label>Required Referrals</label>
                        <div>{currentPerk.required_referrals}</div>
                    </div>
                    <div>
                        <label>Expire date</label>
                        <div>{currentPerk.expire_date}</div>
                    </div>
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