import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard">
                <UICard title="Active perks" half={true}>
                   Name	Referrals Generated
                </UICard>
                <UICard title="Totals" half={true}>
                    QR Code Scans: 0<br/>
                    Referrals Sent: 0<br/>
                    Incentives Redeemed: 0<br/>
                </UICard>
            </div>
        );
    }
}

export default Dashboard;