import React, { Component } from "react";
import UICard from "../../components/UI/UICard";
import { Link } from "react-router-dom";
import MerchantService from "../../services/merchants";
import { AuthService } from "../../services/authorization";
import { getMerchantRequest } from "../../redux/actions/index";
import { connect } from "react-redux";

const merchantService = new MerchantService();

const authService = new AuthService();

class Merchant extends Component {
  async componentDidMount() {
    // let data = await merchantService.getMerchant();
    // this.props.dispatch(getMerchantRequest(data));
    console.log(this.props);
  }

  render() {
    const { merchant } = this.props;
    // console.log(merchant);
    return (
      <div className="merchant-container">
        {/* <UICard title="Merchant details">
                    <div className="edit-button">
                        <Link to="/editMerchant">Edit merchant</Link>
                    </div>
                    <div className="user-info"><span>Name:</span>{merchant.name}</div>
                    <div className="user-info"><span>Phone Number:</span>{merchant.display_phone}</div>
                    <div className="user-info"><span>Contact Email:</span>{merchant.contact_email}</div>
                    <div className="user-info"><span>Description:</span>{merchant.description}</div>
                    <div className="user-info"><span>Website:</span>{merchant.website}</div>
                    <div className="user-info"><span>Logo:</span><img  alt="" src={merchant.logo_url}/></div>
                    <div className="user-info"><span>Background:</span><img alt="" src={merchant.background_url}/></div>
                    <div className="user-info"><span>Public Profile:</span>{merchant.publicProfile}</div>
                    <div className="user-info"><span>Merchant Types:</span>{merchant.merchantTypes}</div>
                </UICard>
                <UICard title="Address">
                    <div className="user-info"><span>Address1:</span>{merchant.address.line1}</div>
                    <div className="user-info"><span>Address2:</span>{merchant.address.line2}</div>
                    <div className="user-info"><span>City:</span>{merchant.address.city}</div>
                    <div className="user-info"><span>State:</span>{merchant.address.state}</div>
                    <div className="user-info"><span>Zip:</span>{merchant.address.zip}</div>
                </UICard>
                <UICard title="Location">
                    <div className="user-info"><span>Latitude:</span>{merchant.latitude}</div>
                    <div className="user-info"><span>Longitude:</span>{merchant.longitude}</div>

                </UICard> */}
        {/* <UICard title="Open Hours">
                    <div className="user-info">{ merchant.opening_hours != null && merchant.opening_hours.length > 0 ? <>{merchant.openHours}</> : "You didn't set open hours."}</div>
                </UICard>  */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  merchant: state.merchant
});

export default connect(mapStateToProps)(Merchant);
