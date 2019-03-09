import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import { BrowserRouter as Route, Link } from "react-router-dom";
import styled from 'styled-components';

let Container = styled.div`
    margin-left: 20px;

    label {
        font-weight: bold;
    }

    .group {
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #333;
        background-color: #fff;
        border: 1px solid #ccc
        font-size: 14px;
        padding: 7px 14px;
        border-radius: 4px;
        font-weight: 500;
   }

   .back-botton {
       margin-top: 20px;
   }
`;
class ViewPerk extends Component {
    state = {
        perk: null
    }

    componentDidMount(){
        this.setState({
            perk: this.props.state.perk
        });
    }

    render(){
       
        return(
            <Container>
                <UICard title="View perk">
                    <div className="group">
                        <label>Title</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Description</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Referral Bonus</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Enabled</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Requires QR code</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Fine print</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Required Referrals</label>
                        <div></div>
                    </div>
                    <div className="group">
                        <label>Expire date</label>
                        <div></div>
                    </div>
                    <div className="back-botton">
                        <Link to="/perks">Back to perks list</Link>
                    </div>
                </UICard>
            </Container>
        );
    }


}


export default ViewPerk;