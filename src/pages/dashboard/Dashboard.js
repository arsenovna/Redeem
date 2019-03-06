import React, {Component} from 'react';
import UICard from '../../components/UI/UICard';
import styled from 'styled-components';

let Board = styled.div`
    display: flex;
`;

class Dashboard extends Component {
    render(){
        return (
            <Board>
                <UICard title="Active perks" half={true}>
                   Name	Referrals Generated
                </UICard>
                <UICard title="Totals" half={true}>
                    QR Code Scans: 0<br/>
                    Referrals Sent: 0<br/>
                    Incentives Redeemed: 0<br/>
                </UICard>
            </Board>
        );
    }
}

export default Dashboard;